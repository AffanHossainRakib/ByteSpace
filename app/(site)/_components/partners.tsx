import Image from "next/image";

export function Partners() {
  return (
    <section aria-label="Our partners" className="bg-gray-50 py-10 md:py-20">
      <ul className="reveal container-page flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-18">
        {[1, 2, 3, 4, 5].map((n) => (
          <li key={n}>
            <Image
              src={`/images/partners/logo-${n}.svg`}
              alt="Partner logo"
              width={168}
              height={41}
              className="h-8 w-auto md:h-10.25"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
