import { CourseCard } from "@/components/course-card";
import { HappyStudentsCard } from "@/components/stat-cards";
import { courses } from "@/config/courses";
import Image from "next/image";

export function AuthAside({
  title,
  children,
}: {
  title: string;
  children: string;
}) {
  return (
    <div className="flex w-full max-w-145 flex-col gap-4 text-center text-gray-50 lg:max-w-119 lg:text-left">
      <h2 className="type-heading-xs">{title}</h2>
      <p className="type-body-m md:type-body-l">{children}</p>

      <div
        aria-hidden="true"
        inert
        className="relative mt-17.75 -ml-6.25 hidden h-146.25 w-137 lg:block"
      >
        <CourseCard
          course={courses[1]}
          badgeTone="dark"
          preload
          className="absolute top-22.25 left-6.25 w-93.25"
        />
        <CourseCard
          course={courses[2]}
          badgeTone="dark"
          preload
          className="absolute top-0 left-34 w-93.25"
        />
        <HappyStudentsCard
          tone="lime"
          className="absolute top-108.75 left-62.75"
        />
        <Image
          src="/images/ornaments/zigzag-white.png"
          alt=""
          width={350}
          height={350}
          className="absolute top-80.25 left-93.25 w-43.75"
        />
        <Image
          src="/images/ornaments/torus-lime.png"
          alt=""
          width={292}
          height={292}
          className="absolute top-3.75 left-13.5 w-36.5"
        />
        <Image
          src="/images/ornaments/cone-lime.png"
          alt=""
          width={376}
          height={376}
          className="absolute top-99.25 left-0 w-47"
        />
      </div>
    </div>
  );
}
