import { creators } from "@/config/creators";
import { ogCard, ogSize } from "@/lib/og";

export const alt = "Meet the creators on ByteSpace";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogCard({
    eyebrow: `${creators.length} creator${creators.length === 1 ? "" : "s"}`,
    title: "Meet Our Creators",
    subtitle:
      "Learn from independent experts in design, development, data and more.",
    photo: creators[0].avatar,
  });
}
