import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "@/components/PageHead";

export const metadata: Metadata = {
  title: "Bookings, Consultations & Interview Requests",
  description: "Request a ministry booking, leadership consultation, or radio and television interview with New Season Divine Ministries.",
  alternates: { canonical: "/bookings" },
};

const requests = [
  {
    title: "Bookings",
    description: "Invite Apostle Dr. Sctonda Kelly Gordon or Senior Pastor Dr. Heldin C. Gordon for speaking engagements, worship services, conferences, and special events.",
    href: "/contact?topic=booking",
    action: "Request a booking",
  },
  {
    title: "Consultations",
    description: "Inquire about ministry leadership, theological education, chaplaincy training, and organizational development consultations.",
    href: "/contact?topic=consultation",
    action: "Request a consultation",
  },
  {
    title: "Interview Requests",
    description: "Request an interview or media appearance, including inquiries related to The Sctonda Kelly Gordon Show, WNRR Gospel, and WBPI-TV 49.",
    href: "/contact?topic=interview",
    action: "Request an interview",
  },
];

export default function BookingsPage() {
  return (
    <>
      <PageHead eyebrow="Connect with us" title="Bookings, Consultations & Interview Requests" lead="We welcome opportunities to connect, collaborate, and serve. Select the type of request below to send your inquiry." />
      <section className="bg-paper py-16 md:py-24">
        <div className="wrap grid gap-6 lg:grid-cols-3">
          {requests.map((request) => (
            <article key={request.title} className="card flex flex-col p-7 md:p-9">
              <h2 className="display text-3xl text-crimson">{request.title}</h2>
              <p className="mt-5 flex-1 text-[1.06rem] leading-relaxed text-ink/85">{request.description}</p>
              <Link href={request.href} className="btn btn-crimson mt-8 self-start">{request.action}</Link>
            </article>
          ))}
        </div>
        <p className="wrap mt-10 text-center text-ink/75">Please include your preferred date, location or format, organization, and details of your request. Submission does not confirm availability.</p>
      </section>
    </>
  );
}