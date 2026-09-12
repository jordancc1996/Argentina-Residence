export type RelatedCluster =
  | "status"
  | "program"
  | "us-intent"
  | "comparison"
  | "process"
  | "markets";

export type RelatedCollection = "articles" | "guides" | "industryNews";

export type RelatedEntry = {
  slug: string;
  href: string;
  collection: RelatedCollection;
  cluster: RelatedCluster;
  siblings?: string[];
  /** Registry-level override when same-cluster fill is too thin or wrong. */
  relatedSlugs?: string[];
  title: string;
  excerpt: string;
  category?: string;
  image?: string;
  imageAlt?: string;
  source?: string;
  id: number;
};

export const relatedRegistry: RelatedEntry[] = [
  {
    id: 10,
    slug: "argentina-citizenship-by-investment-status",
    href: "/research/argentina-citizenship-by-investment-status",
    collection: "articles",
    cluster: "status",
    title: "Argentina Citizenship by Investment Status - Not Yet Open for Applications",
    excerpt: "Argentina Citizenship by Investment Status has not opened for applications. APCI is not processing files.",
    category: "Market Intelligence",
    image: "/argentina-golden-visa-argentinaresidence.jpg",
    imageAlt: "Jacaranda tree in bloom on a Buenos Aires street",
  },
  {
    id: 9,
    slug: "argentina-citizenship-by-investment-launch-date",
    href: "/research/argentina-citizenship-by-investment-launch-date",
    collection: "articles",
    cluster: "status",
    title: "Argentina Citizenship by Investment Launch Date - Anticipated Date Not Yet Confirmed",
    excerpt: "The anticipated launch date is not yet confirmed after the April tender collapse and APCI's in-house pivot.",
    category: "Market Intelligence",
    image: "/argentina-golden-visa-argentinaresidence.jpg",
    imageAlt: "Jacaranda tree in bloom on a Buenos Aires street",
  },
  {
    id: 1,
    slug: "decree-524-2025-progress-update",
    href: "/industry-news/decree-524-2025-progress-update",
    collection: "industryNews",
    cluster: "status",
    title: "Decree 524/2025: Latest Progress on Argentina's Golden Visa Framework",
    excerpt: "Decree 524/2025 progress continues through inter-ministerial review of Argentina's Golden Visa framework.",
    source: "Internal Briefing",
    image: "/american-dream-argentina-golden-visa.jpg",
    imageAlt: "Argentine flag above Casa Rosada against a blue sky",
  },
  {
    id: 100,
    slug: "argentina-golden-visa-program",
    href: "/guides/argentina-golden-visa-program",
    collection: "guides",
    cluster: "program",
    relatedSlugs: [
      "argentina-citizenship-by-investment-status",
      "argentina-citizenship-by-investment-launch-date",
      "argentina-citizenship-investment-due-diligence",
      "argentina-citizenship-investment-business-sale",
      "argentina-real-estate-investment",
    ],
    title: "Argentina Golden Visa Program",
    excerpt: "Full guide to Argentina's Golden Visa program and legal framework.",
    category: "program",
  },
  {
    id: 4,
    slug: "argentina-citizenship-investment-american-investors",
    href: "/research/argentina-citizenship-investment-american-investors",
    collection: "articles",
    cluster: "us-intent",
    title: "Argentina's New Citizenship by Investment Program is Attracting American Investors",
    excerpt: "Argentina citizenship by investment for Americans is proposed under Decree 524/2025; APCI is not processing applications.",
    category: "Investment",
    image: "/argentina-cbi-american-investors-new.jpg",
    imageAlt: "Puerto Madero skyline at night reflected in the water",
  },
  {
    id: 5,
    slug: "argentina-golden-visa-american-investors-2026",
    href: "/research/argentina-golden-visa-american-investors-2026",
    collection: "articles",
    cluster: "us-intent",
    title: "The New Argentine Dream: Why We Expect American Investors to Turn to Argentina's Golden Visa in 2026 and 2027",
    excerpt: "Argentina is undergoing a profound transformation that will position the country in the global citizenship by investment marketplace.",
    category: "Investment",
    image: "/argentina-golden-visa-2026.jpg",
    imageAlt: "Argentine flag with the Sun of May against a clear sky",
  },
  {
    id: 6,
    slug: "american-dream-argentina-golden-visa-solution",
    href: "/research/american-dream-argentina-golden-visa-solution",
    collection: "articles",
    cluster: "us-intent",
    title: "The Escalating Price of the American Dream and Why Investors Should Look to the Argentina Golden Visa for the Solution",
    excerpt: "The cinematic romanticized American dream is now firmly out of reach for most Americans due to rising inflation.",
    category: "Investment",
    image: "/american-dream-argentina-golden-visa.jpg",
    imageAlt: "Argentine flag above Casa Rosada against a blue sky",
  },
  {
    id: 101,
    slug: "argentina-citizenship-investment-us-visa-backlog",
    href: "/guides/argentina-citizenship-investment-us-visa-backlog",
    collection: "guides",
    cluster: "us-intent",
    title: "US Visa Backlog Timing",
    excerpt: "A Parallel Track",
    category: "process",
  },
  {
    id: 102,
    slug: "argentina-cbi-vs-caribbean-citizenship",
    href: "/guides/argentina-cbi-vs-caribbean-citizenship",
    collection: "guides",
    cluster: "comparison",
    siblings: [],
    title: "vs Caribbean Citizenship",
    excerpt: "Dominica and Grenada",
    category: "comparison",
  },
  {
    id: 103,
    slug: "argentina-citizenship-investment-vs-greece-golden-visa",
    href: "/guides/argentina-citizenship-investment-vs-greece-golden-visa",
    collection: "guides",
    cluster: "comparison",
    siblings: ["argentina-citizenship-investment-vs-portugal-golden-visa"],
    title: "vs Greece Golden Visa",
    excerpt: "Location-Tiered Property Residency",
    category: "comparison",
  },
  {
    id: 3,
    slug: "argentina-citizenship-investment-vs-portugal-golden-visa",
    href: "/industry-news/argentina-citizenship-investment-vs-portugal-golden-visa",
    collection: "industryNews",
    cluster: "comparison",
    siblings: ["argentina-citizenship-investment-vs-greece-golden-visa"],
    title: "Argentina Citizenship by Investment vs Portugal Golden Visa",
    excerpt: "A detailed comparison of Argentina's direct citizenship pathway under Decree 524/2025 versus Portugal's established residency-by-investment program.",
    category: "comparison",
    source: "Program Analysis",
    image: "/argentina-citizenship-vs-portugal-golden-visa.jpg",
  },
  {
    id: 104,
    slug: "argentina-citizenship-investment-vs-turkey",
    href: "/guides/argentina-citizenship-investment-vs-turkey",
    collection: "guides",
    cluster: "comparison",
    siblings: ["argentina-citizenship-investment-vs-greece-golden-visa"],
    title: "vs Turkey Citizenship",
    excerpt: "Operating Property Citizenship",
    category: "comparison",
  },
  {
    id: 105,
    slug: "argentina-citizenship-investment-vs-paraguay",
    href: "/guides/argentina-citizenship-investment-vs-paraguay",
    collection: "guides",
    cluster: "comparison",
    siblings: ["argentina-citizenship-investment-vs-panama"],
    title: "vs Paraguay Investor Pass",
    excerpt: "Mercosur Residence versus Unpublished Nationality",
    category: "comparison",
  },
  {
    id: 106,
    slug: "argentina-citizenship-investment-vs-panama",
    href: "/guides/argentina-citizenship-investment-vs-panama",
    collection: "guides",
    cluster: "comparison",
    siblings: ["argentina-citizenship-investment-vs-paraguay"],
    title: "vs Panama",
    excerpt: "Friendly Nations and Qualified Investor Residence",
    category: "comparison",
  },
  {
    id: 107,
    slug: "argentina-citizenship-investment-due-diligence",
    href: "/guides/argentina-citizenship-investment-due-diligence",
    collection: "guides",
    cluster: "process",
    title: "Due Diligence Process",
    excerpt: "Expected Checks Before Launch",
    category: "process",
  },
  {
    id: 108,
    slug: "argentina-citizenship-investment-business-sale",
    href: "/guides/argentina-citizenship-investment-business-sale",
    collection: "guides",
    cluster: "process",
    title: "Business Sale and Startup Exits",
    excerpt: "Exit Proceeds Before Launch",
    category: "process",
  },
  {
    id: 7,
    slug: "buenos-aires-real-estate-bull-market-analysis",
    href: "/research/buenos-aires-real-estate-bull-market-analysis",
    collection: "articles",
    cluster: "markets",
    title: "The Buenos Aires Real Estate Bull Market Analysis",
    excerpt: "The Buenos Aires real estate market is experiencing a dramatic transformation.",
    category: "Real Estate",
    image: "/images/guides/buenos-aires-argentina-residency-investment-overview.jpg",
  },
  {
    id: 2,
    slug: "buenos-aires-foreign-buyer-activity-q1",
    href: "/industry-news/buenos-aires-foreign-buyer-activity-q1",
    collection: "industryNews",
    cluster: "markets",
    title: "Foreign Buyer Activity in Buenos Aires Real Estate Climbs in Q1",
    excerpt: "Transaction data from Buenos Aires shows continued growth in foreign buyer participation across Palermo, Recoleta, and Puerto Madero.",
    category: "Real Estate",
    source: "Market Update",
    image: "/buenos-aires-foreign-buyer-activity-q1.jpg",
  },
  {
    id: 8,
    slug: "argentine-investment-landscape-golden-visa-value-proposition",
    href: "/research/argentine-investment-landscape-golden-visa-value-proposition",
    collection: "articles",
    cluster: "markets",
    title: "The Argentine Investment Landscape and The Golden Visa Value Proposition",
    excerpt: "Argentina's fiscal discipline, monetary tightening and deregulation are creating a new paradigm for foreign capital.",
    category: "Market Intelligence",
    image: "/argentine-investment-landscape.jpg",
  },
  {
    id: 109,
    slug: "argentina-real-estate-investment",
    href: "/guides/argentina-real-estate-investment",
    collection: "guides",
    cluster: "markets",
    title: "Argentina Real Estate Investment",
    excerpt: "For buyers interested in Argentina real estate independent of the Golden Visa program.",
    category: "real-estate",
  },
];

