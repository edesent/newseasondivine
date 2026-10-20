import Link from "next/link";
import PageHead from "@/components/PageHead";

export default function NotFound() {
  return (
    <PageHead eyebrow="Page not found" title="That page has moved on to a new season." lead="Let’s get you back to the front door.">
      <Link href="/" className="btn btn-gold mt-8">
        Home
      </Link>
    </PageHead>
  );
}
