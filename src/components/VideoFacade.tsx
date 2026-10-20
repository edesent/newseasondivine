"use client";

import { useState } from "react";

/**
 * A Vimeo video that only loads the player when someone presses play, so
 * the page stays fast and no third-party player loads uninvited.
 */
export default function VideoFacade({ id, title, label }: { id: string; title: string; label: string }) {
  const [on, setOn] = useState(false);
  return (
    <div className="relative aspect-video overflow-hidden rounded-2xl bg-black">
      {on ? (
        <iframe
          src={`https://player.vimeo.com/video/${id}?autoplay=1&dnt=1`}
          title={title}
          className="absolute inset-0 h-full w-full"
          allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setOn(true)}
          className="curtain group absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center text-ivory"
          aria-label={`Play: ${title}`}
        >
          <span className="eyebrow text-[0.7rem] text-gold-hi">{label}</span>
          <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gold-hi/95 text-ink shadow-[0_10px_40px_-10px_rgb(0_0_0/0.8)] transition-transform duration-300 group-hover:scale-105">
            <svg viewBox="0 0 24 24" className="ml-1 h-8 w-8" fill="currentColor" aria-hidden>
              <path d="M7 4.5v15l12.5-7.5z" />
            </svg>
          </span>
          <span className="display max-w-md text-2xl md:text-3xl">{title}</span>
        </button>
      )}
    </div>
  );
}
