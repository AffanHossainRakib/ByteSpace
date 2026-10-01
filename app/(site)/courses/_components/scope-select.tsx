"use client";

import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const options = [
  { value: "courses", label: "Courses" },
  { value: "creators", label: "Creators" },
];

export function ScopeSelect({ value }: { value?: string }) {
  const [scope, setScope] = useState(
    value === "creators" ? "creators" : "courses",
  );
  const label = options.find((o) => o.value === scope)?.label;

  return (
    <>
      <input type="hidden" name="scope" value={scope} />
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger
          aria-label={`Search in: ${label}`}
          className="flex h-11.5 w-full cursor-pointer items-center justify-center gap-2 rounded-3xl bg-lime-400 px-6 type-label-l text-gray-950 outline-none hover:bg-lime-300 focus-visible:ring-3 focus-visible:ring-white/70 md:w-auto"
        >
          {label}
          <MdKeyboardArrowDown aria-hidden className="size-6" />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="min-w-(--radix-dropdown-menu-trigger-width) rounded-2xl border-0 bg-white p-2 shadow-float"
        >
          <DropdownMenuRadioGroup value={scope} onValueChange={setScope}>
            {options.map((o) => (
              <DropdownMenuRadioItem
                key={o.value}
                value={o.value}
                className="rounded-xl py-2 pr-8 pl-3 text-base type-body-m text-gray-950 focus:bg-gray-50"
              >
                {o.label}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
