import { ogCard, ogSize } from "@/lib/og";
import { courses } from "@/config/courses";

export const alt = "Find your next course on ByteSpace";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogCard({
    eyebrow: `${courses.length} courses`,
    title: "Find Your Next Course",
    subtitle:
      "Search and filter courses in design, development, data, marketing and more.",
    photo: "/images/courses/learn-figma.jpg",
  });
}
