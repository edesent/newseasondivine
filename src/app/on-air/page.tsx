import type { Metadata } from "next";
import Image from "next/image";
import OnAir from "@/components/OnAir";
import PageHead from "@/components/PageHead";
import RadioDial from "@/components/RadioDial";
import VideoFacade from "@/components/VideoFacade";
import { photos } from "@/lib/photos";
import { appearances, org, pastors, show } from "@/lib/site";

export const metadata: Metadata = {
  title: "Radio & Television",
  description: `${show.name}: weekdays 9 to 11 AM on ${show.radio}, and at noon on ${show.tv}. Plus television appearances and 15 Minutes with Jesus.`,
  alternates: { canonical: "/on-air" },
};

export default function OnAirPage() {
  const vimeo = appearances.find((a) => a.kind === "vimeo");
  const links = appearances.filter((a) => a.kind === "link");

  return (
    <>
      <PageHead
        eyebrow="Radio & television"
        title="On the air in Augusta."
        lead={`Apostle ${pastors.sctonda.name} every weekday on ${show.radio} and ${show.tv}.`}
      >
        <OnAir className="mt-8" />
      </PageHead>

      {/* ---------------------------------------------------------- The show */}
      <section className="bg-paper py-20 md:py-28">
        <div className="wrap grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div data-reveal>
            <p className="eyebrow text-[0.72rem] text-crimson">The show</p>
            <h2 className="display mt-4 text-[clamp(2rem,4.6vw,3.5rem)]">{show.name}</h2>
            <p className="mt-5 max-w-2xl text-[1.12rem] leading-relaxed text-ink/85">
              Spiritual conversation, motivation, life talks, prayer and celebrity interviews, on the station where Dr. Gordon is program director.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="card p-6">
                <p className="eyebrow text-[0.66rem] text-crimson">Radio</p>
                <p className="display mt-2 text-2xl">Weekdays, 9 to 11 AM</p>
                <p className="mt-2 text-[1.02rem] text-ink/80">{show.radio}</p>
                <a href={show.radioUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block font-semibold text-crimson hover:underline">
                  wnrrgospel.com →
                </a>
              </div>
              <div className="card p-6">
                <p className="eyebrow text-[0.66rem] text-crimson">Television</p>
                <p className="display mt-2 text-2xl">Weekdays at 12 noon</p>
                <p className="mt-2 text-[1.02rem] text-ink/80">{show.tv}, Watchmen Broadcasting</p>
              </div>
            </div>
            <div className="mt-8 rounded-2xl bg-night p-5 md:p-7">
              <RadioDial className="w-full" />
            </div>
          </div>
          <div data-reveal>
            <h3 className="display text-[1.5rem]">Ways to watch WBPI-TV 49</h3>
            <ul className="mt-5 divide-y divide-ink/10 border-y border-ink/10">
              {show.watch.map((w) => (
                <li key={w.where} className="flex items-baseline justify-between gap-4 py-3.5">
                  <span className="font-semibold">{w.where}</span>
                  <span className="text-right text-[0.98rem] text-ink/75">{w.how}</span>
                </li>
              ))}
            </ul>
            <div className="framed mt-10 rounded-[4px]">
              <Image
                src={photos.powerUpPrayer.src}
                alt={photos.powerUpPrayer.alt}
                width={photos.powerUpPrayer.w}
                height={photos.powerUpPrayer.h}
                sizes="(min-width: 1024px) 460px, 90vw"
                className="block h-auto w-full rounded-[2px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- Television */}
      <section id="television" className="night scroll-mt-24 py-20 md:py-28">
        <div className="wrap">
          <div data-reveal className="max-w-3xl">
            <p className="eyebrow text-[0.72rem] text-gold-hi">Television</p>
            <h2 className="display mt-4 text-[clamp(2rem,4.6vw,3.5rem)]">Watch the interviews.</h2>
          </div>
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.35fr_0.65fr]">
            {vimeo && vimeo.kind === "vimeo" ? (
              <div data-reveal>
                <VideoFacade id={vimeo.id} title={vimeo.title} label={vimeo.date} />
                <p className="mt-4 max-w-2xl text-[1rem] text-mist">{vimeo.note}</p>
              </div>
            ) : null}
            <div className="grid content-start gap-5">
              {links.map((a) =>
                a.kind === "link" ? (
                  <a
                    key={a.url}
                    data-reveal
                    href={a.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-2xl border border-ivory/15 p-6 transition-colors hover:border-gold/60"
                  >
                    <span className="eyebrow block text-[0.64rem] text-gold-hi">{a.date}</span>
                    <span className="display mt-2 block text-xl">{a.title}</span>
                    <span className="mt-2 block text-[0.96rem] text-mist">{a.note}</span>
                    <span className="mt-3 inline-block font-semibold text-gold-hi">Watch on WJBF →</span>
                  </a>
                ) : null,
              )}
              <a
                data-reveal
                href={org.facebookHeldin}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-2xl border border-ivory/15 transition-colors hover:border-gold/60"
              >
                <Image
                  src={photos.fifteenMinutes.src}
                  alt={photos.fifteenMinutes.alt}
                  width={photos.fifteenMinutes.w}
                  height={photos.fifteenMinutes.h}
                  sizes="(min-width: 1024px) 380px, 92vw"
                  className="block aspect-video h-auto w-full object-cover"
                />
                <span className="block p-6">
                  <span className="eyebrow block text-[0.64rem] text-gold-hi">Live on Facebook</span>
                  <span className="display mt-2 block text-xl">15 Minutes with Jesus</span>
                  <span className="mt-2 block text-[0.96rem] text-mist">{pastors.heldin.first}’s Bible talk, streamed from his Facebook page.</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- Recognition */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="wrap grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div data-reveal className="framed mx-auto w-full max-w-[420px] rounded-[4px]">
            <Image
              src={photos.doveAwards.src}
              alt={photos.doveAwards.alt}
              width={photos.doveAwards.w}
              height={photos.doveAwards.h}
              sizes="(min-width: 1024px) 420px, 90vw"
              className="block h-auto w-full rounded-[2px]"
            />
          </div>
          <div data-reveal>
            <p className="eyebrow text-[0.72rem] text-crimson">Recognition</p>
            <h2 className="display mt-4 text-[clamp(2rem,4.4vw,3.3rem)]">Gospel Announcer of the Year.</h2>
            <p className="mt-5 max-w-2xl text-[1.12rem] leading-relaxed text-ink/85">
              At the 2021 Stellar Gospel Music Awards, Dr. Sctonda Kelly Gordon of WNRR Gospel 1380 & 93.3 FM was named Gospel Announcer of the Year. In
              2024, a two-day celebration in the CSRA honored her 32 years of ministry and media.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
