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
          <div data-reveal>
            <p className="eyebrow text-[0.72rem] text-gold-hi">International ministry</p>
            <h3 className="display mt-3 text-3xl text-ivory">Kenya Ministry Photo Gallery</h3>
            <p className="mt-3 max-w-2xl text-mist">Moments from our ministry work and fellowship in Kenya.</p>
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
              <a href="/photos/img-0298.jpeg" target="_blank" rel="noopener noreferrer" className="group block overflow-hidden rounded-xl border border-gold/30" aria-label="View Kenya ministry photo 1">
                <img src="/photos/img-0298.jpeg" alt="NSDM Kenya ministry photo 1" loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </a>
              <a href="/photos/img-0307.jpeg" target="_blank" rel="noopener noreferrer" className="group block overflow-hidden rounded-xl border border-gold/30" aria-label="View Kenya ministry photo 2">
                <img src="/photos/img-0307.jpeg" alt="NSDM Kenya ministry photo 2" loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </a>
              <a href="/photos/img-2262.jpeg" target="_blank" rel="noopener noreferrer" className="group block overflow-hidden rounded-xl border border-gold/30" aria-label="View Kenya ministry photo 3">
                <img src="/photos/img-2262.jpeg" alt="NSDM Kenya ministry photo 3" loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </a>
              <a href="/photos/img-2263.jpeg" target="_blank" rel="noopener noreferrer" className="group block overflow-hidden rounded-xl border border-gold/30" aria-label="View Kenya ministry photo 4">
                <img src="/photos/img-2263.jpeg" alt="NSDM Kenya ministry photo 4" loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </a>
              <a href="/photos/img-2264.jpeg" target="_blank" rel="noopener noreferrer" className="group block overflow-hidden rounded-xl border border-gold/30" aria-label="View Kenya ministry photo 5">
                <img src="/photos/img-2264.jpeg" alt="NSDM Kenya ministry photo 5" loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </a>
              <a href="/photos/img-2265.jpeg" target="_blank" rel="noopener noreferrer" className="group block overflow-hidden rounded-xl border border-gold/30" aria-label="View Kenya ministry photo 6">
                <img src="/photos/img-2265.jpeg" alt="NSDM Kenya ministry photo 6" loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </a>
              <a href="/photos/img-2266.jpeg" target="_blank" rel="noopener noreferrer" className="group block overflow-hidden rounded-xl border border-gold/30" aria-label="View Kenya ministry photo 7">
                <img src="/photos/img-2266.jpeg" alt="NSDM Kenya ministry photo 7" loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </a>
              <a href="/photos/8beacfd9-1f49-4eb0-b10b-ef8654850b03.jpeg" target="_blank" rel="noopener noreferrer" className="group block overflow-hidden rounded-xl border border-gold/30" aria-label="View Kenya ministry photo 8">
                <img src="/photos/8beacfd9-1f49-4eb0-b10b-ef8654850b03.jpeg" alt="NSDM Kenya ministry photo 8" loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </a>
              <a href="/photos/f2b3714a-5500-4e66-a8ed-fec9f28e16e1.jpeg" target="_blank" rel="noopener noreferrer" className="group block overflow-hidden rounded-xl border border-gold/30" aria-label="View Kenya ministry photo 9">
                <img src="/photos/f2b3714a-5500-4e66-a8ed-fec9f28e16e1.jpeg" alt="NSDM Kenya ministry photo 9" loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </a>
              <a href="/photos/img-0267.jpeg" target="_blank" rel="noopener noreferrer" className="group block overflow-hidden rounded-xl border border-gold/30" aria-label="View Kenya ministry photo 10">
                <img src="/photos/img-0267.jpeg" alt="NSDM Kenya ministry photo 10" loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </a>
              <a href="/photos/img-0306.jpeg" target="_blank" rel="noopener noreferrer" className="group block overflow-hidden rounded-xl border border-gold/30" aria-label="View Kenya ministry photo 11">
                <img src="/photos/img-0306.jpeg" alt="NSDM Kenya ministry photo 11" loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </a>
              <a href="/photos/d462b440-2207-4ee2-8aba-afc750ab0134.jpeg" target="_blank" rel="noopener noreferrer" className="group block overflow-hidden rounded-xl border border-gold/30" aria-label="View Kenya ministry photo 12">
                <img src="/photos/d462b440-2207-4ee2-8aba-afc750ab0134.jpeg" alt="NSDM Kenya ministry photo 12" loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
