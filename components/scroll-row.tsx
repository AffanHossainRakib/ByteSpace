"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { cn } from "@/lib/utils";

const fade =
  "pointer-events-none absolute inset-y-0 z-10 flex w-16 items-center pb-1";
const arrow =
  "pointer-events-auto grid size-9 place-items-center rounded-full border border-gray-200 bg-white text-gray-950 shadow-sm";

export function ScrollRow({
  label,
  className,
  rowClassName,
  children,
}: {
  label: string;
  className?: string;
  rowClassName?: string;
  children: ReactNode;
}) {
  const row = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ start: true, end: true });

  const updateEdges = useCallback(() => {
    const el = row.current;
    if (!el) return;
    setEdges({
      start: el.scrollLeft <= 1,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 1,
    });
  }, []);

  useEffect(() => {
    const el = row.current;
    if (!el) return;
    updateEdges();
    const observer = new ResizeObserver(updateEdges);
    observer.observe(el);
    return () => observer.disconnect();
  }, [updateEdges]);

  function scrollRow(direction: 1 | -1) {
    const el = row.current;
    if (!el) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    el.scrollBy({
      left: direction * el.clientWidth * 0.7,
      behavior: reduce ? "auto" : "smooth",
    });
  }

  return (
    <div className={cn("relative", className)}>
      <div
        ref={row}
        onScroll={updateEdges}
        className={cn(
          "no-scrollbar relative overflow-x-auto pb-1",
          rowClassName,
        )}
      >
        {children}
      </div>
      {!edges.start && (
        <div
          className={cn(
            fade,
            "left-0 justify-start bg-linear-to-r from-white from-40% to-transparent pl-2",
          )}
        >
          <button
            type="button"
            aria-label={`Scroll ${label} left`}
            onClick={() => scrollRow(-1)}
            className={arrow}
          >
            <MdChevronLeft aria-hidden className="size-6" />
          </button>
        </div>
      )}
      {!edges.end && (
        <div
          className={cn(
            fade,
            "right-0 justify-end bg-linear-to-l from-white from-40% to-transparent pr-2",
          )}
        >
          <button
            type="button"
            aria-label={`Scroll ${label} right`}
            onClick={() => scrollRow(1)}
            className={arrow}
          >
            <MdChevronRight aria-hidden className="size-6" />
          </button>
        </div>
      )}
    </div>
  );
}
