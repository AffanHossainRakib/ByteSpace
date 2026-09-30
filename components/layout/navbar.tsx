"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon, XIcon } from "lucide-react";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useScrolledPast } from "@/hooks/use-scrolled-past";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/creators", label: "Creators" },
];

const onBlue = "rounded-sm transition-colors hover:text-lime-400 focus-on-blue";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Navbar() {
  const pathname = usePathname();
  const scrolled = useScrolledPast(40);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 text-gray-50 transition-[background-color,box-shadow] duration-300 motion-reduce:transition-none",
        scrolled && "bg-blue-800/95 shadow-float backdrop-blur-md",
      )}
    >
      <div
        className={cn(
          "container-page grid h-20 grid-cols-[1fr_auto] items-center transition-[height] duration-300 motion-reduce:transition-none md:grid-cols-[1fr_auto_1fr]",
          scrolled ? "lg:h-20" : "lg:h-30",
        )}
      >
        <Link
          href="/"
          aria-label="ByteSpace home"
          className={cn(onBlue, "-mt-2.5 w-fit lg:-mt-3.5")}
        >
          <Logo className="h-7 w-auto lg:h-8.75" />
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex gap-6">
            {links.map(({ href, label }) => {
              const active = isActive(pathname, href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      onBlue,
                      "type-body-m",
                      active && "font-medium",
                    )}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center justify-end gap-2 md:gap-6">
          <Link
            href="/login"
            className={cn(onBlue, "type-body-m hidden md:inline")}
          >
            Sign In
          </Link>
          <Link
            href="/register"
            className={cn(onBlue, "type-body-m hidden md:inline")}
          >
            Join Us
          </Link>
          <Link
            href="/cart"
            prefetch={false}
            aria-label="Cart"
            className={cn(onBlue, "grid size-11 place-items-center md:size-6")}
          >
            <MdOutlineShoppingBag aria-hidden className="size-6" />
          </Link>
          <MobileMenu pathname={pathname} />
        </div>
      </div>
    </header>
  );
}

function MobileMenu({ pathname }: { pathname: string }) {
  return (
    <Sheet>
      <SheetTrigger
        aria-label="Open menu"
        className={cn(
          onBlue,
          "-mr-2.5 grid size-11 place-items-center md:hidden",
        )}
      >
        <MenuIcon className="size-6" />
      </SheetTrigger>
      <SheetContent
        side="right"
        showCloseButton={false}
        aria-describedby={undefined}
        className="w-full gap-0 border-none bg-blue-800 text-gray-50 sm:max-w-sm"
      >
        <SheetTitle className="sr-only">Menu</SheetTitle>
        <div className="flex h-20 items-center justify-between px-4">
          <Logo className="h-7 w-auto" />
          <SheetClose
            aria-label="Close menu"
            className={cn(onBlue, "-mr-2.5 grid size-11 place-items-center")}
          >
            <XIcon className="size-6" />
          </SheetClose>
        </div>

        <nav aria-label="Main" className="px-4 pt-4">
          <ul className="flex flex-col">
            {links.map(({ href, label }) => {
              const active = isActive(pathname, href);
              return (
                <li key={href}>
                  <SheetClose asChild>
                    <Link
                      href={href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        onBlue,
                        "type-heading-xs block border-b border-white/15 py-4",
                        active && "text-lime-400",
                      )}
                    >
                      {label}
                    </Link>
                  </SheetClose>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-auto flex flex-col gap-3 p-4 pb-8">
          <SheetClose asChild>
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-full border-white/40 bg-transparent text-base text-gray-50 hover:bg-white/10 hover:text-gray-50"
            >
              <Link href="/login">Sign In</Link>
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button asChild className="h-12 rounded-full text-base">
              <Link href="/register">Join Us</Link>
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
