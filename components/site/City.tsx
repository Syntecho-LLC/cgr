"use client";

import { useEffect, useState } from "react";

/**
 * Resolves the visitor's city from your own geo source.
 * Priority: window.CGR_CITY (set it from your geo/IP source) -> ?city= query -> fallback.
 * If nothing resolves, returns the provided fallback (e.g. "California" or "your local area").
 */
export function useCity(fallback = "California") {
  const [city, setCity] = useState<string | null>(null);

  useEffect(() => {
    try {
      const g = (window as unknown as { CGR_CITY?: string }).CGR_CITY;
      const q = new URLSearchParams(window.location.search).get("city");
      const c = (g || q || "").trim();
      if (c) setCity(c);
    } catch {
      /* noop */
    }
  }, []);

  return city ?? fallback;
}

/** Inline city text island — usable inside server components. */
export function City({ fallback = "California" }: { fallback?: string }) {
  return <>{useCity(fallback)}</>;
}
