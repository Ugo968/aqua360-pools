import { ArrowRight, ChevronDown, MapPin, Phone, Star } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" aria-hidden="true">
        { }
        <img
          src={site.heroImage}
          alt=""
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-950/95 via-ocean-950/70 to-ocean-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/80 via-transparent to-ocean-950/40" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 pt-28 pb-24 sm:px-6 md:pt-32 lg:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide text-white/90 backdrop-blur-sm sm:text-sm">
              <span className="animate-pulse-dot inline-block h-2 w-2 rounded-full bg-aqua-400" aria-hidden="true" />
              Design &amp; Build Swimming Pool Specialists
              <span className="hidden items-center gap-1 sm:inline-flex">
                · <MapPin className="h-3.5 w-3.5" aria-hidden="true" /> Lagos, Nigeria
              </span>
            </p>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="font-display mt-6 text-4xl leading-[1.08] font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
              Your dream pool,{" "}
              <span className="bg-gradient-to-r from-aqua-400 via-aqua-500 to-aqua-400 bg-clip-text text-transparent">
                engineered to perfection.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              Aqua360 designs and builds bespoke swimming pools, water fountains
              and water walls — tailored to your space, your budget and the way
              you live. From first sketch to first swim, one dedicated team.
            </p>
          </Reveal>

          <Reveal delay={360}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                asChild
                size="lg"
                className="h-13 rounded-full bg-aqua-500 px-7 text-base font-semibold text-ocean-950 hover:bg-aqua-400"
              >
                <Link href="/contact">
                  Get a Free Quote
                  <ArrowRight className="ml-1.5 h-4.5 w-4.5" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-13 rounded-full border-white/30 bg-white/5 px-7 text-base font-medium text-white backdrop-blur-sm hover:bg-white/15 hover:text-white"
              >
                <Link href="/projects">View Our Work</Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={480}>
            <dl className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-white/15 pt-8">
              <div>
                <dt className="sr-only">Rating</dt>
                <dd className="flex items-center gap-2 text-white">
                  <span className="flex" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-sand-200 text-sand-200" />
                    ))}
                  </span>
                  <span className="text-sm font-semibold">5.0 rated</span>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Projects delivered</dt>
                <dd className="text-sm text-white/80">
                  <span className="font-display text-xl font-semibold text-white">120+</span>{" "}
                  pools &amp; water features built
                </dd>
              </div>
              <div>
                <dt className="sr-only">Direct contact</dt>
                <dd className="flex items-center gap-2 text-sm text-white/80">
                  <Phone className="h-4 w-4 text-aqua-400" aria-hidden="true" />
                  <a href={`tel:${site.phoneIntl}`} className="font-medium hover:text-white">
                    {site.phoneDisplay}
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#services"
        aria-label="Scroll to services"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-white/70 transition-colors hover:text-white md:block"
      >
        <ChevronDown className="animate-drift h-7 w-7" aria-hidden="true" />
      </a>
    </section>
  );
}
