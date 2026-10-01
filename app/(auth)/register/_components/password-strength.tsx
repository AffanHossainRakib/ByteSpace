import { passwordStrength } from "@/lib/validation";
import { cn } from "@/lib/utils";

const colors = [
  "bg-gray-200",
  "bg-destructive",
  "bg-amber-500",
  "bg-lime-500",
  "bg-blue-800",
];

export function PasswordStrength({ value }: { value: string }) {
  if (!value) return null;
  const { score, label } = passwordStrength(value);
  return (
    <div className="flex items-center gap-3" aria-live="polite">
      <div className="flex flex-1 gap-1.5" aria-hidden="true">
        {[1, 2, 3, 4].map((n) => (
          <span
            key={n}
            className={cn(
              "h-1.5 flex-1 rounded-full transition-colors",
              n <= score ? colors[score] : "bg-gray-100",
            )} 
          />
        ))}
      </div>
      <span className="w-20 text-right type-body-xs text-gray-700">
        <span className="sr-only">Password strength: </span>
        {label}
      </span>
    </div>
  );
}
