import type { Metadata } from "next";
import { PageHeader } from "@/components/site/page-header";
import { WhyUs } from "@/components/site/why-us";
import { StatsBand } from "@/components/site/stats-band";
import { Process } from "@/components/site/process";
import { CtaBand } from "@/components/site/cta-band";
import { getStats } from "@/lib/data";
import { site } from "@/lib/site";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "About Us | Aqua360 Pools — Pool Builders in Lagos, Nigeria",
  description:
    "Meet Aqua360 Pools — a Lagos-based design-and-build company with 15+ years of engineering experience behind every pool, fountain and water wall we deliver across Nigeria.",
};

export default async function AboutPage() {
  const stats = await getStats();

  return (
    <>
      <PageHeader
        eyebrow="About Aqua360"
        title="One team, one craft — water, engineered beautifully."
        description={`${site.tagline} From our Lagos base we have delivered 120+ pools and water features for families, hotels and developers across Nigeria.`}
      />
      <WhyUs />
      <StatsBand stats={stats} />
      <Process />
      <CtaBand />
    </>
  );
}
