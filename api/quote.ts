// /api/quote.ts
import type { VercelRequest, VercelResponse } from "@vercel/node";

const ALLOWED_ORIGINS = [
  "https://gm-flood-solutions.vercel.app",
  // Add your custom domain when you have one:
  // "https://gmfloodsolutions.com",
  // Dev (Vite):
  "http://localhost:5173",
  // GitHub Pages (if you host frontend there):
  // "https://<YOUR_USERNAME>.github.io"
];

function setCors(res: VercelResponse, origin?: string) {
  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Vary", "Origin");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const origin = req.headers.origin as string | undefined;
  setCors(res, origin);

  // Handle preflight for cross-origin requests
  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST, OPTIONS");
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }

  try {
    const { name, phone, email, address, source, message, _gotcha } =
      (req.body ?? {}) as Record<string, string>;

    // Honeypot spam trap (hidden field)
    if (_gotcha) return res.status(200).json({ ok: true });

    // Basic validation
    if (!name || !phone || !email) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // TODO: email or save to DB here (we can add next)
    console.log("New quote:", { name, phone, email, address, source, message });

    return res.status(200).json({ ok: true });
  } catch (err: any) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
}
