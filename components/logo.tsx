import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

function mask(file: string, size = "contain"): CSSProperties {
  const value = `url(/logo/${file}) left top / ${size} no-repeat`;
  return { mask: value, WebkitMask: value };
}

export function Logo({
  markOnly,
  className,
}: {
  markOnly?: boolean;
  className?: string;
}) {
  if (markOnly) {
    return (
      <span
        role="img"
        aria-label="ByteSpace"
        className={cn("block aspect-30/32 bg-lime-400", className)}
        style={mask("logo-mark.svg")}
      />
    );
  }
  return (
    <span
      role="img"
      aria-label="ByteSpace"
      className={cn("relative block aspect-171/35", className)}
    >
      <span
        className="absolute inset-0 bg-lime-400"
        style={mask("logo-mark.svg", "auto 91.43%")}
      />
      <span
        className="absolute inset-0 bg-current"
        style={mask("logo-wordmark.svg")}
      />
    </span>
  );
}
