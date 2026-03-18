const defaultRules = [
	{ id: 1, asset: "USDC", type: "depeg", level: "normal", channel: "inapp" },
	{ id: 2, asset: "USDT", type: "kimchi", level: "tight", channel: "digest" },
	{ id: 3, asset: "PYUSD", type: "flow", level: "calm", channel: "push" }
];

const translations = {
	ko: {
		brand: "Oh-My-Stablecoin-Alarm",
		heroKicker: "Oh-My-Stablecoin-Alarm",
		heroTitle: "Oh-My-Stablecoin-Alarm",
		heroLede: "스테이블코인 상태를 가장 쉽게 보는 방법. 오늘 필요한 변화만 간단히 확인하세요.",
		heroNote: "복잡한 차트보다 오늘 필요한 변화부터 먼저 보여줄게요.",
		primaryButton: "지금 상태 보기",
		secondaryButton: "알림 고르기",
		primaryButtonReady: "상태 연결 완료",
		summaryStatusLabel: "오늘의 상태",
		summaryVariationLabel: "최근 24시간 변동",
		summaryPremiumLabel: "국내외 가격 괴리 감지",
		summaryRuleLabel: "활성 알림 규칙",
		premiumKicker: "",
		premiumTitle: "국내외 가격 차이",
		premiumNote: "국내 가격이 해외 기준과 얼마나 벌어졌는지 바로 볼 수 있어요.",
		coinsKicker: "",
		coinsTitle: "지금 확인할 코인",
		coinsNote: "핵심 숫자만 빠르게 볼 수 있게 정리했어요.",
		compareKicker: "",
		compareTitle: "스테이블코인 비교",
		compareSummary: "스테이블코인 비교",
		compareNote: "핵심 차이만 빠르게 볼 수 있어요.",
		levelKicker: "",
		levelTitle: "이렇게 보면 돼요",
		levelSummary: "이렇게 보면 돼요",
		levelItems: [
			"<strong>안정</strong>이면 크게 움직이지 않은 상태예요.",
			"<strong>주의</strong>부터는 한 번 더 보면 좋아요.",
			"<strong>변동 확대</strong>는 평소보다 움직임이 큰 상태예요.",
			"<strong>변동 심화</strong>는 바로 체크해볼 만한 상태예요."
		],
		historyKicker: "",
		historyTitle: "가격 추이",
		range24h: "24시간",
		range7d: "7일",
		alertsKicker: "",
		alertsTitle: "알림 설정",
		alertsNote: "필요한 코인만 골라두면 돼요.",
		formAssetLabel: "자산",
		formTypeLabel: "조건",
		formLevelLabel: "민감도",
		formChannelLabel: "알림 채널",
		formSubmitButton: "알림 규칙 추가",
		formTypeOptions: ["가격 변동 감지", "국내외 가격 괴리", "준비금 보고 지연", "대규모 유통량 변동"],
		formChannelOptions: ["인앱 알림", "푸시 알림", "요약 알림"],
		presetLabels: ["USDT 괴리 0.5%", "USDC 변동 0.10%", "PYUSD 변동 0.25%"],
		footerPriceLabel: "가격 출처",
		footerOnchainLabel: "온체인 출처",
		footerUpdatedLabel: "업데이트",
		signalsKicker: "",
		signalsTitle: "바로 확인할 내용",
		newsKicker: "",
		newsTitle: "오늘 뉴스",
		newsNote: "국내와 해외 이슈를 나눠서 짧게 볼 수 있어요.",
		newsTabs: ["국내 뉴스", "해외 뉴스"],
		domesticNewsTitle: "국내 뉴스",
		domesticNewsNote: "국내 기사 중심",
		globalNewsTitle: "해외 뉴스",
		globalNewsNote: "공신력 있는 출처 위주",
		guideKicker: "",
		guideTitle: "공지사항",
		noticeLede: "처음 들어오면 지금 상태, 가격 차이, 뉴스만 먼저 보면 충분해요.",
		guideSummary: "이 서비스가 보여주는 것",
		guideLines: [
			"복잡한 화면 대신, 오늘 꼭 봐야 할 상태부터 먼저 보여줄게요.",
			"가격 변동, 국내외 가격 괴리, 주요 뉴스를 한눈에 보고 필요할 때만 알림을 켜면 돼요.",
			"어려운 말은 최대한 줄이고, 참고할 만한 정보만 담았어요."
		],
		noticeSummary: "이용 전에 알아둘 점",
		noticeItems: [
			"투자 자문이나 매매 기능은 없어요.",
			"표시된 정보는 참고용으로만 봐주세요.",
			"데이터는 조금 늦거나 다를 수 있어요.",
			"매수, 매도, 송금 같은 기능은 넣지 않았어요."
		],
		loadingData: "실데이터를 가져오고 있어요.",
		loadingHistory: "추이를 가져오고 있어요.",
		loadingPremium: "국내외 가격 괴리를 가져오고 있어요.",
		emptyPremium: "지금은 국내 기준 괴리를 보여줄 코인이 없어요.",
		noDomesticMarket: "국내 거래소 기준 없음",
		currentPrice: "현재 가격",
		priceChange: "기준 대비 변동",
		premium: "국내외 가격 괴리",
		tableMetric: "항목",
		tableStatus: "상태",
		marketCap: "시가총액",
		supply: "유통량",
		referenceInfo: "참고 정보",
		high: "고가",
		low: "저가",
		loadingNews: "뉴스를 가져오고 있어요.",
		emptyNews: "지금 바로 볼 만한 뉴스는 없어요.",
		leadPremium: "가장 크게 벌어진 코인",
		levelTightPrice: "민감 (0.05%)",
		levelNormalPrice: "보통 (0.10%)",
		levelCalmPrice: "완만 (0.25%)",
		levelTightPremium: "민감 (0.5%)",
		levelNormalPremium: "보통 (1.0%)",
		levelCalmPremium: "완만 (2.0%)",
		levelTightFlow: "민감 (1.0%)",
		levelNormalFlow: "보통 (3.0%)",
		levelCalmFlow: "완만 (5.0%)",
		levelTightReserve: "민감 (1일)",
		levelNormalReserve: "보통 (3일)",
		levelCalmReserve: "완만 (7일)",
		ruleWaiting: "평가 대기",
		ruleNoTarget: "대상 없음",
		ruleDomesticMissing: "국내 기준 없음",
		ruleMatched: "기준 충족",
		ruleStable: "안정 구간",
		rulePremiumOn: "괴리 발생",
		rulePremiumOff: "정상 범위",
		statusStable: "안정",
		statusWatch: "주의",
		statusWarning: "변동 확대",
		statusCritical: "변동 심화",
		premiumNormal: "보통",
		premiumWide: "조금 벌어짐",
		premiumVeryWide: "크게 벌어짐",
		domesticPrice: "국내",
		globalPrice: "글로벌",
		topSignalPremium: "[국내외 가격 괴리]",
		topSignalPrice: "[가격 변동 감지]",
		topSignalFx: "[환율 기준]",
		signalsLoading: "시장 데이터를 가져오고 있어요.",
		signalsErrorTitle: "실데이터를 가져오지 못했어요.",
		signalsErrorBody: "잠시 후 다시 보거나 서버 상태를 확인해 주세요.",
		noData: "데이터 없음"
	},
	en: {
		brand: "Oh-My-Stablecoin-Alarm",
		heroKicker: "Oh-My-Stablecoin-Alarm",
		heroTitle: "Oh-My-Stablecoin-Alarm",
		heroLede: "The easiest way to check stablecoin conditions. See only the changes that matter today.",
		heroNote: "Start with what changed today instead of digging through heavy charts.",
		primaryButton: "See Market Now",
		secondaryButton: "Pick Alerts",
		primaryButtonReady: "Ready in App",
		summaryStatusLabel: "Overall status",
		summaryVariationLabel: "24H moves",
		summaryPremiumLabel: "Domestic gaps",
		summaryRuleLabel: "Active alerts",
		premiumKicker: "",
		premiumTitle: "Domestic vs Global Gap",
		premiumNote: "See how far Korean prices are from global reference prices.",
		coinsKicker: "",
		coinsTitle: "Coins to Check Now",
		coinsNote: "Only the numbers you need, laid out simply.",
		compareKicker: "",
		compareTitle: "Stablecoin Comparison",
		compareSummary: "Stablecoin Comparison",
		compareNote: "Check the key differences at a glance.",
		levelKicker: "",
		levelTitle: "Quick guide",
		levelSummary: "How to read",
		levelItems: [
			"<strong>Stable</strong> means movement is still small.",
			"<strong>Watch</strong> means it is worth checking once more.",
			"<strong>Expanding</strong> means movement is larger than usual.",
			"<strong>Elevated</strong> means this one deserves attention now."
		],
		historyKicker: "",
		historyTitle: "Price Trend",
		range24h: "24H",
		range7d: "7D",
		alertsKicker: "",
		alertsTitle: "Alert Settings",
		alertsNote: "Pick only the assets you want to follow.",
		formAssetLabel: "Asset",
		formTypeLabel: "Condition",
		formLevelLabel: "Threshold",
		formChannelLabel: "Channel",
		formSubmitButton: "Add Alert Rule",
		formTypeOptions: ["Price move", "Domestic gap", "Reserve delay", "Large supply move"],
		formChannelOptions: ["In-app", "Push", "Digest"],
		presetLabels: ["USDT gap 0.5%", "USDC move 0.10%", "PYUSD move 0.25%"],
		footerPriceLabel: "Price source",
		footerOnchainLabel: "Reference source",
		footerUpdatedLabel: "Updated",
		signalsKicker: "",
		signalsTitle: "What to Check Now",
		newsKicker: "",
		newsTitle: "Today’s News",
		newsNote: "Domestic and global updates are split for faster reading.",
		newsTabs: ["Domestic News", "Global News"],
		domesticNewsTitle: "Domestic News",
		domesticNewsNote: "Korea-focused coverage",
		globalNewsTitle: "Global News",
		globalNewsNote: "Trusted sources first",
		guideKicker: "",
		guideTitle: "Notice Board",
		noticeLede: "Start with current status, price gaps, and news. That is enough for a quick check.",
		guideSummary: "What this app shows",
		guideLines: [
			"Start with the few changes that matter most today.",
			"Check price moves, domestic premiums, and major news in one place, then turn on alerts only when needed.",
			"We keep the wording simple and focus on reference information."
		],
		noticeSummary: "Before you use it",
		noticeItems: [
			"This app does not provide investment advice or trading.",
			"Treat the data as reference information only.",
			"Data may be delayed or differ from other sources.",
			"Buying, selling, transfers, and wallets are not included."
		],
		loadingData: "Loading market data.",
		loadingHistory: "Loading trend data.",
		loadingPremium: "Loading domestic premium data.",
		emptyPremium: "No domestic premium data is available right now.",
		noDomesticMarket: "No KR market reference",
		currentPrice: "Price",
		priceChange: "24H change",
		premium: "Domestic gap",
		tableMetric: "Metric",
		tableStatus: "Status",
		marketCap: "Market cap",
		supply: "Supply",
		referenceInfo: "Reference",
		high: "High",
		low: "Low",
		loadingNews: "Loading news.",
		emptyNews: "No notable updates right now.",
		leadPremium: "Largest gap right now",
		levelTightPrice: "Tight (0.05%)",
		levelNormalPrice: "Normal (0.10%)",
		levelCalmPrice: "Loose (0.25%)",
		levelTightPremium: "Tight (0.5%)",
		levelNormalPremium: "Normal (1.0%)",
		levelCalmPremium: "Loose (2.0%)",
		levelTightFlow: "Tight (1.0%)",
		levelNormalFlow: "Normal (3.0%)",
		levelCalmFlow: "Loose (5.0%)",
		levelTightReserve: "Tight (1 day)",
		levelNormalReserve: "Normal (3 days)",
		levelCalmReserve: "Loose (7 days)",
		ruleWaiting: "Waiting",
		ruleNoTarget: "Unavailable",
		ruleDomesticMissing: "No KR market",
		ruleMatched: "Triggered",
		ruleStable: "Quiet",
		rulePremiumOn: "Gap found",
		rulePremiumOff: "Normal",
		statusStable: "Stable",
		statusWatch: "Watch",
		statusWarning: "Expanding",
		statusCritical: "Elevated",
		premiumNormal: "Normal",
		premiumWide: "Wider",
		premiumVeryWide: "Wide",
		domesticPrice: "KR",
		globalPrice: "Global",
		topSignalPremium: "[Domestic Gap]",
		topSignalPrice: "[Price Move]",
		topSignalFx: "[FX Reference]",
		signalsLoading: "Loading signals.",
		signalsErrorTitle: "Could not load market data.",
		signalsErrorBody: "Try again in a moment or check the server.",
		noData: "No data"
	}
};

