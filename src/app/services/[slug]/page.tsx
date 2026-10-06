import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Check,
  Droplet,
  Droplets,
  FlaskConical,
  Hammer,
  LayoutPanelLeft,
  Waves,
  type LucideIcon,
} from "lucide-react";
import { PageHeader } from "@/components/site/page-header";
import { CtaBand } from "@/components/site/cta-band";
import { Reveal } from "@/components/site/reveal";
import { getServiceBySlug, getServices } from "@/lib/data";
import { site } from "@/lib/site";

export const dynamic = "force-dynamic";

const icons: Record<string, LucideIcon> = {
  Waves,
  Droplet,
  LayoutPanelLeft,
  Hammer,
  Droplets,
  FlaskConical,
};

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return { title: "Service not found | Aqua360 Pools" };
  return {
    title: `${service.title} in Nigeria | Aqua360 Pools`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: Params) {
  const { slug } = await params;
  const [service, allServices] = await Promise.all([
    getServiceBySlug(slug),
    getServices(),
  ]);

  if (!service) notFound();

  const Icon = icons[service.icon] ?? Waves;
  const others = allServices.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title={service.title}
        description={service.tagline}
      />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            {/* Overview */}
            <Reveal>
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ocean-50 text-primary">
                <Icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <h2 className="font-display mt-6 text-2xl font-semibold tracking-tight text-ocean-950 sm:text-3xl">
                Overview
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                {service.description}
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                Every {service.title.toLowerCase()} project starts with a free
                site visit and a transparent, itemised quote — so you know
                exactly what you are getting before any work begins. Our
                in-house engineers, tilers and plumbers handle the entire
                build, and you receive weekly photo and video progress updates
                on WhatsApp until handover.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                Ready to discuss your space? Call us on{" "}
                <a
                  href={`tel:${site.phoneIntl}`}
                  className="font-semibold text-primary hover:underline"
                >
                  {site.phoneDisplay}
                </a>{" "}
                or request a free quote and we will come to you — anywhere in
                Nigeria.
              </p>
            </Reveal>

            {/* What's included */}
            <Reveal delay={140}>
              <div className="rounded-3xl border border-border bg-ocean-50/50 p-6 md:p-8">
                <h2 className="font-display text-xl font-semibold text-ocean-950">
                  What&apos;s included
                </h2>
                <ul className="mt-5 space-y-3.5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-ocean-900 md:text-[15px]">
                      <Check
                        className="mt-0.5 h-4.5 w-4.5 shrink-0 text-aqua-500"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-7 inline-flex h-12 w-full items-center justify-center rounded-full bg-aqua-500 px-7 text-base font-semibold text-ocean-950 transition-colors hover:bg-aqua-400"
                >
                  Request a Free Quote
                  <ArrowRight className="ml-1.5 h-4.5 w-4.5" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Other services */}
          {others.length > 0 && (
            <Reveal className="mt-16 border-t border-border pt-12">
              <h2 className="font-display text-xl font-semibold text-ocean-950">
                Explore our other services
              </h2>
              <ul className="mt-6 flex flex-wrap gap-3">
                {others.map((s) => (
                  <li key={s.id}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-ocean-900 transition-colors hover:border-aqua-500/70 hover:text-primary"
                    >
                      {s.title}
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          )}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
