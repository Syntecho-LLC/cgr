import { City } from "@/components/site/City";

const BRAND_LOGOS = [
  "amarr", "chamberlain", "chi", "clopay", "craftsman", "genie", "garaga",
  "hormann", "liftmaster", "linear", "marantec", "sommer", "wayne-dalton",
];

// Logos that are white/light and need a dark chip to be visible.
const DARK_CHIP = new Set([
  "amarr", "wayne-dalton", "linear", "genie", "chamberlain", "marantec", "liftmaster",
]);

export function BrandStrip() {
  return (
    <section aria-labelledby="brands-heading" className="border-b border-slate-200 bg-white py-12 md:py-16">
      <div className="container-cgr">
        <h2
          id="brands-heading"
          className="text-center font-heading text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl"
        >
          We Repair All Garage Door &amp; Gate Brands in <City fallback="California" />
        </h2>

        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {BRAND_LOGOS.map((b) => (
            <div
              key={b}
              className={`flex h-20 items-center justify-center rounded-2xl px-4 ring-1 ${
                DARK_CHIP.has(b) ? "bg-navy-950 ring-navy-900" : "bg-gradient-to-b from-slate-50 to-slate-100 ring-slate-200"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/images/brands/${b}.svg`}
                alt={`${b.replace("-", " ")} garage door brand`}
                className="max-h-10 w-auto max-w-[120px] object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
