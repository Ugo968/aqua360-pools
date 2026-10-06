import type { Metadata } from "next";
import { PageHeader } from "@/components/site/page-header";
import { Services } from "@/components/site/services";
import { Process } from "@/components/site/process";
import { CtaBand } from "@/components/site/cta-band";
import { getServices } from "@/lib/data";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Services | Pool Construction, Fountains & Water Walls — Aqua360 Pools",
  description:
    "Explore Aqua360's services: bespoke swimming pool construction, water fountains, water walls, pool renovation, maintenance plans and water treatment systems across Nigeria.",
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <>
      <PageHeader
        eyebrow="What we do"
        title="Services built around water — and around you."
        description="From a first sketch to a lifetime care plan, every service below is delivered by our own in-house team with premium materials specified for Nigerian conditions."
      />
      <Services services={services} showIntro={false} />
      <Process />
      <CtaBand />
    </>
  );
}
