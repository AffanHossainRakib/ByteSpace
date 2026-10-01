import type { Metadata } from "next";
import Link from "next/link";
import { CourseGrid } from "@/components/course-grid";
import { CourseToolbar } from "@/components/course-toolbar";
import { Pagination } from "@/components/pagination";
import { SearchBar } from "@/components/search-bar";
import { Button } from "@/components/ui/button";
import { courses } from "@/config/courses";
import {
  filterCourses,
  paginate,
  readParams,
  withParams,
} from "@/lib/course-filters";
import { CategoryPills } from "./_components/category-pills";
import { ScopeSelect } from "./_components/scope-select";

const title = "Find your next course";
const description =
  "Browse ByteSpace courses in design, development, marketing, photography and more. Filter by level and category.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/courses" },
  openGraph: {
    title,
    description,
    url: "/courses",
    siteName: "ByteSpace",
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description },
};

const PAGE_SIZE = 18;

export default async function CoursesPage({
  searchParams,
}: PageProps<"/courses">) {
  const params = readParams(await searchParams);
  const results = filterCourses(courses, params);
  const { page, pages, items } = paginate(results, params.page, PAGE_SIZE);
  const clearable = Object.keys(params).length > 0;

  return (
    <main id="main" tabIndex={-1}>
      <section className="bg-grid pt-28 pb-12 md:pt-32 lg:pt-41 lg:pb-17.25">
        <div className="container-page">
          <div className="mx-auto flex max-w-156 flex-col items-center gap-8 text-center">
            <h1 className="type-heading-s text-gray-50">
              Find Your Next Course
            </h1>
            <SearchBar placeholder="Search" defaultValue={params.q}>
              <ScopeSelect value={params.scope} />
            </SearchBar>
          </div>
        </div>
      </section>

      <div className="container-page flex flex-col gap-8 py-12 md:py-18">
        <h2 className="sr-only">Courses</h2>
        <CourseToolbar path="/courses" params={params} />
        <CategoryPills params={params} />

        <div className="flex h-5.5 items-center justify-between gap-4 type-body-s">
          <p className="text-gray-500" aria-live="polite">
            {results.length} {results.length === 1 ? "course" : "courses"}
            {params.q && <> for “{params.q}”</>}
          </p>
          {clearable ? (
            <Link
              href="/courses"
              className="rounded-sm text-blue-800 underline-offset-4 hover:underline"
            >
              Clear filters
            </Link>
          ) : (
            <span aria-disabled="true" className="cursor-default text-gray-300">
              Clear filters
            </span>
          )}
        </div>

        {items.length ? (
          <CourseGrid courses={items} preloadFirst />
        ) : (
          <div className="flex flex-col items-center gap-5 rounded-3xl bg-gray-50 p-10 text-center">
            <p className="type-body-l text-gray-700">
              No courses match these filters.
            </p>
            <Button asChild size="pill">
              <Link href="/courses">Clear filters</Link>
            </Button>
          </div>
        )}

        <div className="pt-4 md:pt-10">
          <Pagination
            page={page}
            pages={pages}
            hrefFor={(n) => withParams("/courses", params, { page: String(n) })}
          />
        </div>
      </div>
    </main>
  );
}
