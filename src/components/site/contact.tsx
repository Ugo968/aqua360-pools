"use client";

import { useState, type FormEvent } from "react";
import {
  CheckCircle2,
  Clock,
  Instagram,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Reveal } from "@/components/site/reveal";
import { site } from "@/lib/site";

const projectTypes = [
  "New Swimming Pool",
  "Water Fountain",
  "Water Wall",
  "Pool Renovation",
  "Maintenance Plan",
  "Something Else",
];

const budgets = [
  "Under ₦5 million",
  "₦5m – ₦15m",
  "₦15m – ₦50m",
  "₦50m+",
  "Not sure yet",
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  location: string;
  message: string;
}

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  budget: "",
  location: "",
  message: "",
};

type Errors = Partial<Record<keyof FormState, string>>;

function validate(form: FormState): Errors {
  const errors: Errors = {};
  if (form.name.trim().length < 2) errors.name = "Please enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
    errors.email = "Please enter a valid email address.";
  if (form.phone.trim().length < 7) errors.phone = "Please enter a valid phone number.";
  if (!form.projectType) errors.projectType = "Please select a project type.";
  if (form.message.trim().length < 10)
    errors.message = "Please tell us a little more (min. 10 characters).";
  return errors;
}

export function Contact({ showIntro = true }: { showIntro?: boolean }) {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const set = (key: keyof FormState) => (value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setServerError(null);

    const validation = validate(form);
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        if (data.fieldErrors) setErrors(data.fieldErrors);
        setServerError(data.error || "Something went wrong. Please try again.");
        return;
      }
      setSuccess(true);
    } catch {
      setServerError("Network error — please check your connection or reach us on WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-20 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          {/* Info column */}
          <Reveal>
            {showIntro && (
              <>
                <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
                  Get in touch
                </p>
                <h2
                  id="contact-heading"
                  className="font-display mt-3 text-3xl font-semibold tracking-tight text-ocean-950 sm:text-4xl md:text-[2.75rem] md:leading-[1.15]"
                >
                  Tell us about your space. We&apos;ll bring the water.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                  Request a free, no-obligation quote and site visit. Share a few
                  details and our team will reach out within 24 hours with next
                  steps and honest advice.
                </p>
              </>
            )}

            <ul className={showIntro ? "mt-8 space-y-4" : "space-y-4"}>
              {[
                {
                  icon: Phone,
                  label: "Call us",
                  value: site.phoneDisplay,
                  href: `tel:${site.phoneIntl}`,
                },
                {
                  icon: MessageCircle,
                  label: "WhatsApp",
                  value: site.phoneDisplay,
                  href: site.whatsapp,
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: site.email,
                  href: `mailto:${site.email}`,
                },
                {
                  icon: Instagram,
                  label: "Instagram",
                  value: site.instagramHandle,
                  href: site.instagram,
                },
                {
                  icon: MapPin,
                  label: "Studio",
                  value: site.location,
                },
                {
                  icon: Clock,
                  label: "Hours",
                  value: site.hours,
                },
              ].map((item) => (
                <li key={item.label} className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ocean-50 text-primary">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm font-semibold text-ocean-950 hover:text-primary"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-ocean-950">{item.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Form column */}
          <Reveal delay={140}>
            {success ? (
              <div className="flex h-full min-h-[420px] flex-col items-center justify-center rounded-3xl border border-aqua-500/30 bg-ocean-50/50 p-10 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-aqua-500/15">
                  <CheckCircle2 className="h-9 w-9 text-primary" aria-hidden="true" />
                </span>
                <h3 className="font-display mt-6 text-2xl font-semibold text-ocean-950">
                  Request received!
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                  Thank you for choosing Aqua360. One of our project consultants
                  will contact you within 24 hours to schedule your free site
                  visit. For anything urgent, reach us on WhatsApp at{" "}
                  <a
                    href={site.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-primary hover:underline"
                  >
                    {site.phoneDisplay}
                  </a>
                  .
                </p>
                <Button
                  variant="outline"
                  className="mt-8 rounded-full"
                  onClick={() => {
                    setSuccess(false);
                    setForm(initialForm);
                  }}
                >
                  Submit another request
                </Button>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                noValidate
                className="rounded-3xl border border-border bg-card p-6 shadow-[0_20px_60px_-30px_rgba(6,34,43,0.35)] md:p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full name *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="e.g. Adaeze Okafor"
                      value={form.name}
                      onChange={(e) => set("name")(e.target.value)}
                      aria-invalid={!!errors.name}
                      className="h-11 rounded-xl"
                    />
                    {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) => set("email")(e.target.value)}
                      aria-invalid={!!errors.email}
                      className="h-11 rounded-xl"
                    />
                    {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone / WhatsApp *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="e.g. 0902 912 1200"
                      value={form.phone}
                      onChange={(e) => set("phone")(e.target.value)}
                      aria-invalid={!!errors.phone}
                      className="h-11 rounded-xl"
                    />
                    {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projectType">Project type *</Label>
                    <Select value={form.projectType} onValueChange={set("projectType")}>
                      <SelectTrigger
                        id="projectType"
                        aria-invalid={!!errors.projectType}
                        className="h-11 w-full rounded-xl"
                      >
                        <SelectValue placeholder="Select a project type" />
                      </SelectTrigger>
                      <SelectContent>
                        {projectTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.projectType && (
                      <p className="text-xs text-destructive">{errors.projectType}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget range</Label>
                    <Select value={form.budget} onValueChange={set("budget")}>
                      <SelectTrigger id="budget" className="h-11 w-full rounded-xl">
                        <SelectValue placeholder="Optional" />
                      </SelectTrigger>
                      <SelectContent>
                        {budgets.map((b) => (
                          <SelectItem key={b} value={b}>
                            {b}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Property location</Label>
                    <Input
                      id="location"
                      name="location"
                      placeholder="e.g. Lekki Phase 1, Lagos"
                      value={form.location}
                      onChange={(e) => set("location")(e.target.value)}
                      className="h-11 rounded-xl"
                    />
                  </div>

                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="message">Tell us about your project *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell us about your space, ideas and timeline — e.g. 'I have a 40sqm backyard in Lekki and would love a rectangular pool with a small water wall…'"
                      value={form.message}
                      onChange={(e) => set("message")(e.target.value)}
                      aria-invalid={!!errors.message}
                      className="resize-none rounded-xl"
                    />
                    {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
                  </div>
                </div>

                {serverError && (
                  <p
                    role="alert"
                    className="mt-5 rounded-xl bg-destructive/10 px-4 py-3 text-sm text-destructive"
                  >
                    {serverError}
                  </p>
                )}

                <Button
                  type="submit"
                  disabled={submitting}
                  className="mt-6 h-12 w-full rounded-full text-base font-semibold sm:w-auto sm:px-10"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="mr-2 h-4.5 w-4.5 animate-spin" aria-hidden="true" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Request Free Quote
                      <Send className="ml-1.5 h-4.5 w-4.5" aria-hidden="true" />
                    </>
                  )}
                </Button>
                <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                  By submitting, you agree to be contacted about your project.
                  We never share your details with third parties.
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
