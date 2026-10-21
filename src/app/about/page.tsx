import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "@/components/PageHead";
import { org } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `The mission, vision, foundational scripture, and Kingdom declaration of ${org.name}.`,
  alternates: { canonical: "/about" },
};

const nameMeaning = [
  {
    word: "New",
    meaning: "Fresh beginnings, renewed hope, restoration, and the new things God is bringing forth.",
  },
  {
    word: "Season",
    meaning: "God’s divine timing, spiritual transitions, preparation, growth, and appointed opportunities.",
  },
  {
    word: "Divine",
    meaning: "God’s authority, wisdom, guidance, supernatural purpose, and heavenly direction.",
  },
  {
    word: "Ministries",
    meaning: "Serving God and humanity through ministry, education, outreach, prayer, leadership, and community transformation.",
  },
];

export default function About() {
  return (
    <>
      <PageHead
        eyebrow="About New Season"
        title="A new season of purpose."
        lead="A Christ-centered, Kingdom-focused ministry transforming lives, restoring hope, developing spiritual leaders, and empowering people to fulfill their God-given purpose and divine mandate."
      />

      <section className="bg-paper py-20 md:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div data-reveal>
            <p className="eyebrow text-[0.72rem] text-crimson">Who we are</p>
            <h2 className="display mt-4 text-[clamp(2rem,4.6vw,3.5rem)]">Transformation, restoration, and Kingdom advancement.</h2>
            <div className="prose-nsdm mt-6 max-w-2xl text-[1.12rem] leading-relaxed text-ink/85">
              <p>
                Rooted in biblical principles, {org.name} represents a divinely appointed season of spiritual renewal, fresh beginnings, restoration,
                growth, and Kingdom advancement.
              </p>
              <p>
                We believe God has appointed a time and season for every purpose under heaven. Through prayer, worship, biblical education, leadership
                development, chaplaincy training, community outreach, and spiritual mentorship, we equip people to move from where they are into what God
                has called them to become.
              </p>
            </div>
          </div>
          <figure data-reveal className="self-center border-l-2 border-gold pl-6 md:pl-8">
            <blockquote className="verse text-[clamp(1.7rem,3vw,2.45rem)] text-crimson">
              “Behold, I will do a new thing; now it shall spring forth; shall ye not know it? I will even make a way in the wilderness, and rivers in the
              desert.”
            </blockquote>
            <figcaption className="eyebrow mt-4 text-[0.68rem] text-muted">Isaiah 43:19 · KJV</figcaption>
          </figure>
        </div>
      </section>

      <section className="night py-20 md:py-28">
        <div className="wrap grid gap-6 md:grid-cols-2">
          <article data-reveal className="rounded-2xl border border-gold/35 p-7 md:p-9">
            <p className="eyebrow text-[0.68rem] text-gold-hi">Our mission</p>
            <h2 className="display mt-3 text-3xl">Educate. Equip. Empower.</h2>
            <p className="mt-5 text-[1.08rem] leading-relaxed text-mist">
              To educate, equip, and empower Kingdom leaders to fulfill their Kingdom mandate through biblical teaching, theological education, spiritual
              development, compassionate service, and transformational leadership.
            </p>
          </article>
          <article data-reveal className="rounded-2xl border border-gold/35 p-7 md:p-9">
            <p className="eyebrow text-[0.68rem] text-gold-hi">Our vision</p>
            <h2 className="display mt-3 text-3xl">Leaders who make an impact.</h2>
            <p className="mt-5 text-[1.08rem] leading-relaxed text-mist">
              To develop a global community of spiritually mature, academically equipped, and purpose-driven Kingdom leaders who positively impact
              churches, families, communities, and nations through faith, education, service, and leadership.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-28">
        <div className="wrap">
          <div data-reveal className="max-w-3xl">
            <p className="eyebrow text-[0.72rem] text-crimson">The spiritual meaning of our name</p>
            <h2 className="display mt-4 text-[clamp(2rem,4.6vw,3.5rem)]">Every word carries the assignment.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {nameMeaning.map((item) => (
              <article key={item.word} data-reveal className="card p-7 md:p-8">
                <h3 className="display text-2xl text-crimson">{item.word}</h3>
                <p className="mt-3 text-[1.05rem] leading-relaxed text-ink/80">{item.meaning}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="curtain py-20 text-ivory md:py-28">
        <div data-reveal className="wrap text-center">
          <p className="eyebrow text-[0.72rem] text-gold-hi">Our Kingdom declaration</p>
          <p className="mx-auto mt-5 max-w-3xl text-[1.08rem] leading-relaxed text-mist">
            {org.name} is more than a ministry name. It is a prophetic declaration that God is bringing His people into a new season of purpose,
            preparation, positioning, and Kingdom productivity.
          </p>
          <h2 className="display mx-auto mt-5 max-w-4xl text-[clamp(2rem,5vw,4rem)]">New Season. New Vision. New Opportunities. New Levels of Kingdom Impact.</h2>
          <p className="verse mx-auto mt-8 max-w-3xl text-[clamp(1.45rem,3vw,2.2rem)] text-gold-hi">
            “Your past has prepared you, your present is positioning you, and your new season is calling you into purpose!”
          </p>
          <p className="mx-auto mt-7 max-w-3xl text-[1.08rem] leading-relaxed text-mist">
            Through the {org.seminaryShort}, we are raising leaders who are educated, anointed, equipped, compassionate, and prepared to make a lasting
            Kingdom impact.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link href="/seminary" className="btn btn-gold">Explore the Seminary</Link>
            <Link href="/contact" className="btn btn-ghost">Contact the Ministry</Link>
          </div>
        </div>
      </section>
    </>
  );
}
