import Image from "next/image";
import type { Photo } from "@/lib/photos";
import { Shield } from "./Seal";

/**
 * The masthead for an inside page. With a photo, the wash is weighted to the
 * lower left where the type sits, and the type always carries a shadow.
 * Without one, it's the red stage curtain from their graduation, with the
 * seal's shield standing on it. (We never fill a gap with a stock photo.)
 */
export default function PageHead({
  eyebrow,
  title,
  lead,
  photo,
  position = "center",
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  photo?: Photo;
  position?: string;
  children?: React.ReactNode;
}) {
  if (!photo) {
    return (
      <section className="curtain relative isolate overflow-hidden text-ivory">
        <Shield className="pointer-events-none absolute -right-10 bottom-[-12%] -z-10 hidden w-[340px] opacity-[0.22] md:block lg:right-[6%] lg:w-[400px]" />
        <div className="wrap pb-16 pt-36 md:pb-24 md:pt-44">
          <p className="eyebrow shadow-photo text-[0.74rem] text-gold-hi">{eyebrow}</p>
          <h1 className="display shadow-photo mt-4 max-w-4xl text-[clamp(2.4rem,6.4vw,5.4rem)]">{title}</h1>
          {lead ? <p className="shadow-photo mt-5 max-w-2xl text-lg text-ivory/92 md:text-xl">{lead}</p> : null}
          {children}
        </div>
      </section>
    );
  }

  // With a photo: the title sits low on the picture, the lead and buttons in a band beneath,
  // so nothing is printed across anyone's face.
  return (
    <>
      <section className="relative isolate flex h-[72svh] min-h-[480px] items-end overflow-hidden bg-night text-ivory md:min-h-[560px]">
        <Image src={photo.src} alt={photo.alt} fill preload sizes="100vw" className="-z-20 object-cover" style={{ objectPosition: position }} />
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(180deg, rgb(10 4 5 / 0.6) 0%, rgb(10 4 5 / 0) 22%, rgb(10 4 5 / 0) 50%, rgb(22 9 11 / 0.8) 80%, rgb(27 13 16 / 1) 100%)",
          }}
        />
        <div className="wrap pb-8 md:pb-10">
          <p className="eyebrow shadow-photo text-[0.72rem] text-gold-hi">{eyebrow}</p>
          <h1 className="display shadow-photo mt-3 max-w-4xl text-[clamp(2.3rem,5.6vw,4.8rem)]">{title}</h1>
        </div>
      </section>
      {lead || children ? (
        <section className="night border-b border-gold/25">
          <div className="wrap pb-12 pt-6 md:pb-14">
            {lead ? <p className="max-w-2xl text-lg text-ivory/90 md:text-xl">{lead}</p> : null}
            {children}
          </div>
        </section>
      ) : null}
    </>
  );
}
