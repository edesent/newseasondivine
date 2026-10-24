import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Fill } from "@/components/Blank";
import { Obf } from "@/components/Obf";
import PageHead from "@/components/PageHead";
import { photos } from "@/lib/photos";
import { daysUntil, elevation, elevationAhead, honorary, honoraryOpen, org } from "@/lib/site";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Ecumenical Elevation & Graduation Celebration",
  description: `${elevation.dateText} in ${org.city}, Georgia: graduation for the ${org.seminaryShort}, honorary doctorates and elevations.`,
  alternates: { canonical: "/elevation" },
};

export default function Elevation() {
  const ahead = elevationAhead();
  const days = daysUntil(elevation.date);
  const nominations = honoraryOpen();

  if (!ahead) {
    return (
      <PageHead eyebrow={elevation.name} title="The 2026 celebration has taken place." lead="Thank you to everyone who came to honor this year’s graduates and honorees.">
        <Link href="/seminary" className="btn btn-gold mt-8">
          The Seminary & Chaplaincy Institute
        </Link>
      </PageHead>
    );
  }

  return (
    <>
      <PageHead eyebrow={`${elevation.dateText} · ${org.city}`} title={elevation.name} lead={elevation.theme}>
        <div className="mt-10 flex flex-wrap items-end gap-8">
          <div className="rounded-2xl border border-gold/70 bg-black/30 px-6 py-4 text-center">
            <p className="display text-5xl leading-none text-gold-hi">{days}</p>
            <p className="eyebrow mt-1 text-[0.64rem] text-mist">{days === 1 ? "day to go" : "days to go"}</p>
          </div>
          <a href="#details" className="btn btn-gold">
            Details
          </a>
        </div>
      </PageHead>

      <section id="details" className="scroll-mt-24 bg-paper py-20 md:py-28">
        <div className="wrap grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div data-reveal>
            <p className="eyebrow text-[0.72rem] text-crimson">The day</p>
            <h2 className="display mt-4 text-[clamp(2rem,4.4vw,3.2rem)]">Honoring today’s leaders for tomorrow’s assignment.</h2>
            <div className="prose-nsdm mt-6 max-w-2xl text-[1.12rem] leading-relaxed text-ink/85">
              <p>
                The {org.seminaryShort} gathers leaders from many churches to celebrate. Graduates receive their certificates and degrees, this year’s
                honorary doctorates are conferred, and leaders are elevated to their next assignment.
              </p>
              <p>Families, churches and friends of the graduates are welcome.</p>
            </div>
            <dl className="mt-10 grid gap-6 sm:grid-cols-3">
              <div className="border-t border-ink/12 pt-4">
                <dt className="eyebrow text-[0.66rem] text-muted">Date</dt>
                <dd className="mt-1.5 font-semibold">{elevation.dateText}</dd>
              </div>
              <div className="border-t border-ink/12 pt-4">
                <dt className="eyebrow text-[0.66rem] text-muted">Time</dt>
                <dd className="mt-1.5 font-semibold">
                  <Fill value={elevation.time} label="Start time" />
                </dd>
              </div>
              <div className="border-t border-ink/12 pt-4">
                <dt className="eyebrow text-[0.66rem] text-muted">Place</dt>
                <dd className="mt-1.5 font-semibold">
                  <Fill value={elevation.place} label="Venue and address" />
                </dd>
              </div>
            </dl>
            {nominations ? (
              <div className="mt-10 rounded-2xl bg-crimson p-6 text-paper">
                <p className="eyebrow text-[0.68rem] opacity-80">Honorary doctorates</p>
                <p className="display mt-2 text-2xl">Submissions close {honorary.deadlineText}.</p>
                <Link href="/seminary#honorary" className="btn btn-gold mt-5">
                  What to send
                </Link>
              </div>
            ) : null}
            <p className="mt-10 text-[1.02rem] text-ink/80">
              To attend, or to ask about the program, call <Obf b64={org.phoneB64} className="font-semibold text-crimson hover:underline" /> or{" "}
              <Link href="/contact" className="font-semibold text-crimson hover:underline">
                send a message
              </Link>
              .
            </p>
          </div>
          <figure data-reveal className="grid content-start gap-4">
            <div className="framed rounded-[4px]">
              <Image
                src={photos.sctondaRobe.src}
                alt={photos.sctondaRobe.alt}
                width={photos.sctondaRobe.w}
                height={photos.sctondaRobe.h}
                sizes="(min-width: 1024px) 420px, 90vw"
                className="block h-auto w-full rounded-[2px]"
              />
            </div>
            <figcaption className="text-[0.92rem] text-muted">The Chancellor, Apostle Dr. Sctonda Kelly Gordon, at the podium in her doctoral robe.</figcaption>
          </figure>
        </div>
      </section>

      <section id="graduation-gallery" className="bg-ivory py-16 md:py-24">
        <div className="wrap">
          <p className="eyebrow text-crimson">Celebrating Kingdom leaders</p>
          <h2 className="display mt-3 text-[clamp(2rem,4.5vw,3.5rem)]">Graduation & Ecumenical Elevation Gallery</h2>
          <p className="mt-4 max-w-3xl text-lg text-ink/75">A look back at special moments of achievement, recognition and commissioning at New Season Divine Ministries Theological Seminary & Chaplaincy Institute.</p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { src: "/photos/graduation-sanctuary.jpg", caption: "Graduation celebration" },
              { src: "/photos/graduation-line.jpg", caption: "Celebrating our graduates" },
              { src: "/photos/chaplains-four.jpg", caption: "Chaplaincy graduates" },
            ].map((item) => (
              <figure key={item.src} className="overflow-hidden rounded-xl border border-gold/30 bg-paper shadow-sm">
                <div className="relative aspect-[4/3]">
                  <Image src={item.src} alt={item.caption} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                </div>
                <figcaption className="p-4 font-semibold text-ink">{item.caption}</figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-12 rounded-xl border border-gold/40 bg-paper p-6 md:p-8">
            <h3 className="display text-2xl">Elevation Ceremony Videos</h3>
            <p className="mt-3 max-w-2xl text-ink/75">Explore graduation and Ecumenical Elevation moments shared on Facebook. Additional ceremony videos and photographs will be added as they are provided.</p>
            <div className="mt-5 flex flex-wrap gap-3"><a href="https://www.facebook.com/share/p/1FDRQ6v2fz/" target="_blank" rel="noopener noreferrer" className="btn btn-crimson">View Graduation Facebook Post 1 ↗</a><a href="https://www.facebook.com/share/p/19dY8RYQwG/" target="_blank" rel="noopener noreferrer" className="btn btn-crimson">View Graduation Facebook Post 2 ↗</a></div>
          </div>
        </div>
      </section>
    </>
  );
}
