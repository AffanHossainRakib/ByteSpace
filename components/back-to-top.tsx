"use client";

import { useEffect, useRef } from "react";
import { MdArrowUpward } from "react-icons/md";
import { useScrolledPast } from "@/hooks/use-scrolled-past";
import { cn } from "@/lib/utils";

export function BackToTop() {
  const visible = useScrolledPast(() => window.innerHeight);
  const button = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function update() {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const done = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      button.current?.style.setProperty("--progress", `${done * 100}%`);
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  function toTop() {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    document.getElementById("main")?.focus({ preventScroll: true });
  }

  return (
    <button
      ref={button}
      type="button"
      onClick={toTop}
      aria-label="Scroll to top"
      inert={!visible}
      style={{
        backgroundImage:
          "conic-gradient(var(--color-blue-800) var(--progress, 0%), white 0)",
      }}
      className={cn(
        "fixed right-4 bottom-4 z-40 md:right-8 md:bottom-8",
        "size-12 rounded-full border-2 border-white p-0.75 shadow-float md:size-14",
        "transition duration-300 motion-reduce:transition-none",
        "focus-visible:ring-3 focus-visible:ring-blue-800/50 focus-visible:outline-none",
        visible ? "opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <span className="grid size-full place-items-center rounded-full bg-lime-400 text-gray-950 transition-colors hover:bg-lime-300">
        <MdArrowUpward aria-hidden className="size-6" />
      </span>
    </button>
  );
}
