import Link from "next/link";
import {
  MdBusiness,
  MdConnectWithoutContact,
  MdDesignServices,
  MdDeveloperMode,
  MdLaptop,
  MdOutlinePhotoCameraFront,
} from "react-icons/md";
import { SectionHeading } from "./section-heading";

const paths = [
  { label: "Design", Icon: MdDesignServices, slug: "design" },
  { label: "Development", Icon: MdDeveloperMode, slug: "development" },
  { label: "IT & Software", Icon: MdLaptop, slug: "it-software" },
  { label: "Business", Icon: MdBusiness, slug: "business" },
  { label: "Marketing", Icon: MdConnectWithoutContact, slug: "marketing" },
  {
    label: "Photography",
    Icon: MdOutlinePhotoCameraFront,
    slug: "photography",
  },
];

export function LearningPaths() {
  return (
    <section className="pb-16 md:pb-30">
      <div className="container-page flex flex-col gap-10 md:gap-17">
        <SectionHeading
          className="reveal"
          title={
            <span className="type-heading-s">
              Explore Diverse Learning Paths at Bytespace
            </span>
          }
        >
          At Bytespace, we believe in empowering individuals through knowledge.
          Our diverse range of courses spans various fields, ensuring
          there&apos;s something for everyone. Unleash your potential and
          explore our carefully curated categories.
        </SectionHeading>

        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-6 lg:gap-10">
          {paths.map(({ label, Icon, slug }) => (
            <li key={slug} className="reveal">
              <Link
                href={`/courses?category=${slug}`}
                prefetch={false}
                className="flex aspect-square flex-col items-center justify-center gap-3 rounded-3xl border border-gray-200 bg-white p-4 text-center transition-colors hover:border-lime-400 hover:bg-lime-50"
              >
                <span className="grid size-15 place-items-center rounded-full bg-lime-400">
                  <Icon aria-hidden className="size-9 text-gray-950" />
                </span>
                <span className="type-label-l text-gray-950 md:type-label-xl">
                  {label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
