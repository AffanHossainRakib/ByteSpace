"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { MdCheck } from "react-icons/md";
import { badgeVariants } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export function ToolbarMenu({
  icon,
  label,
  items,
  highlighted,
  compact,
}: {
  icon: ReactNode;
  label: string;
  items: { label: string; href: string; active: boolean }[];
  highlighted?: boolean;
  compact?: boolean;
}) {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger
        className={cn(
          badgeVariants({ variant: "outline", size: "md" }),
          "cursor-pointer bg-white text-gray-700 hover:bg-gray-50 data-[state=open]:bg-gray-50 [&_svg]:text-gray-950",
          highlighted && "border-blue-800 text-blue-800",
        )}
      >
        {icon}
        <span className={cn(compact && "sr-only sm:not-sr-only")}>{label}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="max-h-80 min-w-52 overflow-y-auto rounded-2xl p-2"
      >
        {items.map((item) => (
          <DropdownMenuItem
            key={item.href + item.label}
            asChild
            className="rounded-xl px-3 py-2 type-body-s"
          >
            <Link
              href={item.href}
              aria-current={item.active ? "true" : undefined}
            >
              <span className="flex-1">{item.label}</span>
              {item.active && (
                <MdCheck aria-hidden className="size-4 text-blue-800" />
              )}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
