import { Hero } from "./_components/hero";
import { Partners } from "./_components/partners";

export default function Home() {
  return (
    <main id="main" tabIndex={-1}>
      <Hero />
      <Partners />
    </main>
  );
}
