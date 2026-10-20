import { useId } from "react";

/**
 * The New Season Divine Ministries seal, redrawn from the logo on the old
 * site: a red ring lettered in white, seven gold stars, a gold laurel, and a
 * quartered shield (cross, globe on an open book, dove, crown).
 *
 * The four quarter symbols are exported on their own so the home page can
 * use them as the key to the ministries.
 */

export const C = {
  crimson: "#a3141f",
  crimsonDeep: "#6e0c14",
  black: "#141010",
  gold: "#d6a640",
  goldHi: "#f2d58a",
  goldLo: "#9c7424",
  white: "#fbf7ef",
};

/* Shield in a 120 x 140 box. Quarters meet at x=60, y=66. */
export const SHIELD = "M0 10 Q60 -2 120 10 L120 72 C120 108 90 128 60 140 C30 128 0 108 0 72 Z";

/** A Calvary cross on three steps, centred on (cx, cy). */
export function CrossSym({ cx = 30, cy = 37, color = C.gold }: { cx?: number; cy?: number; color?: string }) {
  return (
    <g transform={`translate(${cx - 30} ${cy - 37})`} fill={color}>
      <rect x="27.6" y="16" width="4.8" height="36" rx="0.6" />
      <rect x="18" y="26.4" width="24" height="4.8" rx="0.6" />
      <circle cx="30" cy="15.2" r="3" />
      <circle cx="17.2" cy="28.8" r="3" />
      <circle cx="42.8" cy="28.8" r="3" />
      <rect x="25" y="52" width="10" height="3" />
      <rect x="22" y="55" width="16" height="3" />
      <rect x="19" y="58" width="22" height="3" />
    </g>
  );
}

/** A globe resting on an open book. */
export function GlobeSym({ cx = 90, cy = 37, color = C.gold, line = C.crimsonDeep }: { cx?: number; cy?: number; color?: string; line?: string }) {
  return (
    <g transform={`translate(${cx - 90} ${cy - 37})`}>
      <circle cx="90" cy="32" r="12.5" fill={color} />
      <g fill="none" stroke={line} strokeWidth="1.3" opacity="0.85">
        <ellipse cx="90" cy="32" rx="5.2" ry="12.5" />
        <line x1="77.5" y1="32" x2="102.5" y2="32" />
        <path d="M79.6 25.2 Q90 28.6 100.4 25.2" />
        <path d="M79.6 38.8 Q90 35.4 100.4 38.8" />
      </g>
      <path d="M90 49.5 Q82 44.6 72 46.4 L72 53.6 Q82 52 90 56.8 Z" fill={color} />
      <path d="M90 49.5 Q98 44.6 108 46.4 L108 53.6 Q98 52 90 56.8 Z" fill={color} />
      <path d="M90 49.5 L90 56.8" stroke={line} strokeWidth="1.1" />
    </g>
  );
}

/** A dove in flight, wings raised. */
export function DoveSym({ cx = 32, cy = 93, color = C.white }: { cx?: number; cy?: number; color?: string }) {
  return (
    <g transform={`translate(${cx - 25} ${cy - 18}) scale(1.05)`} fill={color}>
      <path d="M1.5 21.5 L6 19.6 C7.6 16.4 11.4 15.6 14.2 17.6 L29.5 1.5 C31 9.5 28.6 15.6 24.4 19 C30.4 18 38.2 19.6 46.5 15.6 C42.6 23.8 36.4 27.8 28.4 28.8 L34.4 34.5 C28.2 34.6 22.2 32.6 18 30.2 C12 30.4 7.2 26.6 6 23.2 Z" />
      <path d="M18.6 21.6 C22 14 26.4 8.6 32 5.6 C30.6 12.4 27.4 17.6 22.6 21.4 Z" opacity="0.55" />
    </g>
  );
}

/** A five-point crown. */
export function CrownSym({ cx = 88, cy = 93, color = C.gold, jewel = C.crimson }: { cx?: number; cy?: number; color?: string; jewel?: string }) {
  return (
    <g transform={`translate(${cx - 88} ${cy - 93})`}>
      <path d="M72 103 L69.5 82 L78.5 91.5 L88 77 L97.5 91.5 L106.5 82 L104 103 Z" fill={color} />
      <rect x="71" y="103" width="34" height="6" rx="1" fill={color} />
      <circle cx="69.5" cy="81" r="2.6" fill={color} />
      <circle cx="88" cy="75.6" r="2.8" fill={color} />
      <circle cx="106.5" cy="81" r="2.6" fill={color} />
      <circle cx="78" cy="98" r="2.1" fill={jewel} />
      <circle cx="88" cy="97" r="2.4" fill={jewel} />
      <circle cx="98" cy="98" r="2.1" fill={jewel} />
    </g>
  );
}

/** The quartered shield as an SVG group, in a 120 x 140 box. */
export function ShieldArt() {
  const id = useId().replace(/:/g, "");
  return (
    <g>
      <defs>
        <clipPath id={`sh${id}`}>
          <path d={SHIELD} />
        </clipPath>
      </defs>
      <g clipPath={`url(#sh${id})`}>
        <rect x="0" y="-4" width="60" height="70" fill={C.black} />
        <rect x="60" y="-4" width="60" height="70" fill={C.crimson} />
        <rect x="0" y="66" width="60" height="80" fill={C.crimson} />
        <rect x="60" y="66" width="60" height="80" fill={C.black} />
      </g>
      <CrossSym />
      <GlobeSym />
      <DoveSym />
      <CrownSym />
      <path d={SHIELD} fill="none" stroke={C.gold} strokeWidth="4.5" strokeLinejoin="round" />
    </g>
  );
}

