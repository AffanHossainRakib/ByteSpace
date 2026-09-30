import Image from "next/image";
import { cn } from "@/lib/utils";

const sizes = {
  sm: {
    px: 32,
    stack: "-space-x-2",
    avatar: "size-8",
    badge: "size-8 font-medium",
  },
  lg: {
    px: 43,
    stack: "-space-x-4",
    avatar: "size-10.75 border-2 border-white",
    badge: "size-10.75 font-bold",
  },
};

const tones = {
  lime: "bg-lime-400 text-gray-950",
  dark: "bg-black text-white",
};

export function AvatarStack({
  avatars,
  count,
  size = "sm",
  tone = "lime",
  className,
}: {
  avatars: string[];
  count: string;
  size?: keyof typeof sizes;
  tone?: keyof typeof tones;
  className?: string;
}) {
  const s = sizes[size];
  return (
    <div className={cn("flex", s.stack, className)}>
      {avatars.map((src) => (
        <Image
          key={src}
          src={src}
          alt=""
          width={s.px}
          height={s.px}
          className={cn("rounded-full object-cover", s.avatar)}
        />
      ))}
      <span
        className={cn(
          "grid shrink-0 place-items-center rounded-full text-xs",
          s.badge,
          tones[tone],
        )}
      >
        {count}
      </span>
    </div>
  );
}
