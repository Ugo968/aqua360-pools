import Link from "next/link";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { site } from "@/lib/site";

export function CtaBand() {
  return (
    <section aria-label="Get started with your pool project" className="relative overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        { }
        <img src={site.ctaImage} alt="" loading="lazy" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-ocean-950/80" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 md:py-24 lg:px-8">
        <Reveal>
          <h2 className="font-display mx-auto max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Ready to dive in? Your free site visit is one call away.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
            Tell us about your space and we will come to you — with ideas,
            honest advice and a clear path from backyard to blueprint.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center rounded-full bg-aqua-500 px-7 text-base font-semibold text-ocean-950 transition-colors hover:bg-aqua-400"
            >
              Get a Free Quote
              <ArrowRight className="ml-1.5 h-4.5 w-4.5" aria-hidden="true" />
            </Link>
            <a
              href={`tel:${site.phoneIntl}`}
              className="inline-flex h-12 items-center rounded-full border border-white/30 px-7 text-base font-medium text-white transition-colors hover:bg-white/10"
            >
              <Phone className="mr-2 h-4.5 w-4.5" aria-hidden="true" />
              {site.phoneDisplay}
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center rounded-full border border-white/30 px-7 text-base font-medium text-white transition-colors hover:bg-white/10"
            >
              <MessageCircle className="mr-2 h-4.5 w-4.5" aria-hidden="true" />
              WhatsApp Us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
