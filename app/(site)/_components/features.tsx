import Image from "next/image";
import { MdCheckCircle } from "react-icons/md";
import { CourseCard } from "@/components/course-card";
import { ProgressBar } from "@/components/progress-bar";
import { HappyStudentsCard, ProgressCard } from "@/components/stat-cards";
import { courses } from "@/config/courses";
import { Glow } from "./glow";

const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const perks = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

const stageScale =
  "absolute top-0 left-0 origin-top-left scale-52 sm:scale-80 md:scale-100";

function RevenueCard({
  title,
  date,
  amount,
  bar,
}: {
  title: string;
  date: string;
  amount: string;
  bar?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2 rounded-2xl bg-blue-800 p-4 text-gray-50">
      <div>
        <p className="type-label-m">{title}</p>
        <p className="text-[10px] leading-[1.2]">{date}</p>
      </div>
      <div
        className={
          bar
            ? "flex items-center justify-between gap-2"
            : "flex flex-col gap-2"
        }
      >
        <p className="font-heading text-2xl leading-[1.33] font-semibold">
          {amount}
        </p>
        <span className="w-fit rounded-3xl bg-lime-500 px-2 py-0.5 text-[10px] leading-5 font-medium text-gray-950">
          +12$
        </span>
      </div>
      {bar && <ProgressBar value={56} className="w-50 bg-white" />}
    </div>
  );
}

export function Features() {
  return (
    <section className="relative overflow-clip bg-[#fafafa] py-16 md:py-30">
      <Glow
        color="lime"
        size={1137}
        className="hidden md:block"
        style={{ left: "calc(50% - 1288px)", top: -466 }}
      />
      <Glow
        color="blue"
        size={1137}
        className="hidden md:block"
        style={{ left: "calc(50% + 91px)", top: -458 }}
      />
      <Glow
        color="blue"
        size={1137}
        className="hidden md:block"
        style={{ left: "calc(50% - 1228px)", top: 183 }}
      />
      <Glow
        color="blue"
        size={1137}
        className="hidden md:block"
        style={{ left: "calc(50% + 2px)", top: 788 }}
      />
      <Glow
        color="lime"
        size={672}
        className="hidden md:block"
        style={{ left: "calc(50% - 1007px)", top: 946 }}
      />
      <Glow
        color="lime"
        size={600}
        className="md:hidden"
        style={{ left: -300, top: "5%" }}
      />
      <Glow
        color="blue"
        size={600}
        className="md:hidden"
        style={{ right: -300, top: "35%" }}
      />
      <Glow
        color="lime"
        size={600}
        className="md:hidden"
        style={{ left: -300, top: "70%" }}
      />

      <div className="container-page relative flex flex-col gap-16 md:gap-18">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-between lg:gap-16">
          <div className="reveal flex max-w-143.5 flex-col gap-6 md:gap-10">
            <h2 className="type-title text-gray-950">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="max-w-119.25 type-body-m text-gray-700 md:type-body-l">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>
            <dl className="flex gap-10 md:gap-14">
              {stats.map(({ value, label }) => (
                <div key={label} className="flex flex-col-reverse">
                  <dt className="type-body-m text-gray-700 md:type-body-l">
                    {label}
                  </dt>
                  <dd className="type-display-xs text-blue-800">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div
            aria-hidden="true"
            inert
            className="reveal relative mx-auto h-71.75 w-80.75 shrink-0 sm:h-110.5 sm:w-124.25 md:h-138 md:w-155.25 lg:mx-0 lg:-mr-14.5"
          >
            <div className={`${stageScale} h-138 w-155.25`}>
              <CourseCard
                course={courses[0]}
                badgeTone="dark"
                className="absolute top-0 left-0 w-93.25"
              />
              <Image
                src="/images/hero/student.png"
                alt=""
                width={577}
                height={540}
                className="absolute"
                style={{ left: 0, top: 12 }}
              />
              <ProgressCard
                className="absolute"
                style={{ left: 345, top: 213 }}
              />
              <Image
                src="/images/ornaments/squiggle-lime.png"
                alt=""
                width={215}
                height={215}
                className="absolute"
                style={{ left: 406, top: 67 }}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse items-center gap-10 lg:flex-row lg:justify-between lg:gap-20">
          <div
            aria-hidden="true"
            inert
            className="reveal relative mx-auto h-77.5 w-70.25 shrink-0 sm:h-119.25 sm:w-108.25 md:h-149 md:w-135.25 lg:mx-0"
          >
            <div className={`${stageScale} h-149 w-135.25`}>
              <div className="absolute" style={{ left: 0, top: 44 }}>
                <RevenueCard
                  title="Total Revenue"
                  date="July 1-28"
                  amount="$120.29"
                  bar
                />
              </div>
              <div className="absolute" style={{ left: 0, top: 194 }}>
                <RevenueCard
                  title="Year to Date"
                  date="2023"
                  amount="$1,200.38"
                />
              </div>
              <Image
                src="/images/home/creator.png"
                alt=""
                width={435}
                height={596}
                className="absolute object-cover"
                style={{ left: 28, top: 0, width: 435, height: 596 }}
              />
              <Image
                src="/images/ornaments/zigzag-lime.png"
                alt=""
                width={215}
                height={215}
                className="absolute"
                style={{ left: 305, top: 114 }}
              />
              <HappyStudentsCard
                className="absolute"
                style={{ left: 283, top: 413 }}
              />
            </div>
          </div>

          <div className="reveal flex max-w-145 flex-col gap-6 md:gap-10">
            <h2 className="max-w-98 type-title text-gray-950">
              Create &amp; Manage Courses Easily.
            </h2>
            <p className="type-body-m text-gray-700 md:type-body-l">
              <strong className="font-medium text-gray-950">ByteSpace</strong>{" "}
              supports individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>
            <ul className="flex flex-col gap-4">
              {perks.map((perk) => (
                <li
                  key={perk}
                  className="flex items-center gap-2 type-label-l text-gray-950"
                >
                  <MdCheckCircle aria-hidden className="size-6 text-blue-800" />
                  {perk}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
