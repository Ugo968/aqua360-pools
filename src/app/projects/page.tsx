import type { Metadata } from "next";
import { PageHeader } from "@/components/site/page-header";
import { Projects } from "@/components/site/projects";
import { CtaBand } from "@/components/site/cta-band";
import { getProjects } from "@/lib/data";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Our Projects | Pools, Fountains & Water Walls — Aqua360 Pools",
  description:
    "Browse Aqua360's portfolio of swimming pools, rooftop infinity pools, show fountains and water walls built for homes, hotels and developers across Nigeria.",
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <>
      <PageHeader
        eyebrow="Our work"
        title="Projects that speak in water."
        description="Rooftop infinity pools, family backyards, show fountains and water walls — recent builds across Nigeria. Filter by category and tap any project to see its specs."
      />
      <Projects projects={projects} showIntro={false} />
      <CtaBand />
    </>
  );
}
