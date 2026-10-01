import type { MetadataRoute } from "next";
import { courses } from "@/config/courses";
import { site } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/courses`, changeFrequency: "daily", priority: 0.9 },
    ...courses.map((c) => ({
      url: `${site.url}/courses/${c.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];
}
