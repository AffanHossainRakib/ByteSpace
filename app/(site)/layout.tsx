import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { BackToTop } from "@/components/back-to-top";

export default function SiteLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <BackToTop />
    </>
  );
}
