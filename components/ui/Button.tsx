import Link from "next/link";
import { Loader2 } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "emergency" | "outline" | "ghost" | "link";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-heading font-bold tracking-[-0.01em] rounded-[var(--radius-btn)] transition-all duration-200 ease-[var(--ease-out-soft)] focus-visible:outline-3 focus-visible:outline-offset-2 disabled:opacity-55 disabled:pointer-events-none select-none";

const sizes: Record<Size, string> = {
  md: "h-12 px-5 text-[15px]",
  lg: "h-[54px] px-7 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "btn-shine btn-stroke shine-fill-blue text-white shadow-[var(--shadow-btn)]",
  emergency:
    "btn-shine btn-stroke shine-fill-red text-white shadow-[var(--shadow-btn-red)]",
  outline:
    "btn-shine btn-stroke border-2 border-white/50 text-white hover:bg-white/10 backdrop-blur-sm",
  ghost:
    "text-slate-900 hover:bg-slate-200/70",
  link:
    "text-blue-primary hover:text-blue-primary-hover underline-offset-4 hover:underline px-0 h-auto",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  children: ReactNode;
  className?: string;
};

export function Button({
  variant = "primary",
  size = "md",
  loading,
  children,
  className = "",
  ...rest
}: CommonProps & ComponentProps<"button">) {
  return (
    <button
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      disabled={loading || rest.disabled}
      {...rest}
    >
      <span className="relative z-[2] inline-flex items-center justify-center gap-2">
        {loading && <Loader2 className="size-[18px] animate-spin" aria-hidden />}
        {children}
      </span>
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  children,
  className = "",
  href,
  ...rest
}: CommonProps & { href: string } & Omit<ComponentProps<typeof Link>, "href">) {
  return (
    <Link
      href={href}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...rest}
    >
      <span className="relative z-[2] inline-flex items-center justify-center gap-2">
        {children}
      </span>
    </Link>
  );
}
