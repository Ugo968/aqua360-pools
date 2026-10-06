// Aqua360 Pools — database seed script
// Works with BOTH SQLite (local) and PostgreSQL (Supabase) — it targets
// whatever DATABASE_URL points to in .env.
//
// Usage:  npm run db:seed
//
// Deterministic: content tables (Service, Project, Testimonial, Stat) are
// wiped and recreated with the same data every run. The Inquiry table —
// real customer enquiries — is never touched.

import { PrismaClient } from "@prisma/client";

const db = new PrismaClient({ log: ["error"] });

// ── Services ────────────────────────────────────────────────────────
const services = [
  {
    id: "svc-pool-construction",
    slug: "pool-construction",
    title: "Swimming Pool Construction",
    tagline: "From bare ground to a stunning backyard centrepiece.",
    description:
      "We design and build bespoke swimming pools tailored to your space, budget and lifestyle — from compact plunge pools to full-scale infinity and lap pools. Our in-house engineers handle structural works, waterproofing, filtration and finishing with premium materials that stand the test of time.",
    icon: "Waves",
    features: [
      "Structural shell & waterproofing",
      "Premium mosaic & glass tiling",
      "Energy-efficient filtration systems",
      "LED underwater lighting",
    ],
    sortOrder: 1,
  },
  {
    id: "svc-water-fountains",
    slug: "water-fountains",
    title: "Water Fountains",
    tagline: "Sculptural water statements for homes & public spaces.",
    description:
      "From elegant courtyard fountains to monumental commercial water shows, we craft fountains that blend hydraulics, light and architecture. Every build is engineered for quiet reliability, easy maintenance and a mesmerising presence, day and night.",
    icon: "Fountain",
    features: [
      "Custom sculptural designs",
      "Programmable jet displays",
      "Colour-changing illumination",
      "Whisper-quiet pump systems",
    ],
    sortOrder: 2,
  },
  {
    id: "svc-water-walls",
    slug: "water-walls",
    title: "Water Walls",
    tagline: "Living architecture that soothes and impresses.",
    description:
      "Water walls transform lobbies, patios and gardens into serene retreats. We build frameless glass, stone-clad and tiled water walls with precision flow control, so the curtain of water falls perfectly silent and even — a signature Aqua360 finish.",
    icon: "LayoutPanelLeft",
    features: [
      "Frameless glass designs",
      "Natural stone & slate cladding",
      "Integrated ambient lighting",
      "Indoor & outdoor installations",
    ],
    sortOrder: 3,
  },
  {
    id: "svc-pool-renovation",
    slug: "pool-renovation",
    title: "Pool Renovation & Remodelling",
    tagline: "Give a tired pool a second, better life.",
    description:
      "Leaking shells, dated tiles, noisy pumps — we revitalise ageing pools with modern finishes and efficient equipment. Renovations typically include re-tiling, coping replacement, plumbing upgrades and a complete equipment-room refit.",
    icon: "Hammer",
    features: [
      "Leak detection & repair",
      "Re-tiling & resurfacing",
      "Equipment modernisation",
      "Shape & depth remodelling",
    ],
    sortOrder: 4,
  },
  {
    id: "svc-maintenance",
    slug: "maintenance",
    title: "Maintenance & Servicing",
    tagline: "Crystal-clear water, all year round.",
    description:
      "Our scheduled maintenance plans keep your pool pristine with water testing, chemical balancing, filter care and equipment checks. Choose weekly, fortnightly or monthly visits — every plan includes a digital water report after each service.",
    icon: "Droplets",
    features: [
      "Water testing & balancing",
      "Filter & pump servicing",
      "Algae prevention programmes",
      "Emergency call-out support",
    ],
    sortOrder: 5,
  },
  {
    id: "svc-water-treatment",
    slug: "water-treatment",
    title: "Water Treatment Systems",
    tagline: "Healthier water with less chemicals.",
    description:
      "We install and service advanced treatment systems — sand and glass filtration, UV sterilisation, salt-water chlorination and automated dosing — so your water stays soft, clear and gentle on skin and eyes.",
    icon: "Filter",
    features: [
      "Salt-water chlorination",
      "UV & ozone sterilisation",
      "Automated chemical dosing",
      "Borehole & storage integration",
    ],
    sortOrder: 6,
  },
];

