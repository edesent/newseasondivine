import { createHmac, randomBytes, timingSafeEqual } from "crypto";
import { NextResponse } from "next/server";
import { org, topics } from "@/lib/site";

/**
 * The endpoint behind every form: messages, prayer requests and visit plans,
 * and enrollment inquiries for the Seminary & Chaplaincy Institute.
 *
 * Messages are emailed to the ministry through Resend:
 *   RESEND_API_KEY  a Resend key that can send from FORM_FROM's domain
 *   FORM_TO         where messages go (comma-separate for more than one)
 *   FORM_FROM       optional; defaults to "New Season Divine Ministries website <website@newseasondivineministries.com>"
 * FORM_WEBHOOK_URL (a Slack or Teams incoming webhook) also works, alone or as
 * well as email. Until one of them is set the endpoint answers 503 and the
 * form honestly says it isn't connected yet.
 *
 * Spam defences: a signed load-time token (GET) that must be at least 3
 * seconds old, a honeypot field, a per-IP rate limit, and a rule that
 * free-text answers may not contain links. Anything that trips a defence gets
 * a fake success and is dropped.
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SECRET = process.env.FORM_SECRET || process.env.RESEND_API_KEY || process.env.FORM_WEBHOOK_URL || "";
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
const isEmail = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s);
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

  const key = process.env.RESEND_API_KEY;
  const to = process.env.FORM_TO;
  const webhook = process.env.FORM_WEBHOOK_URL;
  const email = Boolean(key && to);
  if (!email && !webhook) {
    return NextResponse.json(
      {
        error:
          "Our online form isn’t connected yet. Please call the ministry line at the bottom of the page. We’d love to hear from you.",
      },
      { status: 503 },
    );
  }

  const contact = clean(body.contact, 120);
  try {
    await Promise.all([
      email && sendEmail(key!, to!, built.text, isEmail(contact) ? contact : undefined),
      webhook && postWebhook(webhook, built.text),
    ]);
  } catch {
    return NextResponse.json(
      { error: "We couldn’t send that just now. Please try again in a minute." },
      { status: 502 },
    );
  }
  return NextResponse.json({ ok: true });
}

/** The builders write Slack markdown; email gets the same lines without the markers. */
function plain(text: string) {
  return text
    .split("\n")
    .map((l) => l.replace(/\*([^*\n]+)\*/g, "$1"))
    .join("\n");
}

async function sendEmail(key: string, to: string, text: string, replyTo?: string) {
  const [subject, ...rest] = plain(text).split("\n");
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.FORM_FROM || `${org.name} website <website@newseasondivineministries.com>`,
      to: to.split(",").map((t) => t.trim()).filter(Boolean),
      ...(replyTo ? { reply_to: replyTo } : {}),
      subject,
      text: [
        ...rest,
        "",
        "—",
        replyTo
          ? "Sent from the form on the New Season website. Reply to this email to answer them."
          : "Sent from the form on the New Season website. Use the phone number above to reach them.",
      ]
        .join("\n")
        .trim(),
    }),
  });
  if (!res.ok) throw new Error(`resend ${res.status}`);
}

async function postWebhook(url: string, text: string) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
  if (!res.ok) throw new Error(`webhook ${res.status}`);
}