const state = {
	rules: loadRules(),
	snapshot: null,
	historyRange: "24h",
	lang: loadLanguage(),
	bridgeReady: false,
	stableCardIndex: 0
};

function loadRules() {
	const raw = window.localStorage.getItem("stable-pulse-rules");
	if (!raw) return defaultRules;
	try {
		const parsed = JSON.parse(raw);
		return parsed.map((rule) => ({
			...rule,
			asset: rule.asset,
			type: normalizeType(rule.type),
			level: normalizeLevel(rule.level),
			channel: normalizeChannel(rule.channel)
		}));
	} catch {
		return defaultRules;
	}
}

function saveRules() {
	window.localStorage.setItem("stable-pulse-rules", JSON.stringify(state.rules));
}

function loadLanguage() {
	const raw = window.localStorage.getItem("stable-pulse-lang");
	return raw === "en" ? "en" : "ko";
}

function saveLanguage() {
	window.localStorage.setItem("stable-pulse-lang", state.lang);
}

function t(key) {
	return translations[state.lang][key] ?? translations.ko[key] ?? key;
}

function renderStaticText() {
	document.documentElement.lang = state.lang;
	document.title = `${t("brand")} Mini App`;
	document.querySelector('meta[name="description"]')?.setAttribute(
		"content",
		state.lang === "ko"
			? "스테이블코인 상태를 쉽게 보는 앱. 가격 변동과 국내외 가격 차이, 뉴스 흐름을 한눈에 볼 수 있어요."
			: "A simple stablecoin monitor for price moves, domestic premiums, and market news."
	);

	setText("#hero-kicker", t("heroKicker"));
	setText("#hero-title", t("heroTitle"));
	setText("#hero-lede", t("heroLede"));
	setText("#hero-note", t("heroNote"));
	setText("#miniapp-ready", state.bridgeReady ? t("primaryButtonReady") : t("primaryButton"));
	setText("#alert-focus", t("secondaryButton"));
	setText("#summary-status-label", t("summaryStatusLabel"));
	setText("#summary-variation-label", t("summaryVariationLabel"));
	setText("#summary-premium-label", t("summaryPremiumLabel"));
	setText("#summary-rule-label", t("summaryRuleLabel"));
	setText("#premium-kicker", t("premiumKicker"));
	setText("#premium-title", t("premiumTitle"));
	setText("#premium-note", t("premiumNote"));
	setText("#coins-kicker", t("coinsKicker"));
	setText("#coins-title", t("coinsTitle"));
	setText("#coins-note", t("coinsNote"));
	setText("#compare-kicker", t("compareKicker"));
	setText("#compare-title", t("compareTitle"));
	setText("#compare-summary", t("compareSummary"));
	setText("#compare-note", t("compareNote"));
	setText("#level-kicker", t("levelKicker"));
	setText("#level-title", t("levelTitle"));
	setText("#level-summary", t("levelSummary"));
	setHtml("#level-list", t("levelItems").map((item) => `<li>${item}</li>`).join(""));
	setText("#history-kicker", t("historyKicker"));
	setText("#history-title", t("historyTitle"));
	document.querySelector('[data-range="24h"]').textContent = t("range24h");
	document.querySelector('[data-range="7d"]').textContent = t("range7d");
	setText("#alerts-kicker", t("alertsKicker"));
	setText("#alerts-title", t("alertsTitle"));
	setText("#alerts-note", t("alertsNote"));
	setText("#form-asset-label", t("formAssetLabel"));
	setText("#form-type-label", t("formTypeLabel"));
	setText("#form-level-label", t("formLevelLabel"));
	setText("#form-channel-label", t("formChannelLabel"));
	setText("#form-submit-button", t("formSubmitButton"));
	setText("#signals-kicker", t("signalsKicker"));
	setText("#signals-title", t("signalsTitle"));
	setText("#news-kicker", t("newsKicker"));
	setText("#news-title", t("newsTitle"));
	setText("#news-note", t("newsNote"));
	setText("#domestic-news-tab", t("newsTabs")[0]);
	setText("#global-news-tab", t("newsTabs")[1]);
	setText("#domestic-news-title", t("domesticNewsTitle"));
	setText("#domestic-news-note", t("domesticNewsNote"));
	setText("#global-news-title", t("globalNewsTitle"));
	setText("#global-news-note", t("globalNewsNote"));
	setText("#guide-kicker", t("guideKicker"));
	setText("#guide-title", t("guideTitle"));
	setText("#notice-lede", t("noticeLede"));
	setText("#guide-summary", t("guideSummary"));
	setText("#guide-line-1", t("guideLines")[0]);
	setText("#guide-line-2", t("guideLines")[1]);
	setText("#guide-line-3", t("guideLines")[2]);
	setText("#notice-summary", t("noticeSummary"));
	setHtml("#notice-list", t("noticeItems").map((item) => `<li>${item}</li>`).join(""));
	setText("#footer-price-label", t("footerPriceLabel"));
	setText("#footer-onchain-label", t("footerOnchainLabel"));
	setText("#footer-updated-label", t("footerUpdatedLabel"));
	updateFormOptions();
	updatePresetLabels();
	updateLevelOptions(document.querySelector('[name="type"]')?.value ?? "depeg");

	document.querySelectorAll("#lang-toggle .lang-button").forEach((button) => {
		button.classList.toggle("active", button.dataset.lang === state.lang);
	});
}

