"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { C, CrossSym, CrownSym, DoveSym, GlobeSym, SHIELD } from "./Seal";

type Key = "cross" | "globe" | "dove" | "crown";

const QUARTERS: {
  key: Key;
  symbol: string;
  title: string;
  body: string;
  href: string;
  cta: string;
}[] = [
  {
    key: "cross",
    symbol: "The cross",
    title: "Worship on the Sabbath",
    body: "Every Saturday morning: intercessory prayer at 10, Sabbath School at 10:30, then praise, worship and the Word at 10:50.",
    href: "/worship",
    cta: "Plan a Sabbath visit",
  },
  {
    key: "globe",
    symbol: "The globe on the book",
    title: "Bibles for Kenya",
    body: "Our missionary department travels to Kenya with Bibles to give away, and we want to send more with every trip.",
    href: "/outreach#kenya",
    cta: "The Kenya mission",
  },
  {
    key: "dove",
    symbol: "The dove",
    title: "Outreach to families",
    body: "Family enrichment workshops, and food for Augusta families who need it.",
    href: "/outreach",
    cta: "Outreach in Augusta",
  },
  {
    key: "crown",
    symbol: "The crown",
    title: "The Seminary & Chaplaincy Institute",
    body: "Training Kingdom leaders: certificate and degree programs, online or in person at the Augusta campus, and a path to becoming a certified chaplain.",
    href: "/seminary",
    cta: "Study with us",
  },
];

const RECTS: Record<Key, { x: number; y: number; w: number; h: number; fill: string }> = {
  cross: { x: 0, y: -4, w: 60, h: 70, fill: C.black },
  globe: { x: 60, y: -4, w: 60, h: 70, fill: C.crimson },
  dove: { x: 0, y: 66, w: 60, h: 80, fill: C.crimson },
  crown: { x: 60, y: 66, w: 60, h: 80, fill: C.black },
};

function Sym({ k }: { k: Key }) {
  if (k === "cross") return <CrossSym />;
  if (k === "globe") return <GlobeSym />;
  if (k === "dove") return <DoveSym />;
  return <CrownSym />;
}

/**
 * The seal's shield as a key to the four ministries. Point at a quarter (or
 * tap it) and its ministry lights up beside it, and the other way round.
 */
export default function Quarters() {
  const [active, setActive] = useState<Key | null>(null);
  const id = useId().replace(/:/g, "");

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
      <div className="mx-auto w-full max-w-[420px]">
        <svg viewBox="-8 -10 136 158" className="w-full drop-shadow-[0_30px_50px_rgb(0_0_0/0.55)]" role="group" aria-label="The seal’s shield: four quarters">
          <defs>
            <clipPath id={`q${id}`}>
              <path d={SHIELD} />
            </clipPath>
            <filter id={`glow${id}`} x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="2.4" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <g clipPath={`url(#q${id})`}>
            {QUARTERS.map((q) => {
              const r = RECTS[q.key];
              const dim = active && active !== q.key;
              return (
                <g
                  key={q.key}
                  tabIndex={0}
                  role="button"
                  aria-label={`${q.symbol}: ${q.title}`}
                  aria-pressed={active === q.key}
                  className="cursor-pointer outline-none transition-opacity duration-300"
                  style={{ opacity: dim ? 0.35 : 1 }}
                  onMouseEnter={() => setActive(q.key)}
                  onFocus={() => setActive(q.key)}
                  onClick={() => setActive(q.key)}
                >
                  <rect x={r.x} y={r.y} width={r.w} height={r.h} fill={r.fill} />
                  <g filter={active === q.key ? `url(#glow${id})` : undefined}>
                    <Sym k={q.key} />
                  </g>
                </g>
              );
            })}
          </g>
          <line x1="60" y1="6" x2="60" y2="138" stroke={C.gold} strokeWidth="1.2" opacity="0.7" pointerEvents="none" />
          <line x1="0" y1="66" x2="120" y2="66" stroke={C.gold} strokeWidth="1.2" opacity="0.7" pointerEvents="none" />
          <path d={SHIELD} fill="none" stroke={C.gold} strokeWidth="5" strokeLinejoin="round" pointerEvents="none" />
        </svg>
        <p className="mt-4 text-center text-[0.9rem] text-mist">Point to a quarter of the shield.</p>
      </div>

      <ol className="grid gap-3" onMouseLeave={() => setActive(null)}>
        {QUARTERS.map((q, i) => {
          const on = active === q.key;
          return (
            <li key={q.key}>
              <Link
                href={q.href}
                onMouseEnter={() => setActive(q.key)}
                onFocus={() => setActive(q.key)}
                className={`group grid grid-cols-[3.25rem_1fr] gap-4 rounded-2xl border p-5 transition-colors duration-300 md:p-6 ${
                  on ? "border-gold/80 bg-white/[0.06]" : "border-ivory/10 hover:border-gold/50"
                }`}
              >
                <span aria-hidden className="display pt-0.5 text-[2.1rem] leading-none text-gold/80">
                  {["I", "II", "III", "IV"][i]}
                </span>
                <span>
                  <span className="eyebrow block text-[0.68rem] text-gold-hi">{q.symbol}</span>
                  <span className="display mt-2 block text-[1.45rem] md:text-[1.7rem]">{q.title}</span>
                  <span className="mt-2 block text-[1rem] leading-relaxed text-mist">{q.body}</span>
                  <span className="mt-3 inline-flex items-center gap-2 text-[0.95rem] font-semibold text-gold-hi">
                    {q.cta}
                    <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
