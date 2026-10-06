import Link from "next/link";
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
import type { ServiceDTO } from "@/lib/types";
import { Reveal } from "@/components/site/reveal";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  Waves,
  Droplet,
  LayoutPanelLeft,
  Hammer,
  Droplets,
  FlaskConical,
};

export function Services({
  services,
  showIntro = true,
  className,
}: {
  services: ServiceDTO[];
  showIntro?: boolean;
  className?: string;
}) {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className={cn("scroll-mt-20 bg-white py-20 md:py-28", className)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {showIntro && (
          <Reveal className="max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
              What we do
            </p>
            <h2
              id="services-heading"
              className="font-display mt-3 text-3xl font-semibold tracking-tight text-ocean-950 sm:text-4xl md:text-[2.75rem] md:leading-[1.15]"
            >
              Every drop, engineered — from concept to crystal water.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              One specialised team for the entire journey: design, structural
              works, hydraulics, finishes and lifetime care. We build with
              premium materials specified for Nigerian conditions.
            </p>
          </Reveal>
        )}

        <ul className={cn("grid gap-6 sm:grid-cols-2 lg:grid-cols-3", showIntro && "mt-12")}>
          {services.map((service, i) => {
            const Icon = icons[service.icon] ?? Waves;
            const features = service.features ?? [];
            return (
              <Reveal as="li" key={service.id} delay={(i % 3) * 100} className="h-full">
                <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-aqua-500/60 hover:shadow-[0_16px_40px_-16px_rgba(6,34,43,0.25)] md:p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ocean-50 text-primary transition-colors group-hover:bg-ocean-950 group-hover:text-aqua-400">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="font-display mt-5 text-xl font-semibold text-ocean-950">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-primary/90">{service.tagline}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mt-5 space-y-2.5 border-t border-border pt-5">
                    {features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-ocean-900">
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-aqua-500"
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-ocean-950"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Learn more
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