/** The quartered shield on its own. */
export function Shield({ className = "", title }: { className?: string; title?: string }) {
  return (
    <svg viewBox="-4 -6 128 150" className={className} role={title ? "img" : undefined} aria-hidden={title ? undefined : true}>
      {title ? <title>{title}</title> : null}
      <ShieldArt />
    </svg>
  );
}

function star(cx: number, cy: number, r: number) {
  const pts: string[] = [];
  for (let i = 0; i < 10; i++) {
    const a = -Math.PI / 2 + (i * Math.PI) / 5;
    const rr = i % 2 === 0 ? r : r * 0.45;
    pts.push(`${(cx + rr * Math.cos(a)).toFixed(2)},${(cy + rr * Math.sin(a)).toFixed(2)}`);
  }
  return pts.join(" ");
}

function laurel(side: 1 | -1) {
  // Leaves along an arc beside the shield; side 1 = right, -1 = left.
  const leaves: { x: number; y: number; rot: number }[] = [];
  const cx = 120;
  const cy = 122;
  const r = 66;
  for (let i = 0; i < 9; i++) {
    const deg = side === -1 ? 100 + i * 15 : 80 - i * 15;
    const t = (deg * Math.PI) / 180;
    const x = cx + r * Math.cos(t);
    const y = cy + r * Math.sin(t);
    const tangent = deg + (side === -1 ? 90 : -90);
    leaves.push({ x: cx + (r - 3) * Math.cos(t), y: cy + (r - 3) * Math.sin(t), rot: tangent + side * 20 });
    leaves.push({ x: cx + (r + 4) * Math.cos(t), y: cy + (r + 4) * Math.sin(t), rot: tangent - side * 20 });
  }
  return leaves;
}

/**
 * The full seal. `ring={false}` drops the lettering for small sizes.
 */
export default function Seal({ className = "", ring = true, title = "New Season Divine Ministries seal" }: { className?: string; ring?: boolean; title?: string }) {
  const id = useId().replace(/:/g, "");
  const leaves = [...laurel(-1), ...laurel(1)];
  // Seven stars across the bottom of the ring, as on the original.
  const starPts = [52, 64, 77, 90, 103, 116, 128].map((d) => {
    const t = (d * Math.PI) / 180;
    return { x: 120 + 97 * Math.cos(t), y: 120 + 97 * Math.sin(t) };
  });
  return (
    <svg viewBox="0 0 240 248" className={className} role="img">
      <title>{title}</title>
      <defs>
        <path id={`arc${id}`} d="M 36.9 168 A 96 96 0 1 1 203.1 168" />
        <radialGradient id={`ring${id}`} cx="50%" cy="38%" r="65%">
          <stop offset="0%" stopColor="#c41e2a" />
          <stop offset="100%" stopColor={C.crimsonDeep} />
        </radialGradient>
        <radialGradient id={`core${id}`} cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#3a0a0f" />
          <stop offset="100%" stopColor="#120708" />
        </radialGradient>
        <linearGradient id={`gold${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={C.goldHi} />
          <stop offset="55%" stopColor={C.gold} />
          <stop offset="100%" stopColor={C.goldLo} />
        </linearGradient>
      </defs>

      {/* Ribbon tails behind the ring */}
      <path d="M58 196 L34 226 L50 227 L44 242 L80 214 Z" fill={`url(#gold${id})`} />
      <path d="M182 196 L206 226 L190 227 L196 242 L160 214 Z" fill={`url(#gold${id})`} />

      <circle cx="120" cy="120" r="117" fill={`url(#gold${id})`} />
      <circle cx="120" cy="120" r="112" fill={`url(#ring${id})`} />
      <circle cx="120" cy="120" r="82" fill={`url(#gold${id})`} />
      <circle cx="120" cy="120" r="79" fill={`url(#core${id})`} />

      {ring ? (
        <text
          fill={C.white}
          fontFamily="var(--ff-cinzel), 'Cinzel', Georgia, serif"
          fontWeight="800"
          fontSize="18.5"
          letterSpacing="1"
        >
          <textPath href={`#arc${id}`} startOffset="50%" textAnchor="middle" textLength="372" lengthAdjust="spacingAndGlyphs">
            NEW SEASON DIVINE MINISTRIES
          </textPath>
        </text>
      ) : null}

      {starPts.map((s, i) => (
        <polygon key={i} points={star(s.x, s.y, 7.2)} fill={C.goldHi} />
      ))}

      {/* Laurel stems */}
      <path d="M 108.5 187 A 66 66 0 0 1 69.4 79.6" fill="none" stroke={C.gold} strokeWidth="1.6" opacity="0.85" />
      <path d="M 131.5 187 A 66 66 0 0 0 170.6 79.6" fill="none" stroke={C.gold} strokeWidth="1.6" opacity="0.85" />
      {leaves.map((l, i) => (
        <ellipse key={i} cx={l.x} cy={l.y} rx="7.6" ry="3" transform={`rotate(${l.rot} ${l.x} ${l.y})`} fill={`url(#gold${id})`} />
      ))}

      <g transform="translate(78 69) scale(0.7)">
        <ShieldArt />
      </g>
    </svg>
  );
}
