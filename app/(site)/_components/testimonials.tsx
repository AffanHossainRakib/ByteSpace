import Image from "next/image";
import { Glow } from "./glow";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/images/avatars/avatar-9.png",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/images/avatars/avatar-11.png",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/images/avatars/avatar-12.png",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-clip bg-[#fafafa] py-16 md:pt-18.5 md:pb-14">
      <Glow
        color="lime"
        size={1137}
        className="hidden md:block"
        style={{ left: "calc(50% + 122px)", top: -241 }}
      />
      <Glow
        color="lime"
        size={672}
        className="hidden md:block"
        style={{ left: "calc(50% - 325px)", top: -138 }}
      />
      <Glow
        color="blue"
        size={1137}
        className="hidden md:block"
        style={{ left: "calc(50% - 1162px)", top: 149 }}
      />
      <Glow
        color="lime"
        size={600}
        className="md:hidden"
        style={{ right: -300, top: "0%" }}
      />
      <Glow
        color="blue"
        size={600}
        className="md:hidden"
        style={{ left: -300, top: "45%" }}
      />

      <div className="container-page relative flex flex-col gap-10 md:gap-18">
        <div className="reveal flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-11">
          <h2 className="max-w-144.25 type-title text-black">
            Discover What Our Community Is Saying
          </h2>
          <p className="max-w-145 type-body-m text-gray-700 md:type-body-l">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <ul
          aria-label="Testimonials"
          className="reveal no-scrollbar -mx-4 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:snap-none md:grid-cols-3 md:items-start md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:gap-10"
        >
          {testimonials.map(({ name, role, avatar, quote }) => (
            <li
              key={name}
              className="w-[85%] shrink-0 snap-start md:w-auto"
            >
              <figure className="flex h-full flex-col gap-6 rounded-3xl bg-white p-6">
                <Image
                  src={avatar}
                  alt=""
                  width={80}
                  height={80}
                  className="size-20 rounded-full object-cover"
                />
                <figcaption>
                  <p className="type-heading-xs text-black">{name}</p>
                  <p className="type-body-l text-blue-800">{role}</p>
                </figcaption>
                <blockquote className="type-body-m text-gray-700 md:type-body-l">
                  “{quote}”
                </blockquote>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
