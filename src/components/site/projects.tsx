"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Reveal } from "@/components/site/reveal";
import { projectCategoryLabels, type ProjectDTO } from "@/lib/types";
import { cn } from "@/lib/utils";

export function Projects({
  projects,
  showIntro = true,
}: {
  projects: ProjectDTO[];
  showIntro?: boolean;
}) {
  const [active, setActive] = useState<string>("all");
  const [selected, setSelected] = useState<ProjectDTO | null>(null);

  const categories = useMemo(() => {
    const present = new Set(projects.map((p) => p.category));
    return ["all", ...["residential", "commercial", "water-features", "renovation"].filter((c) => present.has(c))];
  }, [projects]);

  const visible = useMemo(
    () => (active === "all" ? projects : projects.filter((p) => p.category === active)),
    [projects, active]
  );

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-20 bg-ocean-50/60 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {showIntro ? (
          <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
              Our work
            </p>
            <h2
              id="projects-heading"
              className="font-display mt-3 text-3xl font-semibold tracking-tight text-ocean-950 sm:text-4xl md:text-[2.75rem] md:leading-[1.15]"
            >
              A portfolio that speaks in water.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Rooftop infinity pools, family backyards, show fountains and
              water walls — a selection of recent projects across Nigeria.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects by category">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={active === category}
                onClick={() => setActive(category)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  active === category
                    ? "border-ocean-950 bg-ocean-950 text-white"
                    : "border-border bg-white text-ocean-900 hover:border-aqua-500/70 hover:text-primary"
                )}
              >
                {projectCategoryLabels[category] ?? category}
              </button>
            ))}
          </div>
          </Reveal>
        ) : (
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects by category">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={active === category}
                onClick={() => setActive(category)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  active === category
                    ? "border-ocean-950 bg-ocean-950 text-white"
                    : "border-border bg-white text-ocean-900 hover:border-aqua-500/70 hover:text-primary"
                )}
              >
                {projectCategoryLabels[category] ?? category}
              </button>
            ))}
          </div>
        )}

        {/* Gallery */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, i) => (
            <Reveal key={project.id} delay={(i % 3) * 100} className="h-full">
              <button
                type="button"
                onClick={() => setSelected(project)}
                aria-label={`View details of ${project.title}`}
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
                  <h3 className="font-display flex items-center gap-2 text-lg font-semibold text-white">
                    {project.title}
                    <ArrowUpRight
                      className="h-4.5 w-4.5 shrink-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </h3>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-white/80">
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                    {project.location}
                  </p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        {!visible.length && (
          <p className="mt-12 text-center text-muted-foreground">
            No projects in this category yet — check back soon.
          </p>
        )}
      </div>

      {/* Detail dialog */}
      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-h-[92vh] max-w-3xl overflow-y-auto p-0 scrollbar-slim">
          {selected && (
            <div>
              <div className="relative aspect-[16/10] w-full">
                { }
                <img
                  src={selected.image}
                  alt={`${selected.title} — ${selected.location}`}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/70 to-transparent" />
                <DialogHeader className="absolute inset-x-0 bottom-0 p-6 text-left">
                  <DialogTitle className="font-display text-2xl font-semibold text-white sm:text-3xl">
                    {selected.title}
                  </DialogTitle>
                  <DialogDescription className="flex items-center gap-1.5 text-white/85">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                    {selected.location} ·{" "}
                    {projectCategoryLabels[selected.category] ?? selected.category}
                  </DialogDescription>
                </DialogHeader>
              </div>

              <div className="p-6 md:p-8">
                <p className="leading-relaxed text-muted-foreground">{selected.description}</p>

                <dl className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
                  {[
                    ["Pool size", selected.specs?.size],
                    ["Water depth", selected.specs?.depth],
                    ["Build time", selected.specs?.duration],
                    ["Build type", selected.specs?.type],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-xl bg-ocean-50/70 p-4">
                      <dt className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                        {label}
                      </dt>
                      <dd className="mt-1 text-sm font-semibold text-ocean-950">{value || "—"}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button asChild className="rounded-full">
                    <Link href="/contact" onClick={() => setSelected(null)}>
                      Start a project like this
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full"
                    onClick={() => setSelected(null)}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
