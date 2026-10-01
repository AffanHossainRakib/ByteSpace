import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const ornaments = [
  { name: "zigzag-lime", left: -118, top: -162, width: 385 },
  { name: "zigzag-white", left: 178, top: 5, width: 175 },
  { name: "pyramid-white", left: -48, top: 225, width: 188 },
  { name: "torus-lime", left: 20, top: 299, width: 342 },
  { name: "cone-lime", left: 1080, top: 0, width: 188 },
  { name: "cylinder-white", left: 1226, top: 6, width: 370 },
  { name: "squiggle-lime", left: 1110, top: 289, width: 330 },
];

export function CreatorCta() {
  return (
    <section className="relative overflow-clip bg-grid py-16 md:py-21">
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 hidden h-122 w-360 origin-top -translate-x-1/2 md:block md:scale-78 lg:scale-100"
      >
        {ornaments.map((o) => (
          <Image
            key={o.name}
            src={`/images/ornaments/${o.name}.png`}
            alt=""
            width={o.width}
            height={o.width}
            className="absolute"
            style={{ left: o.left, top: o.top }}
          />
        ))}
      </div>

      <div className="reveal container-page relative flex flex-col items-center gap-8 text-center md:gap-10">
        <h2 className="max-w-177.5 type-title text-gray-50">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="max-w-241 type-body-m text-gray-50 md:type-body-l">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>
        <Button asChild size="pill" className="focus-visible:ring-white/70">
          <Link href="/register" prefetch={false}>
            Join as Creator
          </Link>
        </Button>
      </div>
    </section>
  );
}
