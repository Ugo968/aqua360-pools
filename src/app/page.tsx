import { Hero } from "@/components/site/hero";
import { StatsBand } from "@/components/site/stats-band";
import { Services } from "@/components/site/services";
import { FeaturedProjects } from "@/components/site/featured-projects";
import { Process } from "@/components/site/process";
import { Testimonials } from "@/components/site/testimonials";
import { CtaBand } from "@/components/site/cta-band";
import { getProjects, getServices, getStats, getTestimonials } from "@/lib/data";

export const dynamic = "force-dynamic";

export default async function Home() {
  const [services, projects, testimonials, stats] = await Promise.all([
    getServices(),
    getProjects(),
    getTestimonials(),
    getStats(),
  ]);

  const featured = projects.filter((p) => p.featured);
  const highlighted = (featured.length >= 3 ? featured : projects).slice(0, 3);

  return (
    <>
      <Hero />
      <StatsBand stats={stats} />
      <Services services={services} />
      <FeaturedProjects projects={highlighted} />
      <Process />
      <Testimonials testimonials={testimonials} />
      <CtaBand />
    </>
  );
}
