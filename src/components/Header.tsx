"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Seal from "./Seal";
import { elevation, nav, org, sabbath } from "@/lib/site";

/**
 * Floats over each page's photographic masthead, then turns solid once you
 * scroll. The phone menu is a sibling of the header, not a child, so it can
 * never be trapped inside the bar.
 */
export default function Header({ showElevation }: { showElevation: boolean }) {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const path = usePathname();

  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  useEffect(() => {
    const on = () => setSolid(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const filled = solid || open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 text-ivory transition-[background-color,box-shadow] duration-300 ${
          filled ? "bg-night/96 shadow-[0_1px_0_rgb(214_166_64/0.35)]" : "bg-gradient-to-b from-black/60 to-transparent"
        }`}
      >
        <div className="wrap flex h-[72px] items-center justify-between gap-4 md:h-[84px]">
          <Link href="/" className="group flex min-w-0 items-center gap-3" aria-label={`${org.name}: home`}>
            <Seal className="h-12 w-12 shrink-0 drop-shadow-[0_4px_10px_rgb(0_0_0/0.45)] transition-transform duration-300 group-hover:rotate-[-4deg] md:h-[58px] md:w-[58px]" />
            <span className="min-w-0 leading-none">
              <span className="display block whitespace-nowrap text-[1.2rem] font-bold tracking-[0.04em] md:text-[1.4rem]">New Season</span>
              <span className="eyebrow mt-1.5 block whitespace-nowrap text-[0.6rem] tracking-[0.26em] text-gold-hi md:text-[0.66rem]">
                Divine Ministries
              </span>
            </span>
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-0.5 xl:flex">
            {nav.map((n) => {
              const here = path === n.href || path.startsWith(`${n.href}/`);
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  aria-current={here ? "page" : undefined}
                  className={`whitespace-nowrap rounded-full px-3.5 py-2 text-[0.96rem] font-semibold transition-colors hover:text-gold-hi ${
                    here ? "text-gold-hi" : "text-ivory/90"
                  } ${solid ? "" : "shadow-photo"}`}
                >
                  {n.short}
                </Link>
              );
            })}
            {showElevation ? (
              <Link
                href="/elevation"
                className="ml-2 whitespace-nowrap rounded-full border border-gold/70 px-4 py-2 text-[0.9rem] font-semibold text-gold-hi transition-colors hover:bg-gold/10"
              >
                Dec 5 · Elevation
              </Link>
            ) : null}
            <Link href="/give" className="btn btn-gold ml-2 !px-5 !py-2.5">
              Give
            </Link>
          </nav>

          <button
            type="button"
            className="eyebrow flex items-center gap-2.5 rounded-full border border-ivory/50 px-4 py-2.5 text-[0.72rem] xl:hidden"
            aria-expanded={open}
            aria-controls="menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? "Close" : "Menu"}
            <span aria-hidden className="relative block h-3 w-4">
              <span className={`absolute left-0 h-0.5 w-4 bg-current transition ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-1.5 h-0.5 w-4 bg-current transition ${open ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 h-0.5 w-4 bg-current transition ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
      </header>

      <div id="menu" hidden={!open} className="night fixed inset-0 z-30 overflow-y-auto pt-[72px] md:pt-[84px] xl:hidden">
        <nav aria-label="Mobile" className="wrap flex flex-col pb-12 pt-4">
          {showElevation ? (
            <Link href="/elevation" className="mb-3 rounded-2xl border border-gold/50 px-5 py-4 text-gold-hi">
              <span className="eyebrow block text-[0.68rem]">{elevation.dateText}</span>
              <span className="display mt-1 block text-2xl">Elevation & Graduation</span>
            </Link>
          ) : null}
          <Link href="/" className="display border-b border-ivory/12 py-4 text-[1.9rem]">
            Home
          </Link>
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={path === n.href ? "page" : undefined}
              className={`display border-b border-ivory/12 py-4 text-[1.9rem] ${path === n.href ? "text-gold-hi" : ""}`}
            >
              {n.label}
            </Link>
          ))}
          <Link href="/give" className="btn btn-gold mt-8 self-start">
            Give by Cash App
          </Link>
          <p className="mt-8 text-[0.98rem] text-mist">
            Every Sabbath (Saturday) from {sabbath[0].at} {sabbath[0].ampm}
            <br />
            {org.venue}
            <br />
            {org.street}, {org.city}, {org.stateCode}
          </p>
        </nav>
      </div>
    </>
  );
}
