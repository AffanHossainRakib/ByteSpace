import type { ReactNode } from "react";
import {
  MdFilterAlt,
  MdOutlineCategory,
  MdSignalCellularAlt,
  MdSort,
} from "react-icons/md";
import { categories, slugify } from "@/config/courses";
import {
  levelOptions,
  ratingFilters,
  sorts,
  withParams,
  type CourseParams,
} from "@/lib/course-filters";
import { ToolbarMenu } from "./toolbar-menu";

type Key = "rating" | "level" | "category" | "sort";

export function CourseToolbar({ params }: { params: CourseParams }) {
  const menu = (
    key: Key,
    label: string,
    icon: ReactNode,
    options: readonly { value: string; label: string }[],
    allLabel?: string,
    compact?: boolean,
  ) => {
    const active = options.find((o) => o.value === params[key]);
    const items = [
      ...(allLabel
        ? [
            {
              label: allLabel,
              href: withParams("/courses", params, { [key]: undefined }),
              active: !active,
            },
          ]
        : []),
      ...options.map((o) => ({
        label: o.label,
        href: withParams("/courses", params, { [key]: o.value }),
        active:
          o.value === params[key] ||
          (key === "sort" && !params.sort && o.value === "relevant"),
      })),
    ];
    return (
      <ToolbarMenu
        icon={icon}
        label={active && key !== "sort" ? active.label : label}
        items={items}
        highlighted={Boolean(active) && key !== "sort"}
        compact={compact}
      />
    );
  };

  const categoryOptions = categories.map((c) => ({
    value: slugify(c),
    label: c,
  }));
  const sortLabel =
    sorts.find((s) => s.value === params.sort)?.label ?? "Most relevant";

  return (
    <div className="flex items-center justify-between gap-3">
      <div className="-ml-4 flex min-w-0 gap-3 overflow-x-auto py-1 pl-4 md:ml-0 md:gap-4 md:overflow-visible md:pl-0">
        {menu(
          "rating",
          "Filter",
          <MdFilterAlt aria-hidden />,
          ratingFilters,
          "Any rating",
        )}
        {menu(
          "level",
          "Level",
          <MdSignalCellularAlt aria-hidden />,
          levelOptions,
          "All levels",
        )}
        {menu(
          "category",
          "Category",
          <MdOutlineCategory aria-hidden />,
          categoryOptions,
          "All categories",
        )}
      </div>
      <div className="shrink-0">
        {menu(
          "sort",
          sortLabel,
          <MdSort aria-hidden />,
          sorts,
          undefined,
          true,
        )}
      </div>
    </div>
  );
}
