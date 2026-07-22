import { Phone, Clock, Tag, ShieldCheck, BadgeCheck, Star } from "lucide-react";
import { COMPANY } from "@/lib/content";
import { City } from "@/components/site/City";
import { CouponButton } from "@/components/site/CouponButton";

const marks = [
  { icon: BadgeCheck, label: "Licensed CSLB #1077353" },
  { icon: ShieldCheck, label: "Fully insured" },
  { icon: Star, label: "5.0 rated · 1,300+ reviews" },
];

export function FinalCta() {
  return (
    <section id="contact" className="section relative overflow-hidden bg-navy-950">
      <div className="absolute -left-24 top-0 size-96 rounded-full bg-blue-primary/20 blur-[120px]" aria-hidden />
      <div className="absolute -right-24 bottom-0 size-96 rounded-full bg-blue-electric/15 blur-[120px]" aria-hidden />

      <div className="container-cgr relative z-10 mx-auto max-w-3xl text-center">
        <p className="eyebrow !text-blue-electric justify-center">
          <span className="size-1.5 rounded-full bg-current" /> 24/7 Statewide Dispatch
        </p>
        <h2 className="mt-4 font-heading text-[clamp(32px,4.5vw,48px)] font-extrabold leading-[1.08] tracking-[-0.025em] text-white">
          Need Garage Door Repair in <City fallback="California" /> Today?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-slate-300">
          Speak with a local garage door specialist now — free, no-obligation estimate over the phone.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={COMPANY.phoneHref}
            className="btn-shine btn-stroke shine-fill-red inline-flex h-[54px] w-full items-center justify-center gap-2 rounded-[var(--radius-btn)] px-7 font-heading text-base font-bold text-white shadow-[var(--shadow-btn-red)] sm:w-auto"
          >
            <span className="relative z-[2] inline-flex items-center gap-2">
              <Phone className="size-5" /> Call {COMPANY.phone}
            </span>
          </a>
          <CouponButton className="btn-shine btn-stroke inline-flex h-[54px] w-full items-center justify-center gap-2 rounded-[var(--radius-btn)] border-2 border-white/60 px-7 font-heading text-base font-bold text-white hover:bg-white/10 sm:w-auto">
            <span className="relative z-[2] inline-flex items-center gap-2">
              <Tag className="size-5" /> Get 15% Off
            </span>
          </CouponButton>
        </div>

        <p className="mt-5 flex items-center justify-center gap-2 text-sm text-slate-300">
          <Clock className="size-4 text-success" />
          Available 24/7 · Same-day service in major California cities
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {marks.map((m) => (
            <span key={m.label} className="inline-flex items-center gap-2 text-sm font-semibold text-slate-200">
              <m.icon className="size-4 text-success" /> {m.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