function updateFormOptions() {
	const typeSelect = document.querySelector('[name="type"]');
	const channelSelect = document.querySelector('[name="channel"]');
	if (typeSelect) {
		[...typeSelect.options].forEach((option, index) => {
			option.textContent = t("formTypeOptions")[index];
		});
	}
	if (channelSelect) {
		[...channelSelect.options].forEach((option, index) => {
			option.textContent = t("formChannelOptions")[index];
		});
	}
}

function updatePresetLabels() {
	document.querySelectorAll(".preset-button").forEach((button, index) => {
		button.textContent = t("presetLabels")[index];
	});
}

function renderTop3Board() {
	const container = document.querySelector("#top3-board");
	if (!container) return;
	if (!state.snapshot) {
		container.innerHTML = "";
		return;
	}

	const top3 = [...state.snapshot.stablecoins]
		.sort((a, b) => b.marketCapUsd - a.marketCapUsd)
		.slice(0, 3);

	container.innerHTML = top3
		.map((coin, index) => {
			const chip = statusMeta(coin.status);
			return `
				<article class="top3-card">
					<div class="top3-rank">TOP ${index + 1}</div>
					<div class="top3-head">
						<strong>${coin.symbol}</strong>
						<span class="chip ${chip.className}">${chip.label}</span>
					</div>
					<div class="top3-price">${formatUsd(coin.priceUsd)}</div>
					<div class="label">${t("marketCap")} ${formatUsdCompact(coin.marketCapUsd)}</div>
				</article>
			`;
		})
		.join("");
}

