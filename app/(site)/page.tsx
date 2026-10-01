import { CreatorCta } from "./_components/creator-cta";
import { DiscoverCourses } from "./_components/discover-courses";
import { Features } from "./_components/features";
import { Hero } from "./_components/hero";
import { LearningPaths } from "./_components/learning-paths";
import { Partners } from "./_components/partners";

export default function Home() {
  return (
    <main id="main" tabIndex={-1}>
      <Hero />
      <Partners />
      <DiscoverCourses />
      <LearningPaths />
      <Features />
      <CreatorCta />
    </main>
  );
}
