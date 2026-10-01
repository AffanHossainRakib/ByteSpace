import { ImageResponse } from "next/og";
import { brandMark } from "@/lib/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default async function Icon() {
  return new ImageResponse(await brandMark(512), size);
}
