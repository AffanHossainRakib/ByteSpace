import type { CSSProperties } from "react";
import Image from "next/image";
import { SearchBar } from "@/components/search-bar";
import { HappyStudentsCard, ProgressCard } from "@/components/stat-cards";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ornaments = [
  { name: "zigzag-lime", left: -118, top: -291, width: 385 },
  { name: "zigzag-white", left: 183, top: -35, width: 175 },
  { name: "torus-white", left: 18, top: 170, width: 342 },
  { name: "cylinder-lime", left: 1231, top: -291, width: 370 },
  { name: "cone-white", left: 1106, top: -48, width: 188 },
  { name: "squiggle-white", left: 1127, top: 160, width: 330 },
];

function CategoryCard({
  className,
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={cn("w-52 rounded-2xl bg-white p-4 text-gray-950", className)}
      style={style}
    >
      <p className="type-label-m">UI/UX Design</p>
      <p className="mt-0.5 flex items-center gap-2 type-body-xs text-gray-500">
        200 Courses <span className="text-[10px]">•</span> 1000+ Students
      </p>
    </div>
  );
}

export function Hero() {
  return (
    <section className="overflow-hidden bg-grid pt-28 md:pt-32 lg:pt-42">
      <div className="container-page relative z-10 flex flex-col items-center gap-8 text-center md:gap-10 lg:gap-15">
        <div className="flex max-w-233.75 flex-col items-center gap-4 md:gap-8">
          <h1 className="type-hero text-white">
            Get Access to Hundreds Courses Available
          </h1>
          <p className="max-w-204.75 type-body-m text-gray-100 md:type-body-l">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>
        </div>

        <SearchBar
          placeholder="Course, topic, creator"
          className="max-w-145.25"
        >
          <Button
            type="submit"
            size="pill"
            className="focus-visible:ring-white/70"
          >
            Search
          </Button>
        </SearchBar>
      </div>

      <div
        aria-hidden="true"
        className="relative mt-10 h-73 md:mt-12 md:h-100 lg:mt-0 lg:h-128"
      >
        <div className="absolute top-0 left-1/2 h-128 w-360 origin-top -translate-x-1/2 scale-[0.57] md:scale-[0.78] lg:scale-100">
          <div className="absolute top-17.5 left-36.5 size-287 rounded-full border-320 border-lime-500" />
          <Image
            src="/images/hero/student.png"
            alt=""
            width={578}
            height={541}
            preload
            className="absolute drop-shadow-2xl"
            style={{ left: 431, top: 0 }}
          />

          {ornaments.map((o) => (
            <Image
              key={o.name}
              src={`/images/ornaments/${o.name}.png`}
              alt=""
              width={780}
              height={780}
              sizes={`${o.width}px`}
              className="absolute hidden h-auto md:block"
              style={{ left: o.left, top: o.top, width: o.width }}
            />
          ))}

          <CategoryCard
            className="absolute hidden md:block"
            style={{ left: 404, top: 127 }}
          />
          <ProgressCard
            className="absolute hidden md:flex"
            style={{ left: 842, top: 139 }}
          />
          <HappyStudentsCard
            className="absolute hidden md:flex"
            style={{ left: 328, top: 325 }}
          />
        </div>

        <CategoryCard className="absolute top-1 left-1 origin-top-left scale-75 md:hidden" />
        <ProgressCard className="absolute top-28 right-1 origin-top-right scale-75 md:hidden" />
        <HappyStudentsCard className="absolute bottom-2 left-1 origin-bottom-left scale-75 md:hidden" />
      </div>
    </section>
  );
}