// ── Projects ────────────────────────────────────────────────────────
const projects = [
  {
    id: "proj-lekki-skyline",
    title: "Lekki Skyline Infinity Pool",
    location: "Lekki Phase 1, Lagos",
    category: "residential",
    description:
      "A 12m infinity-edge pool on a rooftop terrace, with a glass perimeter wall that lets the water melt into the Lagos skyline after dusk.",
    image:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/f9fa2a90ed20.jpg",
    specs: { size: "12m × 5m", depth: "1.5m", duration: "14 weeks", type: "Infinity edge" },
    featured: true,
    sortOrder: 1,
  },
  {
    id: "proj-ikoyi-villa",
    title: "Ikoyi Villa Resort Pool & Spa",
    location: "Ikoyi, Lagos",
    category: "residential",
    description:
      "Full backyard transformation with a turquoise mosaic spa, sun shelf, fire feature and a 20m lap lane framed by travertine decking.",
    image:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/c3034f72ac27.jpg",
    specs: { size: "20m × 6m", depth: "0.9m – 1.8m", duration: "18 weeks", type: "Lap pool + spa" },
    featured: true,
    sortOrder: 2,
  },
  {
    id: "proj-victoria-garden",
    title: "Victoria Garden Water Wall",
    location: "Victoria Island, Lagos",
    category: "water-features",
    description:
      "A sculptural midnight-blue water wall with sheers cascading into a reflecting pool — the acoustic centrepiece of this entertaining garden.",
    image:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/f782cac41d02.jpg",
    specs: { size: "6m × 2.4m", depth: "0.6m", duration: "6 weeks", type: "Water wall" },
    featured: true,
    sortOrder: 3,
  },
  {
    id: "proj-asokoro-family",
    title: "Asokoro Estate Family Pool",
    location: "Asokoro, Abuja",
    category: "residential",
    description:
      "Classic rectangular family pool with wide entry steps, a shallow play ledge for the kids and full LED nightscape lighting.",
    image:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/f6aecd35828e.jpg",
    specs: { size: "10m × 4m", depth: "1.2m – 1.8m", duration: "10 weeks", type: "Skimmer pool" },
    featured: false,
    sortOrder: 4,
  },
  {
    id: "proj-hotel-fountain",
    title: "Hotel Grand Courtyard Fountain",
    location: "GRA, Port Harcourt",
    category: "commercial",
    description:
      "A three-tier programmable fountain for a hotel courtyard, choreographed with 120 LED jets and a musical show sequence for weekends.",
    image:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/ae368ade6a53.jpg",
    specs: { size: "8m diameter", depth: "0.8m", duration: "9 weeks", type: "Show fountain" },
    featured: false,
    sortOrder: 5,
  },
  {
    id: "proj-banana-island-plunge",
    title: "Banana Island Plunge Retreat",
    location: "Banana Island, Lagos",
    category: "residential",
    description:
      "A compact luxury plunge pool wrapped in green mosaic glass tiles, designed to cool off in style within a tight urban garden footprint.",
    image:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/33222277641e.jpg",
    specs: { size: "4m × 3m", depth: "1.2m", duration: "7 weeks", type: "Plunge pool" },
    featured: false,
    sortOrder: 6,
  },
  {
    id: "proj-ajah-lagoon",
    title: "Ajah Lagoon-View Deck Pool",
    location: "Ajah, Lagos",
    category: "residential",
    description:
      "A horizon pool on a sloping lagoon-front plot, elevated on a reinforced deck with panoramic views and a frameless glass balustrade.",
    image:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/6305e27fe908.jpg",
    specs: { size: "14m × 4.5m", depth: "1.5m", duration: "16 weeks", type: "Deck-level" },
    featured: false,
    sortOrder: 7,
  },
  {
    id: "proj-conference-centre",
    title: "Conference Centre Water Feature",
    location: "Central Area, Abuja",
    category: "commercial",
    description:
      "A linear run of silent water walls and reflection pools welcoming guests into an events complex — built for constant duty, minimal upkeep.",
    image:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/d3baf263d635.jpg",
    specs: { size: "24m linear", depth: "0.4m", duration: "12 weeks", type: "Water wall + reflecting pool" },
    featured: false,
    sortOrder: 8,
  },
];

