// /api/quote.ts
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

// Allow prod/preview/local
const ALLOWED_STATIC = new Set<string>([
  "https://gm-flood-solutions.vercel.app",
  "http://localhost:5173",
]);
function isAllowedOrigin(origin?: string): boolean {
  if (!origin) return false;
  if (ALLOWED_STATIC.has(origin)) return true;
  try {
    const u = new URL(origin);
    const host = u.host;
    return host.endsWith(".vercel.app") && host.includes("gm-flood-solutions");
  } catch {
    return false;
  }
}
function setCors(res: VercelResponse, origin?: string) {
  if (isAllowedOrigin(origin))
    res.setHeader("Access-Control-Allow-Origin", origin!);
  res.setHeader("Vary", "Origin");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

const resend = new Resend(process.env.RESEND_API_KEY!);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const origin = req.headers.origin as string | undefined;
  setCors(res, origin);

  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST, OPTIONS");
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }

  try {
    const { name, phone, email, address, source, message, _gotcha } =
      (req.body ?? {}) as Record<string, string>;

    if (_gotcha) return res.status(200).json({ ok: true });
    if (!name || !phone || !email) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Debug: confirm envs are present (does NOT print your key)
    console.log("ENV present:", {
      HAS_RESEND_KEY: !!process.env.RESEND_API_KEY,
      QUOTE_FROM: process.env.QUOTE_FROM,
      QUOTE_TO: process.env.QUOTE_TO,
    });

    console.log("New quote:", { name, phone, email, address, source, message });

    const text = `New Quote Request
-----------------
Name: ${name}
Phone: ${phone}
Email: ${email}
Address: ${address || "-"}
Source: ${source || "-"}
Message: ${message || "-"}`;

    // Send to your inbox
    const result = await resend.emails.send({
      from: process.env.QUOTE_FROM!, // e.g. "GM Flood Solutions <onboarding@resend.dev>"
      to: process.env.QUOTE_TO!, // e.g. "brandontemali16@gmail.com"
      subject: `New Quote Request — ${name}`,
      text,
    });

    console.log("Resend result:", result);
    return res.status(200).json({ ok: true });
  } catch (err: any) {
    console.error("Resend error:", err?.message || err);
    return res.status(500).json({ error: "Server error" });
  }
}
