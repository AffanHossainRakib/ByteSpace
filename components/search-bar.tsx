import type { ReactNode } from "react";
import { MdSearch } from "react-icons/md";
import { cn } from "@/lib/utils";

export function SearchBar({
  defaultValue,
  placeholder,
  children,
  className,
}: {
  defaultValue?: string;
  placeholder: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <form
      action="/courses"
      role="search"
      className={cn(
        "flex w-full flex-col gap-3 md:flex-row md:items-center md:gap-4",
        className,
      )}
    >
      <label className="flex h-13 w-full items-center gap-2 rounded-3xl bg-white px-6 text-gray-400 focus-within:ring-3 focus-within:ring-lime-400 md:flex-1">
        <MdSearch aria-hidden className="size-6 shrink-0" />
        <span className="sr-only">Search courses</span>
        <input
          type="search"
          name="q"
          defaultValue={defaultValue}
          placeholder={placeholder}
          className="w-full min-w-0 bg-transparent type-body-l text-gray-950 outline-none placeholder:text-gray-400"
        />
      </label>
      {children}
    </form>
  );
}
