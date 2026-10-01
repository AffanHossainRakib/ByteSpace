import { readFile } from "node:fs/promises";
import { join } from "node:path";

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
