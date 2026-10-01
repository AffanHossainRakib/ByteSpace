"use client";

import { useState } from "react";
import Link from "next/link";
import { CourseGrid } from "@/components/course-grid";
import { ScrollRow } from "@/components/scroll-row";
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

  return (
    <>
      <ScrollRow
        label="categories"
        className="-mx-4 md:mx-0"
        rowClassName="px-4 md:overflow-visible md:px-0"
      >
        <ToggleGroup
          type="single"
          value={active}
          onValueChange={(value) => value && setActive(value)}
          spacing={4}
          aria-label="Course categories"
          className="md:mx-auto md:w-auto md:max-w-272 md:flex-wrap md:justify-center md:gap-y-5"
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
            className="shrink-0 self-center px-2 type-label-m text-blue-800 hover:underline"
          >
            + More
          </Link>
        </ToggleGroup>
      </ScrollRow>

      <div className="mt-10 md:mt-19">
        <p className="sr-only" aria-live="polite">
          {list.length} {label} courses shown
        </p>
        {list.length ? (
          <CourseGrid courses={list} />
        ) : (
          <p className="rounded-3xl bg-gray-50 p-10 text-center type-body-l text-gray-700">
            No {label} courses yet.
          </p>
        )}
      </div>
    </>
  );
}
