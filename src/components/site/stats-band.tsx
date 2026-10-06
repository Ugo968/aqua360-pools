import type { StatDTO } from "@/lib/types";
import { Reveal } from "@/components/site/reveal";

export function StatsBand({ stats }: { stats: StatDTO[] }) {
  if (!stats.length) return null;

  return (
    <section aria-label="Company statistics" className="border-b border-border bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-8 px-4 py-12 sm:px-6 md:grid-cols-4 md:py-14 lg:px-8">
        {stats.map((stat, i) => (
          <Reveal key={stat.id} delay={i * 90} className="text-center md:text-left">
            <p className="font-display text-4xl font-semibold tracking-tight text-ocean-950 md:text-5xl">
              {stat.value}
              <span className="text-aqua-500">{stat.suffix}</span>
            </p>
            <p className="mt-2 text-sm leading-snug text-muted-foreground">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
