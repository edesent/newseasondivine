import Link from "next/link";
import Seal from "./Seal";
import { Obf } from "./Obf";
import { nav, org, pastors, sabbath, show } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="night border-t border-gold/30">
      <div className="wrap grid gap-12 py-16 md:grid-cols-[1.2fr_1fr_1fr] md:py-20">
        <div>
          <div className="flex items-center gap-4">
            <Seal className="h-20 w-20 shrink-0" />
            <div>
              <p className="display text-2xl">{org.name}</p>
              <p className="mt-1 text-[0.95rem] text-mist">{org.seminaryShort}</p>
            </div>
          </div>
          <p className="verse mt-6 max-w-sm text-2xl text-gold-hi">“To every thing there is a season, and a time to every purpose under the heaven.”</p>
          <p className="eyebrow mt-2 text-[0.68rem] text-mist">Ecclesiastes 3:1</p>
        </div>

        <div>
          <p className="eyebrow text-[0.7rem] text-gold">The Sabbath</p>
          <ul className="mt-4 space-y-1.5 text-[0.98rem]">
            {sabbath.map((s) => (
              <li key={s.name} className="flex gap-3">
                <span className="w-20 shrink-0 font-semibold tabular-nums text-gold-hi">
                  {s.at} {s.ampm}
                </span>
                <span>{s.name}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-[0.98rem] text-mist">
            Every Saturday at {org.venue}
            <br />
            <a href={org.maps} className="underline decoration-gold/50 underline-offset-4 hover:text-gold-hi" target="_blank" rel="noopener noreferrer">
              {org.street}, {org.city}, {org.stateCode}
            </a>
          </p>
          <p className="mt-4 text-[0.98rem]">
            <Obf b64={org.phoneB64} className="font-semibold text-gold-hi hover:underline" />
          </p>
        </div>

        <div>
          <p className="eyebrow text-[0.7rem] text-gold">Around the site</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-[0.98rem] md:grid-cols-1">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-gold-hi">
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/give" className="hover:text-gold-hi">
                Give
              </Link>
            </li>
          </ul>
          <p className="mt-6 text-[0.92rem] text-mist">
            Hear {pastors.sctonda.first} weekdays on {show.radioShort}.
          </p>
        </div>
      </div>
      <div className="border-t border-ivory/10">
        <div className="wrap flex flex-col gap-2 py-6 text-[0.85rem] text-mist sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {org.name}, {org.city}, {org.state}
          </p>
          <p className="italic">{org.motto}</p>
        </div>
      </div>
    </footer>
  );
}
