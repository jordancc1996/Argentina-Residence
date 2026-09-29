import type { ImageSrc } from "@/lib/resolveImageSrc";
import { getRelatedEntries } from "@/data/relatedContent";
import goldenVisaHero from "@/assets/argentina-golden-visa-flag-hero.webp";
import realEstateHero from "@/assets/buenos-aires-cityscape.webp";
import dueDiligenceHero from "@/assets/argentina-citizenship-due-diligence-process.webp";
import businessSaleHero from "@/assets/argentina-business-sale-startup-exit.webp";
import visaBacklogHero from "@/assets/argentina-citizenship-investment-us-visa-backlog-american-flag.webp";
import caribbeanHero from "@/assets/argentina-citizenship-vs-caribbean-citizenship-by-investment.webp";
import greeceHero from "@/assets/argentina-citizenship-vs-greece-golden-visa.webp";
import turkeyHero from "@/assets/argentina-citizenship-vs-turkey-citizenship-by-investment.webp";
import paraguayHero from "@/assets/argentina-citizenship-vs-paraguay-residency-by-investment.webp";
import panamaHero from "@/assets/argentina-citizenship-vs-panama-residency-by-investment.webp";

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
    title: "Argentina CBI Due Diligence",
    description: "Expected Checks Before Launch",
    category: "process",
    heroImage: dueDiligenceHero,
    imageAlt: "Colorful Caminito building in La Boca, Buenos Aires, with an Argentine flag",
  },
  {
    slug: "argentina-citizenship-investment-business-sale",
    href: "/guides/argentina-citizenship-investment-business-sale",
    title: "Argentina CBI After a Business Sale",
    description: "Exit Proceeds Before Launch",
    category: "process",
    heroImage: businessSaleHero,
    imageAlt: "Person reviewing a handwritten business plan notebook",
  },
  {
    slug: "argentina-citizenship-investment-us-visa-backlog",
    href: "/guides/argentina-citizenship-investment-us-visa-backlog",
    title: "Argentina CBI and the US Visa Backlog",
    description: "A Parallel Track",
    category: "process",
    heroImage: visaBacklogHero,
    imageAlt: "Draped United States flag representing the US immigrant visa backlog",
  },
  {
    slug: "argentina-cbi-vs-caribbean-citizenship",
    href: "/guides/argentina-cbi-vs-caribbean-citizenship",
    title: "Argentina CBI vs Caribbean Citizenship",
    description: "Dominica and Grenada",
    category: "comparison",
    heroImage: caribbeanHero,
    imageAlt: "Dominica flag representing Caribbean citizenship by investment",
  },
  {
    slug: "argentina-citizenship-investment-vs-greece-golden-visa",
    href: "/guides/argentina-citizenship-investment-vs-greece-golden-visa",
    title: "Argentina CBI vs Greece Golden Visa",
    description: "Location-Tiered Property Residency",
    category: "comparison",
    heroImage: greeceHero,
    imageAlt: "Greek flag in Santorini representing the Greece Golden Visa",
  },
  {
    slug: "argentina-citizenship-investment-vs-turkey",
    href: "/guides/argentina-citizenship-investment-vs-turkey",
    title: "Argentina CBI vs Turkey Citizenship",
    description: "Operating Property Citizenship",
    category: "comparison",
    heroImage: turkeyHero,
    imageAlt: "Turkey flag representing Turkey citizenship by investment",
  },
  {
    slug: "argentina-citizenship-investment-vs-paraguay",
    href: "/guides/argentina-citizenship-investment-vs-paraguay",
    title: "Argentina CBI vs Paraguay Residency",
    description: "Mercosur Residence versus Unpublished Nationality",
    category: "comparison",
    heroImage: paraguayHero,
    imageAlt: "Paraguay flag representing Paraguay residency by investment",
  },
  {
    slug: "argentina-citizenship-investment-vs-panama",
    href: "/guides/argentina-citizenship-investment-vs-panama",
    title: "Argentina CBI vs Panama Residency",
    description: "Friendly Nations and Qualified Investor Residence",
    category: "comparison",
    heroImage: panamaHero,
    imageAlt: "Panama flag representing Panama residency by investment",
  },
];

export function getRelatedGuides(currentSlug: string, limit = 5): RelatedGuide[] {
  return getRelatedEntries(currentSlug, limit).map((entry) => {
    const listed = investorGuides.find((guide) => guide.slug === entry.slug);
    if (listed) return listed;
    return {
      slug: entry.slug,
      href: entry.href,
      title: entry.title,
      description: entry.excerpt,
      category: "program",
      heroImage: entry.image,
      imageAlt: entry.imageAlt || entry.title,
    };
  });
}

/** Established InquiryCard copy for template-level (non-page-specific) placements. */
export const defaultInquiryCard = {
  heading: "Inquire",
  body: "Legal and tax counsel on Argentine investment nationality can be arranged through this office.",
  ctaLabel: "Inquire",
} as const;

export type InquiryCardOverride = {
  eyebrow?: string;
  fieldLabel?: string;
  fieldPlaceholder?: string;
  variant?: "default" | "counsel";
};

/** Page-scoped InquiryCard overrides. Guides omitted here use InquiryCard defaults. */
export const inquiryCardOverrides: Partial<Record<string, InquiryCardOverride>> = {
  "argentina-citizenship-investment-vs-turkey": {
    eyebrow: "Considering Argentina From Abroad?",
    fieldLabel: "Country of origin",
    fieldPlaceholder: "e.g. Canada, Brazil, United Kingdom",
    variant: "counsel",
  },
};
