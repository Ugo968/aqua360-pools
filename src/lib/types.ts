export interface ServiceDTO {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  features: string[];
}

export interface ProjectDTO {
  id: string;
  title: string;
  location: string;
  category: string;
  description: string;
  image: string;
  specs: { size: string; depth: string; duration: string; type: string };
  featured: boolean;
}

export interface TestimonialDTO {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export interface StatDTO {
  id: string;
  label: string;
  value: number;
  suffix: string | null;
}

export const projectCategoryLabels: Record<string, string> = {
  all: "All Projects",
  residential: "Residential",
  commercial: "Commercial",
  "water-features": "Water Features",
  renovation: "Renovations",
};
