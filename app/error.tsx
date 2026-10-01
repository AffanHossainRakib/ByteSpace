"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <Navbar />
      <main
        id="main"
        tabIndex={-1}
        className="flex flex-1 flex-col justify-center bg-grid pt-30 pb-20 text-center md:pb-28 lg:pt-40 lg:pb-32"
      >
        <div className="container-page flex flex-col items-center gap-6">
          <h1 className="max-w-233.75 type-hero text-white">
            Something went wrong
          </h1>
          <p className="type-body-m text-gray-100 md:type-body-l">
            Please try again. If it keeps happening, come back in a few minutes.
          </p>
          {error.digest && (
            <p className="type-body-xs text-gray-200">
              Error reference: {error.digest}
            </p>
          )}
          <div className="mt-2 flex flex-wrap justify-center gap-4">
            <Button
              size="pill"
              onClick={() => retry()}
              className="focus-visible:ring-white/70"
            >
              Try again
            </Button>
            <Button
              asChild
              size="pill"
              variant="outline"
              className="border-white/40 bg-transparent text-gray-50 hover:bg-white/10 hover:text-gray-50"
            >
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
