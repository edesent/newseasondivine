import type { Metadata } from "next";
import { ContactForm } from "@/components/Forms";
import { Obf } from "@/components/Obf";
import PageHead from "@/components/PageHead";
import { org, pastors, sabbath, topics } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Send a message or a prayer request to ${org.name}, ${org.city}, Georgia.`,
  alternates: { canonical: "/contact" },
};

/** Short ?topic= keys used by links around the site. */
const KEYS: Record<string, string> = {
  visit: topics[0],
  prayer: topics[1],
  enroll: topics[2],
  honorary: topics[3],
  nehemiah: topics[4],
  kenya: topics[5],
};

// Next 16: searchParams is a Promise.
export default async function Contact({ searchParams }: { searchParams: Promise<{ topic?: string }> }) {
  const { topic } = await searchParams;
  const chosen = (topic && KEYS[topic]) || "";

  return (
    <>
      <PageHead
        eyebrow="Contact"
        title="We’d love to hear from you."
        lead={`Messages and prayer requests go straight to ${pastors.heldin.first} and ${pastors.sctonda.first}.`}
      />
      <section className="bg-paper py-20 md:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div data-reveal className="grid content-start gap-8 text-[1.05rem]">
            <div>
              <p className="eyebrow text-[0.66rem] text-muted">Call</p>
              <p className="mt-1.5">
                <Obf b64={org.phoneB64} className="display text-2xl text-crimson hover:underline" />
              </p>
            </div>
            <div>
              <p className="eyebrow text-[0.66rem] text-muted">Every Sabbath</p>
              <p className="mt-1.5">
                {sabbath.map((s) => `${s.name} ${s.at}`).join(" · ")}
                <br />
                {org.venue}
                <br />
                <a href={org.maps} target="_blank" rel="noopener noreferrer" className="font-semibold text-crimson hover:underline">
                  {org.street}, {org.city}, {org.stateCode}
                </a>
              </p>
            </div>
            <div>
              <p className="eyebrow text-[0.66rem] text-muted">Give</p>
              <p className="mt-1.5">
                Cash App{" "}
                <a href={org.cashUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-crimson hover:underline">
                  ${org.cashTag}
                </a>
              </p>
            </div>
          </div>
          <div data-reveal className="card p-6 md:p-9">
            <ContactForm topic={chosen} />
          </div>
        </div>
      </section>
    </>
  );
}
