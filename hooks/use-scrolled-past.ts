"use client";

import { useSyncExternalStore } from "react";

export function useScrolledPast(px: number | (() => number)) {
  const limit = () => (typeof px === "function" ? px() : px);
  return useSyncExternalStore(
    (onChange) => {
      window.addEventListener("scroll", onChange, { passive: true });
      window.addEventListener("resize", onChange);
      return () => {
        window.removeEventListener("scroll", onChange);
        window.removeEventListener("resize", onChange);
      };
    },
    () => window.scrollY > limit(),
    () => false,
  );
}
