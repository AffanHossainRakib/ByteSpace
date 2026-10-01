import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

const types: Record<string, string> = {
  png: "image/png",
  jpg: "image/jpeg",
  svg: "image/svg+xml",
};

export async function imageDataUrl(publicPath: string) {
  const bytes = await readFile(join(process.cwd(), "public", publicPath));
  const type = types[publicPath.split(".").pop() ?? ""] ?? "image/png";
  return `data:${type};base64,${bytes.toString("base64")}`;
}

export const font = (file: string) =>
  readFile(join(process.cwd(), "assets/fonts", file));

export async function brandMark(px: number) {
  const mark = await imageDataUrl("/logo/logo-mark.svg");
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#003be2",
      }}
    >
      <img src={mark} alt="" width={px * 0.5} height={px * 0.53} />
    </div>
  );
}

export const ogSize = { width: 1200, height: 630 };

const grid =
  "linear-gradient(to right, rgba(255,255,255,0.12) 2px, transparent 2px), linear-gradient(to bottom, rgba(255,255,255,0.12) 2px, transparent 2px)";

export async function ogCard({
  eyebrow,
  title,
  subtitle,
  photo,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  photo: string;
}) {
  const [poppins, satoshi, mark, image] = await Promise.all([
    font("Poppins-SemiBold.ttf"),
    font("Satoshi-Medium.ttf"),
    imageDataUrl("/logo/logo-mark.svg"),
    imageDataUrl(photo),
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
          {eyebrow}
        </span>
        <div
          style={{
            fontFamily: "Poppins",
            fontSize: 56,
            lineHeight: 1.15,
            letterSpacing: -1,
          }}
        >
          {title}
        </div>
        <div style={{ fontSize: 28, color: "#e5e6e8", lineHeight: 1.4 }}>
          {subtitle}
        </div>
      </div>
      <img
        src={image}
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
      ...ogSize,
      fonts: [
        { name: "Poppins", data: poppins, weight: 600, style: "normal" },
        { name: "Satoshi", data: satoshi, weight: 500, style: "normal" },
      ],
    },
  );
}
