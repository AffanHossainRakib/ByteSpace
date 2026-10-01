"use client";

import { useState } from "react";
import Image from "next/image";
import { MdPlayCircle } from "react-icons/md";

export function VideoPreview({ src, title }: { src: string; title: string }) {
  const [asked, setAsked] = useState(false);
  return (
    <div className="relative aspect-720/479 w-full overflow-hidden rounded-3xl bg-gray-900 lg:w-180">
      <Image
        src={src}
        alt=""
        width={720}
        height={479}
        preload
        className="size-full object-cover"
      />
      <button
        type="button"
        onClick={() => setAsked(true)}
        aria-label={`Play trailer: ${title}`}
        className="focus-on-blue absolute top-1/2 left-1/2 grid size-18 -translate-1/2 cursor-pointer place-items-center rounded-3xl border border-[#4f4f4f] bg-[#3d3d3d]/25 text-[#f5f2ff] backdrop-blur-md transition-transform hover:scale-105 md:size-26"
      >
        <MdPlayCircle aria-hidden className="size-12 md:size-18" />
      </button>
      {asked && (
        <p
          role="status"
          className="absolute inset-x-4 bottom-4 rounded-2xl bg-gray-950/80 px-4 py-3 text-center type-body-s text-white"
        >
          The trailer is coming soon.
        </p>
      )}
    </div>
  );
}
