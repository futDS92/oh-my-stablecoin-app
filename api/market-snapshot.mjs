import { buildSnapshot } from "../server.mjs";

export default async function handler(req, res) {
	try {
		const url = new URL(req.url, `https://${req.headers.host || "localhost"}`);
		const lang = url.searchParams.get("lang") === "en" ? "en" : "ko";
		const payload = await buildSnapshot(lang);
		res.status(200).json(payload);
	} catch {
		res.status(500).json({
			error: "snapshot_fetch_failed",
			message: "실데이터를 불러오는 중 오류가 발생했습니다."
		});
	}
}
