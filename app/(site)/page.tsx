import { DiscoverCourses } from "./_components/discover-courses";
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
    </main>
  );
}
