import Link from "next/link";
import { Logo } from "@/components/logo";

export default function AuthLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="flex min-h-svh flex-1 flex-col bg-grid">
      <header className="container-page flex h-20 items-center lg:h-30">
        <Link
          href="/"
          aria-label="ByteSpace home"
          className="focus-on-blue rounded-sm"
        >
          <Logo markOnly className="h-8 w-auto" />
        </Link>
      </header>
      <main
        id="main"
        tabIndex={-1}
        className="container-page flex flex-1 flex-col items-center gap-10 pb-12 lg:flex-row lg:items-start lg:justify-between lg:pb-30"
      >
        {children}
      </main>
    </div>
  );
}
