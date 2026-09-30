import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main
        id="main"
        tabIndex={-1}
        className="flex flex-1 flex-col justify-center bg-grid pt-30 pb-20 text-center md:pb-28 lg:pt-40 lg:pb-32"
      >
        <div className="container-page flex flex-col items-center">
          <p
            aria-hidden="true"
            className="mb-[-0.25em] bg-linear-to-b from-lime-400 via-lime-400/80 to-transparent bg-clip-text font-heading text-[clamp(10rem,33vw,30rem)] leading-none font-semibold text-transparent"
          >
            404
          </p>
          <h1 className="relative max-w-233.75 type-hero text-white">
            The page you are looking for doesn’t exist
          </h1>
          <p className="mt-4 type-body-m text-gray-100 md:mt-8 md:type-body-l">
            Try to use a correct url or go back to homepage to start again
          </p>
          <Button
            asChild
            size="pill"
            className="mt-8 focus-visible:ring-white/70"
          >
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </>
  );
}
