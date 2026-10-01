import Image from "next/image";
import Link from "next/link";
import {
  MdConnectWithoutContact,
  MdOutlineBadge,
  MdOutlineTopic,
  MdOutlineVideocam,
} from "react-icons/md";
import { Button } from "@/components/ui/button";
import { badgeVariants } from "@/components/ui/badge";
import { courseDetail as d, type Course } from "@/config/courses";
import { cn } from "@/lib/utils";
import { IconList } from "./icon-list";

const icon = "size-6 shrink-0 text-blue-800";
const includes = [
  {
    text: "Learning Resources",
    icon: <MdOutlineTopic aria-hidden className={icon} />,
  },
  {
    text: "Quality Lesson Videos",
    icon: <MdOutlineVideocam aria-hidden className={icon} />,
  },
  {
    text: "Certificate of Completion",
    icon: <MdOutlineBadge aria-hidden className={icon} />,
  },
  {
    text: "Private Consultation",
    icon: <MdConnectWithoutContact aria-hidden className={icon} />,
  },
];

export function CourseSidebar({ course }: { course: Course }) {
  return (
    <div className="flex flex-col gap-6 rounded-3xl border border-gray-200 bg-white p-6 md:p-10">
      <h2 className="type-heading-xs text-gray-950">{d.totalLessons}</h2>
      <ol className="-mt-2 flex flex-col gap-3">
        {d.preview.map((lesson, i) => (
          <li
            key={lesson.title}
            className="flex items-start justify-between gap-4"
          >
            <span className="flex gap-2 type-label-m text-gray-950">
              <span>{String(i + 1).padStart(2, "0")}</span>
              <span>{lesson.title}</span>
            </span>
            <span className="shrink-0 type-body-m text-blue-800">
              {lesson.length}
            </span>
          </li>
        ))}
        <li>
          <Link
            href="?tab=lessons"
            scroll={false}
            className="type-body-m text-gray-700 hover:text-blue-800"
          >
            {d.moreVideos} more videos
          </Link>
        </li>
      </ol>

      <p className="type-body-m text-gray-700">{d.pitch}</p>
      <p className="-my-2 flex items-baseline">
        <span className="type-heading-s text-blue-800">${course.price}</span>
        <span className="type-body-m text-gray-700">/lifetime</span>
      </p>
      <Button asChild size="pill" className="w-full">
        <Link href="/login">Enroll Now</Link>
      </Button>

      <h3 className="type-heading-xs text-gray-950">This course includes</h3>
      <IconList items={includes} className="-mt-2" />

      <div className="flex flex-col gap-6 border-t border-gray-200 pt-6">
        <div className="flex items-center gap-3">
          <Image
            src="/images/avatars/creator-purepearl.png"
            alt=""
            width={52}
            height={52}
            className="size-13 rounded-full object-cover"
          />
          <div>
            <p className="type-label-l text-gray-950">PurePearl Studio</p>
            <p className="type-body-m text-gray-700">Professional Creator</p>
          </div>
        </div>
        <p className="type-body-m text-gray-700">{d.pitch}</p>
        <Link
          href="/creators/purepearl-studio"
          className={cn(
            badgeVariants({ variant: "outline" }),
            "h-auto w-fit bg-white px-4 py-2 text-sm type-label-s text-gray-950 hover:bg-gray-50",
          )}
        >
          See Full Profile
        </Link>
      </div>
    </div>
  );
}
