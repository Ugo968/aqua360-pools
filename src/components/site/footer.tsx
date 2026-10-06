import Link from "next/link";
import { Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Logo } from "@/components/site/logo";
import { navLinks, site } from "@/lib/site";
import { projectCategoryLabels } from "@/lib/types";

const serviceLinks = [
  "Swimming Pool Construction",
  "Water Fountains",
  "Water Walls",
  "Pool Renovation",
  "Maintenance & Servicing",
  "Water Treatment Systems",
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-ocean-950 text-white/75">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Link href="/" aria-label="Aqua360 Pools — home" className="inline-flex">
              <Logo onDark />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              {site.tagline} Based in Lagos, building for families, hotels and
              developers across Nigeria — engineered for beauty, built to last.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Aqua360 on Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/8 transition-colors hover:bg-aqua-500 hover:text-ocean-950"
              >
                <Instagram className="h-4.5 w-4.5" aria-hidden="true" />
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Aqua360 on WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/8 transition-colors hover:bg-aqua-500 hover:text-ocean-950"
              >
                <MessageCircle className="h-4.5 w-4.5" aria-hidden="true" />
              </a>
              <a
                href={`mailto:${site.email}`}
                aria-label="Email Aqua360"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/8 transition-colors hover:bg-aqua-500 hover:text-ocean-950"
              >
                <Mail className="h-4.5 w-4.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <nav aria-label="Footer navigation">
            <h3 className="font-display text-sm font-semibold tracking-[0.14em] text-white uppercase">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-aqua-400">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className="transition-colors hover:text-aqua-400">
                  Free Quote
                </Link>
              </li>
            </ul>
          </nav>

          {/* Services */}
          <div>
            <h3 className="font-display text-sm font-semibold tracking-[0.14em] text-white uppercase">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <Link href="/services" className="transition-colors hover:text-aqua-400">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-semibold tracking-[0.14em] text-white uppercase">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-aqua-400" aria-hidden="true" />
                <a href={`tel:${site.phoneIntl}`} className="hover:text-aqua-400">
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-aqua-400" aria-hidden="true" />
                <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-aqua-400">
                  WhatsApp — {site.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-aqua-400" aria-hidden="true" />
                <a href={`mailto:${site.email}`} className="hover:text-aqua-400">
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-aqua-400" aria-hidden="true" />
                <span>{site.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <p>
            © {year} {site.legalName} All rights reserved.
          </p>
          <p>
            Design &amp; Build · Swimming Pools · {projectCategoryLabels["water-features"]} ·
            Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}
