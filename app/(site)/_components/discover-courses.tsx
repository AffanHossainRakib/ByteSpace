import { FeaturedCourses } from "./featured-courses";
import { SectionHeading } from "./section-heading";

export function DiscoverCourses() {
  return (
    <section className="py-16 md:py-18">
      <div className="container-page flex flex-col gap-10">
        <SectionHeading
          className="reveal"
          title={
            <span className="block max-w-147 type-title">
              Discover Your Passion, Build Your Skills
            </span>
          }
        >
          At Bytespace Courses, we bring you closer to life-changing knowledge.
          Explore a variety of courses across different fields, from technology
          to the arts, and make a difference in your career and life.
        </SectionHeading>
        <div>
          <FeaturedCourses />
        </div>
      </div>
    </section>
  );
}
