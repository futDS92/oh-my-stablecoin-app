import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { pathToFileURL } from "node:url";

const PORT = Number(process.env.PORT || 4173);
const HOST = process.env.HOST || "127.0.0.1";
const ROOT = process.cwd();
const DEFAULT_BASE_URL = process.env.BASE_URL || "https://stablepulse.example.com";

const MIME_TYPES = {
	".html": "text/html; charset=utf-8",
	".js": "text/javascript; charset=utf-8",
	".css": "text/css; charset=utf-8",
	".json": "application/json; charset=utf-8",
	".svg": "image/svg+xml",
	".png": "image/png"
};

const COIN_CONFIG = [
	{
		id: "usd-coin",
		symbol: "USDC",
		name: "USD Coin",
		upbitMarket: "KRW-USDC",
		backing: "법정화폐 기반",
		reference: "Circle 준비금 보고서"
	},
	{
		id: "tether",
		symbol: "USDT",
		name: "Tether",
		upbitMarket: "KRW-USDT",
		backing: "법정화폐 기반",
		reference: "Tether 준비금 보고서"
	},
	{
		id: "paypal-usd",
		symbol: "PYUSD",
		name: "PayPal USD",
		upbitMarket: null,
		backing: "법정화폐 기반",
		reference: "PayPal · Paxos 준비금 보고서"
	}
];

if (isEntryPoint()) {
	createServer(async (req, res) => {
		try {
			const url = new URL(req.url, `http://${req.headers.host}`);

			if (url.pathname === "/api/market-snapshot") {
				const lang = url.searchParams.get("lang") === "en" ? "en" : "ko";
				const payload = await buildSnapshot(lang);
				return json(res, 200, payload);
			}

			if (url.pathname === "/.well-known/farcaster.json") {
				return json(res, 200, buildManifest(url));
			}

			const filePath = resolveStaticPath(url.pathname);
			const file = await readFile(filePath);
			res.writeHead(200, { "content-type": MIME_TYPES[extname(filePath)] || "application/octet-stream" });
			res.end(file);
		} catch (error) {
			if (String(error?.message || "").includes("ENOENT")) {
				res.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
				res.end("Not found");
				return;
			}

			json(res, 500, {
				error: "snapshot_fetch_failed",
				message: "실데이터를 불러오는 중 오류가 발생했습니다."
			});
		}
	}).listen(PORT, HOST, () => {
		console.log(`Oh-My-Stablecoin-Alarm server running at http://${HOST}:${PORT}`);
	});
}

export async function buildSnapshot(lang = "ko") {
	const coinIds = COIN_CONFIG.map((coin) => coin.id).join(",");
	const upbitMarkets = COIN_CONFIG.filter((coin) => coin.upbitMarket).map((coin) => coin.upbitMarket).join(",");
	const domesticNewsUrl = buildDomesticNewsUrl(lang);
	const globalNewsUrl = buildGlobalNewsUrl(lang);

	const [marketRes, tickerRes, fxRes, domesticNewsRes, globalNewsRes] = await Promise.all([
		fetch(
			`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinIds}&order=market_cap_desc&per_page=3&page=1&sparkline=true&price_change_percentage=24h`
		),
		fetch(`https://api.upbit.com/v1/ticker?markets=${upbitMarkets}`),
		fetch("https://api.frankfurter.app/latest?from=USD&to=KRW"),
		fetch(domesticNewsUrl),
		fetch(globalNewsUrl)
	]);

	if (!marketRes.ok || !tickerRes.ok || !fxRes.ok) {
		throw new Error("upstream fetch failed");
	}

	const markets = await marketRes.json();
	const tickers = await tickerRes.json();
	const fx = await fxRes.json();
	const domesticNewsXml = domesticNewsRes.ok ? await domesticNewsRes.text() : "";
	const globalNewsXml = globalNewsRes.ok ? await globalNewsRes.text() : "";
	const domesticNews = pickDomesticNews(parseNewsFeed(domesticNewsXml), lang);
	const globalNews = pickGlobalNews(parseNewsFeed(globalNewsXml), lang);

	const marketMap = new Map(markets.map((item) => [item.id, item]));
	const tickerMap = new Map(tickers.map((item) => [item.market, item]));
	const usdKrw = Number(fx.rates.KRW);

	const stablecoins = COIN_CONFIG.map((coin) => {
		const market = marketMap.get(coin.id);
		const ticker = coin.upbitMarket ? tickerMap.get(coin.upbitMarket) : null;
		const usdPrice = Number(market.current_price);
		const globalKrwPrice = usdPrice * usdKrw;
		const domesticKrwPrice = ticker ? Number(ticker.trade_price) : null;
		const premiumPct = domesticKrwPrice ? ((domesticKrwPrice / globalKrwPrice) - 1) * 100 : null;
		const changePct = Number(market.price_change_percentage_24h ?? 0);

		return {
			symbol: coin.symbol,
			name: coin.name,
			priceUsd: usdPrice,
			variationPct: changePct,
			marketCapUsd: Number(market.market_cap),
			circulatingSupply: Number(market.circulating_supply),
			domesticKrwPrice,
			globalKrwPrice,
			premiumPct,
			backing: coin.backing,
			reference: coin.reference,
			history24h: toCompactSeries(market.sparkline_in_7d?.price?.slice(-24) ?? [], 24),
			history7d: toCompactSeries(market.sparkline_in_7d?.price ?? [], 28),
			source: ticker
				? "CoinGecko · Upbit · Frankfurter"
				: "CoinGecko · Frankfurter",
			updatedAt: ticker
				? new Date(Math.max(Date.parse(market.last_updated), Number(ticker.timestamp))).toISOString()
				: new Date(market.last_updated).toISOString(),
			status: classifyStatus(changePct, premiumPct)
		};
	});

	const premiumAlerts = stablecoins.filter((coin) => coin.premiumPct !== null && Math.abs(coin.premiumPct) >= 1);
	const variationAlerts = stablecoins.filter((coin) => Math.abs(coin.variationPct) >= 0.1);
	const watchCount = stablecoins.filter((coin) => coin.status !== "stable").length;

	return {
		stablecoins,
		summary: {
			overallStatus: watchCount === 0 ? "안정" : "주의",
			variationCount: variationAlerts.length,
			premiumCount: premiumAlerts.length,
			activeRuleCount: 3,
			usdKrw,
			priceSource: "CoinGecko API",
			onchainSource: "Upbit 시세 · Frankfurter 환율 · 발행사 보고서",
			updatedAt: new Date().toISOString()
		},
		signals: buildSignals(stablecoins, usdKrw),
		news: {
			domestic: domesticNews,
			global: globalNews
		}
	};
}

