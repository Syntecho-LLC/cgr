"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";

const COUNT = 9;
const VIDEOS = Array.from({ length: COUNT }, (_, i) => i + 1);

export function VideoCarousel() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState<number | null>(null);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 16 : 280;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8;
    if (dir === 1 && atEnd) el.scrollTo({ left: 0, behavior: "smooth" });
    else el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  // Auto-advance (paused while a video modal is open)
  useEffect(() => {
    if (open !== null) return;
    const id = setInterval(() => scrollByCard(1), 5000);
    return () => clearInterval(id);
  }, [open]);

  // Close modal on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="relative mt-8">
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {VIDEOS.map((n) => (
          <button
            key={n}
            data-card
            onClick={() => setOpen(n)}
            aria-label={`Play video testimonial ${n}`}
            className="group relative aspect-[9/16] w-[240px] shrink-0 snap-center overflow-hidden rounded-[var(--radius-card)] bg-gradient-to-b from-navy-900 to-navy-950 ring-1 ring-slate-200 shadow-[var(--shadow-card)] sm:w-[260px]"
          >
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={`/videos/reviews/review-${n}.jpg`}
            >
              <source src={`/videos/reviews/review-${n}.mp4`} type="video/mp4" />
            </video>
            {/* Play button overlay */}
            <span className="absolute inset-0 grid place-items-center bg-navy-950/10 transition group-hover:bg-navy-950/25">
              <span className="grid size-16 place-items-center rounded-full bg-white/90 text-blue-primary shadow-lg transition-transform group-hover:scale-110">
                <Play className="size-7 translate-x-0.5 fill-current" />
              </span>
            </span>
          </button>
        ))}
      </div>

      {/* Nav */}
      <button
        onClick={() => scrollByCard(-1)}
        aria-label="Previous"
        className="absolute -left-2 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white text-slate-900 shadow-[var(--shadow-soft)] ring-1 ring-slate-200 transition hover:bg-blue-primary hover:text-white lg:-left-5"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        onClick={() => scrollByCard(1)}
        aria-label="Next"
        className="absolute -right-2 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white text-slate-900 shadow-[var(--shadow-soft)] ring-1 ring-slate-200 transition hover:bg-blue-primary hover:text-white lg:-right-5"
      >
        <ChevronRight className="size-5" />
      </button>

      {/* Modal */}
      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Video testimonial"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          <button
            aria-label="Close"
            onClick={() => setOpen(null)}
            className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm"
          />
          <div className="relative aspect-[9/16] h-[85vh] max-h-[85vh] max-w-[92vw] overflow-hidden rounded-[var(--radius-card)] bg-black shadow-[var(--shadow-lift)]">
            <video
              key={open}
              className="h-full w-full object-contain"
              src={`/videos/reviews/review-${open}.mp4`}
              poster={`/videos/reviews/review-${open}.jpg`}
              controls
              autoPlay
              playsInline
            />
          </div>
          <button
            onClick={() => setOpen(null)}
            aria-label="Close"
            className="absolute right-4 top-4 z-10 grid size-11 place-items-center rounded-full bg-white text-slate-900 shadow-lg transition hover:bg-slate-100"
          >
            <X className="size-5" />
          </button>
        </div>
      )}
    </div>
  );
}