function renderStablecards() {
	const container = document.querySelector("#stablecards");
	const position = document.querySelector("#stable-position");
	const prevButton = document.querySelector("#stable-prev");
	const nextButton = document.querySelector("#stable-next");
	if (!state.snapshot) {
		container.innerHTML = `<article class="stable-card"><div class="label">${t("loadingData")}</div></article>`;
		if (position) position.textContent = "1 / 1";
		if (prevButton) prevButton.disabled = true;
		if (nextButton) nextButton.disabled = true;
		return;
	}

	const coins = state.snapshot.stablecoins;
	state.stableCardIndex = Math.max(0, Math.min(state.stableCardIndex, coins.length - 1));
	const coin = coins[state.stableCardIndex];
	const chip = statusMeta(coin.status);
	const premiumText =
		coin.premiumPct === null
			? t("noDomesticMarket")
			: `${formatSignedPercent(coin.premiumPct)} · ${t("domesticPrice")} ${formatKrw(coin.domesticKrwPrice)}`;

	container.innerHTML = `
		<article class="stable-card">
			<div class="stable-head">
				<div class="stable-head-copy">
					<div class="stable-name">${coin.symbol}</div>
					<div class="label">${coin.name}</div>
				</div>
				<span class="chip ${chip.className}">${chip.label}</span>
			</div>
			<div class="data-grid">
				<div class="datum">
					<span class="label">${t("currentPrice")}</span>
					<strong>${formatUsd(coin.priceUsd)}</strong>
				</div>
				<div class="datum">
					<span class="label">${t("priceChange")}</span>
					<strong>${formatSignedPercent(coin.variationPct)}</strong>
				</div>
				<div class="datum datum-wide">
					<span class="label">${t("premium")}</span>
					<strong>${premiumText}</strong>
				</div>
				<div class="datum">
					<span class="label">${t("marketCap")}</span>
					<strong>${formatUsdCompact(coin.marketCapUsd)}</strong>
				</div>
				<div class="datum">
					<span class="label">${t("supply")}</span>
					<strong>${formatSupply(coin.circulatingSupply)}</strong>
				</div>
				<div class="datum datum-wide">
					<span class="label">${t("referenceInfo")}</span>
					<strong>${coin.backing} · ${coin.reference}</strong>
				</div>
			</div>
			<div class="card-meta">
				<span>${coin.source}</span>
				<span>${formatTimestamp(coin.updatedAt)}</span>
			</div>
		</article>
	`;

	if (position) position.textContent = `${state.stableCardIndex + 1} / ${coins.length}`;
	if (prevButton) prevButton.disabled = state.stableCardIndex === 0;
	if (nextButton) nextButton.disabled = state.stableCardIndex === coins.length - 1;
}