function buildDomesticNewsUrl(lang) {
	if (lang === "en") {
		return "https://news.google.com/rss/search?q=stablecoin+OR+USDC+OR+USDT+OR+PYUSD+Korea&hl=en-US&gl=US&ceid=US:en";
	}

	return "https://news.google.com/rss/search?q=%EC%8A%A4%ED%85%8C%EC%9D%B4%EB%B8%94%EC%BD%94%EC%9D%B8+OR+USDC+OR+USDT+OR+PYUSD&hl=ko&gl=KR&ceid=KR:ko";
}

function buildGlobalNewsUrl(lang) {
	if (lang === "en") {
		return "https://news.google.com/rss/search?q=stablecoin+OR+USDC+OR+USDT+OR+PYUSD&hl=en-US&gl=US&ceid=US:en";
	}

	return "https://news.google.com/rss/search?q=stablecoin+OR+USDC+OR+USDT+OR+PYUSD&hl=en-US&gl=US&ceid=US:en";
}

function buildSignals(stablecoins, usdKrw) {
	const items = [];
	const topPremium = [...stablecoins]
		.filter((coin) => coin.premiumPct !== null)
		.sort((a, b) => Math.abs(b.premiumPct) - Math.abs(a.premiumPct))[0];
	const topVariation = [...stablecoins].sort((a, b) => Math.abs(b.variationPct) - Math.abs(a.variationPct))[0];

	if (topPremium) {
		items.push({
			tone: Math.abs(topPremium.premiumPct) >= 1 ? "warn" : "good",
			title: `[국내외 가격 괴리] ${topPremium.symbol}의 국내외 가격 괴리가 ${formatSignedPercent(topPremium.premiumPct)}입니다.`,
			body: `국내 기준 가격 ${formatKrw(topPremium.domesticKrwPrice)} · 글로벌 환산 가격 ${formatKrw(topPremium.globalKrwPrice)}`
		});
	}

	items.push({
		tone: Math.abs(topVariation.variationPct) >= 0.1 ? "warn" : "good",
		title: `[가격 변동 감지] ${topVariation.symbol}가 최근 24시간 기준 ${formatSignedPercent(topVariation.variationPct)} 변동했습니다.`,
		body: `현재 가격 ${formatUsd(topVariation.priceUsd)} · 유통량 ${formatCompact(topVariation.circulatingSupply)}`
	});

	items.push({
		tone: "good",
		title: `[환율 기준] USD/KRW 기준 환율은 ${usdKrw.toFixed(2)}입니다.`,
		body: "국내외 가격 괴리 계산의 기준 환율로 사용됩니다."
	});

	return items;
}

function parseNewsFeed(xmlText) {
	if (!xmlText) return [];
	const items = [...xmlText.matchAll(/<item>([\s\S]*?)<\/item>/g)].slice(0, 12);
	return items
		.map((match) => {
			const item = match[1];
			const title = decodeXml(extractTag(item, "title"));
			const link = extractTag(item, "link");
			const pubDate = extractTag(item, "pubDate");
			const source = decodeXml(extractTag(item, "source"));
			return {
				title,
				link,
				pubDate,
				source
			};
		})
		.filter((item) => item.title && item.link);
}

