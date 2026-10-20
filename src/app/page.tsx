import Image from "next/image";
import Link from "next/link";
import { Fill } from "@/components/Blank";
import OnAir from "@/components/OnAir";
import Quarters from "@/components/Quarters";
import RadioDial from "@/components/RadioDial";
import { photos } from "@/lib/photos";
import { daysUntil, elevation, elevationAhead, honorary, honoraryOpen, org, pastors, sabbath, show } from "@/lib/site";

export const revalidate = 3600;

export default function Home() {
  const showElevation = elevationAhead();
  const days = daysUntil(elevation.date);
  const nominations = honoraryOpen();

  return (
    <>
      {/* ---------------------------------------------------------- Hero */}
      {/* The photo is full of faces, so the title sits low, on the robes, and everything else goes in the band below. */}
      <section className="relative isolate flex h-[86svh] min-h-[560px] items-end overflow-hidden bg-night text-ivory md:min-h-[640px]">
        <Image
          src={photos.graduationSanctuary.src}
          alt={photos.graduationSanctuary.alt}
          fill
          preload
          sizes="100vw"
          className="-z-20 object-cover object-[58%_28%]"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(180deg, rgb(10 4 5 / 0.62) 0%, rgb(10 4 5 / 0) 20%, rgb(10 4 5 / 0) 52%, rgb(22 9 11 / 0.78) 78%, rgb(27 13 16 / 1) 100%), radial-gradient(ellipse 60% 45% at 0% 100%, rgb(110 12 20 / 0.5), transparent 70%)",
          }}
        />
        <div className="wrap pb-8 md:pb-10">
          <p className="eyebrow shadow-photo text-[0.72rem] text-gold-hi">
            <span className="hidden sm:inline">{org.name} · </span>
            {org.city}, {org.state}
          </p>
          <h1 className="display mt-3 max-w-5xl text-[clamp(2.6rem,6.6vw,6rem)] font-extrabold">
            <span className="shadow-photo">Every season</span>{" "}
            <span className="gold-text drop-shadow-[0_3px_14px_rgb(0_0_0/0.7)]">has a purpose.</span>
          </h1>
        </div>
      </section>
      <section className="night border-b border-gold/25">
        <div className="wrap grid gap-10 pb-14 pt-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16 lg:pb-16">
          <div>
            <p className="max-w-2xl text-lg text-ivory/90 md:text-[1.28rem] md:leading-relaxed">
              A Sabbath congregation, a theological seminary and chaplaincy institute, and a voice on Augusta gospel radio. Led by Senior Pastor{" "}
              {pastors.heldin.name} and Apostle {pastors.sctonda.name}.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/worship" className="btn btn-gold">
                Join us this Sabbath
              </Link>
              <Link href="/seminary" className="btn btn-ghost">
                The Seminary & Chaplaincy Institute
              </Link>
            </div>
            <p className="mt-8 text-[0.8rem] text-ivory/50">Above: graduation day at the Seminary & Chaplaincy Institute, August 2026.</p>
          </div>
          <div className="rounded-2xl border border-gold/35 p-6">
            <p className="eyebrow text-[0.68rem] text-gold-hi">Every Saturday</p>
            <ul className="mt-3 divide-y divide-ivory/10">
              {sabbath.map((s) => (
                <li key={s.name} className="flex items-baseline justify-between gap-4 py-2.5">
                  <span>{s.name}</span>
                  <span className="shrink-0 font-semibold tabular-nums text-gold-hi">
                    {s.at} {s.ampm}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-[0.95rem] text-mist">
              {org.venue}, {org.street}
            </p>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- Who we are */}
      <section className="bg-paper py-20 md:py-28">
        <div className="wrap grid gap-12 md:grid-cols-[1.15fr_0.85fr] md:gap-16">
          <div data-reveal>
            <p className="eyebrow text-[0.72rem] text-crimson">Who we are</p>
            <h2 className="display mt-4 text-[clamp(2rem,4.4vw,3.4rem)]">A church, a seminary, and a voice on the air.</h2>
            <div className="prose-nsdm mt-6 max-w-2xl text-[1.12rem] leading-relaxed text-ink/85">
              <p>
                New Season Divine Ministries is a small congregation in {org.city} that keeps the Sabbath. We meet every Saturday morning to pray, open the
                Scriptures together in Sabbath School, and worship.
              </p>
              <p>
                Alongside the church is the {org.seminaryShort}, where pastors, chaplains and Kingdom leaders are trained and sent. And through Apostle
                Sctonda, the ministry is heard every weekday on WNRR Gospel radio and seen on WBPI-TV 49, after more than thirty years of ministry and media.
              </p>
            </div>
          </div>
          <figure data-reveal className="self-center border-l-2 border-gold pl-6 md:pl-8">
            <blockquote className="verse text-[clamp(1.8rem,3.2vw,2.6rem)] text-crimson">“Your season is not your final destination.”</blockquote>
            <figcaption className="mt-4 text-[0.98rem] text-muted">
              Apostle {pastors.sctonda.name}, from her teaching <em>Seven Spiritual Lessons About Seasons</em>
            </figcaption>
            <p className="mt-8 verse text-xl text-ink/80">“To every thing there is a season, and a time to every purpose under the heaven.”</p>
            <p className="eyebrow mt-2 text-[0.66rem] text-muted">Ecclesiastes 3:1</p>
          </figure>
        </div>
      </section>

      {/* ---------------------------------------------------------- The four quarters */}
      <section className="night py-20 md:py-28">
        <div className="wrap">
          <div data-reveal className="max-w-3xl">
            <p className="eyebrow text-[0.72rem] text-gold-hi">The seal</p>
            <h2 className="display mt-4 text-[clamp(2rem,4.6vw,3.6rem)]">Four quarters. One house.</h2>
            <p className="mt-5 text-[1.12rem] text-mist">
              The seal on our banners and certificates is a shield in four quarters: a cross, a globe on an open book, a dove and a crown. Each one stands for
              part of the work.
            </p>
          </div>
          <div data-reveal className="mt-14">
            <Quarters />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- Seminary */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="wrap grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div data-reveal className="framed mx-auto w-full max-w-[460px] rotate-[-1.2deg] rounded-[4px]">
            <Image
              src={photos.chaplainsFour.src}
              alt={photos.chaplainsFour.alt}
              width={photos.chaplainsFour.w}
              height={photos.chaplainsFour.h}
              sizes="(min-width: 1024px) 460px, 90vw"
              className="block h-auto w-full rounded-[2px]"
            />
          </div>
          <div data-reveal>
            <p className="eyebrow text-[0.72rem] text-crimson">NSDM Theological Seminary & Chaplaincy Institute</p>
            <h2 className="display mt-4 text-[clamp(2.1rem,4.8vw,3.8rem)]">Become a certified chaplain.</h2>
            <p className="mt-5 max-w-xl text-[1.12rem] leading-relaxed text-ink/85">
              Take your ministry into the marketplace, or start a new calling. Certificate and degree programs, accelerated and affordable, with classes online
              and in person at the Augusta campus.
            </p>
            <ul className="mt-7 grid gap-3 text-[1.02rem]">
              <li className="flex gap-3">
                <span aria-hidden className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-gold" />
                Chaplains are licensed through the {org.affiliation} Chaplains Association.
              </li>
              <li className="flex gap-3">
                <span aria-hidden className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-gold" />
                Led by the Chancellor, Apostle {pastors.sctonda.name}.
              </li>
              <li className="flex gap-3">
                <span aria-hidden className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-gold" />
                Pastors: ask about the Nehemiah Project.
              </li>
            </ul>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/seminary#enroll" className="btn btn-crimson">
                Ask about enrolling
              </Link>
              <Link href="/seminary" className="btn btn-line">
                Programs and graduates
              </Link>
            </div>
            {nominations ? (
              <Link
                href="/seminary#honorary"
                className="mt-9 flex items-start gap-4 rounded-2xl border border-gold/60 bg-paper p-5 transition-colors hover:border-crimson"
              >
                <span className="display shrink-0 rounded-lg bg-crimson px-3 py-2 text-center text-paper">
                  <span className="block text-[0.7rem] tracking-[0.2em]">OCT</span>
                  <span className="block text-2xl leading-none">31</span>
                </span>
                <span>
                  <span className="block font-semibold">Honorary doctorate submissions close {honorary.deadlineText}.</span>
                  <span className="mt-1 block text-[0.96rem] text-muted">
                    The 2026 honorees will be recognized at the Ecumenical Elevation Celebration on December 5. See what to send →
                  </span>
                </span>
              </Link>
            ) : null}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- Dec 5 */}
      {showElevation ? (
        <section className="curtain relative overflow-hidden py-20 text-ivory md:py-28">
          <div className="wrap">
            <div
              data-reveal
              className="mx-auto max-w-3xl rounded-[28px] border border-gold/70 bg-[rgb(20_6_8/0.62)] p-8 text-center shadow-[0_40px_80px_-30px_rgb(0_0_0/0.8)] md:p-14"
            >
              <p className="eyebrow text-[0.72rem] text-gold-hi">You are invited</p>
              <div className="ornament mx-auto mt-5 max-w-xs">
                <span aria-hidden className="block h-2 w-2 rotate-45 bg-gold" />
              </div>
              <h2 className="display mt-6 text-[clamp(1.9rem,4.4vw,3.3rem)]">{elevation.name}</h2>
              <p className="verse mt-4 text-2xl text-gold-hi md:text-[1.75rem]">{elevation.theme}</p>
              <div className="mt-9 grid gap-6 sm:grid-cols-3 sm:gap-4">
                <div>
                  <p className="eyebrow text-[0.66rem] text-mist">When</p>
                  <p className="mt-1.5 font-semibold">{elevation.dateText}</p>
                  <p className="mt-1 text-[0.95rem] text-mist">
                    <Fill value={elevation.time} label="Start time" />
                  </p>
                </div>
                <div>
                  <p className="eyebrow text-[0.66rem] text-mist">Where</p>
                  <p className="mt-1.5 font-semibold">{org.city}, Georgia</p>
                  <p className="mt-1 text-[0.95rem] text-mist">
                    <Fill value={elevation.place} label="Venue" />
                  </p>
                </div>
                <div>
                  <p className="eyebrow text-[0.66rem] text-mist">In</p>
                  <p className="display mt-1 text-4xl text-gold-hi">{days}</p>
                  <p className="text-[0.95rem] text-mist">{days === 1 ? "day" : "days"}</p>
                </div>
              </div>
              <Link href="/elevation" className="btn btn-gold mt-10">
                About the celebration
              </Link>
            </div>
          </div>
        </section>
      ) : null}

      {/* ---------------------------------------------------------- On the air */}
      <section className="night py-20 md:py-28">
        <div className="wrap grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div data-reveal>
            <OnAir />
            <h2 className="display mt-6 text-[clamp(2.1rem,4.8vw,3.7rem)]">Weekdays at nine, on 1380 AM and 93.3 FM.</h2>
            <p className="mt-5 max-w-xl text-[1.12rem] leading-relaxed text-mist">
              <strong className="text-ivory">{show.name}</strong> is on {show.radio} every weekday from 9 to 11 in the morning, and at noon on {show.tv}.
              Spiritual conversation, motivation, life talks, prayer and celebrity interviews, hosted by the station’s program director.
            </p>
            <RadioDial className="mt-8 w-full max-w-xl" />
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/on-air" className="btn btn-gold">
                Ways to listen and watch
              </Link>
              <Link href="/on-air#television" className="btn btn-ghost">
                Television appearances
              </Link>
            </div>
          </div>
          <div data-reveal className="grid gap-6">
            <div className="framed rounded-[4px]">
              <Image
                src={photos.sctondaStudio.src}
                alt={photos.sctondaStudio.alt}
                width={photos.sctondaStudio.w}
                height={photos.sctondaStudio.h}
                sizes="(min-width: 1024px) 480px, 90vw"
                className="block h-auto w-full rounded-[2px]"
              />
            </div>
            <a
              href={org.facebookHeldin}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid grid-cols-[8.5rem_1fr] items-center gap-4 rounded-2xl border border-ivory/12 p-3 transition-colors hover:border-gold/60 sm:grid-cols-[10rem_1fr]"
            >
              <Image
                src={photos.fifteenMinutes.src}
                alt={photos.fifteenMinutes.alt}
                width={photos.fifteenMinutes.w}
                height={photos.fifteenMinutes.h}
                sizes="160px"
                className="aspect-video h-auto w-full rounded-xl object-cover"
              />
              <span>
                <span className="eyebrow block text-[0.64rem] text-gold-hi">Live on Facebook</span>
                <span className="display mt-1 block text-lg">15 Minutes with Jesus</span>
                <span className="mt-1 block text-[0.92rem] text-mist">Pastor Heldin’s live Bible talk. A recent guest: Apostle Sctonda, on the Feast of Tabernacles. →</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- Pastors */}
      <section className="bg-paper py-20 md:py-28">
        <div className="wrap">
          <div data-reveal className="max-w-2xl">
            <p className="eyebrow text-[0.72rem] text-crimson">Our pastors</p>
            <h2 className="display mt-4 text-[clamp(2rem,4.4vw,3.4rem)]">Husband and wife, side by side.</h2>
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-12">
            {[
              {
                p: photos.heldin,
                name: pastors.heldin.name,
                role: pastors.heldin.role,
                body: "A gospel singer, songwriter and musician, originally from Lucea, Jamaica. Pastor Heldin hosts 15 Minutes with Jesus on Facebook Live, and in 2026 completed his own chaplaincy training.",
              },
              {
                p: photos.sctonda,
                name: pastors.sctonda.name,
                role: `${pastors.sctonda.role} · Chancellor`,
                body: "Chancellor and President of the Seminary & Chaplaincy Institute, and Program Director at WNRR Gospel, where she hosts the morning show. Named Gospel Announcer of the Year at the 2021 Stellar Gospel Music Awards.",
              },
            ].map((x) => (
              <article key={x.name} data-reveal className="grid gap-6 sm:grid-cols-[11rem_1fr] sm:items-start">
                <div className="framed w-44 rounded-[3px] sm:w-full">
                  <Image src={x.p.src} alt={x.p.alt} width={x.p.w} height={x.p.h} sizes="180px" className="block aspect-[3/4] h-auto w-full rounded-[2px] object-cover object-top" />
                </div>
                <div>
                  <p className="eyebrow text-[0.68rem] text-crimson">{x.role}</p>
                  <h3 className="display mt-2 text-[1.7rem]">{x.name}</h3>
                  <p className="mt-3 text-[1.04rem] leading-relaxed text-ink/80">{x.body}</p>
                </div>
              </article>
            ))}
          </div>
          <Link href="/pastors" className="btn btn-line mt-12">
            More about our pastors
          </Link>
        </div>
      </section>

      {/* ---------------------------------------------------------- Visit */}
      <section className="relative isolate overflow-hidden bg-night text-ivory">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[420px] lg:min-h-[640px]">
            <Image src={photos.sctondaPulpit.src} alt={photos.sctondaPulpit.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover object-[50%_35%]" />
          </div>
          <div className="night flex items-center">
            <div data-reveal className="w-full px-4 py-16 sm:px-10 md:py-20 lg:px-16">
              <p className="eyebrow text-[0.72rem] text-gold-hi">Visit</p>
              <h2 className="display mt-4 text-[clamp(2.1rem,4.6vw,3.6rem)]">Join us this Sabbath.</h2>
              <p className="mt-4 text-[1.1rem] text-mist">
                Saturday morning at {org.venue}. Come as you are. Refreshments are served.
              </p>
              <ol className="mt-8 grid gap-0 border-y border-ivory/12">
                {sabbath.map((s) => (
                  <li key={s.name} className="flex items-baseline justify-between gap-6 border-b border-ivory/12 py-4 last:border-b-0">
                    <span className="display text-xl md:text-2xl">{s.name}</span>
                    <span className="shrink-0 font-semibold tabular-nums text-gold-hi">
                      {s.at} {s.ampm}
                    </span>
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-[1.05rem]">
                {org.street}
                <br />
                {org.city}, {org.state}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={org.maps} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
                  Directions
                </a>
                <Link href="/contact?topic=visit" className="btn btn-ghost">
                  Tell us you’re coming
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
