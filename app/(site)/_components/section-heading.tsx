import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  title,
  children,
  className,
}: {
  title: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto flex max-w-229.25 flex-col items-center gap-4 text-center",
        className,
      )}
    >
      <h2 className="text-[#040819]">{title}</h2>
      <p className="type-body-m text-gray-400 md:type-body-l">{children}</p>
    </div>
  );
}
