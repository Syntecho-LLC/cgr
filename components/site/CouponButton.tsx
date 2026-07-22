"use client";

import type { ReactNode } from "react";

export function CouponButton({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("cgr-open-coupon"))}
      className={className}
    >
      {children}
    </button>
  );
}
