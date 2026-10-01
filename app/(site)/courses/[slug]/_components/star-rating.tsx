import { MdStar } from "react-icons/md";
import { cn } from "@/lib/utils";

export function StarRating({
  value,
  className,
}: {
  value: number;
  className?: string;
}) {
  return (
    <span
      role="img"
      aria-label={`${value} out of 5 stars`}
      className={cn("flex gap-1", className)}
    >
      {[1, 2, 3, 4, 5].map((n) => (
        <MdStar
          key={n}
          aria-hidden
          className={cn(
            "size-6",
            n <= value ? "text-gray-700" : "text-gray-200",
          )}
        />
      ))}
    </span>
  );
}