// ── Testimonials ────────────────────────────────────────────────────
const testimonials = [
  {
    id: "test-adaeze-okafor",
    name: "Mrs. Adaeze Okafor",
    role: "Homeowner · Lekki Phase 1",
    quote:
      "Aqua360 turned our rooftop into the most beautiful space in the house. The team was professional, the site was kept spotless, and they finished a week ahead of schedule. Our infinity pool is now the family's favourite place.",
    rating: 5,
    approved: true,
  },
  {
    id: "test-tunde-bakare",
    name: "Eng. Tunde Bakare",
    role: "Property Developer · Ikoyi",
    quote:
      "I have worked with several pool contractors in Lagos, and Aqua360 is on another level. Their structural detailing and waterproofing gave us zero issues through the rains, and their project reporting is excellent.",
    rating: 5,
    approved: true,
  },
  {
    id: "test-ibrahim",
    name: "Dr. & Mrs. Ibrahim",
    role: "Homeowners · Asokoro, Abuja",
    quote:
      "From the first 3D design to the first swim, everything was seamless. They listened to what we wanted for the children and designed a shallow play ledge that our kids use every single day.",
    rating: 5,
    approved: true,
  },
  {
    id: "test-grand-meridian",
    name: "The Grand Meridian Hotel",
    role: "Facilities Manager · Port Harcourt",
    quote:
      "They built our courtyard show fountain and have maintained it flawlessly for two years now. Guests gather around it every evening — it has genuinely become the heart of the hotel.",
    rating: 5,
    approved: true,
  },
  {
    id: "test-chukwudi-eze",
    name: "Mr. Chukwudi Eze",
    role: "Homeowner · Ajah",
    quote:
      "Our lagoon-view pool was a difficult build on a slope, but their engineering team made it look easy. Transparent pricing, weekly updates on WhatsApp, and a stunning final result.",
    rating: 5,
    approved: true,
  },
];

// ── Stats ───────────────────────────────────────────────────────────
const stats = [
  { id: "stat-pools", label: "Pools & water features delivered", value: 120, suffix: "+", sortOrder: 1 },
  { id: "stat-experience", label: "Years of combined experience", value: 15, suffix: "+", sortOrder: 2 },
  { id: "stat-satisfaction", label: "Client satisfaction rate", value: 98, suffix: "%", sortOrder: 3 },
  { id: "stat-regions", label: "Regions served across Nigeria", value: 6, suffix: "", sortOrder: 4 },
];

// ── Seed (deterministic): wipe content tables, recreate ────────────
// NOTE: the Inquiry table (real customer enquiries) is NEVER touched.

await db.stat.deleteMany({});
await db.testimonial.deleteMany({});
await db.project.deleteMany({});
await db.service.deleteMany({});

await db.service.createMany({
  data: services.map((s) => ({ ...s, features: JSON.stringify(s.features) })),
});

await db.project.createMany({
  data: projects.map((p) => ({ ...p, specs: JSON.stringify(p.specs) })),
});

await db.testimonial.createMany({ data: testimonials });
await db.stat.createMany({ data: stats });

console.log(
  `Seeded: ${services.length} services, ${projects.length} projects, ${testimonials.length} testimonials, ${stats.length} stats`
);

await db.$disconnect();
