import type { Metadata } from "next";
import { PageHeader } from "@/components/site/page-header";
import { Contact } from "@/components/site/contact";

export const metadata: Metadata = {
  title: "Contact Us | Free Pool Quote — Aqua360 Pools Nigeria",
  description:
    "Request a free, no-obligation quote and site visit. Call 0902 912 1200, chat on WhatsApp or send the form — Aqua360 responds within 24 hours, anywhere in Nigeria.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in touch"
        title="Tell us about your space. We'll bring the water."
        description="Request a free, no-obligation quote and site visit. Share a few details and our team will reach out within 24 hours with next steps and honest advice."
      />
      <Contact showIntro={false} />
    </>
  );
}
