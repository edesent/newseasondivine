/**
 * An old radio dial with the needle on both of WNRR's frequencies:
 * 93.3 on the FM scale and 1380 on the AM scale.
 */
export default function RadioDial({ className = "" }: { className?: string }) {
  const W = 600;
  const pad = 30;
  const fmX = (f: number) => pad + ((f - 88) / (108 - 88)) * (W - pad * 2);
  const amX = (f: number) => pad + ((f - 530) / (1700 - 530)) * (W - pad * 2);
  const fmTicks = Array.from({ length: 41 }, (_, i) => 88 + i * 0.5);
  const amLabels = [540, 700, 900, 1100, 1300, 1500, 1700];
  const fmLabels = [88, 92, 96, 100, 104, 108];

  return (
    <svg viewBox={`0 0 ${W} 150`} className={className} role="img" aria-label="Radio dial tuned to 93.3 FM and 1380 AM">
      <defs>
        <linearGradient id="dialglass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2a1a12" />
          <stop offset="1" stopColor="#120a08" />
        </linearGradient>
        <linearGradient id="dialglow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#f2d58a" stopOpacity="0" />
          <stop offset="0.5" stopColor="#f2d58a" stopOpacity="0.16" />
          <stop offset="1" stopColor="#f2d58a" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width={W - 2} height="148" rx="16" fill="url(#dialglass)" stroke="#9c7424" strokeWidth="2" />
      <rect x="8" y="8" width={W - 16} height="134" rx="11" fill="url(#dialglow)" />

      {/* FM scale */}
      <text x={pad - 14} y="34" fill="#f2d58a" fontSize="12" fontWeight="700" letterSpacing="2" fontFamily="var(--ff-instrument), sans-serif">
        FM
      </text>
      {fmTicks.map((f) => (
        <line key={f} x1={fmX(f)} x2={fmX(f)} y1="44" y2={f % 2 === 0 ? 60 : 52} stroke="#e8dcc6" strokeOpacity={f % 2 === 0 ? 0.8 : 0.4} strokeWidth="1.2" />
      ))}
      {fmLabels.map((f) => (
        <text key={f} x={fmX(f)} y="76" fill="#e8dcc6" fillOpacity="0.75" fontSize="12" textAnchor="middle" fontFamily="var(--ff-instrument), sans-serif">
          {f}
        </text>
      ))}

      {/* AM scale */}
      <text x={pad - 14} y="102" fill="#f2d58a" fontSize="12" fontWeight="700" letterSpacing="2" fontFamily="var(--ff-instrument), sans-serif">
        AM
      </text>
      {Array.from({ length: 24 }, (_, i) => 540 + i * 50).map((f) => (
        <line key={f} x1={amX(f)} x2={amX(f)} y1="108" y2={f % 200 === 100 ? 122 : 115} stroke="#e8dcc6" strokeOpacity="0.45" strokeWidth="1.2" />
      ))}
      {amLabels.map((f) => (
        <text key={f} x={amX(f)} y="138" fill="#e8dcc6" fillOpacity="0.75" fontSize="12" textAnchor="middle" fontFamily="var(--ff-instrument), sans-serif">
          {f}
        </text>
      ))}

      {/* The needles */}
      <g>
        <line x1={fmX(93.3)} x2={fmX(93.3)} y1="18" y2="82" stroke="#ff4b4b" strokeWidth="2.5" />
        <rect x={fmX(93.3) - 22} y="14" width="44" height="18" rx="4" fill="#a3141f" />
        <text x={fmX(93.3)} y="27" fill="#fff" fontSize="11.5" fontWeight="700" textAnchor="middle" fontFamily="var(--ff-instrument), sans-serif">
          93.3
        </text>
        <line x1={amX(1380)} x2={amX(1380)} y1="88" y2="142" stroke="#ff4b4b" strokeWidth="2.5" />
        <rect x={amX(1380) - 22} y="84" width="44" height="18" rx="4" fill="#a3141f" />
        <text x={amX(1380)} y="97" fill="#fff" fontSize="11.5" fontWeight="700" textAnchor="middle" fontFamily="var(--ff-instrument), sans-serif">
          1380
        </text>
      </g>
    </svg>
  );
}
