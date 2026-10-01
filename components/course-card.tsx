import Image from "next/image";
import Link from "next/link";
import { MdSignalCellularAlt, MdStar } from "react-icons/md";
import { AvatarStack } from "@/components/avatar-stack";
import { Badge } from "@/components/ui/badge";
import type { Course } from "@/config/courses";
import { cn } from "@/lib/utils";

export function CourseCard({
  course,
  badgeTone = "lime",
  className,
}: {
  course: Course;
  badgeTone?: "lime" | "dark";
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group relative flex flex-col gap-5 rounded-3xl border border-gray-200 bg-white p-4 transition-shadow hover:shadow-float",
        className,
      )}
    >
      <div className="relative aspect-341/195 overflow-hidden rounded-xl bg-gray-100">
        <Image
          src={course.image}
          alt=""
          width={341}
          height={195}
          className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <ul className="absolute inset-x-3 bottom-4 flex flex-wrap gap-3">
          {[
            `${course.lessons} Lessons`,
            course.duration,
            `${course.comments} Comments`,
          ].map((chip) => (
            <li key={chip}>
              <Badge variant="glass" size="chip">
                {chip}
              </Badge>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="truncate type-heading-xs text-gray-950">
              <Link
                href={`/courses/${course.slug}`}
                className="after:absolute after:inset-0 after:rounded-3xl"
              >
                {course.title}
              </Link>
            </h3>
            <p className="type-body-xs text-gray-700">
              by <span className="text-blue-800">{course.creator}</span>
            </p>
          </div>
          <p className="flex shrink-0 items-center gap-0.5 type-body-l text-gray-700">
            {course.rating}
            <MdStar aria-hidden className="size-5 text-gray-200" />
            <span className="sr-only">out of 5</span>
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Badge variant="gray" size="chip">
            <MdSignalCellularAlt aria-hidden className="size-5 text-gray-700" />
            {course.level}
          </Badge>
          <AvatarStack
            avatars={course.students}
            count={course.studentCount}
            tone={badgeTone}
          />
        </div>

        <p className="flex items-baseline">
          <span className="type-heading-xs text-blue-800">${course.price}</span>
          <span className="type-body-xs text-gray-700">/lifetime</span>
        </p>
      </div>
    </article>
  );
}
