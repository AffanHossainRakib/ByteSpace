import Image from "next/image";
import Link from "next/link";
import { MdOutlineVideocam, MdStar } from "react-icons/md";
import { ProgressBar } from "@/components/progress-bar";
import { ScrollRow } from "@/components/scroll-row";
import { courseDetail as d } from "@/config/courses";
import { cn } from "@/lib/utils";
import { pillLink, TabSection } from "./course-tabs";
import { IconList } from "./icon-list";
import { StarRating } from "./star-rating";

const body = "type-body-m text-gray-700";

export function AboutPanel() {
  return (
    <>
      <TabSection title="Description">
        <div className={cn(body, "flex flex-col gap-6")}>
          {d.description.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}
        </div>
      </TabSection>
      <TabSection title="Sneak Peek">
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {d.sneakPeek.map((src, i) => (
            <li
              key={src}
              className="aspect-167/125 overflow-hidden rounded-2xl bg-gray-100"
            >
              <Image
                src={src}
                alt={`Course preview ${i + 1}`}
                width={334}
                height={250}
                className="size-full object-cover"
              />
            </li>
          ))}
        </ul>
      </TabSection>
      <TabSection title="Key Points">
        <IconList items={d.keyPoints.map((text) => ({ text }))} />
      </TabSection>
    </>
  );
}

export function LessonsPanel() {
  return (
    <>
      <TabSection title="Explore the Modules">
        <p className={body}>{d.modulesIntro}</p>
      </TabSection>
      <TabSection title="Lesson List">
        <ol className="flex flex-col gap-6">
          {d.modules.map((m, i) => (
            <li key={m.title} className="flex items-start gap-3">
              <span className="grid size-14 shrink-0 place-items-center rounded-3xl bg-lime-400 md:size-18">
                <MdOutlineVideocam
                  aria-hidden
                  className="size-8 text-gray-950 md:size-10"
                />
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="type-label-m text-gray-950">
                  Module {i + 1}: {m.title}
                </h3>
                <p className={body}>{m.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </TabSection>
      <TabSection title="Lesson Content">
        <p className={body}>{d.lessonContent}</p>
      </TabSection>
      <TabSection title="Lesson Progress Tracking">
        <p className={body}>{d.progressText}</p>
        <div className="flex flex-col gap-2 rounded-2xl border border-gray-200 bg-white p-4">
          <p className="type-label-s text-gray-950">Learning Progress</p>
          <p className="type-heading-s text-gray-950">{d.progress - 1}%</p>
          <ProgressBar value={d.progress} className="bg-gray-100" />
        </div>
      </TabSection>
    </>
  );
}

export function ReviewsPanel({ stars }: { stars?: number }) {
  const total = Object.values(d.ratingCounts).reduce((a, b) => a + b, 0);
  const reviews = stars
    ? d.reviews.filter((r) => r.stars === stars)
    : d.reviews;
  const filters = [undefined, 5, 4, 3, 2, 1] as const;

  return (
    <>
      <TabSection title="What Learners Are Saying">
        <p className={body}>{d.reviewsIntro}</p>
        <div className="flex flex-col gap-6 rounded-2xl border border-gray-200 bg-white p-6 sm:flex-row sm:items-center md:p-10">
          <div className="flex flex-col items-center justify-center rounded-lg bg-lime-400 px-10 py-6 sm:h-35 sm:py-10">
            <p className="type-label-s text-gray-950">Ratings</p>
            <p className="type-heading-s text-gray-950">{d.ratingSummary}</p>
          </div>
          <ul className="flex flex-1 flex-col gap-1">
            {([5, 4, 3, 2, 1] as const).map((n) => (
              <li key={n} className="flex items-center gap-3 md:gap-4">
                <ProgressBar
                  value={(d.ratingCounts[n] / total) * 100}
                  className="flex-1 bg-gray-100"
                />
                <StarRating value={n} className="hidden md:flex" />
                <span className="flex items-center gap-1 md:hidden">
                  <MdStar aria-hidden className="size-4 text-gray-700" />
                  <span className="type-body-s text-gray-700">{n}</span>
                </span>
                <span className="w-10 text-right type-body-m text-gray-700">
                  {d.ratingCounts[n]}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </TabSection>

      <TabSection title="Individual Reviews:">
        <nav aria-label="Filter reviews by rating">
          <ScrollRow
            label="rating filters"
            className="-mx-4 md:mx-0"
            rowClassName="px-4 md:px-0"
          >
            <ul className="flex w-max gap-4">
              {filters.map((n) => (
                <li key={n ?? "all"}>
                  <Link
                    href={n ? `?tab=reviews&stars=${n}` : "?tab=reviews"}
                    scroll={false}
                    aria-current={n === stars ? "true" : undefined}
                    className={pillLink(n === stars)}
                  >
                    {n ? (
                      <>
                        <MdStar aria-hidden />
                        {n}
                        <span className="sr-only">stars</span>
                      </>
                    ) : (
                      "All rating"
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollRow>
        </nav>
        {reviews.length ? (
          <ul className="flex flex-col gap-6">
            {reviews.map((r) => (
              <li key={r.name}>
                <article className="flex flex-col gap-6 rounded-3xl border border-gray-200 bg-white p-6 md:p-10">
                  <header className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <Image
                        src={r.avatar}
                        alt=""
                        width={52}
                        height={52}
                        className="size-13 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="type-label-l text-gray-950">{r.name}</h3>
                        <p className={body}>{r.role}</p>
                      </div>
                    </div>
                    <p className="shrink-0 type-body-s text-gray-400">
                      {r.when}
                    </p>
                  </header>
                  <StarRating value={r.stars} />
                  <p className={body}>“{r.text}”</p>
                </article>
              </li>
            ))}
          </ul>
        ) : (
          <p className={cn(body, "rounded-3xl bg-gray-50 p-8 text-center")}>
            No {stars}-star reviews yet.
          </p>
        )}
      </TabSection>
    </>
  );
}
