import type { CSSProperties } from "react";
import { MdStar } from "react-icons/md";
import { AvatarStack } from "@/components/avatar-stack";
import { ProgressBar } from "@/components/progress-bar";
import { cn } from "@/lib/utils";

const card = "rounded-2xl bg-white p-4 text-gray-950";

export function ProgressCard({
  className,
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={cn(card, "flex w-58 flex-col gap-2", className)}
      style={style}
    >
      <p className="type-label-s">Learning Progress</p>
      <p className="font-heading text-5xl leading-[1.2] font-semibold">55%</p>
      <ProgressBar value={55} />
    </div>
  );
}

const happyStudents = [1, 2, 3, 4, 5, 6, 7].map(
  (n) => `/images/avatars/avatar-${n}.png`,
);

export function HappyStudentsCard({
  className,
  style,
  tone = "white",
}: {
  className?: string;
  style?: CSSProperties;
  tone?: "white" | "lime";
}) {
  const lime = tone === "lime";
  return (
    <div
      className={cn(
        card,
        "flex w-64.5 flex-col gap-2",
        lime && "bg-lime-400",
        className,
      )}
      style={style}
    >
      <div>
        <p className="type-label-m">Happy Students</p>
        <p className="flex items-center gap-1 type-body-xs text-gray-500">
          4.5 (240){" "}
          <MdStar
            aria-hidden
            className={cn("size-3.5", lime ? "text-blue-800" : "text-lime-400")}
          />
        </p>
      </div>
      <AvatarStack
        avatars={happyStudents}
        count="2K+"
        size="lg"
        tone={lime ? "dark" : "lime"}
      />
    </div>
  );
}
