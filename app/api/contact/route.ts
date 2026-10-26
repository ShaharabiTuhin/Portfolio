import { NextResponse } from "next/server";
import { getClient } from "@/lib/mongodb";

export const runtime = "nodejs";
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  const b = await req.json().catch(() => null);
  if (b?.website) return NextResponse.json({ ok: true }); // honeypot: bots get a silent success

  const name = String(b?.name ?? "").trim().slice(0, 100);
  const email = String(b?.email ?? "").trim().slice(0, 200);
  const message = String(b?.message ?? "").trim().slice(0, 2000);
  if (!name || !EMAIL.test(email) || message.length < 5) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  const doc = { name, email, message, createdAt: new Date().toISOString() };
  const hook = process.env.N8N_WEBHOOK_URL;

  // Save to MongoDB and trigger the n8n workflow in parallel; succeed if either lands.
  const results = await Promise.allSettled([
    Promise.resolve().then(() => getClient()).then((c) => c.db().collection("messages").insertOne({ ...doc })),
    hook
      ? fetch(hook, {
          method: "POST",
          headers: { "Content-Type": "application/json", "x-webhook-secret": process.env.N8N_WEBHOOK_SECRET ?? "" },
          body: JSON.stringify({ source: "portfolio-contact", ...doc }),
          signal: AbortSignal.timeout(8000),
        }).then((r) => { if (!r.ok) throw new Error("n8n " + r.status); })
      : Promise.reject(new Error("N8N_WEBHOOK_URL not set")),
  ]);

  if (results.every((r) => r.status === "rejected")) {
    console.error("contact failed", results);
    return NextResponse.json({ error: "Delivery failed" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
