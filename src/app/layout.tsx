import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { WhatsAppFloat } from "@/components/site/whatsapp-float";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aqua360 Pools | Swimming Pool Design & Construction in Nigeria",
  description:
    "Aqua360 designs and builds bespoke swimming pools, water fountains and water walls across Nigeria — tailored to your space, budget and lifestyle. Request a free quote today.",
  keywords: [
    "swimming pool construction Nigeria",
    "pool builder Lagos",
    "water fountains",
    "water walls",
    "pool renovation",
    "pool maintenance Nigeria",
    "Aqua360",
  ],
  authors: [{ name: "Aqua360 Pools" }],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Aqua360 Pools | Swimming Pool Design & Construction",
    description:
      "We design and build swimming pools, water fountains and water walls across Nigeria — tailored to your space, budget and lifestyle.",
    type: "website",
    locale: "en_NG",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Aqua360 Pools",
  description:
    "Swimming pool design and construction company building pools, water fountains and water walls across Nigeria.",
  telephone: "+2349029121200",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "NG",
  },
  areaServed: "Nigeria",
  sameAs: ["https://www.instagram.com/pools_aqua360"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-background text-foreground`}
      >
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppFloat />
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Toaster />
      </body>
    </html>
  );
}
