// /api/quote.ts
import type { VercelRequest, VercelResponse } from "@vercel/node";

// Explicit prod domains you own
const ALLOWED_STATIC = new Set<string>([
  "https://gm-flood-solutions.vercel.app",
  // Add your custom domain when you connect it:
  // "https://gmfloodsolutions.com",
  // Dev (Vite):
  "http://localhost:5173",
  // If you use GitHub Pages for frontend:
  // "https://<YOUR_USERNAME>.github.io"
]);

function isAllowedOrigin(origin?: string): boolean {
  if (!origin) return false;
  if (ALLOWED_STATIC.has(origin)) return true;

  // Allow this project's Vercel preview domains (they change per deploy).
  // Example: https://gm-flood-solutions-xxxxx-brandon-temalis-projects.vercel.app
  try {
    const u = new URL(origin);
    const host = u.host; // e.g., gm-flood-solutions-xxxxx-brandon-temalis-projects.vercel.app
    return (
      host.endsWith(".vercel.app") && host.includes("gm-flood-solutions") // ensure it's YOUR project’s previews
    );
  } catch {
    return false;
  }
}

function setCors(res: VercelResponse, origin?: string) {
  if (isAllowedOrigin(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin!);
  }
  res.setHeader("Vary", "Origin");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const origin = req.headers.origin as string | undefined;
  setCors(res, origin);

  if (req.method === "OPTIONS") {
    // Preflight response
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST, OPTIONS");
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }

  try {
    const { name, phone, email, address, source, message, _gotcha } =
      (req.body ?? {}) as Record<string, string>;

    // Honeypot spam trap
    if (_gotcha) return res.status(200).json({ ok: true });

    if (!name || !phone || !email) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // TODO: email or save to DB
    console.log("New quote:", { name, phone, email, address, source, message });

    return res.status(200).json({ ok: true });
  } catch (err: any) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
}
