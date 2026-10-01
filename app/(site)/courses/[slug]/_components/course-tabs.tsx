import type { ReactNode } from "react";
import Link from "next/link";
import { badgeVariants } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export const tabs = [
  { value: "about", label: "About" },
  { value: "lessons", label: "Lessons" },
  { value: "reviews", label: "Reviews" },
] as const;
export type Tab = (typeof tabs)[number]["value"];

export function pillLink(on: boolean) {
  return cn(
    badgeVariants({ variant: on ? "lime" : "gray", size: "md" }),
    on ? "hover:bg-lime-300" : "hover:bg-gray-100",
  );
}

export function CourseTabs({ active }: { active: Tab }) {
  return (
    <nav aria-label="Course sections">
      <ul className="flex gap-4">
        {tabs.map(({ value, label }) => (
          <li key={value}>
            <Link
              href={value === "about" ? "?" : `?tab=${value}`}
              scroll={false}
              aria-current={value === active ? "page" : undefined}
              className={pillLink(value === active)}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function TabSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="type-heading-xs text-gray-950">{title}</h2>
      {children}
    </section>
  );
}
