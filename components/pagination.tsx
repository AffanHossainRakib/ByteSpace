import Link from "next/link";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { badgeVariants } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function Pagination({
  page,
  pages,
  hrefFor,
}: {
  page: number;
  pages: number;
  hrefFor: (page: number) => string;
}) {
  if (pages < 2) return null;
  const start = Math.min(Math.max(1, page - 2), Math.max(1, pages - 4));
  const numbers = Array.from(
    { length: Math.min(5, pages) },
    (_, i) => start + i,
  );
  const arrow = cn(
    badgeVariants({ variant: "outline", size: "md" }),
    "bg-white hover:bg-gray-50",
  );
  const disabled = "pointer-events-none opacity-40";

  return (
    <nav
      aria-label="Pagination"
      className="flex items-center justify-center gap-4 md:gap-6"
    >
      <Link
        href={hrefFor(page - 1)}
        aria-label="Previous page"
        aria-disabled={page === 1}
        className={cn(arrow, page === 1 && disabled)}
      >
        <MdArrowBackIosNew aria-hidden />
      </Link>
      <ol className="flex items-center gap-3 md:gap-6">
        {numbers.map((n) => (
          <li key={n}>
            <Link
              href={hrefFor(n)}
              aria-current={n === page ? "page" : undefined}
              className={cn(
                "block min-w-6 text-center type-heading-xs leading-[1.4] transition-colors",
                n === page
                  ? "text-gray-200"
                  : "text-gray-950 hover:text-blue-800",
              )}
            >
              {n}
            </Link>
          </li>
        ))}
      </ol>
      <Link
        href={hrefFor(page + 1)}
        aria-label="Next page"
        aria-disabled={page === pages}
        className={cn(arrow, page === pages && disabled)}
      >
        <MdArrowForwardIos aria-hidden />
      </Link>
    </nav>
  );
}
