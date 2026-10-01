import { creators, getCreator } from "@/config/creators";
import { ogCard, ogSize } from "@/lib/og";

export const alt = "ByteSpace creator profile";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return creators.map(({ slug }) => ({ slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const creator = getCreator((await params).slug) ?? creators[0];
  return ogCard({
    eyebrow: "Creator on ByteSpace",
    title: creator.name,
    subtitle: creator.role,
    photo: creator.avatar,
  });
}
