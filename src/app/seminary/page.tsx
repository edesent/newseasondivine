import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Fill } from "@/components/Blank";
import { EnrollForm } from "@/components/Forms";
import { Obf } from "@/components/Obf";
import PageHead from "@/components/PageHead";
import { photos } from "@/lib/photos";
import { elevation, elevationAhead, honorary, honoraryFields, honoraryOpen, honoraryPackage, org, pastors, programs } from "@/lib/site";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Seminary & Chaplaincy Institute",
  description: `The ${org.seminary}: chaplaincy certificates and degree programs, online and in person in Augusta, Georgia, and the NSDM Honorary Doctoral Degree Program.`,
  alternates: { canonical: "/seminary" },
};

function Fact({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-ink/12 pt-4">
      <p className="eyebrow text-[0.66rem] text-muted">{label}</p>
      <p className="mt-1.5 text-[1.06rem] font-semibold">{children}</p>
    </div>
  );
}

export default function Seminary() {
  const open = honoraryOpen();
  const celebration = elevationAhead();

  return (
    <>
      <PageHead
        eyebrow="NSDM Theological Seminary & Chaplaincy Institute"
        title="Training Kingdom leaders."
        lead={`Educating, equipping and empowering Kingdom leaders to fulfill their Kingdom mandate. Certificate and degree programs in ministry and chaplaincy, online and in person in Augusta, under the Chancellor, Apostle ${pastors.sctonda.name}.`}
        photo={photos.graduationLine}
        position="50% 40%"
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#enroll" className="btn btn-gold">
            Ask about enrolling
          </a>
          {open ? (
            <a href="#honorary" className="btn btn-ghost">
              Honorary doctorate · closes Oct 31
            </a>
          ) : null}
        </div>
      </PageHead>

      <section aria-label="Seminary and Chaplaincy Fall Enrollment Flyer" className="bg-paper py-8 md:py-12">
        <div className="wrap mx-auto max-w-4xl">
          <Image src="/images/img-2378.jpeg" alt="New Season Divine Ministries Theological Seminary and Chaplaincy Institute fall enrollment schedule, online certificate and degree programs" width={1024} height={1536} priority sizes="(min-width: 1024px) 896px, 100vw" className="mx-auto block h-auto w-full rounded-lg" />
        </div>
      </section>

      {/* ---------------------------------------------------------- Chaplaincy */}
      <section className="bg-paper py-20 md:py-28">
        <div className="wrap grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div data-reveal>
            <p className="eyebrow text-[0.72rem] text-crimson">Chaplaincy</p>
            <h2 className="display mt-4 text-[clamp(2rem,4.6vw,3.5rem)]">Become a certified chaplain.</h2>
            <div className="prose-nsdm mt-6 max-w-2xl text-[1.12rem] leading-relaxed text-ink/85">
              <p>
                A chaplain carries the ministry out of the sanctuary and into the places people actually are. The Institute trains men and women to do that,
                whether you are a pastor widening your reach or someone starting a new calling.
              </p>
              <p>
                Classes are accelerated and affordable, and you can take them online or in person at the Augusta campus. Chaplains are licensed through the{" "}
                {org.affiliation} Chaplains Association.
              </p>
            </div>
            <div className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2">
              <Fact label="Classes">Online, or in person in Augusta</Fact>
              <Fact label="Programs">
                <Fill value={programs.list} label="Certificate & degree programs offered" />
              </Fact>
              <Fact label="Tuition">
                <Fill value={programs.tuition} label="Cost per program" />
              </Fact>
              <Fact label="Next start">
                <Fill value={programs.nextTerm} label="Next class start date" />
              </Fact>
            </div>
            <p className="mt-10 text-[1.02rem] text-ink/80">
              Questions? Call the Chancellor’s office at <Obf b64={org.phoneB64} className="font-semibold text-crimson hover:underline" />.
            </p>
          </div>
          <div data-reveal className="grid content-start gap-6">
            <div className="framed rotate-[-1deg] rounded-[4px]">
              <Image
                src={photos.chaplaincyEnrollment.src}
                alt={photos.chaplaincyEnrollment.alt}
                width={photos.chaplaincyEnrollment.w}
                height={photos.chaplaincyEnrollment.h}
                sizes="(min-width: 1024px) 440px, 90vw"
                className="block h-auto w-full rounded-[2px]"
              />
            </div>
            <p className="text-[0.92rem] text-muted">
              The six-month Certified Chaplain Program meets Monday nights from 7 to 9 PM, with the fall class beginning September 14, 2026.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- Graduates */}
      <section className="night py-20 md:py-28">
        <div className="wrap">
          <div data-reveal className="max-w-3xl">
            <p className="eyebrow text-[0.72rem] text-gold-hi">Graduation day · August 2026</p>
            <h2 className="display mt-4 text-[clamp(2rem,4.6vw,3.5rem)]">Sent out in gold stoles.</h2>
            <p className="mt-5 text-[1.1rem] text-mist">
              The Institute’s most recent graduates, with their diplomas and certificates, in front of the banner: “Go ye into all the world, and preach the
              gospel to every creature.”
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:h-[640px] md:grid-cols-[1.6fr_1fr] md:grid-rows-2">
            <div data-reveal className="relative aspect-[4/3] overflow-hidden rounded-2xl md:row-span-2 md:aspect-auto">
              <Image src={photos.graduationSanctuary.src} alt={photos.graduationSanctuary.alt} fill sizes="(min-width: 768px) 62vw, 100vw" className="object-cover" />
            </div>
            <div data-reveal className="relative aspect-[4/3] overflow-hidden rounded-2xl md:aspect-auto">
              <Image src={photos.chaplainsFour.src} alt={photos.chaplainsFour.alt} fill sizes="(min-width: 768px) 38vw, 100vw" className="object-cover object-[50%_35%]" />
            </div>
            <div data-reveal className="relative aspect-[4/3] overflow-hidden rounded-2xl md:aspect-auto">
              <Image src={photos.stole.src} alt={photos.stole.alt} fill sizes="(min-width: 768px) 38vw, 100vw" className="object-cover object-[50%_55%]" />
            </div>
          </div>
          {celebration ? (
            <p data-reveal className="mt-10 text-[1.05rem] text-mist">
              The next graduates walk on {elevation.dateText.replace("Saturday, ", "")} at the{" "}
              <Link href="/elevation" className="font-semibold text-gold-hi underline-offset-4 hover:underline">
                {elevation.name}
              </Link>
              .
            </p>
          ) : null}
        </div>
      </section>

      {/* ---------------------------------------------------------- Honorary doctorate */}
      <section id="honorary" className="scroll-mt-24 bg-ivory py-20 md:py-28">
        <div className="wrap">
          <div data-reveal className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="eyebrow text-[0.72rem] text-crimson">NSDM Honorary Doctoral Degree Program</p>
              <h2 className="display mt-4 text-[clamp(2rem,4.6vw,3.5rem)]">Turn your life’s work into a legacy.</h2>
              <p className="mt-5 max-w-2xl text-[1.12rem] leading-relaxed text-ink/85">
                The program recognizes people whose lifetime of leadership and service has made a lasting difference: in ministry, education, community
                service, the arts, and other areas that advance the Kingdom of God. Honorees are recognized at the Ecumenical Elevation Celebration.
              </p>
            </div>
            <div className={`rounded-2xl p-6 ${open ? "bg-crimson text-paper" : "border border-ink/15 bg-paper"}`}>
              <p className="eyebrow text-[0.68rem] opacity-80">{open ? "Submissions are open" : "Submissions for 2026 have closed"}</p>
              <p className="display mt-2 text-2xl">{open ? `Send your package by ${honorary.deadlineText}` : "Ask about the next class of honorees"}</p>
              <a href="#enroll" className={`btn mt-5 ${open ? "btn-gold" : "btn-crimson"}`}>
                Request an application
              </a>
            </div>
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-14">
            <div data-reveal>
              <h3 className="display text-[1.5rem]">Fields of recognition</h3>
              <ul className="mt-5 grid gap-2.5 text-[1.02rem]">
                {honoraryFields.map((f) => (
                  <li key={f} className="flex gap-3">
                    <span aria-hidden className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-gold" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div data-reveal>
              <h3 className="display text-[1.5rem]">What to send</h3>
              <ol className="mt-5 grid gap-2.5 text-[1.02rem]">
                {honoraryPackage.map((f, i) => (
                  <li key={f} className="grid grid-cols-[1.75rem_1fr] gap-2">
                    <span className="display text-crimson">{i + 1}</span>
                    {f}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div data-reveal className="mt-14 grid gap-6 border-y border-ink/12 py-8 md:grid-cols-4">
            {["Submit your package", "Eligibility screening", "Board review", "Final approval and notification"].map((s, i) => (
              <div key={s} className="flex items-baseline gap-3">
                <span className="display text-3xl text-gold">{i + 1}</span>
                <span className="font-semibold">{s}</span>
              </div>
            ))}
          </div>

          <div data-reveal className="mt-10 grid gap-8 md:grid-cols-2">
            <figure>
              <blockquote className="verse text-2xl text-ink/85">“Let the elders that rule well be counted worthy of double honour, especially they who labour in the word and doctrine.”</blockquote>
              <figcaption className="eyebrow mt-2 text-[0.66rem] text-muted">1 Timothy 5:17</figcaption>
            </figure>
            <p className="self-end rounded-xl bg-paper p-5 text-[0.95rem] text-muted">
              <strong className="text-ink">Please note:</strong> an honorary doctorate recognizes distinguished accomplishments and service. It is not an earned
              academic doctorate, and should not be presented as a substitute for professional licensure or academic credentials.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- Nehemiah + enroll */}
      <section id="enroll" className="scroll-mt-24 bg-paper py-20 md:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div data-reveal>
            <p className="eyebrow text-[0.72rem] text-crimson">Enroll</p>
            <h2 className="display mt-4 text-[clamp(2rem,4.4vw,3.2rem)]">Start the conversation.</h2>
            <p className="mt-5 text-[1.1rem] leading-relaxed text-ink/80">
              Tell us what you’re interested in, and the Chancellor’s office will reach out about classes, costs and the next start date.
            </p>
            <div className="mt-10 rounded-2xl border border-gold/60 bg-ivory p-6">
              <p className="eyebrow text-[0.68rem] text-crimson">For pastors</p>
              <h3 className="display mt-2 text-[1.5rem]">The Nehemiah Project</h3>
              <p className="mt-2 text-[1.02rem] text-ink/80">
                Pastors, ask us about the Nehemiah Project. Pick it on the form, or call <Obf b64={org.phoneB64} className="font-semibold text-crimson hover:underline" />.
              </p>
            </div>
            <div className="mt-6 rounded-2xl border border-ink/12 bg-white p-6">
              <p className="eyebrow text-[0.68rem] text-crimson">Already enrolled?</p>
              <h3 className="display mt-2 text-[1.5rem]">Pay tuition & fees online</h3>
              <p className="mt-2 text-[1.02rem] text-ink/80">
                Pay through the ministry’s secure Tithely form, by card or bank. Put your name as it appears on your enrollment so the Chancellor’s office can
                match the payment.
              </p>
              <a href={org.tithelyUrl} target="_blank" rel="noopener noreferrer" className="btn btn-crimson mt-5">
                Pay through Tithely
              </a>
            </div>
          </div>
          <div data-reveal className="card p-6 md:p-9">
            <EnrollForm />
          </div>
        </div>
      </section>
    </>
  );
}
