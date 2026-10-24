import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHead from "@/components/PageHead";
import { photos } from "@/lib/photos";
import { org, pastors, show } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Pastors",
  description: `Senior Pastor ${pastors.heldin.name} and Apostle ${pastors.sctonda.name}, who lead ${org.name} and its Seminary & Chaplaincy Institute in ${org.city}, Georgia.`,
  alternates: { canonical: "/pastors" },
};

/** From Apostle Sctonda's teaching graphic, "7 Spiritual Lessons About Seasons". */
const lessons = [
  { title: "Every season has a purpose", ref: "Ecclesiastes 3:1", verse: "To every thing there is a season, and a time to every purpose under the heaven.", note: "God allows different seasons to develop our faith, shape our character, and prepare us for greater assignments." },
  { title: "Every season requires discernment", ref: "1 Chronicles 12:32", verse: "…of the children of Issachar, which were men that had understanding of the times, to know what Israel ought to do…", note: "Seek God’s wisdom to understand the season you are in, and respond according to His direction." },
  { title: "Every season requires faith", ref: "Hebrews 11:6", verse: "But without faith it is impossible to please him: for he that cometh to God must believe…", note: "Faith helps us trust God even when we cannot see the outcome. Believe, obey and keep moving forward." },
  { title: "Every season offers an opportunity for growth", ref: "James 1:3–4", verse: "…the trying of your faith worketh patience.", note: "Challenges and trials can strengthen us, develop patience and produce spiritual maturity." },
  { title: "Every season requires patience", ref: "Galatians 6:9", verse: "And let us not be weary in well doing: for in due season we shall reap, if we faint not.", note: "Do not give up. Stay faithful. The harvest will come in due season." },
  { title: "Every season reveals God’s faithfulness", ref: "Lamentations 3:22–23", verse: "It is of the LORD’s mercies that we are not consumed, because his compassions fail not. They are new every morning…", note: "No matter the season, God’s grace, mercy and provisions are new every day." },
  { title: "Every season is subject to God’s sovereignty", ref: "Daniel 2:21", verse: "And he changeth the times and the seasons: he removeth kings, and setteth up kings…", note: "God is in control of all times and seasons. Trust His timing and His plan for your life." },
];

