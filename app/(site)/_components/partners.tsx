import Image from "next/image";

const logos = [
  { n: 1, width: 167, height: 41 },
  { n: 2, width: 168, height: 41 },
  { n: 3, width: 170, height: 41 },
  { n: 4, width: 170, height: 41 },
  { n: 5, width: 169, height: 42 },
];

export function Partners() {
  return (
    <section aria-label="Our partners" className="bg-gray-50 py-10 md:py-20">
      <ul className="reveal container-page flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-18">
        {logos.map(({ n, width, height }) => (
          <li key={n}>
            <Image
              src={`/images/partners/logo-${n}.svg`}
              alt="Partner logo"
              width={width}
              height={height}
              className="h-8 w-auto md:h-10.25"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
