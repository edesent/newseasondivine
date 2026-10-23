import type { Metadata } from "next";
import Link from "next/link";
import { Blank } from "@/components/Blank";
import KenyaMap from "@/components/KenyaMap";
import PageHead from "@/components/PageHead";
import { org } from "@/lib/site";

export const metadata: Metadata = {
  title: "Outreach & Missions",
  description: `${org.name} hosts family enrichment workshops, feeds families in ${org.city}, and helps its missionary department carry Bibles to Kenya.`,
  alternates: { canonical: "/outreach" },
};

export default function Outreach() {
  return (
    <>
      <PageHead
        eyebrow="Outreach & missions"
        title="At home in Augusta, and as far as Kenya."
        lead="We host family enrichment workshops, feed families through our outreach, and help our missionary department carry Bibles to Kenya."
      />

      {/* ---------------------------------------------------------- Families */}
      <section className="bg-paper py-20 md:py-28">
        <div className="wrap">
          <div data-reveal className="max-w-2xl">
            <p className="eyebrow text-[0.72rem] text-crimson">The dove · at home</p>
            <h2 className="display mt-4 text-[clamp(2rem,4.4vw,3.3rem)]">Families first.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <article data-reveal className="card p-7 md:p-9">
              <h3 className="display text-[1.6rem]">Family enrichment workshops</h3>
              <p className="mt-3 text-[1.04rem] leading-relaxed text-ink/80">
                Workshops that strengthen the home, open to the families of our church and our city.
              </p>
              <p className="mt-6 text-[0.98rem]">
                <span className="eyebrow mr-2 text-[0.64rem] text-muted">Next workshop</span>
                <Blank>Date, time and topic</Blank>
              </p>
            </article>
            <article data-reveal className="card p-7 md:p-9">
              <h3 className="display text-[1.6rem]">Feeding families</h3>
              <p className="mt-3 text-[1.04rem] leading-relaxed text-ink/80">
                Through our outreach we put food on the table for Augusta families who need it. If that’s you, or someone you love, please reach out.
              </p>
              <p className="mt-6 text-[0.98rem]">
                <span className="eyebrow mr-2 text-[0.64rem] text-muted">How to ask</span>
                <Blank>When and where food is given out</Blank>
              </p>
            </article>
          </div>
          <div data-reveal className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-crimson">
              Ask for help, or offer it
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- Kenya */}
      <section id="kenya" className="night scroll-mt-24 overflow-hidden py-20 md:py-28">
        <div className="wrap grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div data-reveal>
            <p className="eyebrow text-[0.72rem] text-gold-hi">The globe on the book · abroad</p>
            <h2 className="display mt-4 text-[clamp(2.1rem,4.8vw,3.7rem)]">Bibles for Kenya.</h2>
            <div className="prose-nsdm mt-6 max-w-xl text-[1.12rem] leading-relaxed text-mist">
              <p>
                Our missionary department travels to Kenya, nearly 8,000 miles from Augusta, with Bibles to give out. Every trip, we want to carry more.
              </p>
              <p>
                You can help fill the suitcases. Give online through Tithely, or through Cash App with <strong className="text-ivory">“Kenya Bibles”</strong> in the note.
              </p>
            </div>
            <figure className="mt-8 border-l-2 border-gold pl-5">
              <blockquote className="verse text-2xl text-gold-hi">“Go ye into all the world, and preach the gospel to every creature.”</blockquote>
              <figcaption className="eyebrow mt-2 text-[0.64rem] text-mist">Mark 16:15</figcaption>
            </figure>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/give" className="btn btn-gold">
                Give toward Bibles
              </Link>
              <Link href="/contact?topic=kenya" className="btn btn-ghost">
                Ask about the next trip
              </Link>
            </div>
          </div>
          <div data-reveal className="relative mx-auto w-full max-w-[380px]">
            <KenyaMap className="w-full" />
          </div>
        </div>
        <div className="wrap mt-16">
          <div data-reveal className="rounded-2xl border border-dashed border-gold/50 p-6 text-center text-mist md:p-8">
            <p className="display text-xl text-ivory">Photos from Kenya and from outreach days go here.</p>
            <p className="mt-2 text-[0.98rem]">Send us your pictures from the trips and the workshops, and we’ll build this into a gallery.</p>
          </div>
        </div>
      </section>
    </>
  );
}
