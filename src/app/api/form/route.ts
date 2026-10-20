import { createHmac, randomBytes, timingSafeEqual } from "crypto";
import { NextResponse } from "next/server";
import { org, topics } from "@/lib/site";

/**
 * The endpoint behind every form: messages, prayer requests and visit plans,
 * and enrollment inquiries for the Seminary & Chaplaincy Institute.
 *
 * Messages go to FORM_WEBHOOK_URL (a Slack or Teams incoming webhook) so they
 * reach the pastors' phones in seconds. Until that is set the endpoint
 * answers 503 and the form honestly says it isn't connected yet.
 *
 * Spam defences: a signed load-time token (GET) that must be at least 3
 * seconds old, a honeypot field, a per-IP rate limit, and a rule that
 * free-text answers may not contain links. Anything that trips a defence gets
 * a fake success and is dropped.
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SECRET = process.env.FORM_SECRET || process.env.FORM_WEBHOOK_URL || "";
const MIN_FILL_MS = 3000;
const MAX_AGE_MS = 1000 * 60 * 60 * 6;

function sign(ts: string) {
  return createHmac("sha256", SECRET).update(ts).digest("hex");
}

function tokenOk(token: unknown) {
  if (!SECRET) return true; // nothing to sign with yet; the webhook is unset too
  if (typeof token !== "string") return false;
  const [ts, sig] = token.split(".");
  if (!ts || !sig) return false;
  const expected = Buffer.from(sign(ts));
  const given = Buffer.from(sig);
  if (expected.length !== given.length || !timingSafeEqual(expected, given)) return false;
  const age = Date.now() - Number(ts);
  return age >= MIN_FILL_MS && age <= MAX_AGE_MS;
}

export async function GET() {
  const ts = String(Date.now());
  return NextResponse.json(
    { token: SECRET ? `${ts}.${sign(ts)}` : `${ts}.${randomBytes(8).toString("hex")}` },
    { headers: { "Cache-Control": "no-store" } },
  );
}

// Best-effort, per serverless instance.
const hits = new Map<string, number[]>();
function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 10 * 60 * 1000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

const clean = (v: unknown, max = 2000) =>
  typeof v === "string"
    ? v.replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, "").trim().slice(0, max)
    : "";

const hasLink = (s: string) => /(https?:\/\/|www\.|\.(com|net|ru|xyz|top)\b)/i.test(s);
/** A phone-or-email field: an email address is fine, a web link is not. */
const badContact = (s: string) =>
  /(https?:\/\/|www\.)/i.test(s) || (/\.(com|net|ru|xyz|top)\b/i.test(s) && !s.includes("@"));
const fake = () => NextResponse.json({ ok: true });

type Body = Record<string, unknown>;
type Built = { text: string } | { error: string } | { spam: true };

function needNameContact(name: string, contact: string): { error: string } | null {
  if (name.split(/\s+/).filter(Boolean).length < 2) return { error: "Please give your first and last name." };
  if (!contact) return { error: "Leave a phone number or email so we can reach you." };
  return null;
}

function contactMessage(b: Body): Built {
  const name = clean(b.name, 80);
  const contact = clean(b.contact, 120);
  const topic = topics.includes(clean(b.topic, 80)) ? clean(b.topic, 80) : "Something else";
  const message = clean(b.message, 4000);
  const missing = needNameContact(name, contact);
  if (missing) return missing;
  if (!message) return { error: "Please write a message." };
  if ([name, message].some(hasLink) || badContact(contact)) return { spam: true };
  return {
    text: [
      `*${topic} — from the ${org.name} website*`,
      `*Name:* ${name}`,
      `*Reach them at:* ${contact}`,
      "",
      message,
    ].join("\n"),
  };
}

const PROGRAMS = ["Chaplaincy certificate", "A degree program", "The honorary doctorate", "The Nehemiah Project (pastors)", "Not sure yet"];

function enrollMessage(b: Body): Built {
  const name = clean(b.name, 80);
  const contact = clean(b.contact, 120);
  const format = clean(b.format, 40);
  const ministry = clean(b.ministry, 160);
  const note = clean(b.note, 2000);
  const picked = Array.isArray(b.programs)
    ? b.programs.filter((k): k is string => typeof k === "string" && PROGRAMS.includes(k))
    : [];
  const missing = needNameContact(name, contact);
  if (missing) return missing;
  if ([name, ministry, note].some(hasLink) || badContact(contact)) return { spam: true };
  return {
    text: [
      `*Seminary & Chaplaincy Institute inquiry*`,
      `*Name:* ${name}`,
      `*Reach them at:* ${contact}`,
      picked.length ? `*Interested in:* ${picked.join(", ")}` : "",
      format ? `*Classes:* ${format}` : "",
      ministry ? `*Church or ministry:* ${ministry}` : "",
      note && `\n${note}`,
    ]
      .filter(Boolean)
      .join("\n"),
  };
}

export async function POST(request: Request) {
  const raw = await request.text();
  if (raw.length > 12_000) return NextResponse.json({ error: "Too long." }, { status: 413 });

  let body: Body;
  try {
    body = JSON.parse(raw);
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (body.website) return fake();
  if (!tokenOk(body.token)) return fake();

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(`${body.kind}:${ip}`)) return fake();

  const builders: Record<string, (b: Body) => Built> = {
    contact: contactMessage,
    enroll: enrollMessage,
  };
  const built = typeof body.kind === "string" && builders[body.kind] ? builders[body.kind](body) : null;
  if (!built) return NextResponse.json({ error: "Unknown form." }, { status: 400 });
  if ("spam" in built) return fake();
  if ("error" in built) return NextResponse.json({ error: built.error }, { status: 400 });

  const webhook = process.env.FORM_WEBHOOK_URL;
  if (!webhook) {
    return NextResponse.json(
      {
        error:
          "Our online form isn’t connected yet. Please call the ministry line at the bottom of the page. We’d love to hear from you.",
      },
      { status: 503 },
    );
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: built.text }),
    });
    if (!res.ok) throw new Error(String(res.status));
  } catch {
    return NextResponse.json(
      { error: "We couldn’t send that just now. Please try again in a minute." },
      { status: 502 },
    );
  }
  return NextResponse.json({ ok: true });
}
