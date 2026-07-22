import { City } from "@/components/site/City";

const BRAND_LOGOS = [
  "amarr", "chamberlain", "chi", "clopay", "craftsman", "genie", "garaga",
  "hormann", "liftmaster", "linear", "marantec", "sommer", "wayne-dalton",
];

function Chip({ b }: { b: string }) {
  return (
    <div className="flex h-10 w-28 shrink-0 items-center justify-center px-3">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/images/brands/${b}.svg`}
        alt={`${b.replace("-", " ")} garage door brand`}
        className="max-h-6 w-auto max-w-[90px] object-contain"
        loading="lazy"
      />
    </div>
  );
}

/** Compact brand band — designed to sit inside the hero (max ~150px tall). */
export function BrandStrip() {
  const row = [...BRAND_LOGOS, ...BRAND_LOGOS];
  return (
    <div aria-labelledby="brands-heading" className="w-full bg-blue-primary py-4">
      <div className="container-wide">
        <h2
          id="brands-heading"
          className="text-center font-heading text-base font-bold tracking-tight text-white sm:text-lg"
        >
          We Repair All Garage Door &amp; Gate Brands in <City fallback="California" />
        </h2>
      </div>

      <div className="mt-3 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <div className="marquee-track flex w-max items-center gap-4">
          {row.map((b, i) => (
            <Chip key={`${b}-${i}`} b={b} />
          ))}
        </div>
      </div>
    </div>
  );
}
