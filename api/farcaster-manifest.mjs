import { buildManifest } from "../server.mjs";

export default async function handler(req, res) {
	const url = new URL(req.url, `https://${req.headers.host || "localhost"}`);
	res.status(200).json(buildManifest(url));
}
