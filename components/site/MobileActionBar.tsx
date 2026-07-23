"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { COMPANY } from "@/lib/content";

export function MobileActionBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Show only after the hero is scrolled past (hidden while in hero).
    const onScroll = () => {
      const hero = document.getElementById("top");
      const heroBottom = hero ? hero.getBoundingClientRect().bottom : window.innerHeight;
      setShow(heroBottom <= 80);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className={`lg:hidden fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-3 py-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))] backdrop-blur-md shadow-[0_-6px_24px_rgba(15,23,42,0.08)] transition-transform duration-300 ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href={COMPANY.phoneHref}
        className="btn-shine btn-stroke shine-fill-red flex h-12 w-full items-center justify-center gap-2 rounded-[var(--radius-btn)] font-heading text-[15px] font-bold text-white"
      >
        <span className="relative z-[2] inline-flex items-center gap-2">
          <Phone className="size-[18px]" /> Call Now — {COMPANY.phone}
        </span>
      </a>
    </div>
  );
}
