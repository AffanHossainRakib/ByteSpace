import { MdKeyboardArrowDown } from "react-icons/md";
import { badgeVariants } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function ScopeSelect({ value }: { value?: string }) {
  return (
    <label className="relative block">
      <span className="sr-only">Search in</span>
      <select
        name="scope"
        defaultValue={value === "creators" ? "creators" : "courses"}
        className={cn(
          badgeVariants({ variant: "lime", size: "md" }),
          "h-11.5 w-full cursor-pointer appearance-none py-0 pr-12 pl-6 text-lg type-label-l hover:bg-lime-300 focus-visible:ring-3 focus-visible:ring-white/70 focus-visible:outline-none md:w-auto",
        )}
      >
        <option value="courses">Courses</option>
        <option value="creators">Creators</option>
      </select>
      <MdKeyboardArrowDown
        aria-hidden
        className="pointer-events-none absolute top-1/2 right-5 size-6 -translate-y-1/2 text-gray-950"
      />
    </label>
  );
}
