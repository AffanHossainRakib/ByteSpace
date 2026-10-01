import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

const colors = {
  lime: "rgb(203 252 1 / 0.55)",
  blue: "rgb(0 59 226 / 0.22)",
};

export function Glow({
  color,
  size,
  style,
  className,
}: {
  color: keyof typeof colors;
  size: number;
  style: CSSProperties;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute rounded-full blur-2xl", className)}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(closest-side, ${colors[color]}, transparent)`,
        ...style,
      }}
    />
  );
}
