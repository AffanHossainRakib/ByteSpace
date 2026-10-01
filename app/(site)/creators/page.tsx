import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { creators } from "@/config/creators";

const title = "Creators";
const description =
  "Meet the creators teaching on ByteSpace and explore their courses.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/creators" },
  openGraph: {
    title,
    description,
    url: "/creators",
    siteName: "ByteSpace",
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function CreatorsPage() {
  return (
    <main id="main" tabIndex={-1}>
      <section className="bg-grid pt-28 pb-12 md:pt-32 lg:pt-41 lg:pb-17.25">
        <div className="container-page">
          <div className="mx-auto flex max-w-156 flex-col items-center gap-4 text-center text-gray-50">
            <h1 className="type-heading-s">Meet Our Creators</h1>
            <p className="type-body-m md:type-body-l">
              Learn from independent experts in design, development, data and
              more.
            </p>
          </div>
        </div>
      </section>

      <div className="container-page py-12 md:py-18">
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {creators.map((c) => (
            <li key={c.slug} className="reveal">
              <Link
                href={`/creators/${c.slug}`}
                className="flex h-full flex-col gap-5 rounded-3xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-float"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={c.avatar}
                    alt=""
                    width={72}
                    height={72}
                    className="size-18 rounded-3xl object-cover"
                  />
                  <div className="min-w-0">
                    <h2 className="type-heading-xs text-gray-950">{c.name}</h2>
                    <p className="type-body-s text-gray-700">{c.role}</p>
                  </div>
                </div>
                <p className="line-clamp-3 type-body-m text-gray-700">
                  {c.bio[0]}
                </p>
                <div className="mt-auto flex gap-3">
                  <Badge variant="gray" size="chip">
                    <span className="text-blue-800">{c.products}</span> Products
                  </Badge>
                  <Badge variant="gray" size="chip">
                    <span className="text-blue-800">{c.followers}</span>{" "}
                    Followers
                  </Badge>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