function renderHistoryGrid() {
	const container = document.querySelector("#history-grid");
	if (!state.snapshot) {
		container.innerHTML = `<div class="mini-chart"><div class="label">${t("loadingHistory")}</div></div>`;
		return;
	}

	container.innerHTML = state.snapshot.stablecoins
		.map((coin) => {
			const series = state.historyRange === "24h" ? coin.history24h : coin.history7d;
			const stats = getSeriesStats(series);
			const currentValue = series.length ? series[series.length - 1] : coin.priceUsd;
			const firstValue = series.length ? series[0] : coin.priceUsd;
			const periodChange = (((currentValue - firstValue) / firstValue) * 100) || 0;
			const trendClass = periodChange >= 0 ? "trend-up" : "trend-down";
			const chip = statusMeta(coin.status);

			return `
				<div class="mini-chart ${trendClass}">
					<div class="mini-chart-head">
						<div class="stable-head-copy">
							<strong>${coin.symbol}</strong>
							<div class="label">${coin.name}</div>
						</div>
						<div class="mini-chart-badges">
							<span class="chip ${chip.className}">${chip.label}</span>
							<span class="mini-chart-badge ${trendClass}">${state.historyRange === "24h" ? t("range24h") : t("range7d")}</span>
						</div>
					</div>
					<div class="chart-price-line">
						<strong>${formatUsd(currentValue)}</strong>
						<span class="${periodChange >= 0 ? "up" : "down"}">${formatSignedPercent(periodChange)}</span>
					</div>
					${renderSparkline(series, trendClass)}
					<div class="chart-axis">
						<span>${t("high")} ${formatUsd(stats.max)}</span>
						<span>${t("low")} ${formatUsd(stats.min)}</span>
					</div>
					<div class="chart-meta">
						<span>${t("marketCap")} ${formatUsdCompact(coin.marketCapUsd)}</span>
						<span>${formatTimestamp(coin.updatedAt)}</span>
					</div>
				</div>
			`;
		})
		.join("");
}

function renderCompareTable() {
	const container = document.querySelector("#compare-table");
	if (!state.snapshot) {
		container.innerHTML = `<div class="compare-row"><div class="compare-label">${t("loadingData")}</div><div>...</div></div>`;
		return;
	}

	const coins = state.snapshot.stablecoins;
	const rows = [
		[t("tableMetric"), ...coins.map((coin) => coin.symbol)],
		[t("tableStatus"), ...coins.map((coin) => statusMeta(coin.status).label)],
		[t("priceChange"), ...coins.map((coin) => formatSignedPercent(coin.variationPct))],
		[t("premium"), ...coins.map((coin) => (coin.premiumPct === null ? t("noDomesticMarket") : formatSignedPercent(coin.premiumPct)))],
		[t("marketCap"), ...coins.map((coin) => formatUsdCompact(coin.marketCapUsd))],
		[t("supply"), ...coins.map((coin) => formatSupply(coin.circulatingSupply))],
		[t("referenceInfo"), ...coins.map((coin) => coin.backing)]
	];

	container.innerHTML = rows
		.map((row, index) => {
			const cells = row
				.map((cell, cellIndex) =>
					cellIndex === 0 ? `<div class="compare-label">${cell}</div>` : `<div>${cell}</div>`
				)
				.join("");
			return `<div class="compare-row ${index === 0 ? "header" : ""}">${cells}</div>`;
		})
		.join("");
}

function renderSummary() {
	if (!state.snapshot) return;

	const boxes = document.querySelectorAll(".status-strip > div");
	boxes[0].querySelector(".metric").textContent = translateOverallStatus(state.snapshot.summary.overallStatus);
	boxes[1].querySelector(".metric").textContent = `${state.snapshot.summary.variationCount}${state.lang === "ko" ? "건" : ""}`;
	boxes[2].querySelector(".metric").textContent = `${state.snapshot.summary.premiumCount}${state.lang === "ko" ? "개 자산" : " assets"}`;
	boxes[3].querySelector(".metric").textContent = `${state.rules.length}${state.lang === "ko" ? "개" : ""}`;

	document.querySelector(".footer-meta").children[0].querySelector(".meta-value").textContent =
		state.snapshot.summary.priceSource;
	document.querySelector(".footer-meta").children[1].querySelector(".meta-value").textContent =
		state.snapshot.summary.onchainSource;
	document.querySelector("#updated-at").textContent = formatTimestamp(state.snapshot.summary.updatedAt);
}

function renderPremiumCard() {
	const container = document.querySelector("#premium-card");
	if (!state.snapshot) {
		container.innerHTML = `<div class="label">${t("loadingPremium")}</div>`;
		return;
	}

	const coins = state.snapshot.stablecoins.filter((coin) => coin.premiumPct !== null);
	if (!coins.length) {
		container.innerHTML = `<div class="label">${t("emptyPremium")}</div>`;
		return;
	}

	const lead = [...coins].sort((a, b) => Math.abs(b.premiumPct) - Math.abs(a.premiumPct))[0];
	const leadStatus = getPremiumStatus(lead.premiumPct);
	const rows = coins
		.map((coin) => {
			const status = getPremiumStatus(coin.premiumPct);
			const chip = statusMeta(coin.status);
			return `
				<div class="premium-row">
					<div class="premium-main">
						<div class="premium-title-row">
							<strong>${coin.symbol}</strong>
							<span class="chip ${chip.className}">${chip.label}</span>
						</div>
						<div class="label">${t("domesticPrice")} ${formatKrw(coin.domesticKrwPrice)} · ${t("globalPrice")} ${formatKrw(coin.globalKrwPrice)}</div>
					</div>
					<div class="premium-side">
						<div class="premium-badge ${status.tone}">${status.label}</div>
						<div class="premium-value ${coin.premiumPct >= 0 ? "up" : "down"}">${formatSignedPercent(coin.premiumPct)}</div>
					</div>
				</div>
			`;
		})
		.join("");

	container.innerHTML = `
		<div class="premium-hero">
			<div class="premium-main">
				<div class="label">${t("leadPremium")}</div>
				<strong>${lead.symbol} ${formatSignedPercent(lead.premiumPct)}</strong>
			</div>
			<div class="premium-side">
				<div class="premium-badge ${leadStatus.tone}">${leadStatus.label}</div>
				<div class="label">${t("domesticPrice")} ${formatKrw(lead.domesticKrwPrice)} · ${t("globalPrice")} ${formatKrw(lead.globalKrwPrice)}</div>
			</div>
		</div>
		<div class="premium-list">${rows}</div>
	`;
}

