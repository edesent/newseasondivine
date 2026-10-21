import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import { elevationAhead, isDemo, org, pastors, siteUrl } from "@/lib/site";
import "./globals.css";

// The Dec 5 button expires itself; re-render hourly so it can.
export const revalidate = 3600;

// Fonts are self-hosted so the build never depends on reaching Google.
const cinzel = localFont({
  src: [{ path: "../fonts/cinzel.woff2", weight: "400 900", style: "normal" }],
  variable: "--ff-cinzel",
  display: "swap",
});

const cormorant = localFont({
  src: [
    { path: "../fonts/cormorant.woff2", weight: "400 700", style: "normal" },
    { path: "../fonts/cormorant-italic.woff2", weight: "400 700", style: "italic" },
  ],
  variable: "--ff-cormorant",
  display: "swap",
});

const instrument = localFont({
  src: [
    { path: "../fonts/instrument.woff2", weight: "400 700", style: "normal" },
    { path: "../fonts/instrument-italic.woff2", weight: "400 700", style: "italic" },
  ],
  variable: "--ff-instrument",
  display: "swap",
});

const description = `${org.name} in ${org.city}, Georgia: Sabbath worship every Saturday morning, the ${org.seminaryShort}, outreach to families and Bibles for Kenya. Led by Senior Pastor ${pastors.heldin.name} and Apostle ${pastors.sctonda.name}.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${org.name} · ${org.city}, Georgia`,
    template: `%s · ${org.name}`,
  },
  description,
  openGraph: {
    type: "website",
    siteName: org.name,
    title: `${org.name} · ${org.city}, Georgia`,
    description,
    images: [{ url: "/photos/graduation-sanctuary.jpg", width: 2000, height: 1500 }],
  },
  robots: isDemo ? { index: false, follow: false } : undefined,
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#1b0d10",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Church",
  name: org.name,
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    streetAddress: org.street,
    addressLocality: org.city,
    addressRegion: org.stateCode,
    addressCountry: "US",
  },
  employee: [
    { "@type": "Person", name: pastors.heldin.name, jobTitle: pastors.heldin.role },
    { "@type": "Person", name: pastors.sctonda.name, jobTitle: pastors.sctonda.role },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${cormorant.variable} ${instrument.variable}`} suppressHydrationWarning>
      <head>
        {/* Marks the page as scripted so scroll reveals can hide content first. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="min-h-screen antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <Header showElevation={elevationAhead()} />
        <main id="main">{children}</main>
        <Footer />
        <Reveal />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
