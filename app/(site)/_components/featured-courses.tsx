"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { CourseCard } from "@/components/course-card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { categories, courses, slugify } from "@/config/courses";

const pills = [
  { label: "Featured", slug: "featured" },
  ...categories.map((c) => ({ label: c, slug: slugify(c) })),
];

export function FeaturedCourses() {
  const [active, setActive] = useState("featured");
  const list = (
    active === "featured"
      ? courses
      : courses.filter((c) => slugify(c.category) === active)
  ).slice(0, 6);
  const label = pills.find((p) => p.slug === active)?.label;

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

  const fade =
    "pointer-events-none absolute inset-y-0 z-10 flex w-16 items-center pb-1 md:hidden";
  const arrow =
    "pointer-events-auto grid size-9 place-items-center rounded-full border border-gray-200 bg-white text-gray-950 shadow-sm";

  return (
    <>
      <div className="relative -mx-4 md:mx-0">
        <ToggleGroup
          ref={row}
          onScroll={updateEdges}
          type="single"
          value={active}
          onValueChange={(value) => value && setActive(value)}
          spacing={4}
          aria-label="Course categories"
          className="no-scrollbar w-auto overflow-x-auto px-4 pb-1 md:mx-auto md:max-w-272 md:flex-wrap md:justify-center md:gap-y-5 md:overflow-visible md:px-0"
        >
          {pills.map(({ label, slug }) => (
            <ToggleGroupItem
              key={slug}
              value={slug}
              className="h-auto rounded-3xl bg-gray-50 px-4 py-3 text-base type-label-m text-gray-700 hover:bg-gray-100 hover:text-gray-700 data-[state=on]:bg-lime-400 data-[state=on]:text-gray-950 data-[state=on]:hover:bg-lime-300"
            >
              {label}
            </ToggleGroupItem>
          ))}
          <Link
            href="/courses"
            prefetch={false}
            className="shrink-0 self-center px-2 type-label-m text-blue-800 hover:underline"
          >
            + More
          </Link>
        </ToggleGroup>
        {!edges.start && (
          <div
            className={`${fade} left-0 justify-start bg-linear-to-r from-white from-40% to-transparent pl-2`}
          >
            <button
              type="button"
              aria-label="Scroll categories left"
              onClick={() => scrollRow(-1)}
              className={arrow}
            >
              <MdChevronLeft aria-hidden className="size-6" />
            </button>
          </div>
        )}
        {!edges.end && (
          <div
            className={`${fade} right-0 justify-end bg-linear-to-l from-white from-40% to-transparent pr-2`}
          >
            <button
              type="button"
              aria-label="Scroll categories right"
              onClick={() => scrollRow(1)}
              className={arrow}
            >
              <MdChevronRight aria-hidden className="size-6" />
            </button>
          </div>
        )}
      </div>

      <div className="mt-10 md:mt-19">
        <p className="sr-only" aria-live="polite">
          {list.length} {label} courses shown
        </p>
        {list.length ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {list.map((course) => (
              <CourseCard
                key={course.slug}
                course={course}
                className="reveal"
              />
            ))}
          </div>
        ) : (
          <p className="rounded-3xl bg-gray-50 p-10 text-center type-body-l text-gray-700">
            No {label} courses yet.
          </p>
        )}
      </div>
    </>
  );
}
