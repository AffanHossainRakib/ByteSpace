"use client";

import { useState } from "react";
import { MdShare } from "react-icons/md";
import { badgeVariants } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function ShareButton({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  async function share() {
    const url = window.location.href;
    if (navigator.share) {
      await navigator.share({ title, url }).catch(() => {});
      return;
    }
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      type="button"
      onClick={share}
      className={cn(
        badgeVariants({ variant: "lime", size: "pill" }),
        "focus-on-blue shrink-0 cursor-pointer leading-normal hover:bg-lime-300",
      )}
    >
      <MdShare aria-hidden />
      <span aria-live="polite">{copied ? "Link copied" : "Share"}</span>
    </button>
  );
}