function renderRules() {
	const list = document.querySelector("#rule-list");
	const count = document.querySelector("#active-rule-count");
	count.textContent = `${state.rules.length}${state.lang === "ko" ? "개" : ""}`;
	list.innerHTML = state.rules
		.map((rule) => {
			const evaluation = evaluateRule(rule);
			return `
				<li class="rule-item">
					<div class="rule-copy">
						<strong>${rule.asset} · ${displayType(rule.type)}</strong>
						<div class="label">${describeThreshold(rule)} · ${displayChannel(rule.channel)}</div>
					</div>
					<span class="rule-status ${evaluation.active ? "active" : "idle"}">${evaluation.label}</span>
					<button class="ghost" data-remove="${rule.id}">${state.lang === "ko" ? "삭제" : "Remove"}</button>
				</li>
			`;
		})
		.join("");
}

function renderSignals() {
	const container = document.querySelector("#signals");
	if (!state.snapshot) {
		container.innerHTML = `<article class="signal"><div><strong>${t("signalsLoading")}</strong></div></article>`;
		return;
	}

	container.innerHTML = state.snapshot.signals
		.map(
			(item) => `
				<article class="signal ${item.tone}">
					<div>
						<strong>${translateSignalTitle(item.title)}</strong>
						<div class="label">${translateSignalBody(item.body)}</div>
					</div>
				</article>
			`
		)
		.join("");
}

function renderNews() {
	const domestic = document.querySelector("#news-domestic");
	const global = document.querySelector("#news-global");
	if (!state.snapshot) {
		const loading = `<article class="news-item"><div class="label">${t("loadingNews")}</div></article>`;
		domestic.innerHTML = loading;
		global.innerHTML = loading;
		return;
	}

	renderNewsList(domestic, state.snapshot.news?.domestic || []);
	renderNewsList(global, state.snapshot.news?.global || []);
}

function renderNewsList(container, items) {
	if (!items.length) {
		container.innerHTML = `<article class="news-item"><div class="label">${t("emptyNews")}</div></article>`;
		return;
	}

	container.innerHTML = items
		.map((item) => {
			const date = item.pubDate ? new Date(item.pubDate).toLocaleDateString(state.lang === "ko" ? "ko-KR" : "en-US") : "";
			return `
				<article class="news-item">
					<a href="${item.link}" target="_blank" rel="noreferrer">${item.title}</a>
					<div class="news-meta">${item.source || "News"}${date ? ` · ${date}` : ""}</div>
				</article>
			`;
		})
		.join("");
}

function fillAssetSelect() {
	const select = document.querySelector("#asset-select");
	const assets = state.snapshot?.stablecoins?.map((coin) => coin.symbol) ?? ["USDC", "USDT", "PYUSD"];
	select.innerHTML = assets.map((symbol) => `<option value="${symbol}">${symbol}</option>`).join("");
}

function bindForm() {
	const form = document.querySelector("#alert-form");

	form.addEventListener("submit", (event) => {
		event.preventDefault();
		const data = new FormData(form);
		const nextRule = {
			id: Date.now(),
			asset: String(data.get("asset")),
			type: normalizeType(String(data.get("type"))),
			level: normalizeLevel(String(data.get("level"))),
			channel: normalizeChannel(String(data.get("channel")))
		};
		state.rules.unshift(nextRule);
		saveRules();
		renderRules();
		renderSummary();
		form.reset();
		fillAssetSelect();
		updateLevelOptions(form.querySelector('[name="type"]').value);
	});

	form.querySelector('[name="type"]').addEventListener("change", (event) => {
		updateLevelOptions(event.target.value);
	});

	document.querySelector("#rule-list").addEventListener("click", (event) => {
		const target = event.target;
		if (!(target instanceof HTMLElement)) return;
		const id = target.dataset.remove;
		if (!id) return;
		state.rules = state.rules.filter((rule) => String(rule.id) !== id);
		saveRules();
		renderRules();
		renderSummary();
	});

	document.querySelectorAll(".preset-button").forEach((button) => {
		button.addEventListener("click", () => {
			const presets = {
				"usdt-premium": { asset: "USDT", type: "kimchi", level: "tight", channel: "digest" },
				"usdc-variation": { asset: "USDC", type: "depeg", level: "normal", channel: "inapp" },
				"pyusd-watch": { asset: "PYUSD", type: "depeg", level: "calm", channel: "push" }
			};
			const preset = presets[button.dataset.preset];
			if (!preset) return;
			form.querySelector('[name="asset"]').value = preset.asset;
			form.querySelector('[name="type"]').value = preset.type;
			form.querySelector('[name="level"]').value = preset.level;
			form.querySelector('[name="channel"]').value = preset.channel;
			form.requestSubmit();
		});
	});
}

function bindHistoryRange() {
	document.querySelectorAll("#history-range [data-range]").forEach((button) => {
		button.addEventListener("click", () => {
			state.historyRange = button.dataset.range;
			document.querySelectorAll("#history-range [data-range]").forEach((item) => item.classList.remove("active"));
			button.classList.add("active");
			renderHistoryGrid();
		});
	});
}

function bindStableCardNav() {
	document.querySelector("#stable-prev")?.addEventListener("click", () => {
		if (!state.snapshot) return;
		state.stableCardIndex = Math.max(0, state.stableCardIndex - 1);
		renderStablecards();
	});

	document.querySelector("#stable-next")?.addEventListener("click", () => {
		if (!state.snapshot) return;
		state.stableCardIndex = Math.min(state.snapshot.stablecoins.length - 1, state.stableCardIndex + 1);
		renderStablecards();
	});
}

