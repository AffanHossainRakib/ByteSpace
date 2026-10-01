import { cn } from "@/lib/utils";

export function FormStatus({
  status,
  message,
  id,
  className,
}: {
  status: string;
  message?: string;
  id?: string;
  className?: string;
}) {
  return (
    <p
      id={id}
      role="status"
      className={cn(
        "type-body-s empty:hidden",
        status === "error" ? "text-destructive" : "text-blue-800",
        className,
      )}
    >
      {message}
    </p>
  );
}
