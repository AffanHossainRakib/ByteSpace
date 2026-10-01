import { ImageResponse } from "next/og";
import { font, imageDataUrl } from "@/lib/og";

export const alt = "ByteSpace: get access to hundreds of courses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const grid =
  "linear-gradient(to right, rgba(255,255,255,0.12) 2px, transparent 2px), linear-gradient(to bottom, rgba(255,255,255,0.12) 2px, transparent 2px)";

export default async function Image() {
  const [poppins, satoshi, mark, photo] = await Promise.all([
    font("Poppins-SemiBold.ttf"),
    font("Satoshi-Medium.ttf"),
    imageDataUrl("/logo/logo-mark.svg"),
    imageDataUrl("/images/hero/student.png"),
  ]);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        gap: 56,
        padding: "72px 80px",
        backgroundColor: "#003be2",
        backgroundImage: grid,
        backgroundSize: "120px 120px",
        fontFamily: "Satoshi",
        color: "#f5f5f6",
      }}
    >
      <div
        style={{ flex: 1, display: "flex", flexDirection: "column", gap: 28 }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <img src={mark} alt="" width={44} height={48} />
          <span style={{ fontFamily: "Poppins", fontSize: 34 }}>ByteSpace</span>
        </div>
        <span
          style={{
            alignSelf: "flex-start",
            backgroundColor: "#d4fb20",
            color: "#242528",
            borderRadius: 999,
            padding: "8px 24px",
            fontSize: 24,
          }}
        >
          Online courses
        </span>
        <div
          style={{
            fontFamily: "Poppins",
            fontSize: 56,
            lineHeight: 1.15,
            letterSpacing: -1,
          }}
        >
          Get Access to Hundreds Courses Available
        </div>
        <div style={{ fontSize: 28, color: "#e5e6e8", lineHeight: 1.4 }}>
          Learn design, development, marketing and more from expert creators.
        </div>
      </div>
      <img
        src={photo}
        alt=""
        width={380}
        height={380}
        style={{
          objectFit: "cover",
          borderRadius: 32,
          border: "8px solid #d4fb20",
        }}
      />
    </div>,
    {
      ...size,
      fonts: [
        { name: "Poppins", data: poppins, weight: 600, style: "normal" },
        { name: "Satoshi", data: satoshi, weight: 500, style: "normal" },
      ],
    },
  );
}
