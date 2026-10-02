export type SocialPreview = {
  path: string;
  width: number;
  height: number;
  alt: string;
};

export const siteSocialPreview: SocialPreview = {
  path: "/og-image.webp",
  width: 1920,
  height: 1280,
  alt: "Rocky Atlantic shoreline",
};

const faqPreview: SocialPreview = {
  path: "/social/faq.webp",
  width: 1200,
  height: 630,
  alt: "Argentine flag against a pale sky",
};

const previews: Record<string, SocialPreview> = {
  "/": {
    "path": "/social/home.webp",
    "width": 1200,
    "height": 630,
    "alt": "Argentine flag in front of Casa Rosada in Buenos Aires"
  },
  "/about": {
    "path": "/social/about.webp",
    "width": 1200,
    "height": 630,
    "alt": "Buenos Aires cityscape"
  },
  "/program": {
    "path": "/social/program.webp",
    "width": 1200,
    "height": 630,
    "alt": "Casa Rosada and the Argentine flag at Plaza de Mayo"
  },
  "/contact": {
    "path": "/social/contact.webp",
    "width": 1200,
    "height": 630,
    "alt": "Casa Rosada in Buenos Aires during the day"
  },
  "/resources": {
    "path": "/social/resources.webp",
    "width": 1200,
    "height": 630,
    "alt": "Small Argentine flag on a stand"
  },
  "/market-insights": {
    "path": "/social/market-insights.webp",
    "width": 1200,
    "height": 630,
    "alt": "Argentine flag against a pale sky"
  },
  "/compliance": {
    "path": "/social/compliance.webp",
    "width": 1200,
    "height": 630,
    "alt": "Argentine flag in the snow"
  },
  "/argentina-golden-visa-eligibility-checker": {
    "path": "/social/eligibility.webp",
    "width": 1200,
    "height": 630,
    "alt": "Snow-capped mountain above an open plain"
  },
  "/research": {
    "path": "/social/research.webp",
    "width": 1200,
    "height": 630,
    "alt": "Newspaper open to financial charts"
  },
  "/industry-news": {
    "path": "/social/industry-news.webp",
    "width": 1200,
    "height": 630,
    "alt": "Cabildo and plaza in Buenos Aires"
  },
  "/faq": faqPreview,
  "/faq/what-is-argentina-golden-visa": faqPreview,
  "/faq/argentina-citizenship-investment-requirements": faqPreview,
  "/faq/argentina-citizenship-investment-application-timeline": faqPreview,
  "/faq/argentina-residency-physical-presence": faqPreview,
  "/faq/argentina-citizenship-investment-family": faqPreview,
  "/faq/argentina-citizenship-investment-documents": faqPreview,
  "/faq/argentina-residency-work-rights": faqPreview,
  "/faq/argentina-residency-tax-implications": faqPreview,
  "/faq/argentina-visa-free-travel": faqPreview,
  "/faq/maintain-argentina-residency": faqPreview,
  "/press": {
    "path": "/social/press.webp",
    "width": 1200,
    "height": 630,
    "alt": "Argentine flag in front of Casa Rosada in Buenos Aires"
  },
  "/guides/argentina-golden-visa-program": {
    "path": "/social/argentina-golden-visa-program.webp",
    "width": 1200,
    "height": 630,
    "alt": "Argentine flag against a blue sky"
  },
  "/guides/argentina-real-estate-investment": {
    "path": "/social/argentina-real-estate-investment.webp",
    "width": 1200,
    "height": 630,
    "alt": "Buenos Aires high-rise skyline"
  },
  "/guides/argentina-citizenship-investment-us-visa-backlog": {
    "path": "/social/argentina-citizenship-investment-us-visa-backlog.webp",
    "width": 1200,
    "height": 630,
    "alt": "Argentine flag in front of Casa Rosada in Buenos Aires"
  },
  "/guides/argentina-citizenship-investment-due-diligence": {
    "path": "/social/argentina-citizenship-investment-due-diligence.webp",
    "width": 768,
    "height": 630,
    "alt": "Caminito street in La Boca with an Argentine flag"
  },
  "/guides/argentina-citizenship-investment-business-sale": {
    "path": "/social/argentina-citizenship-investment-business-sale.webp",
    "width": 1024,
    "height": 630,
    "alt": "Person writing in a business plan"
  },
  "/guides/argentina-cbi-vs-caribbean-citizenship": {
    "path": "/social/argentina-cbi-vs-caribbean-citizenship.webp",
    "width": 1024,
    "height": 585,
    "alt": "Dominica flag"
  },
  "/guides/argentina-citizenship-investment-vs-greece-golden-visa": {
    "path": "/social/argentina-citizenship-investment-vs-greece-golden-visa.webp",
    "width": 1001,
    "height": 630,
    "alt": "Santorini coastline and a Greek flag"
  },
  "/guides/argentina-citizenship-investment-vs-turkey": {
    "path": "/social/argentina-citizenship-investment-vs-turkey.webp",
    "width": 1024,
    "height": 630,
    "alt": "Flag of Turkey"
  },
  "/guides/argentina-citizenship-investment-vs-paraguay": {
    "path": "/social/argentina-citizenship-investment-vs-paraguay.webp",
    "width": 1024,
    "height": 585,
    "alt": "Flag of Paraguay"
  },
  "/guides/argentina-citizenship-investment-vs-panama": {
    "path": "/social/argentina-citizenship-investment-vs-panama.webp",
    "width": 1024,
    "height": 630,
    "alt": "Flag of Panama"
  },
  "/research/argentina-citizenship-by-investment-status": {
    "path": "/social/argentina-citizenship-by-investment-status.webp",
    "width": 1200,
    "height": 630,
    "alt": "Jacaranda tree on a Buenos Aires street"
  },
  "/research/argentina-citizenship-by-investment-launch-date": {
    "path": "/social/argentina-citizenship-by-investment-launch-date.webp",
    "width": 1200,
    "height": 630,
    "alt": "Jacaranda tree on a Buenos Aires street"
  },
  "/research/argentine-investment-landscape-golden-visa-value-proposition": {
    "path": "/social/argentine-investment-landscape.webp",
    "width": 1200,
    "height": 630,
    "alt": "Snow-covered mountain peaks"
  },
  "/research/buenos-aires-real-estate-bull-market-analysis": {
    "path": "/social/buenos-aires-real-estate-bull-market.webp",
    "width": 1200,
    "height": 630,
    "alt": "Buenos Aires high-rise skyline"
  },
  "/research/american-dream-argentina-golden-visa-solution": {
    "path": "/social/american-dream-argentina-golden-visa.webp",
    "width": 1200,
    "height": 630,
    "alt": "Argentine flag against a blue sky"
  },
  "/research/argentina-citizenship-investment-american-investors": {
    "path": "/social/argentina-citizenship-investment-american-investors.webp",
    "width": 1200,
    "height": 630,
    "alt": "Puerto Madero waterfront at night"
  },
  "/research/argentina-golden-visa-american-investors-2026": {
    "path": "/social/argentina-golden-visa-american-investors-2026.webp",
    "width": 1080,
    "height": 567,
    "alt": "Argentine flag against a blue sky"
  },
  "/industry-news/decree-524-2025-progress-update": {
    "path": "/social/decree-524-2025-progress-update.webp",
    "width": 1200,
    "height": 630,
    "alt": "Argentine flag against a blue sky"
  },
  "/industry-news/buenos-aires-foreign-buyer-activity-q1": {
    "path": "/social/buenos-aires-foreign-buyer-activity-q1.webp",
    "width": 1200,
    "height": 630,
    "alt": "Argentine flag in front of Casa Rosada in Buenos Aires"
  },
  "/industry-news/argentina-citizenship-investment-vs-portugal-golden-visa": {
    "path": "/social/argentina-citizenship-vs-portugal-golden-visa.webp",
    "width": 1024,
    "height": 538,
    "alt": "Porto riverfront seen through the Dom Luís I Bridge"
  },
  "/press/argentina-citizenship-by-investment-q4-2026": {
    "path": "/social/argentina-citizenship-by-investment-q4-2026.webp",
    "width": 1200,
    "height": 630,
    "alt": "Argentine flag in front of Casa Rosada in Buenos Aires"
  }
};

export function socialPreviewFor(pathname: string): SocialPreview {
  return previews[pathname] ?? siteSocialPreview;
}

export function absoluteSocialUrl(preview: SocialPreview): string {
  return `https://argentinaresidence.com${preview.path}`;
}
