import { CourseCard } from "@/components/course-card";
import type { Course } from "@/config/courses";

export function CourseGrid({
  courses,
  preloadFirst,
}: {
  courses: Course[];
  preloadFirst?: boolean;
}) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
      {courses.map((course, i) => (
        <CourseCard
          key={course.slug}
          course={course}
          preload={preloadFirst && i < 3}
          className="reveal"
        />
      ))}
    </div>
  );
}
