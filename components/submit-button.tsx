import type { ReactNode } from "react";
import { Loader2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SubmitButton({
  pending,
  pendingText,
  children,
  className,
}: {
  pending: boolean;
  pendingText: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Button
      type="submit"
      size="pill"
      disabled={pending}
      aria-busy={pending}
      className={cn("disabled:opacity-70", className)}
    >
      {pending && (
        <Loader2Icon
          className="size-5 animate-spin motion-reduce:animate-none"
          aria-hidden="true"
        />
      )}
      {pending ? pendingText : children}
    </Button>
  );
}