function bindNewsTabs() {
	document.querySelectorAll("[data-news-target]").forEach((button) => {
		button.addEventListener("click", () => {
			const target = button.dataset.newsTarget;
			document.querySelectorAll("[data-news-target]").forEach((item) => item.classList.remove("active"));
			document.querySelectorAll("[data-news-panel]").forEach((panel) => {
				panel.classList.toggle("active", panel.dataset.newsPanel === target);
			});
			button.classList.add("active");
		});
	});
}

function bindLanguageToggle() {
	document.querySelectorAll("#lang-toggle .lang-button").forEach((button) => {
		button.addEventListener("click", async () => {
			const nextLang = button.dataset.lang === "en" ? "en" : "ko";
			if (nextLang === state.lang) return;
			state.lang = nextLang;
			saveLanguage();
			renderStaticText();
			renderStablecards();
			renderPremiumCard();
			renderHistoryGrid();
			renderCompareTable();
			renderRules();
			renderSignals();
			renderNews();
			await loadSnapshot();
		});
	});
}

async function loadSnapshot() {
	try {
		const response = await fetch(`/api/market-snapshot?lang=${state.lang}`);
		if (!response.ok) throw new Error("snapshot failed");
		state.snapshot = await response.json();
		renderTop3Board();
		renderStablecards();
		renderPremiumCard();
		renderHistoryGrid();
		renderCompareTable();
		fillAssetSelect();
		renderSummary();
		renderSignals();
		renderRules();
		renderNews();
	} catch {
		document.querySelector("#signals").innerHTML = `
			<article class="signal warn">
				<div>
					<strong>${t("signalsErrorTitle")}</strong>
					<div class="label">${t("signalsErrorBody")}</div>
				</div>
			</article>
		`;
	}
}

function statusMeta(status) {
	return {
		stable: { label: t("statusStable"), className: "good" },
		watch: { label: t("statusWatch"), className: "warn" },
		warning: { label: t("statusWarning"), className: "warn" },
		critical: { label: t("statusCritical"), className: "warn" }
	}[status];
}

function evaluateRule(rule) {
	if (!state.snapshot) return { active: false, label: t("ruleWaiting") };
	const coin = state.snapshot.stablecoins.find((item) => item.symbol === rule.asset);
	if (!coin) return { active: false, label: t("ruleNoTarget") };

	if (normalizeType(rule.type) === "depeg") {
		const threshold = { tight: 0.05, normal: 0.1, calm: 0.25 }[normalizeLevel(rule.level)];
		return Math.abs(coin.variationPct) >= threshold
			? { active: true, label: t("ruleMatched") }
			: { active: false, label: t("ruleStable") };
	}

	if (normalizeType(rule.type) === "kimchi") {
		if (coin.premiumPct === null) return { active: false, label: t("ruleDomesticMissing") };
		const threshold = { tight: 0.5, normal: 1, calm: 2 }[normalizeLevel(rule.level)];
		return Math.abs(coin.premiumPct) >= threshold
			? { active: true, label: t("rulePremiumOn") }
			: { active: false, label: t("rulePremiumOff") };
	}

	return { active: false, label: t("ruleWaiting") };
}

function getPremiumStatus(value) {
	const premium = Math.abs(value ?? 0);
	if (premium >= 2) return { label: t("premiumVeryWide"), tone: "warn" };
	if (premium >= 1) return { label: t("premiumWide"), tone: "warn" };
	return { label: t("premiumNormal"), tone: "good" };
}

function formatType(value) {
	return {
		depeg: "가격 변동 감지",
		kimchi: "국내외 가격 괴리",
		reserve: "준비금 보고 지연",
		flow: "대규모 유통량 변동"
	}[value];
}

function formatLevel(value) {
	return {
		tight: "민감",
		normal: "보통",
		calm: "완만"
	}[value];
}

function normalizeType(value) {
	return {
		depeg: "depeg",
		"가격 변동 감지": "depeg",
		"Price move": "depeg",
		kimchi: "kimchi",
		"국내외 가격 괴리": "kimchi",
		"Domestic gap": "kimchi",
		reserve: "reserve",
		"준비금 보고 지연": "reserve",
		"Reserve delay": "reserve",
		flow: "flow",
		"대규모 유통량 변동": "flow",
		"Large supply move": "flow"
	}[value] ?? "depeg";
}

function normalizeLevel(value) {
	return {
		tight: "tight",
		민감: "tight",
		"민감 (0.05%)": "tight",
		"민감 (0.5%)": "tight",
		normal: "normal",
		보통: "normal",
		"보통 (0.10%)": "normal",
		"보통 (1.0%)": "normal",
		calm: "calm",
		완만: "calm",
		"완만 (0.25%)": "calm",
		"완만 (2.0%)": "calm"
	}[value] ?? "normal";
}

function displayType(value) {
	return {
		depeg: t("formTypeOptions")[0],
		kimchi: t("formTypeOptions")[1],
		reserve: t("formTypeOptions")[2],
		flow: t("formTypeOptions")[3]
	}[normalizeType(value)];
}

function updateLevelOptions(type) {
	const select = document.querySelector("#level-select");
	if (!select) return;

	const labels = {
		depeg: [t("levelTightPrice"), t("levelNormalPrice"), t("levelCalmPrice")],
		kimchi: [t("levelTightPremium"), t("levelNormalPremium"), t("levelCalmPremium")],
		flow: [t("levelTightFlow"), t("levelNormalFlow"), t("levelCalmFlow")],
		reserve: [t("levelTightReserve"), t("levelNormalReserve"), t("levelCalmReserve")]
	}[type] ?? [t("levelTightPrice"), t("levelNormalPrice"), t("levelCalmPrice")];

	[...select.options].forEach((option, index) => {
		option.textContent = labels[index];
	});
}

