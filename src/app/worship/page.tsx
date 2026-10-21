import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/Forms";
import { Obf } from "@/components/Obf";
import PageHead from "@/components/PageHead";
import { photos } from "@/lib/photos";
import { org, pastors, sabbath } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sabbath Worship",
  description: `Every Saturday at ${org.venue}, ${org.street}, ${org.city}: intercessory prayer at 10, Sabbath School at 10:30, praise, worship and the Word at 10:50.`,
  alternates: { canonical: "/worship" },
};

const what: Record<string, string> = {
  "Intercessory Prayer": "We begin by praying for others: our families, our city, and anyone who has asked for prayer.",
  "Sabbath School": "An open-Bible study before the service. Bring your Bible and your questions.",
  "Praise, Worship & Word": "Singing and worship, and then the preached Word.",
};

export default function Worship() {
  return (
    <>
      <PageHead
        eyebrow="Sabbath worship"
        title="Saturday is our Sabbath."
        lead={`Every Saturday morning at ${org.venue}, ${org.street}, ${org.city}. Refreshments are served.`}
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={org.maps} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
            Directions
          </a>
          <a href="#visit" className="btn btn-ghost">
            Tell us you’re coming
          </a>
        </div>
      </PageHead>

      <section className="bg-paper py-20 md:py-28">
        <div className="wrap">
          <div data-reveal className="max-w-2xl">
            <p className="eyebrow text-[0.72rem] text-crimson">The morning</p>
            <h2 className="display mt-4 text-[clamp(2rem,4.4vw,3.3rem)]">Three parts, one morning.</h2>
          </div>
          <ol className="mt-12 grid gap-5 md:grid-cols-3">
            {sabbath.map((s, i) => (
              <li key={s.name} data-reveal className="card relative overflow-hidden p-7 md:p-8">
                <span aria-hidden className="display absolute -right-2 -top-6 text-[7rem] leading-none text-gold/15">
                  {i + 1}
                </span>
                <p className="display text-[2.6rem] leading-none text-crimson">
                  {s.at}
                  <span className="ml-1.5 align-top text-base tracking-[0.1em]">{s.ampm}</span>
                </p>
                <h3 className="display mt-5 text-[1.5rem]">{s.name}</h3>
                <p className="mt-3 text-[1.02rem] leading-relaxed text-ink/80">{what[s.name]}</p>
              </li>
            ))}
          </ol>
          <figure data-reveal className="mx-auto mt-16 max-w-3xl text-center">
            <blockquote className="verse text-[clamp(1.7rem,3vw,2.4rem)] text-ink/85">“Remember the sabbath day, to keep it holy.”</blockquote>
            <figcaption className="eyebrow mt-3 text-[0.68rem] text-muted">Exodus 20:8</figcaption>
          </figure>
          <figure data-reveal className="framed mx-auto mt-16 max-w-xl rounded-[4px]">
            <Image
              src={photos.familyFriends.src}
              alt={photos.familyFriends.alt}
              width={photos.familyFriends.w}
              height={photos.familyFriends.h}
              sizes="(min-width: 768px) 560px, 92vw"
              className="block h-auto w-full rounded-[2px]"
            />
          </figure>
        </div>
      </section>

      <section className="night py-20 md:py-28">
        <div className="wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div data-reveal className="framed rounded-[4px]">
            <Image
              src={photos.fifteenMinutes.src}
              alt={photos.fifteenMinutes.alt}
              width={photos.fifteenMinutes.w}
              height={photos.fifteenMinutes.h}
              sizes="(min-width: 1024px) 560px, 92vw"
              className="block h-auto w-full rounded-[2px]"
            />
          </div>
          <div data-reveal>
            <p className="eyebrow text-[0.72rem] text-gold-hi">During the week</p>
            <h2 className="display mt-4 text-[clamp(2rem,4.4vw,3.2rem)]">15 Minutes with Jesus</h2>
            <p className="mt-5 text-[1.1rem] leading-relaxed text-mist">
              {pastors.heldin.first} goes live on Facebook with a short Bible talk. Recent episodes: <em>The Glory of God</em> from John 11:4, and a
              conversation with Apostle Sctonda about the Feast of Tabernacles and the feasts God appointed.
            </p>
            <a href={org.facebookHeldin} target="_blank" rel="noopener noreferrer" className="btn btn-gold mt-8">
              Watch on Facebook
            </a>
          </div>
        </div>
      </section>

      <section id="visit" className="scroll-mt-24 bg-ivory py-20 md:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div data-reveal>
            <p className="eyebrow text-[0.72rem] text-crimson">Plan a visit</p>
            <h2 className="display mt-4 text-[clamp(2rem,4.4vw,3.2rem)]">We’ll look for you.</h2>
            <p className="mt-5 text-[1.1rem] leading-relaxed text-ink/80">
              Tell us you’re coming and someone will be watching for you at the door. Or call the ministry line and ask for {pastors.heldin.first} or{" "}
              {pastors.sctonda.first}.
            </p>
            <div className="mt-8 grid gap-4 text-[1.04rem]">
              <p>
                <span className="eyebrow block text-[0.66rem] text-muted">Where</span>
                {org.venue}
                <br />
                <a href={org.maps} target="_blank" rel="noopener noreferrer" className="font-semibold text-crimson underline-offset-4 hover:underline">
                  {org.street}, {org.city}, {org.stateCode}
                </a>
              </p>
              <p>
                <span className="eyebrow block text-[0.66rem] text-muted">Call</span>
                <Obf b64={org.phoneB64} className="font-semibold text-crimson hover:underline" />
              </p>
              <p>
                <span className="eyebrow block text-[0.66rem] text-muted">Need prayer instead?</span>
                <Link href="/contact?topic=prayer" className="font-semibold text-crimson hover:underline">
                  Send a prayer request
                </Link>
              </p>
            </div>
          </div>
          <div data-reveal className="card p-6 md:p-9">
            <ContactForm topic="Plan a Sabbath visit" />
          </div>
        </div>
      </section>
    </>
  );
}
