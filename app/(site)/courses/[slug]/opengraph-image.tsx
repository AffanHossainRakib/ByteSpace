import { courseDetail, courses, getCourse } from "@/config/courses";
import { ogCard, ogSize } from "@/lib/og";

export const alt = "ByteSpace course";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return courses.map(({ slug }) => ({ slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const course = getCourse((await params).slug) ?? courses[0];
  return ogCard({
    eyebrow: `${course.level} · $${course.price} lifetime`,
    title: course.title,
    subtitle: `by ${course.creator} · Rated ${courseDetail.rating}/5 · ${course.lessons} lessons`,
    photo: course.image,
  });
}
