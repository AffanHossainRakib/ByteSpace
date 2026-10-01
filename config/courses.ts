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

export const getCourse = (slug: string) => courses.find((c) => c.slug === slug);

export const courseDetail = {
  subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
  displayTitle: "Build Digital Asset: A Comprehensive Guide",
  level: "Intermediate",
  rating: 4.8,
  reviewCount: 172,
  studentTotal: 199,
  video: "/images/courses/video-thumbnail.jpg",
  totalLessons: "112 Lessons (24 hours)",
  preview: [
    { title: "Introduction to Digital Assets", length: "12 mins" },
    { title: "Design Principles for Impacts", length: "21 mins" },
    { title: "Advanced Techniques in Digital Creation", length: "16 mins" },
  ],
  moreVideos: 99,
  pitch: "Ready to Dive In? Enroll Now and Start Building Your Digital Future!",
  description: [
    "Embark on an enlightening exploration into the world of digital creation with our comprehensive course, “Build Digital Assets: A Comprehensive Guide.” This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.",
    "In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.",
    "As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.",
  ],
  sneakPeek: [1, 2, 3, 4].map((n) => `/images/courses/sneak-peek-${n}.jpg`),
  keyPoints: [
    "Foundational Concepts",
    "Design Principles Mastery",
    "Advanced Techniques in Digital Creation",
    "Project Showcase and Critique",
    "Optimizing for Various Platforms",
    "Digital Asset Management Best Practices",
    "Monetization Strategies",
    "Capstone Project: Building Your Portfolio",
  ],
  modulesIntro:
    "Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.",
  modules: [
    {
      title: "Introduction to Digital Assets",
      text: "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
    },
    {
      title: "Design Principles for Impact",
      text: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
    },
    {
      title: "User-Centric Design Strategies",
      text: "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
    },
    {
      title: "Interactive Media and Engagement",
      text: "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
    },
    {
      title: "Project Showcase and Critique",
      text: "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
    },
    {
      title: "Optimizing Digital Assets for Various Platforms",
      text: "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
    },
  ],
  lessonContent:
    "Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.",
  progressText:
    "Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.",
  progress: 56,
  reviewsIntro:
    "Discover what our learners have to say about their experience with ‘Build Digital Assets: A Comprehensive Guide.’ Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.",
  ratingSummary: 4.7,
  ratingCounts: { 5: 720, 4: 120, 3: 21, 2: 12, 1: 16 } as Record<
    1 | 2 | 3 | 4 | 5,
    number
  >,
  reviews: [
    {
      name: "PurePearl Studio",
      role: "UI/UX Designer",
      avatar: "/images/avatars/reviewer-1.png",
      stars: 5,
      when: "a year ago",
      text: "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!",
    },
    {
      name: "Albert Flores",
      role: "UI/UX Designer",
      avatar: "/images/avatars/reviewer-2.png",
      stars: 5,
      when: "a year ago",
      text: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
    },
    {
      name: "Cody Fisher",
      role: "UI/UX Designer",
      avatar: "/images/avatars/avatar-11.png",
      stars: 4,
      when: "a year ago",
      text: "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
    },
    {
      name: "Brooklyn Simmons",
      role: "UI/UX Designer",
      avatar: "/images/avatars/avatar-1.png",
      stars: 5,
      when: "a year ago",
      text: "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
    },
  ],
};
