import { db } from "@/lib/db";
import type {
  ProjectDTO,
  ServiceDTO,
  StatDTO,
  TestimonialDTO,
} from "@/lib/types";

export async function getServices(): Promise<ServiceDTO[]> {
  try {
    const rows = await db.service.findMany({ orderBy: { sortOrder: "asc" } });
    return rows.map<ServiceDTO>((s) => ({
      id: s.id,
      slug: s.slug,
      title: s.title,
      tagline: s.tagline,
      description: s.description,
      icon: s.icon,
      features: JSON.parse(s.features),
    }));
  } catch (error) {
    console.error("Failed to load services:", error);
    return [];
  }
}

export async function getServiceBySlug(slug: string): Promise<ServiceDTO | null> {
  try {
    const s = await db.service.findUnique({ where: { slug } });
    if (!s) return null;
    return {
      id: s.id,
      slug: s.slug,
      title: s.title,
      tagline: s.tagline,
      description: s.description,
      icon: s.icon,
      features: JSON.parse(s.features),
    };
  } catch (error) {
    console.error(`Failed to load service ${slug}:`, error);
    return null;
  }
}

export async function getProjects(): Promise<ProjectDTO[]> {
  try {
    const rows = await db.project.findMany({ orderBy: { sortOrder: "asc" } });
    return rows.map<ProjectDTO>((p) => ({
      id: p.id,
      title: p.title,
      location: p.location,
      category: p.category,
      description: p.description,
      image: p.image,
      specs: JSON.parse(p.specs),
      featured: p.featured,
    }));
  } catch (error) {
    console.error("Failed to load projects:", error);
    return [];
  }
}

export async function getTestimonials(): Promise<TestimonialDTO[]> {
  try {
    const rows = await db.testimonial.findMany({
      where: { approved: true },
      orderBy: { createdAt: "asc" },
    });
    return rows.map<TestimonialDTO>((t) => ({
      id: t.id,
      name: t.name,
      role: t.role,
      quote: t.quote,
      rating: t.rating,
    }));
  } catch (error) {
    console.error("Failed to load testimonials:", error);
    return [];
  }
}

export async function getStats(): Promise<StatDTO[]> {
  try {
    const rows = await db.stat.findMany({ orderBy: { sortOrder: "asc" } });
    return rows.map<StatDTO>((s) => ({
      id: s.id,
      label: s.label,
      value: s.value,
      suffix: s.suffix,
    }));
  } catch (error) {
    console.error("Failed to load stats:", error);
    return [];
  }
}
