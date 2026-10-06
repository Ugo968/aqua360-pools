import { BadgeCheck, MessageCircle, ShieldCheck, Timer, Users } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { site } from "@/lib/site";

const points = [
  {
    icon: Users,
    title: "In-house engineering & build team",
    body: "No subcontractor roulette — structural engineers, tilers and plumbers all on one accountable team.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent fixed pricing",
    body: "A detailed, itemised quote before we start. The price we agree is the price you pay — no surprise variations.",
  },
  {
    icon: BadgeCheck,
    title: "Premium materials, built for Nigeria",
    body: "Marine-grade steel, imported glass mosaics and filtration systems specified for our climate and water chemistry.",
  },
  {
    icon: MessageCircle,
    title: "Weekly WhatsApp progress updates",
    body: "Photos, videos and milestone reports every week — you always know exactly where your project stands.",
  },
  {
    icon: Timer,
    title: "5-year structural warranty",
    body: "Every pool we build is backed by a written structural warranty and an optional lifetime care plan.",
  },
];

export function WhyUs() {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-20 bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Imagery */}
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-3xl shadow-[0_24px_60px_-24px_rgba(6,34,43,0.4)]">
            { }
            <img
              src={site.aboutImage}
              alt="Aqua360 crew constructing a reinforced concrete pool shell"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/40 to-transparent" />
          </div>

          <div className="absolute -right-3 -bottom-8 w-48 overflow-hidden rounded-2xl border-4 border-white shadow-xl sm:-right-6 sm:w-56">
            { }
            <img
              src={site.aboutImageAlt}
              alt="Tiling detail on a finished Aqua360 pool"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>

          <div className="absolute -top-5 -left-2 rounded-2xl bg-ocean-950 px-5 py-4 text-white shadow-lg sm:-left-5">
            <p className="font-display text-3xl font-semibold text-aqua-400">15+</p>
            <p className="text-xs text-white/80">years of combined<br />engineering experience</p>
          </div>
        </Reveal>

        {/* Copy */}
        <div className="pt-6 lg:pt-0">
          <Reveal>
            <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
              Why Aqua360
            </p>
            <h2
              id="about-heading"
              className="font-display mt-3 text-3xl font-semibold tracking-tight text-ocean-950 sm:text-4xl md:text-[2.75rem] md:leading-[1.15]"
            >
              The team Nigerians trust with their water.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              We are Aqua360 Pools — a Lagos-based design-and-build company
              that has spent over a decade perfecting one craft: creating
              water features that are beautiful, structural sound and
              effortless to own. Homeowners, hotels and developers choose us
              because we treat every build like it is our own backyard.
            </p>
          </Reveal>

          <ul className="mt-8 space-y-5">
            {points.map((point, i) => (
              <Reveal as="li" key={point.title} delay={i * 90} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ocean-50 text-primary">
                  <point.icon className="h-5.5 w-5.5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold text-ocean-950">{point.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{point.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={300} className="mt-8">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-ocean-950"
            >
              <MessageCircle className="h-4.5 w-4.5" aria-hidden="true" />
              Chat with our team on WhatsApp — {site.phoneDisplay}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
