import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MdOutlineGroup, MdSignalCellularAlt, MdStar } from "react-icons/md";
import { Badge } from "@/components/ui/badge";
import { courseDetail as d, getCourse } from "@/config/courses";
import { CourseSidebar } from "./_components/course-sidebar";
import { CourseTabs, tabs, type Tab } from "./_components/course-tabs";
import { ShareButton } from "./_components/share-button";
import {
  AboutPanel,
  LessonsPanel,
  ReviewsPanel,
} from "./_components/tab-panels";
import { VideoPreview } from "./_components/video-preview";

export async function generateMetadata({
  params,
}: PageProps<"/courses/[slug]">): Promise<Metadata> {
  const course = getCourse((await params).slug);
  if (!course) return { title: "Course not found" };
  const title = course.title;
  const description = `${d.subtitle}. ${course.lessons} lessons by ${course.creator}, ${course.level} level, $${course.price} lifetime access.`;
  const url = `/courses/${course.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "ByteSpace",
      type: "article",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

const one = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v);

export default async function CoursePage({
  params,
  searchParams,
}: PageProps<"/courses/[slug]">) {
  const course = getCourse((await params).slug);
  if (!course) notFound();

  const query = await searchParams;
  const tab: Tab =
    tabs.find((t) => t.value === one(query.tab))?.value ?? "about";
  const stars = Number(one(query.stars));
  const starFilter = stars >= 1 && stars <= 5 ? stars : undefined;
  const title = d.displayTitle;

  return (
    <main id="main" tabIndex={-1}>
      <section className="bg-grid pt-28 pb-10 md:pt-32 lg:pt-43 lg:pb-15.5">
        <div className="container-page flex flex-col gap-10 lg:gap-15">
          <div className="flex flex-col-reverse items-start justify-between gap-6 md:flex-row">
            <div className="flex max-w-200 flex-col gap-6 text-gray-50">
              <div className="flex flex-col gap-2">
                <h1 className="type-heading-s">{title}</h1>
                <p className="type-heading-xs">{d.subtitle}</p>
              </div>
              <p className="type-label-l text-[#f1f4fe]">
                by{" "}
                <Link
                  href="/creators/purepearl-studio"
                  className="focus-on-blue rounded-sm text-lime-400 hover:underline"
                >
                  {course.creator}
                </Link>
              </p>
              <ul className="flex flex-wrap gap-3 md:gap-4">
                <li>
                  <Badge variant="white" size="pill">
                    <MdSignalCellularAlt
                      aria-hidden
                      className="text-blue-800"
                    />
                    {d.level}
                  </Badge>
                </li>
                <li>
                  <Badge variant="white" size="pill">
                    <MdStar aria-hidden className="text-blue-800" />
                    {d.rating} ({d.reviewCount} reviews)
                  </Badge>
                </li>
                <li>
                  <Badge variant="white" size="pill">
                    <MdOutlineGroup aria-hidden className="text-blue-800" />
                    {d.studentTotal} Students
                  </Badge>
                </li>
              </ul>
            </div>
            <ShareButton title={title} />
          </div>
          <VideoPreview src={d.video} title={title} />
        </div>
      </section>

      <div className="container-page grid grid-cols-[minmax(0,1fr)] gap-10 pt-8 pb-16 lg:grid-cols-[minmax(0,1fr)_412px] lg:gap-x-15.75 lg:pt-0 lg:pb-20">
        <aside className="lg:col-start-2 lg:row-start-1 lg:-mt-135.25 lg:self-start">
          <CourseSidebar course={course} />
        </aside>
        <div className="flex min-w-0 flex-col gap-10 lg:col-start-1 lg:row-start-1 lg:pt-15.75">
          <CourseTabs active={tab} />
          <div className="flex flex-col gap-6">
            {tab === "about" && <AboutPanel />}
            {tab === "lessons" && <LessonsPanel />}
            {tab === "reviews" && <ReviewsPanel stars={starFilter} />}
          </div>
        </div>
      </div>
    </main>
  );
}
