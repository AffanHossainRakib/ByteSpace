import { cn } from "@/lib/utils";

export function ProgressBar({
  value,
  className,
}: {
  value: number;
  className?: string;
}) {
  return (
    <div className={cn("h-2 rounded-3xl bg-[#f6f6f6]", className)}>
      <div
        className="h-full rounded-3xl bg-lime-400"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
