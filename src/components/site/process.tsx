import Link from "next/link";
import { CalendarCheck, KeyRound, PencilRuler, ClipboardList, HardHat, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/site/reveal";

const steps: { icon: LucideIcon; step: string; title: string; body: string }[] = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Consultation & Site Visit",
    body: "We visit your site, measure the space, discuss your vision and advise on what is possible for your terrain and budget — free of charge.",
  },
  {
    icon: PencilRuler,
    step: "02",
    title: "3D Design & Fixed Quote",
    body: "You receive a detailed 3D design, material schedule and a transparent fixed quote. We refine together until every detail is right.",
  },
  {
    icon: HardHat,
    step: "03",
    title: "Construction",
    body: "Our in-house crew handles structure, plumbing, electrics and finishes with weekly photo/video progress updates on WhatsApp.",
  },
  {
    icon: KeyRound,
    step: "04",
    title: "Handover & After-Care",
    body: "We fill, balance and commission your water, train you on the system, and stay available through optional maintenance plans.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="scroll-mt-20 bg-ocean-950 py-20 text-white md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.18em] text-aqua-400 uppercase">
            How we work
          </p>
          <h2
            id="process-heading"
            className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.75rem] md:leading-[1.15]"
          >
            From first call to first swim in four clear steps.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
            A proven process refined over 120+ builds — transparent pricing,
            fixed timelines and a single point of contact throughout.
          </p>
        </Reveal>

        <ol className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((item, i) => (
            <Reveal as="li" key={item.step} delay={i * 120} className="relative">
              {i < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute top-7 left-16 hidden h-px w-[calc(100%-2.5rem)] bg-gradient-to-r from-aqua-500/50 to-transparent lg:block"
                />
              )}
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-aqua-500/30 bg-aqua-500/10 text-aqua-400">
                  <item.icon className="h-6.5 w-6.5" aria-hidden="true" />
                </span>
                <span className="font-display text-4xl font-semibold text-white/15">
                  {item.step}
                </span>
              </div>
              <h3 className="font-display mt-5 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/70">{item.body}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={200} className="mt-14">
          <div className="flex flex-col items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between md:p-8">
            <div className="flex items-start gap-4">
              <CalendarCheck className="mt-0.5 h-8 w-8 shrink-0 text-aqua-400" aria-hidden="true" />
              <div>
                <p className="font-display text-lg font-semibold">
                  Most pools are completed in 8–16 weeks.
                </p>
                <p className="mt-1 text-sm text-white/70">
                  Your exact timeline is fixed in the contract — and we hit it.
                </p>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex h-11 shrink-0 items-center rounded-full bg-aqua-500 px-6 text-sm font-semibold text-ocean-950 transition-colors hover:bg-aqua-400"
            >
              Book your free site visit
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
