import Link from "next/link";
import { ScrollRow } from "@/components/scroll-row";
import { badgeVariants } from "@/components/ui/badge";
import { categories, slugify } from "@/config/courses";
import { withParams, type CourseParams } from "@/lib/course-filters";
import { cn } from "@/lib/utils";

const pills = [
  { label: "Featured", slug: undefined },
  ...categories.map((c) => ({ label: c, slug: slugify(c) })),
];

export function CategoryPills({ params }: { params: CourseParams }) {
  return (
    <nav aria-label="Course categories">
      <ScrollRow
        label="categories"
        className="-mx-4 md:-mx-8 lg:mx-0"
        rowClassName="px-4 md:px-8 lg:px-0"
      >
        <ul className="flex w-max gap-4">
          {pills.map(({ label, slug }) => {
            const on = slug === params.category;
            return (
              <li key={label}>
                <Link
                  href={withParams("/courses", params, { category: slug })}
                  aria-current={on ? "page" : undefined}
                  className={cn(
                    badgeVariants({
                      variant: on ? "lime" : "gray",
                      size: "md",
                    }),
                    on ? "hover:bg-lime-300" : "hover:bg-gray-100",
                  )}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </ScrollRow>
    </nav>
  );
}