function pickDomesticNews(items, lang) {
	const preferredSources =
		lang === "en"
			? ["Reuters", "Bloomberg", "The Korea Herald", "The Korea Times", "Yonhap News Agency"]
			: ["네이버", "연합뉴스", "한국경제", "매일경제", "조선일보", "중앙일보", "이데일리"];

	return prioritizeNews(items, preferredSources, 4);
}

function pickGlobalNews(items, lang) {
	const preferredSources =
		lang === "en"
			? [
					"Reuters",
					"Bloomberg",
					"Fortune",
					"The Wall Street Journal",
					"Financial Times",
					"PYPL Investor Relations",
					"PayPal Newsroom",
					"Circle",
					"Tether",
					"Paxos"
				]
			: [
					"Reuters",
					"Bloomberg",
					"Fortune",
					"The Wall Street Journal",
					"Financial Times",
					"PYPL Investor Relations",
					"PayPal Newsroom",
					"Circle",
					"Tether",
					"Paxos"
				];

	return prioritizeNews(items, preferredSources, 4);
}

function prioritizeNews(items, preferredSources, limit) {
	const ranked = items
		.map((item) => ({
			...item,
			priority: preferredSources.findIndex((source) => (item.source || "").includes(source))
		}))
		.sort((a, b) => {
			const left = a.priority === -1 ? Number.MAX_SAFE_INTEGER : a.priority;
			const right = b.priority === -1 ? Number.MAX_SAFE_INTEGER : b.priority;
			if (left !== right) return left - right;
			return Date.parse(b.pubDate || 0) - Date.parse(a.pubDate || 0);
		});

	const preferred = ranked.filter((item) => item.priority !== -1);
	const fallback = ranked.filter((item) => item.priority === -1);
	return [...preferred, ...fallback].slice(0, limit).map(({ priority, ...item }) => item);
}

function classifyStatus(changePct, premiumPct) {
	const variation = Math.abs(changePct);
	const premium = premiumPct === null ? 0 : Math.abs(premiumPct);
	if (variation >= 2 || premium >= 2) return "critical";
	if (variation >= 1 || premium >= 1) return "warning";
	if (variation >= 0.1 || premium >= 0.5) return "watch";
	return "stable";
}

function resolveStaticPath(pathname) {
	const rawPath = pathname === "/" ? "/index.html" : pathname;
	const safePath = normalize(rawPath).replace(/^(\.\.[/\\])+/, "");
	return join(ROOT, safePath);
}

function extractTag(text, tag) {
	const match = text.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`));
	return match ? match[1].trim() : "";
}

function decodeXml(value) {
	return value
		.replace(/&amp;/g, "&")
		.replace(/&lt;/g, "<")
		.replace(/&gt;/g, ">")
		.replace(/&quot;/g, '"')
		.replace(/&#39;/g, "'");
}

function json(res, statusCode, payload) {
	res.writeHead(statusCode, { "content-type": "application/json; charset=utf-8" });
	res.end(JSON.stringify(payload));
}

function buildManifest(url) {
	const baseUrl = process.env.BASE_URL || `${url.protocol}//${url.host}` || DEFAULT_BASE_URL;
	return {
		accountAssociation: {
			header: "TODO: STABLE_PULSE_BASE_HEADER",
			payload: "TODO: STABLE_PULSE_BASE_PAYLOAD",
			signature: "TODO: STABLE_PULSE_BASE_SIGNATURE"
		},
		miniapp: {
			version: "1",
			name: "Oh-My-Stablecoin-Alarm",
			iconUrl: `${baseUrl}/assets/icon.svg`,
			homeUrl: baseUrl,
			imageUrl: `${baseUrl}/assets/og-card.svg`,
			buttonTitle: "Open Oh-My-Stablecoin-Alarm",
			splashImageUrl: `${baseUrl}/assets/splash.svg`,
			splashBackgroundColor: "#f3efe6",
			subtitle: "가격 변화와 뉴스 흐름을 알려주는 스테이블코인 대시보드",
			description: "스테이블코인 상태를 가격 차이, 추이, 뉴스로 보여주는 정보 서비스입니다.",
			language: "ko",
			category: "information_services"
		}
	};
}

function isEntryPoint() {
	return process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url;
}

function formatUsd(value) {
	return `$${Number(value).toFixed(4)}`;
}

function formatKrw(value) {
	return `${Math.round(Number(value)).toLocaleString("ko-KR")}원`;
}

function formatSignedPercent(value) {
	return `${value >= 0 ? "+" : ""}${value.toFixed(2)}%`;
}

function formatCompact(value) {
	return new Intl.NumberFormat("en-US", {
		notation: "compact",
		maximumFractionDigits: 1
	}).format(value);
}

function toCompactSeries(values, points) {
	if (!values.length) return [];
	const step = Math.max(1, Math.floor(values.length / points));
	return values.filter((_, index) => index % step === 0).slice(-points);
}