export default function Pastors() {
  return (
    <>
      <section className="bg-crimson py-8 md:py-12">
        <div className="wrap">
          <p className="eyebrow mb-5 text-gold-hi">Our pastors</p>
          <Image src="/photos/e6a1ece5-20df-49b5-91fc-1b717cf7d3cd.png" alt="Apostle Dr. Sctonda Kelly Gordon and Senior Pastor Dr. Heldin C. Gordon — Husband and Wife, Side by Side" width={1343} height={1119} priority sizes="(min-width: 1024px) 1100px, 100vw" className="mx-auto h-auto w-full max-w-5xl rounded-xl" />
          <p className="mt-5 text-center text-white">{pastors.heldin.name} and {pastors.sctonda.name} lead {org.name} together.</p>
        </div>
      </section>

      {/* ---------------------------------------------------------- Pastor Heldin */}
      <section className="bg-paper py-20 md:py-28">
        <div className="wrap grid items-start gap-12 md:grid-cols-[0.75fr_1.25fr] md:gap-16">
          <div data-reveal className="framed mx-auto w-full max-w-[360px] rotate-[-1deg] rounded-[4px]">
            <Image src={photos.heldin.src} alt={photos.heldin.alt} width={photos.heldin.w} height={photos.heldin.h} sizes="360px" className="block h-auto w-full rounded-[2px]" />
          </div>
          <div data-reveal>
            <p className="eyebrow text-[0.72rem] text-crimson">{pastors.heldin.role}</p>
            <h2 className="display mt-3 text-[clamp(2rem,4.4vw,3.3rem)]">{pastors.heldin.name}</h2>
            <div className="prose-nsdm mt-6 max-w-2xl text-[1.1rem] leading-relaxed text-ink/85">
              <p>
                Pastor Heldin Carlton Gordon came to Augusta from Lucea, on the northwest coast of Jamaica. He is a gospel artist, singer, songwriter and
                musician; in his own words, music is his passion.
              </p>
              <p>
                On Facebook Live he hosts <em>15 Minutes with Jesus</em>, a short Bible talk, sometimes with his wife as his guest. In 2026 he completed his
                own chaplaincy training, with a certificate from the Institute and Higher Ground Ministries, the Chaplain Ministry Program of the Disciples of
                Christ Bible College & Seminary, and a chaplain’s license from the {org.affiliation} Chaplains Association.
              </p>
            </div>
            <a href={org.facebookHeldin} target="_blank" rel="noopener noreferrer" className="btn btn-line mt-8">
              15 Minutes with Jesus on Facebook
            </a>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- Apostle Sctonda */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="wrap grid items-start gap-12 md:grid-cols-[1.25fr_0.75fr] md:gap-16">
          <div data-reveal className="md:order-1">
            <p className="eyebrow text-[0.72rem] text-crimson">
              {pastors.sctonda.role} · {pastors.sctonda.seminaryRole}
            </p>
            <h2 className="display mt-3 text-[clamp(2rem,4.4vw,3.3rem)]">{pastors.sctonda.name}</h2>
            <div className="prose-nsdm mt-6 max-w-2xl text-[1.1rem] leading-relaxed text-ink/85">
              <p>
                Apostle Sctonda oversees New Season Divine Ministries and serves as Chancellor and President of its {org.seminaryShort}, where she trains
                pastors, chaplains and Kingdom leaders.
              </p>
              <p>
                She is also the program director and an on-air personality at {show.radio}, where she hosts {show.name} every weekday morning, also seen at
                noon on {show.tv}. In 2021 the Stellar Gospel Music Awards named her Gospel Announcer of the Year, and in 2024 a two-day celebration in the
                CSRA honored her 32 years of ministry and media.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/on-air" className="btn btn-crimson">
                The show
              </Link>
              <Link href="/seminary" className="btn btn-line">
                The Seminary
              </Link>
            </div>
          </div>
          <div data-reveal className="framed mx-auto w-full max-w-[360px] rotate-[1deg] rounded-[4px] md:order-2">
            <Image src="/photos/img-2293.jpeg" alt="Apostle Dr. Sctonda Kelly Gordon" width={1024} height={1024} sizes="360px" className="block h-auto w-full rounded-[2px]" />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- Seasons */}
      <section className="night py-20 md:py-28">
        <div className="wrap">
          <div data-reveal className="max-w-3xl">
            <p className="eyebrow text-[0.72rem] text-gold-hi">A teaching by Apostle Sctonda</p>
            <h2 className="display mt-4 text-[clamp(2rem,4.6vw,3.6rem)]">Seven spiritual lessons about seasons.</h2>
            <p className="mt-5 text-[1.12rem] text-mist">Every season has a purpose in God’s divine plan.</p>
          </div>
          <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-gold/25 bg-gold/25 md:grid-cols-2">
            {lessons.map((l, i) => (
              <li key={l.title} data-reveal className={`bg-night p-7 md:p-9 ${i === lessons.length - 1 ? "md:col-span-2" : ""}`}>
                <div className="flex items-baseline gap-4">
                  <span className="display text-4xl text-gold">{i + 1}</span>
                  <h3 className="display text-[1.35rem] md:text-[1.5rem]">{l.title}</h3>
                </div>
                <p className="verse mt-4 text-[1.35rem] text-gold-hi">“{l.verse}”</p>
                <p className="eyebrow mt-2 text-[0.62rem] text-mist">{l.ref} (KJV)</p>
                <p className="mt-4 text-[1rem] leading-relaxed text-mist">{l.note}</p>
              </li>
            ))}
          </ol>
          <p data-reveal className="display mt-12 text-center text-[clamp(1.6rem,3.4vw,2.6rem)] text-gold-hi">
            Your season is not your final destination.
          </p>
          <p data-reveal className="mx-auto mt-3 max-w-2xl text-center text-[1.05rem] text-mist">
            What you are going through is a part of the process that God is using to position you for what He has next.
          </p>
        </div>
      </section>
    </>
  );
}
