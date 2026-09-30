import Link from "next/link";
import { Logo } from "@/components/logo";
import { NewsletterForm } from "@/components/layout/newsletter-form";

const columns = [
  {
    title: "Browse",
    links: [
      { href: "/courses?filter=featured", label: "Featured Courses" },
      { href: "/courses?filter=categories", label: "Featured Categories" },
      { href: "/courses?category=business", label: "Business" },
      { href: "/courses?category=it", label: "IT" },
      { href: "/courses?category=design", label: "Design" },
    ],
  },
  {
    title: "Categories",
    links: [
      { href: "/courses?category=development", label: "Development" },
      { href: "/courses?category=marketing", label: "Marketing" },
      { href: "/courses?category=photography", label: "Photography" },
      { href: "/courses?category=finance", label: "Finance" },
      { href: "/courses?category=sport", label: "Sport" },
    ],
  },
  {
    title: "Platform",
    links: [
      { href: "/become-a-creator", label: "Become a Creator" },
      { href: "/affiliate", label: "Affiliate Program" },
      { href: "/contact", label: "Contact" },
      { href: "/help", label: "Help" },
      { href: "/about", label: "About" },
    ],
  },
];

const legal = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/cookies", label: "Cookies Settings" },
];

const link = "rounded-sm text-gray-950 transition-colors hover:text-blue-800";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-200 bg-white pt-12 pb-8 md:pt-16 lg:pt-18 lg:pb-12">
      <div className="container-page flex flex-col gap-12 md:gap-16 lg:gap-32.5">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-23">
          <div className="flex max-w-132 flex-col gap-8 lg:gap-11">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                aria-label="ByteSpace home"
                className={`${link} w-fit`}
              >
                <Logo className="h-8.75 w-auto" />
              </Link>
              <p className="type-body-s text-gray-950">
                Stay up to date with our latest features and releases by joining
                our newsletter.
              </p>
            </div>
            <NewsletterForm />
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:flex lg:gap-10">
            {columns.map((column) => (
              <nav
                key={column.title}
                aria-label={column.title}
                className="lg:w-41.75"
              >
                <ul className="flex flex-col gap-4">
                  {column.links.map(({ href, label }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        prefetch={false}
                        className={`${link} type-body-s`}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-gray-200 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="type-body-xs text-gray-950">
            &copy; {new Date().getFullYear()} ByteSpace. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legal.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  prefetch={false}
                  className={`${link} type-body-xs`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
