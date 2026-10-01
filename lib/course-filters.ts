import { levels, slugify, type Course } from "@/config/courses";

export type CourseParams = {
  q?: string;
  scope?: string;
  category?: string;
  level?: string;
  rating?: string;
  sort?: string;
  page?: string;
};

export const sorts = [
  { value: "relevant", label: "Most relevant" },
  { value: "newest", label: "Newest" },
  { value: "rating", label: "Highest rated" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
] as const;

export const ratingFilters = [
  { value: "4.5", label: "4.5 & up" },
  { value: "4", label: "4.0 & up" },
] as const;

const first = (v: string | string[] | undefined) =>
  Array.isArray(v) ? v[0] : v;

export function readParams(
  raw: Record<string, string | string[] | undefined>,
): CourseParams {
  const out: CourseParams = {};
  for (const key of [
    "q",
    "scope",
    "category",
    "level",
    "rating",
    "sort",
    "page",
  ] as const) {
    const value = first(raw[key])?.trim();
    if (value) out[key] = value.slice(0, 100);
  }
  return out;
}

export function filterCourses(all: Course[], p: CourseParams) {
  const q = p.q?.toLowerCase();
  const minRating = Number(p.rating) || 0;
  const list = all.filter(
    (c) =>
      (!q ||
        (p.scope === "creators"
          ? c.creator
          : `${c.title} ${c.category} ${c.creator}`
        )
          .toLowerCase()
          .includes(q)) &&
      (!p.category || slugify(c.category) === p.category) &&
      (!p.level || c.level.toLowerCase() === p.level) &&
      c.rating >= minRating,
  );
  const by: Record<string, (a: Course, b: Course) => number> = {
    newest: (a, b) => b.order - a.order,
    rating: (a, b) => b.rating - a.rating,
    "price-asc": (a, b) => a.price - b.price,
    "price-desc": (a, b) => b.price - a.price,
  };
  return by[p.sort ?? ""] ? [...list].sort(by[p.sort!]) : list;
}

export function paginate<T>(
  items: T[],
  pageParam: string | undefined,
  size: number,
) {
  const pages = Math.max(1, Math.ceil(items.length / size));
  const page = Math.min(pages, Math.max(1, Number(pageParam) || 1));
  return { page, pages, items: items.slice((page - 1) * size, page * size) };
}

export function withParams(
  path: string,
  current: CourseParams,
  change: Partial<CourseParams>,
) {
  const next: CourseParams = { ...current, ...change };
  if (!("page" in change)) delete next.page;
  const qs = new URLSearchParams(
    Object.entries(next).filter(
      (e): e is [string, string] =>
        Boolean(e[1]) && !(e[0] === "page" && e[1] === "1"),
    ),
  ).toString();
  return qs ? `${path}?${qs}` : path;
}

export const levelOptions = levels.map((l) => ({
  value: l.toLowerCase(),
  label: l,
}));