function describeThreshold(rule) {
	const groups = {
		depeg: {
			tight: t("levelTightPrice"),
			normal: t("levelNormalPrice"),
			calm: t("levelCalmPrice")
		},
		kimchi: {
			tight: t("levelTightPremium"),
			normal: t("levelNormalPremium"),
			calm: t("levelCalmPremium")
		},
		flow: {
			tight: t("levelTightFlow"),
			normal: t("levelNormalFlow"),
			calm: t("levelCalmFlow")
		},
		reserve: {
			tight: t("levelTightReserve"),
			normal: t("levelNormalReserve"),
			calm: t("levelCalmReserve")
		}
	};

	return groups[normalizeType(rule.type)]?.[normalizeLevel(rule.level)] ?? rule.level;
}

function formatChannel(value) {
	return {
		inapp: "인앱 알림",
		push: "푸시 알림",
		digest: "요약 알림"
	}[value];
}

function normalizeChannel(value) {
	return {
		inapp: "inapp",
		"인앱 알림": "inapp",
		"In-app": "inapp",
		push: "push",
		"푸시 알림": "push",
		Push: "push",
		digest: "digest",
		"요약 알림": "digest",
		Digest: "digest"
	}[value] ?? "inapp";
}

function displayChannel(value) {
	return {
		inapp: t("formChannelOptions")[0],
		push: t("formChannelOptions")[1],
		digest: t("formChannelOptions")[2]
	}[normalizeChannel(value)];
}

function formatSignedPercent(value) {
	return `${value >= 0 ? "+" : ""}${Number(value).toFixed(2)}%`;
}

function formatUsd(value) {
	return `$${Number(value).toFixed(4)}`;
}

function formatUsdCompact(value) {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		notation: "compact",
		maximumFractionDigits: 1
	}).format(value);
}

function formatSupply(value) {
	return new Intl.NumberFormat("en-US", {
		notation: "compact",
		maximumFractionDigits: 1
	}).format(value);
}

function formatKrw(value) {
	return `${Math.round(Number(value)).toLocaleString("ko-KR")}원`;
}

function formatTimestamp(value) {
	const date = new Date(value);
	const locale = state.lang === "ko" ? "ko-KR" : "en-US";
	const parts = new Intl.DateTimeFormat(locale, {
		timeZone: "Asia/Seoul",
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
		hour12: false
	}).formatToParts(date);
	const map = Object.fromEntries(parts.filter((part) => part.type !== "literal").map((part) => [part.type, part.value]));
	return `${map.year}-${map.month}-${map.day} ${map.hour}:${map.minute} KST`;
}

function renderSparkline(values, trendClass = "trend-up") {
	if (!values?.length) {
		return `<div class="label">${t("noData")}</div>`;
	}

	const min = Math.min(...values);
	const max = Math.max(...values);
	const points = values
		.map((value, index) => {
			const x = (index / Math.max(values.length - 1, 1)) * 100;
			const y = max === min ? 32 : 64 - ((value - min) / (max - min)) * 52 - 6;
			return `${x},${y}`;
		})
		.join(" ");

	return `<svg class="sparkline ${trendClass}" viewBox="0 0 100 64" preserveAspectRatio="none"><polyline points="${points}"></polyline></svg>`;
}

function getSeriesStats(values) {
	if (!values?.length) {
		return { min: 0, max: 0 };
	}
	return {
		min: Math.min(...values),
		max: Math.max(...values)
	};
}

function translateOverallStatus(value) {
	if (state.lang === "ko") return value;
	return {
		안정: t("statusStable"),
		주의: t("statusWatch"),
		변동_확대: t("statusWarning"),
		변동_심화: t("statusCritical")
	}[value] ?? t("statusWatch");
}

function translateSignalTitle(value) {
	if (state.lang === "ko") return value;
	return value
		.replace("[국내외 가격 괴리]", t("topSignalPremium"))
		.replace("[가격 변동 감지]", t("topSignalPrice"))
		.replace("[환율 기준]", t("topSignalFx"))
		.replace("의 국내외 가격 괴리가", " domestic gap is ")
		.replace("가 최근 24시간 기준", " moved ")
		.replace(" 변동했습니다.", " over the last 24 hours.")
		.replace("입니다.", ".");
}

function translateSignalBody(value) {
	if (state.lang === "ko") return value;
	return value
		.replace("국내 기준 가격", "KR price")
		.replace("글로벌 환산 가격", "Global reference")
		.replace("현재 가격", "Price")
		.replace("유통량", "Supply")
		.replace("국내외 가격 괴리 계산의 기준 환율로 사용됩니다.", "Used as the FX reference for domestic gap calculations.");
}

function setText(selector, value) {
	const node = document.querySelector(selector);
	if (node) node.textContent = value;
}

function setHtml(selector, value) {
	const node = document.querySelector(selector);
	if (node) node.innerHTML = value;
}

async function setupMiniappBridge() {
	const readyButton = document.querySelector("#miniapp-ready");
	const alertFocusButton = document.querySelector("#alert-focus");

	alertFocusButton.addEventListener("click", () => {
		document.querySelector("#alert-form").scrollIntoView({ behavior: "smooth", block: "start" });
	});

	try {
		const sdkModule = await import("https://esm.sh/@farcaster/miniapp-sdk");
		const sdk = sdkModule.default ?? sdkModule.sdk ?? sdkModule;

		if (sdk?.actions?.ready) {
			await sdk.actions.ready();
		}

		state.bridgeReady = true;
		renderStaticText();
		readyButton.disabled = true;
	} catch {
		readyButton.addEventListener("click", () => {
			window.scrollTo({ top: 0, behavior: "smooth" });
		});
	}
}

renderStaticText();
renderTop3Board();
renderStablecards();
renderPremiumCard();
renderHistoryGrid();
renderCompareTable();
fillAssetSelect();
renderRules();
renderSignals();
renderNews();
bindForm();
bindHistoryRange();
bindStableCardNav();
bindNewsTabs();
bindLanguageToggle();
setupMiniappBridge();
loadSnapshot();
