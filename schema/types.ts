// Auto-generated TypeScript types from Drupal GraphQL schema.
// Run `decoupled-cli schema sync` to regenerate.

export interface NodeHomepage {
  id: string;
  ctaDescription: { value: string };
  ctaPrimary: string;
  ctaSecondary: string;
  ctaTitle: string;
  featuredItemsTitle: string;
  heroDescription: { value: string };
  heroSubtitle: string;
  heroTitle: string;
  path: string;
  statsItems: any[];
  title: string;
}

export interface ParagraphStatItem {
  id: string;
  label: string;
  number: string;
}

export interface NodePage {
  id: string;
  body: { value: string; summary?: string };
  path: string;
  title: string;
}

export interface NodePricingPlan {
  id: string;
  billingPeriod: string;
  body: { value: string; summary?: string };
  homeSize: string;
  image: { url: string; alt: string; width: number; height: number };
  isPopular: boolean;
  path: string;
  planFeatures: string[];
  price: string;
  title: string;
}

export interface NodeService {
  id: string;
  body: { value: string; summary?: string };
  frequency: string[];
  image: { url: string; alt: string; width: number; height: number };
  includes: string[];
  path: string;
  startingPrice: string;
  summary: string;
  title: string;
}

export interface NodeTestimonial {
  id: string;
  body: { value: string; summary?: string };
  clientLocation: string;
  clientName: string;
  path: string;
  photo: { url: string; alt: string; width: number; height: number };
  rating: number;
  serviceType: string;
  title: string;
}
