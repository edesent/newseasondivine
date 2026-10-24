import type { Metadata } from "next";
import Image from "next/image";
import OnAir from "@/components/OnAir";
import PageHead from "@/components/PageHead";
import RadioDial from "@/components/RadioDial";
import VideoFacade from "@/components/VideoFacade";
import { photos } from "@/lib/photos";
import { appearances, pastors, show } from "@/lib/site";

export const metadata: Metadata = {
  title: "Radio & Television",
  description: `${show.name}: weekdays 9 to 11 AM on ${show.radio}, and at noon on ${show.tv}. Plus her television appearances.`,
  alternates: { canonical: "/on-air" },
};

export default function OnAirPage() {
  const vimeo = appearances.find((a) => a.kind === "vimeo");
  const links = appearances.filter((a) => a.kind === "link");

  return (
    <>
      <PageHead
        eyebrow="Radio & television"
        title="On the air in Augusta."
        lead={`Apostle ${pastors.sctonda.name} every weekday on ${show.radio} and ${show.tv}.`}
      >
        <OnAir className="mt-8" />
      </PageHead>

      {/* ---------------------------------------------------------- The show */}
      <section className="bg-paper py-20 md:py-28">
        <div className="wrap grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div data-reveal>
            <p className="eyebrow text-[0.72rem] text-crimson">The show</p>
            <h2 className="display mt-4 text-[clamp(2rem,4.6vw,3.5rem)]">{show.name}</h2>
            <p className="mt-5 max-w-2xl text-[1.12rem] leading-relaxed text-ink/85">
              Spiritual conversation, motivation, life talks, prayer and celebrity interviews, on the station where Apostle Sctonda is program director.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="card p-6">
                <p className="eyebrow text-[0.66rem] text-crimson">Radio</p>
                <p className="display mt-2 text-2xl">Weekdays, 9 to 11 AM</p>
                <p className="mt-2 text-[1.02rem] text-ink/80">{show.radio}</p>
                <a href={show.radioUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block font-semibold text-crimson hover:underline">
                  wnrrgospel.com →
                </a>
              </div>
              <div className="card p-6">
                <p className="eyebrow text-[0.66rem] text-crimson">Television</p>
                <p className="display mt-2 text-2xl">Weekdays at 12 noon</p>
                <p className="mt-2 text-[1.02rem] text-ink/80">{show.tv}, Watchmen Broadcasting</p>
              </div>
            </div>
            <div className="mt-8 rounded-2xl bg-night p-5 md:p-7">
              <RadioDial className="w-full" />
            </div>
          </div>
          <div data-reveal>
            <h3 className="display text-[1.5rem]">Ways to watch WBPI-TV 49</h3>
            <ul className="mt-5 divide-y divide-ink/10 border-y border-ink/10">
              {show.watch.map((w) => (
                <li key={w.where} className="flex items-baseline justify-between gap-4 py-3.5">
                  <span className="font-semibold">{w.where}</span>
                  <span className="text-right text-[0.98rem] text-ink/75">{w.how}</span>
                </li>
              ))}
            </ul>
            <div className="framed mt-10 rounded-[4px]">
              <Image
                src={photos.powerUpPrayer.src}
                alt={photos.powerUpPrayer.alt}
                width={photos.powerUpPrayer.w}
                height={photos.powerUpPrayer.h}
                sizes="(min-width: 1024px) 460px, 90vw"
                className="block h-auto w-full rounded-[2px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- Show interview gallery */}
      <section id="show-interviews" className="bg-ivory py-20 md:py-28" aria-labelledby="show-interviews-title">
        <div className="wrap">
          <p className="eyebrow text-[0.72rem] text-crimson">Behind the microphone</p>
          <h2 id="show-interviews-title" className="display mt-4 text-[clamp(2rem,4.4vw,3.3rem)]">The Sctonda Kelly Gordon Show — Interview Gallery</h2>
          <p className="mt-4 max-w-3xl text-ink/80">Conversations with gospel artists, ministry leaders, and special guests. Explore memorable moments from the show, with more interview photos and videos coming soon.</p>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <figure className="overflow-hidden rounded-xl bg-paper shadow-sm">
              <Image src="/photos/sctonda-wnrr-studio.jpg" alt="Dr. Sctonda Kelly Gordon in the WNRR radio studio" width={900} height={700} className="h-auto w-full" />
              <figcaption className="p-5 font-semibold">Behind the Mic — WNRR Gospel 1380 AM &amp; 93.3 FM</figcaption>
            </figure>
            <div className="flex flex-col justify-center rounded-xl border border-ink/10 bg-paper p-7">
              <h3 className="display text-2xl">Featured Interviews &amp; Videos</h3>
              <p className="mt-4 leading-relaxed text-ink/80">Highlights from The Sctonda Kelly Gordon Show will feature interviews and special guest conversations shared on Facebook, Instagram, and other platforms.</p>
              <div className="mt-5 overflow-hidden rounded-lg bg-black">
                <iframe title="The Sctonda Kelly Gordon Show — featured Facebook interview" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Ffb.watch%2Fv%2F2ZWcEa3y6%2F&show_text=false&width=720" width="720" height="405" className="block aspect-video w-full" style={{ border: 0 }} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen loading="lazy" />
              </div>
              <a href="https://fb.watch/v/2ZWcEa3y6/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block font-semibold text-crimson hover:underline">Watch featured interview on Facebook →</a>
              <div className="mt-8 overflow-hidden rounded-lg bg-black">
                <iframe title="The Sctonda Kelly Gordon Show — Facebook video highlight 2" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fv%2F1GCh3cArxb%2F&show_text=false&width=720" width="720" height="405" className="block aspect-video w-full" style={{ border: 0 }} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen loading="lazy" />
              </div>
              <a href="https://www.facebook.com/share/v/1GCh3cArxb/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block font-semibold text-crimson hover:underline">Watch second video on Facebook →</a>
              <div className="mt-8 overflow-hidden rounded-lg bg-black">
                <iframe title="The Sctonda Kelly Gordon Show — Facebook video highlight 3" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fv%2F1FhnzYg774%2F&show_text=false&width=720" width="720" height="405" className="block aspect-video w-full" style={{ border: 0 }} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen loading="lazy" />
              </div>
              <a href="https://www.facebook.com/share/v/1FhnzYg774/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block font-semibold text-crimson hover:underline">Watch third video on Facebook →</a>
              <div className="mt-8 overflow-hidden rounded-lg bg-black">
                <iframe title="The Sctonda Kelly Gordon Show — Facebook video highlight 4" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fv%2F1DqomzBzA8%2F&show_text=false&width=720" width="720" height="405" className="block aspect-video w-full" style={{ border: 0 }} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen loading="lazy" />
              </div>
              <a href="https://www.facebook.com/share/v/1DqomzBzA8/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block font-semibold text-crimson hover:underline">Watch fourth video on Facebook →</a>
              <div className="mt-8 rounded-lg border border-ink/10 bg-ivory p-5">
                <h4 className="font-semibold">More from The Sctonda Kelly Gordon Show</h4>
                <p className="mt-2 text-sm text-ink/75">Explore this Facebook highlight.</p>
                <a href="https://www.facebook.com/share/1Eh9b67mwm/" target="_blank" rel="noopener noreferrer" className="mt-3 inline-block font-semibold text-crimson hover:underline">View on Facebook →</a>
              </div>
              <div className="mt-8 overflow-hidden rounded-lg bg-black">
                <iframe title="The Sctonda Kelly Gordon Show — Facebook video highlight 5" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fv%2F1JBswEjKUd%2F&show_text=false&width=720" width="720" height="405" className="block aspect-video w-full" style={{ border: 0 }} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen loading="lazy" />
              </div>
              <a href="https://www.facebook.com/share/v/1JBswEjKUd/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block font-semibold text-crimson hover:underline">Watch fifth video on Facebook →</a>
              <div className="mt-8 overflow-hidden rounded-lg bg-black">
                <iframe title="The Sctonda Kelly Gordon Show — Facebook Reel highlight" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fr%2F14swnRu23zu%2F&show_text=false&width=720" width="720" height="405" className="block aspect-video w-full" style={{ border: 0 }} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen loading="lazy" />
              </div>
              <a href="https://www.facebook.com/share/r/14swnRu23zu/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block font-semibold text-crimson hover:underline">Watch Facebook Reel →</a>
              <div className="mt-8 overflow-hidden rounded-lg bg-black">
                <iframe title="The Sctonda Kelly Gordon Show — Facebook video highlight 7" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fv%2F1CC2sova9h%2F&show_text=false&width=720" width="720" height="405" className="block aspect-video w-full" style={{ border: 0 }} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen loading="lazy" />
              </div>
              <a href="https://www.facebook.com/share/v/1CC2sova9h/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block font-semibold text-crimson hover:underline">Watch seventh video on Facebook →</a>
              <div className="mt-8 overflow-hidden rounded-lg bg-black">
                <iframe title="The Sctonda Kelly Gordon Show — Facebook video highlight 8" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fv%2F1ErgtV3e8z%2F&show_text=false&width=720" width="720" height="405" className="block aspect-video w-full" style={{ border: 0 }} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen loading="lazy" />
              </div>
              <a href="https://www.facebook.com/share/v/1ErgtV3e8z/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block font-semibold text-crimson hover:underline">Watch eighth video on Facebook →</a>
              <div className="mt-8 overflow-hidden rounded-lg bg-black">
                <iframe title="The Sctonda Kelly Gordon Show — Facebook video highlight 8" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fv%2F1ErgtV3e8z%2F&show_text=false&width=720" width="720" height="405" className="block aspect-video w-full" style={{ border: 0 }} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen loading="lazy" />
              </div>
              <a href="https://www.facebook.com/share/v/1ErgtV3e8z/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block font-semibold text-crimson hover:underline">Watch eighth video on Facebook →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- Television */}
      <section id="television" className="night scroll-mt-24 py-20 md:py-28">
        <div className="wrap">
          <div data-reveal className="max-w-3xl">
            <p className="eyebrow text-[0.72rem] text-gold-hi">Television</p>
            <h2 className="display mt-4 text-[clamp(2rem,4.6vw,3.5rem)]">Watch the interviews.</h2>
          </div>
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.35fr_0.65fr]">
            {vimeo && vimeo.kind === "vimeo" ? (
              <div data-reveal>
                <VideoFacade id={vimeo.id} title={vimeo.title} label={vimeo.date} />
                <p className="mt-4 max-w-2xl text-[1rem] text-mist">{vimeo.note}</p>
              </div>
            ) : null}
            <div className="grid content-start gap-5">
              {links.map((a) =>
                a.kind === "link" ? (
                  <a
                    key={a.url}
                    data-reveal
                    href={a.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-2xl border border-ivory/15 p-6 transition-colors hover:border-gold/60"
                  >
                    <span className="eyebrow block text-[0.64rem] text-gold-hi">{a.date}</span>
                    <span className="display mt-2 block text-xl">{a.title}</span>
                    <span className="mt-2 block text-[0.96rem] text-mist">{a.note}</span>
                    <span className="mt-3 inline-block font-semibold text-gold-hi">Watch on WJBF →</span>
                  </a>
                ) : null,
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- Recognition */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="wrap grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div data-reveal className="framed mx-auto w-full max-w-[420px] rounded-[4px]">
            <Image
              src={photos.doveAwards.src}
              alt={photos.doveAwards.alt}
              width={photos.doveAwards.w}
              height={photos.doveAwards.h}
              sizes="(min-width: 1024px) 420px, 90vw"
              className="block h-auto w-full rounded-[2px]"
            />
          </div>
          <div data-reveal>
            <p className="eyebrow text-[0.72rem] text-crimson">Recognition</p>
            <h2 className="display mt-4 text-[clamp(2rem,4.4vw,3.3rem)]">Multi-Award-Winning Gospel Radio Announcer.</h2>
            <p className="mt-5 max-w-2xl text-[1.12rem] leading-relaxed text-ink/85">
              At the 2021 Stellar Gospel Music Awards, Dr. Sctonda Kelly Gordon of WNRR Gospel 1380 & 93.3 FM was named Gospel Announcer of the Year. In
              2024, a two-day celebration in the CSRA honored her 32 years of ministry and media. She is also an inductee into the Avidity Gospel Music Hall of Fame and a Spin Award winner.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-24" aria-labelledby="awards-gallery-title">
        <div className="wrap">
          <p className="eyebrow text-[0.72rem] text-crimson">Awards &amp; recognition</p>
          <h2 id="awards-gallery-title" className="display mt-4 text-[clamp(2rem,4.4vw,3.3rem)]">Celebrating Gospel Radio Excellence</h2>
          <p className="mt-4 max-w-2xl text-ink/80">Stellar Gospel Announcer of the Year, Avidity Gospel Music Hall of Fame inductee, and Spin Award winner.</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <figure className="overflow-hidden rounded-xl bg-ivory shadow-sm">
              <Image src="/photos/img-2267.jpeg" alt="Stellar Gospel Music Awards ceremony stage" width={600} height={800} className="h-80 w-full object-cover" />
              <figcaption className="p-4 font-semibold">Stellar Gospel Music Awards — 2021</figcaption>
            </figure>
            {[
              { src: "/photos/img-2269.jpeg", label: "Stellar Awards recognition" },
              { src: "/photos/img-2270.jpeg", label: "Stellar Awards celebration" },
              { src: "/photos/img-2275.jpeg", label: "Gospel music awards memories" },
              { src: "/photos/img-2277.jpeg", label: "Gospel music awards recognition" },
              { src: "/photos/img-2278.jpeg", label: "Awards ceremony highlights" },
              { src: "/photos/img-2279.jpeg", label: "Celebrating gospel broadcasting" },
              { src: "/photos/img-2280.jpeg", label: "Gospel music honors" },
              { src: "/photos/img-2281.jpeg", label: "Awards and recognition" },
              { src: "/photos/img-2283.jpeg", label: "Gospel radio excellence" },
            ].map((photo) => (
              <figure key={photo.src} className="overflow-hidden rounded-xl bg-ivory shadow-sm">
                <Image src={photo.src} alt={photo.label} width={600} height={800} className="h-80 w-full object-contain bg-black/5" />
                <figcaption className="p-4 font-semibold">{photo.label}</figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-12 max-w-3xl">
            <h3 className="display text-2xl">Stellar Awards Red Carpet Highlights</h3>
            <p className="mt-3 text-ink/75">Dr. Sctonda Kelly Gordon on the Stellar Gospel Music Awards red carpet.</p>
            <div className="mt-5 overflow-hidden rounded-xl bg-black">
              <iframe title="Stellar Awards Red Carpet — Dr. Sctonda Kelly Gordon" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fv%2F1DSEAkyPw6%2F&show_text=false&width=720" width="720" height="405" className="block aspect-video w-full" style={{ border: 0 }} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen loading="lazy" />
            </div>
            <a href="https://www.facebook.com/share/v/1DSEAkyPw6/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block font-semibold text-crimson hover:underline">Watch on Facebook →</a>
          </div>
        </div>
      </section>
    </>
  );
}
