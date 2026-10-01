import { ImageResponse } from "next/og";
import { brandMark } from "@/lib/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  return new ImageResponse(await brandMark(180), size);
}
