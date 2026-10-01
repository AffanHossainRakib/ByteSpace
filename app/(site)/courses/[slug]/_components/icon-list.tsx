import type { ReactNode } from "react";
import { MdCheckCircle } from "react-icons/md";
import { cn } from "@/lib/utils";

export function IconList({
  items,
  className,
}: {
  items: { text: string; icon?: ReactNode }[];
  className?: string;
}) {
  return (
    <ul className={cn("flex flex-col gap-3", className)}>
      {items.map(({ text, icon }) => (
        <li
          key={text}
          className="flex items-center gap-2 type-body-m text-gray-700"
        >
          {icon ?? (
            <MdCheckCircle
              aria-hidden
              className="size-6 shrink-0 text-blue-800"
            />
          )}
          {text}
        </li>
      ))}
    </ul>
  );
}
