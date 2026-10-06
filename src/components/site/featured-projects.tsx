import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import type { ProjectDTO } from "@/lib/types";
import { projectCategoryLabels } from "@/lib/types";
import { Reveal } from "@/components/site/reveal";

/** Home-page teaser: featured builds only, linking to the full portfolio. */
export function FeaturedProjects({ projects }: { projects: ProjectDTO[] }) {
  if (!projects.length) return null;

  return (
    <section
      aria-labelledby="featured-projects-heading"
      className="bg-ocean-50/60 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
              Our work
            </p>
            <h2
              id="featured-projects-heading"
              className="font-display mt-3 text-3xl font-semibold tracking-tight text-ocean-950 sm:text-4xl md:text-[2.75rem] md:leading-[1.15]"
            >
              A portfolio that speaks in water.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Rooftop infinity pools, family backyards, show fountains and
              water walls — a selection of recent projects across Nigeria.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-ocean-950 px-6 py-3 text-sm font-semibold text-ocean-950 transition-colors hover:bg-ocean-950 hover:text-white"
          >
            View all projects
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={(i % 3) * 100} className="h-full">
              <Link
                href="/projects"
                aria-label={`See more projects like ${project.title}`}
                className="group relative block h-full w-full overflow-hidden rounded-2xl text-left shadow-sm transition-shadow duration-300 hover:shadow-[0_20px_50px_-20px_rgba(6,34,43,0.45)]"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  { }
                  <img
                    src={project.image}
                    alt={`${project.title} — ${project.location}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/90 via-ocean-950/20 to-transparent" />
                </div>

                <span className="absolute top-4 left-4 rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                  {projectCategoryLabels[project.category] ?? project.category}
                </span>

                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-white/80">
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                    {project.location}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
