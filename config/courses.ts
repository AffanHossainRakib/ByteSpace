export const categories = [
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
  "Design",
  "Development",
  "IT & Software",
  "Business",
] as const;

export const levels = ["Beginner", "Intermediate", "Advanced"] as const;

export const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export type Course = {
  slug: string;
  title: string;
  image: string;
  category: string;
  creator: string;
  lessons: number;
  duration: string;
  comments: number;
  rating: number;
  level: string;
  students: string[];
  studentCount: string;
  price: number;
  order: number;
};

const bases = [
  {
    slug: "learn-figma-from-basic",
    title: "Learn Figma from Basic",
    image: "/images/courses/learn-figma.jpg",
    category: "UI/UX Design",
  },
  {
    slug: "build-digital-asset",
    title: "Build Digital Asset",
    image: "/images/courses/digital-asset.jpg",
    category: "Graphic Design",
  },
  {
    slug: "the-power-of-big-data",
    title: "The Power of Big Data",
    image: "/images/courses/big-data.jpg",
    category: "Data Science",
  },
  {
    slug: "balancing-productivity-and-self-care",
    title: "Balancing Productivity and Self-Care",
    image: "/images/courses/productivity.jpg",
    category: "Productivity",
  },
  {
    slug: "mastering-money-management",
    title: "Mastering Money Management",
    image: "/images/courses/money.jpg",
    category: "Freelance & Entrepreneurship",
  },
  {
    slug: "from-idea-to-startup-success",
    title: "From Idea to Startup Success",
    image: "/images/courses/startup.jpg",
    category: "Marketing",
  },
];

export const courses: Course[] = Array.from({ length: 90 }, (_, i) => {
  const base = bases[i % bases.length];
  const round = Math.floor(i / bases.length);
  return {
    ...base,
    category: round === 0 ? base.category : categories[i % categories.length],
    slug: round === 0 ? base.slug : `${base.slug}-${round + 1}`,
    creator: "purepearl studio",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: round === 0 ? 4.5 : Math.round((4 + ((i * 7) % 11) / 10) * 10) / 10,
    level: round === 0 ? "Beginner" : levels[i % 3],
    students: [2, 8, 9, 10].map((n) => `/images/avatars/avatar-${n}.png`),
    studentCount: "26+",
    price: round === 0 ? 25 : 15 + ((i * 13) % 8) * 5,
    order: i,
  };
});
