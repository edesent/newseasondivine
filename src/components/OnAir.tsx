"use client";

import { useEffect, useState } from "react";
import { show } from "@/lib/site";

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

/** Day of week (0 = Sunday) and decimal hour in Augusta. */
function augustaNow(d = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  }).formatToParts(d);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
  const hour = (Number(get("hour")) % 24) + Number(get("minute")) / 60;
  return { day, hour };
}

function status() {
  const { day, hour } = augustaNow();
  const weekday = show.radioDays.includes(day);
  if (weekday && hour >= show.radioStart && hour < show.radioEnd) return { live: true, text: "On the air now" };
  // When is the next show?
  let next = day;
  let label = "";
  if (weekday && hour < show.radioStart) label = "Today";
  else {
    for (let i = 1; i <= 7; i++) {
      next = (day + i) % 7;
      if (show.radioDays.includes(next)) {
        label = i === 1 ? "Tomorrow" : DAYS[next];
        break;
      }
    }
  }
  return { live: false, text: `Next show: ${label}, 9 AM` };
}

/**
 * A studio "ON AIR" light. It is lit only during the weekday radio hours
 * in Augusta, so it never claims a broadcast that isn't happening.
 */
export default function OnAir({ className = "" }: { className?: string }) {
  const [s, setS] = useState<{ live: boolean; text: string } | null>(null);
  useEffect(() => {
    const tick = () => setS(status());
    tick();
    const t = setInterval(tick, 30_000);
    return () => clearInterval(t);
  }, []);

  const live = s?.live ?? false;
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <span
        className={`eyebrow inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-[0.72rem] tracking-[0.3em] ${
          live ? "lamp-on border-red-400 bg-red-600 text-white" : "border-ivory/25 bg-black/30 text-ivory/45"
        }`}
      >
        <span aria-hidden className={`block h-2 w-2 rounded-full ${live ? "bg-white" : "bg-ivory/30"}`} />
        On Air
      </span>
      <span className="text-[0.95rem] text-mist" aria-live="polite">
        {s ? s.text : "Weekdays, 9 to 11 AM"}
      </span>
    </div>
  );
}
