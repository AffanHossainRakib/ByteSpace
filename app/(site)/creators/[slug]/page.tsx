import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CourseGrid } from "@/components/course-grid";
import { CourseToolbar } from "@/components/course-toolbar";
import { Pagination } from "@/components/pagination";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { courses } from "@/config/courses";
import { creators, getCreator } from "@/config/creators";
import {
  filterCourses,
  paginate,
  readParams,
  withParams,
} from "@/lib/course-filters";
import { FollowButton } from "./_components/follow-button";

const PAGE_SIZE = 6;

export function generateStaticParams() {
  return creators.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/creators/[slug]">): Promise<Metadata> {
  const creator = getCreator((await params).slug);
  if (!creator) return { title: "Creator not found" };
  const title = creator.name;
  const description = `${creator.role}. Explore courses by ${creator.name} on ByteSpace.`;
  const url = `/creators/${creator.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "ByteSpace",
      type: "profile",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function CreatorPage({
  params,
  searchParams,
}: PageProps<"/creators/[slug]">) {
  const { slug } = await params;
  const creator = getCreator(slug);
  if (!creator) notFound();

  const path = `/creators/${slug}`;
  const query = readParams(await searchParams);
  const own = courses.filter(
    (c) => c.creator.toLowerCase() === creator.name.toLowerCase(),
  );
  const results = filterCourses(own, query);
  const { page, pages, items } = paginate(results, query.page, PAGE_SIZE);

  return (
    <main id="main" tabIndex={-1}>
      <section className="bg-grid pt-28 pb-12 md:pt-32 lg:pt-43 lg:pb-20.5">
        <div className="container-page flex flex-col gap-8 text-gray-50 md:gap-10">
          <div className="flex max-w-225.5 flex-col gap-8 md:gap-10">
            <div className="flex items-center gap-4 md:gap-6">
              <Image
                src={creator.avatar}
                alt=""
                width={96}
                height={96}
                preload
                className="size-18 shrink-0 rounded-3xl object-cover md:size-24"
              />
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="type-heading-xs md:type-heading-s">
                    {creator.name}
                  </h1>
                  <Badge variant="lime" size="pill">
                    Creator
                  </Badge>
                </div>
                <p className="type-body-m md:type-body-l">{creator.role}</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 type-body-m md:type-body-l">
              {creator.bio.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <ul className="flex gap-4">
              <li>
                <Badge variant="white" size="lg">
                  <span className="text-blue-800">{creator.products}</span>{" "}
                  Products
                </Badge>
              </li>
              <li>
                <Badge variant="white" size="lg">
                  <span className="text-blue-800">{creator.followers}</span>{" "}
                  Followers
                </Badge>
              </li>
            </ul>
            <FollowButton />
          </div>
        </div>
      </section>

      <div className="container-page flex flex-col gap-10 py-12 md:py-15.5">
        <h2 className="sr-only">Courses by {creator.name}</h2>
        <CourseToolbar path={path} params={query} />
        {items.length ? (
          <CourseGrid courses={items} />
        ) : (
          <div className="flex flex-col items-center gap-5 rounded-3xl bg-gray-50 p-10 text-center">
            <p className="type-body-l text-gray-700">
              No courses match these filters.
            </p>
            <Button asChild size="pill">
              <Link href={path}>Clear filters</Link>
            </Button>
          </div>
        )}
        <div className="pt-4 md:pt-10">
          <Pagination
            page={page}
            pages={pages}
            hrefFor={(n) => withParams(path, query, { page: String(n) })}
          />
        </div>
      </div>
    </main>
  );
}
