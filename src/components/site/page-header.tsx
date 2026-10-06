import { site } from "@/lib/site";
import { Reveal } from "@/components/site/reveal";

/**
 * Dark hero band used at the top of every inner page.
 * Keeps the fixed transparent navbar legible and gives each page identity.
 */
export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ocean-950">
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={site.ctaImage}
          alt=""
          loading="eager"
          className="h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-950 via-ocean-950/85 to-ocean-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/90 via-transparent to-ocean-950/50" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 pt-36 pb-16 sm:px-6 md:pt-44 md:pb-20 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold tracking-[0.18em] text-aqua-400 uppercase">
            {eyebrow}
          </p>
          <h1 className="font-display mt-3 max-w-3xl text-4xl leading-[1.1] font-semibold tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
