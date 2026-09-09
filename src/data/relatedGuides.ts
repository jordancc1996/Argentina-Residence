import type { ImageSrc } from "@/lib/resolveImageSrc";
import goldenVisaHero from "@/assets/argentina-golden-visa-flag-hero.jpg";
import realEstateHero from "@/assets/buenos-aires-cityscape.jpg";
import dueDiligenceHero from "@/assets/argentina-citizenship-due-diligence-process.jpg";
import businessSaleHero from "@/assets/argentina-business-sale-startup-exit.jpg";
import visaBacklogHero from "@/assets/argentina-citizenship-investment-us-visa-backlog-american-flag.jpg";
import caribbeanHero from "@/assets/argentina-citizenship-vs-caribbean-citizenship-by-investment.jpg";
import greeceHero from "@/assets/argentina-citizenship-vs-greece-golden-visa.jpg";
import turkeyHero from "@/assets/argentina-citizenship-vs-turkey-citizenship-by-investment.jpg";
import paraguayHero from "@/assets/argentina-citizenship-vs-paraguay-residency-by-investment.jpg";
import panamaHero from "@/assets/argentina-citizenship-vs-panama-residency-by-investment.jpg";

export type GuideCategory = "comparison" | "process" | "program" | "real-estate";

export type RelatedGuide = {
  slug: string;
  href: string;
  title: string;
  description: string;
  category: GuideCategory;
  heroImage?: ImageSrc;
  imageAlt: string;
};

/** All investor-guide pages under /guides/, used for related-card sourcing. */
export const investorGuides: RelatedGuide[] = [
  {
    slug: "argentina-golden-visa-program",
    href: "/guides/argentina-golden-visa-program",
    title: "Argentina Golden Visa Program",
    description: "Full guide to Argentina's Golden Visa program and legal framework.",
    category: "program",
    heroImage: goldenVisaHero,
    imageAlt: "Argentine flag against a clear sky, representing the Argentina Golden Visa program",
  },
  {
    slug: "argentina-real-estate-investment",
    href: "/guides/argentina-real-estate-investment",
    title: "Argentina Real Estate Investment",
    description: "For buyers interested in Argentina real estate independent of the Golden Visa program.",
    category: "real-estate",
    heroImage: realEstateHero,
    imageAlt: "Buenos Aires high-rise skyline representing Argentina real estate investment",
  },
  {
    slug: "argentina-citizenship-investment-due-diligence",
    href: "/guides/argentina-citizenship-investment-due-diligence",
    title: "Due Diligence Process",
    description: "Expected Checks Before Launch",
    category: "process",
    heroImage: dueDiligenceHero,
    imageAlt: "Colorful Caminito building in La Boca, Buenos Aires, with an Argentine flag",
  },
  {
    slug: "argentina-citizenship-investment-business-sale",
    href: "/guides/argentina-citizenship-investment-business-sale",
    title: "Business Sale and Startup Exits",
    description: "Exit Proceeds Before Launch",
    category: "process",
    heroImage: businessSaleHero,
    imageAlt: "Person reviewing a handwritten business plan notebook",
  },
  {
    slug: "argentina-citizenship-investment-us-visa-backlog",
    href: "/guides/argentina-citizenship-investment-us-visa-backlog",
    title: "US Visa Backlog Timing",
    description: "A Parallel Track",
    category: "process",
    heroImage: visaBacklogHero,
    imageAlt: "Draped United States flag representing the US immigrant visa backlog",
  },
  {
    slug: "argentina-cbi-vs-caribbean-citizenship",
    href: "/guides/argentina-cbi-vs-caribbean-citizenship",
    title: "vs Caribbean Citizenship",
    description: "Dominica and Grenada",
    category: "comparison",
    heroImage: caribbeanHero,
    imageAlt: "Dominica flag representing Caribbean citizenship by investment",
  },
  {
    slug: "argentina-citizenship-investment-vs-greece-golden-visa",
    href: "/guides/argentina-citizenship-investment-vs-greece-golden-visa",
    title: "vs Greece Golden Visa",
    description: "Location-Tiered Property Residency",
    category: "comparison",
    heroImage: greeceHero,
    imageAlt: "Greek flag in Santorini representing the Greece Golden Visa",
  },
  {
    slug: "argentina-citizenship-investment-vs-turkey",
    href: "/guides/argentina-citizenship-investment-vs-turkey",
    title: "vs Turkey Citizenship",
    description: "Operating Property Citizenship",
    category: "comparison",
    heroImage: turkeyHero,
    imageAlt: "Turkey flag representing Turkey citizenship by investment",
  },
  {
    slug: "argentina-citizenship-investment-vs-paraguay",
    href: "/guides/argentina-citizenship-investment-vs-paraguay",
    title: "vs Paraguay Investor Pass",
    description: "Mercosur Residence versus Unpublished Nationality",
    category: "comparison",
    heroImage: paraguayHero,
    imageAlt: "Paraguay flag representing Paraguay residency by investment",
  },
  {
    slug: "argentina-citizenship-investment-vs-panama",
    href: "/guides/argentina-citizenship-investment-vs-panama",
    title: "vs Panama",
    description: "Friendly Nations and Qualified Investor Residence",
    category: "comparison",
    heroImage: panamaHero,
    imageAlt: "Panama flag representing Panama residency by investment",
  },
];

export function getRelatedGuides(currentSlug: string, limit = 5): RelatedGuide[] {
  const current = investorGuides.find((guide) => guide.slug === currentSlug);
  const others = investorGuides.filter((guide) => guide.slug !== currentSlug);
  const sameCategory = current
    ? others.filter((guide) => guide.category === current.category)
    : [];
  const remaining = others.filter((guide) => guide.category !== current?.category);
  return [...sameCategory, ...remaining].slice(0, limit);
}

/** Established InquiryCard copy for template-level (non-page-specific) placements. */
export const defaultInquiryCard = {
  heading: "Inquire",
  body: "Legal and tax counsel on Argentine investment nationality can be arranged through this office.",
  ctaLabel: "Inquire",
} as const;
