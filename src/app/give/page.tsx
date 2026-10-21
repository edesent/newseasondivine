import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "@/components/PageHead";
import { org, sabbath } from "@/lib/site";

export const metadata: Metadata = {
  title: "Give",
  description: `Give securely to ${org.name} through Tithely or Cash App: support worship, outreach, missions, and the Seminary.`,
  alternates: { canonical: "/give" },
};

const notes = [
  { note: "Tithes & offerings", what: "The Sabbath ministry of the church" },
  { note: "Kenya Bibles", what: "Bibles for the missionary department to give out in Kenya" },
  { note: "Outreach", what: "Food for families and the family enrichment workshops" },
  { note: "Seminary", what: "The Theological Seminary & Chaplaincy Institute" },
];

export default function Give() {
  return (
    <>
      <PageHead eyebrow="Give" title="Sow into a new season." lead="Give securely online through Tithely, through Cash App, or in person on the Sabbath." />

      <section className="night border-b border-gold/30 py-14 md:py-16">
        <div data-reveal className="wrap flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="eyebrow text-[0.7rem] text-gold-hi">Secure online giving</p>
            <h2 className="display mt-3 text-[clamp(1.8rem,4vw,2.8rem)]">Give through Tithely.</h2>
            <p className="mt-3 max-w-2xl text-[1.05rem] text-mist">Use the ministry’s secure Tithely form for a one-time gift or recurring giving.</p>
          </div>
          <a href={org.tithelyUrl} target="_blank" rel="noopener noreferrer" className="btn btn-gold shrink-0">
            Open secure giving
          </a>
        </div>
      </section>

      <section className="bg-ivory py-16 md:py-20">
        <div className="wrap">
          <div data-reveal className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-[0_24px_60px_-36px_rgb(20_12_12/0.45)]">
            <iframe
              src={org.tithelyUrl}
              title={`${org.name} secure Tithely giving form`}
              loading="lazy"
              className="h-[780px] w-full border-0 md:h-[840px]"
              allow="payment"
            />
          </div>
          <p className="mx-auto mt-5 max-w-3xl text-center text-[0.94rem] text-muted">
            If the form does not load on your device, use the “Open secure giving” button above.
          </p>
        </div>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <div className="wrap grid items-start gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div data-reveal className="card mx-auto w-full min-w-0 max-w-md p-6 text-center sm:p-8 md:p-10">
            <p className="eyebrow text-[0.7rem] text-crimson">Cash App</p>
            {/* In the sans, not Cinzel: Cinzel has no lowercase, and a cashtag should read as typed. */}
            <p className="mt-3 break-all text-[clamp(1.7rem,7vw,2.3rem)] font-bold tracking-tight">${org.cashTag}</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/cashapp-qr.svg"
              alt={`QR code that opens cash.app/$${org.cashTag}`}
              width={220}
              height={220}
              className="mx-auto mt-6 h-[220px] w-[220px] rounded-xl border border-ink/10 bg-white p-2"
            />
            <p className="mt-4 text-[0.95rem] text-muted">Scan with your phone’s camera, or tap below.</p>
            <a href={org.cashUrl} target="_blank" rel="noopener noreferrer" className="btn btn-crimson mt-6">
              Open Cash App
            </a>
          </div>

          <div data-reveal className="min-w-0">
            <h2 className="display text-[clamp(1.9rem,4vw,3rem)]">Say where it should go.</h2>
            <p className="mt-4 max-w-xl text-[1.1rem] leading-relaxed text-ink/80">
              Cash App lets you add a note to every payment. Write one of these and we’ll put your gift there.
            </p>
            <ul className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
              {notes.map((n) => (
                <li key={n.note} className="grid gap-1 py-4 sm:grid-cols-[12rem_1fr] sm:gap-6">
                  <span className="font-semibold text-crimson">“{n.note}”</span>
                  <span className="text-ink/80">{n.what}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-[1.04rem] text-ink/80">
              Or give in person any Saturday, from {sabbath[0].at} {sabbath[0].ampm} at {org.venue}, {org.street}
            </p>
            <figure className="mt-10 border-l-2 border-gold pl-5">
              <blockquote className="verse text-2xl text-ink/85">“And let us not be weary in well doing: for in due season we shall reap, if we faint not.”</blockquote>
              <figcaption className="eyebrow mt-2 text-[0.64rem] text-muted">Galatians 6:9</figcaption>
            </figure>
            <Link href="/outreach#kenya" className="btn btn-line mt-10">
              About the Kenya Bibles
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