const PROGRAM_GUIDE_SLUG = "argentina-golden-visa-program";

function findEntry(slug: string): RelatedEntry | undefined {
  return relatedRegistry.find((entry) => entry.slug === slug);
}

/**
 * Topic-based related items. Optional frontmatter relatedSlugs wins over
 * registry relatedSlugs, which wins over cluster/sibling defaults.
 */
export function getRelatedEntries(
  currentSlug: string,
  limit: number,
  frontmatterRelatedSlugs?: string[],
): RelatedEntry[] {
  const current = findEntry(currentSlug);
  if (!current) return [];

  const picked: RelatedEntry[] = [];
  const add = (slug: string) => {
    if (picked.length >= limit) return;
    if (slug === currentSlug) return;
    if (picked.some((item) => item.slug === slug)) return;
    const entry = findEntry(slug);
    if (entry) picked.push(entry);
  };

  const override =
    frontmatterRelatedSlugs && frontmatterRelatedSlugs.length > 0
      ? frontmatterRelatedSlugs
      : current.relatedSlugs;

  if (override && override.length > 0) {
    for (const slug of override) add(slug);
    return picked;
  }

  for (const slug of current.siblings ?? []) add(slug);

  if (current.cluster === "comparison") {
    add(PROGRAM_GUIDE_SLUG);
    return picked;
  }

  for (const entry of relatedRegistry) {
    if (entry.cluster === current.cluster) add(entry.slug);
  }

  return picked;
}
