export type Creator = {
  slug: string;
  name: string;
  role: string;
  avatar: string;
  bio: string[];
  products: number;
  followers: number;
};

export const creators: Creator[] = [
  {
    slug: "purepearl-studio",
    name: "PurePearl Studio",
    role: "Passionate UI/UX, Web designer",
    avatar: "/images/avatars/avatar-2.png",
    bio: [
      "Welcome to the creative world of PurePearl Studio. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!",
      "Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.",
    ],
    products: 3,
    followers: 12,
  },
];

export const getCreator = (slug: string) =>
  creators.find((c) => c.slug === slug);
