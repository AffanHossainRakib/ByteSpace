import { ogCard, ogSize } from "@/lib/og";

export const alt = "ByteSpace: get access to hundreds of courses";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogCard({
    eyebrow: "Online courses",
    title: "Get Access to Hundreds Courses Available",
    subtitle:
      "Learn design, development, marketing and more from expert creators.",
    photo: "/images/hero/student.png",
  });
}
