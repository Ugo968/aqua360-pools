import { Quote, Star } from "lucide-react";
import type { TestimonialDTO } from "@/lib/types";
import { Reveal } from "@/components/site/reveal";

export function Testimonials({ testimonials }: { testimonials: TestimonialDTO[] }) {
  if (!testimonials.length) return null;

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="scroll-mt-20 bg-ocean-50/60 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
            Client stories
          </p>
          <h2
            id="testimonials-heading"
            className="font-display mt-3 text-3xl font-semibold tracking-tight text-ocean-950 sm:text-4xl md:text-[2.75rem] md:leading-[1.15]"
          >
            Loved by families, trusted by developers.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Real words from homeowners and businesses across Nigeria who now
            live with a little more water in their lives.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.id}
              delay={(i % 3) * 100}
              className={i === 0 ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow duration-300 hover:shadow-[0_16px_40px_-18px_rgba(6,34,43,0.3)] md:p-7">
                <Quote className="h-7 w-7 text-aqua-500/60" aria-hidden="true" />
                <div
                  className="mt-3 flex gap-0.5"
                  role="img"
                  aria-label={`Rated ${t.rating} out of 5 stars`}
                >
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-sand-200 text-sand-200" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-ocean-900 md:text-[15px]">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 border-t border-border pt-4">
                  <p className="font-semibold text-ocean-950">{t.name}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
