// /api/quote.ts
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, phone, email, address, source, message, _gotcha } =
      req.body || {};

    // Honeypot spam trap (hidden field in your form)
    if (_gotcha) return res.status(200).json({ ok: true });

    // Basic validation
    if (!name || !phone || !email) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // TODO: optional email/DB logic goes here (we can add later)

    return res.status(200).json({ ok: true });
  } catch (err: any) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
}
