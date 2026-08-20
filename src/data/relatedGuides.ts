export type GuideCategory = "comparison" | "process" | "program" | "real-estate";

export type RelatedGuide = {
  slug: string;
  href: string;
  title: string;
  description: string;
  category: GuideCategory;
};

/** All investor-guide pages under /guides/, used for related-card sourcing. */
export const investorGuides: RelatedGuide[] = [
  {
    slug: "argentina-golden-visa-program",
    href: "/guides/argentina-golden-visa-program",
    title: "Argentina Golden Visa Program",
    description: "Full guide to Argentina's Golden Visa program and legal framework.",
    category: "program",
  },
  {
    slug: "argentina-real-estate-investment",
    href: "/guides/argentina-real-estate-investment",
    title: "Argentina Real Estate Investment",
    description: "For buyers interested in Argentina real estate independent of the Golden Visa program.",
    category: "real-estate",
  },
  {
    slug: "argentina-citizenship-investment-due-diligence",
    href: "/guides/argentina-citizenship-investment-due-diligence",
    title: "Due Diligence Process",
    description: "Expected Checks Before Launch",
    category: "process",
  },
  {
    slug: "argentina-citizenship-investment-business-sale",
    href: "/guides/argentina-citizenship-investment-business-sale",
    title: "Business Sale and Startup Exits",
    description: "Exit Proceeds Before Launch",
    category: "process",
  },
  {
    slug: "argentina-citizenship-investment-us-visa-backlog",
    href: "/guides/argentina-citizenship-investment-us-visa-backlog",
    title: "US Visa Backlog Timing",
    description: "A Parallel Track",
    category: "process",
  },
  {
    slug: "argentina-cbi-vs-caribbean-citizenship",
    href: "/guides/argentina-cbi-vs-caribbean-citizenship",
    title: "vs Caribbean Citizenship",
    description: "Dominica and Grenada",
    category: "comparison",
  },
  {
    slug: "argentina-citizenship-investment-vs-greece-golden-visa",
    href: "/guides/argentina-citizenship-investment-vs-greece-golden-visa",
    title: "vs Greece Golden Visa",
    description: "Location-Tiered Property Residency",
    category: "comparison",
  },
  {
    slug: "argentina-citizenship-investment-vs-turkey",
    href: "/guides/argentina-citizenship-investment-vs-turkey",
    title: "vs Turkey Citizenship",
    description: "Operating Property Citizenship",
    category: "comparison",
  },
  {
    slug: "argentina-citizenship-investment-vs-paraguay",
    href: "/guides/argentina-citizenship-investment-vs-paraguay",
    title: "vs Paraguay Investor Pass",
    description: "Mercosur Residence versus Unpublished Nationality",
    category: "comparison",
  },
  {
    slug: "argentina-citizenship-investment-vs-panama",
    href: "/guides/argentina-citizenship-investment-vs-panama",
    title: "vs Panama",
    description: "Friendly Nations and Qualified Investor Residence",
    category: "comparison",
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
