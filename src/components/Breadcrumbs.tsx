import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path: string;
}

const routeLabels: Record<string, string> = {
  '': 'Home',
  'about': 'About Argentina',
  'what-is-argentina-golden-visa': 'What Is Argentina Citizenship by Investment',
  'argentina-golden-visa-program': 'Citizenship-by-Investment Guide',
  'argentina-golden-visa-eligibility-checker': 'Citizenship-by-Investment Readiness',
  'argentina-golden-visa-american-investors-2026': '2026 for American Investors',
  'american-dream-argentina-golden-visa-solution': 'American Dream Comparison',
  'argentine-investment-landscape-golden-visa-value-proposition': 'Investment Landscape',
  'program': 'Program Overview',
  'faq': 'FAQ',
  'blog': 'Blog',
  'research': 'Research',
  'press': 'Press Room',
  'resources': 'Resources',
  'guides': 'Resources',
  'market-insights': 'Market Insights',
  'contact': 'Contact',
  'privacy': 'Privacy Policy',
  'investment-requirements': 'Investment Requirements',
  'application-process-timeline': 'Application Timeline',
  'residency-requirements': 'Residency Requirements',
  'family-members-residency': 'Family Members',
  'required-documents': 'Required Documents',
  'work-rights': 'Work Rights',
  'tax-implications': 'Tax Implications',
  'visa-free-travel': 'Visa-Free Travel',
  'maintain-residency-status': 'Maintain Residency',
  'argentina-350000-citizenship-investment-program': 'The Argentina $350,000 Citizenship Investment Program',
};

function buildBreadcrumbs(currentPath: string): BreadcrumbItem[] | null {
  const pathSegments = currentPath.split('/').filter(Boolean);

  // Don't show breadcrumbs on homepage
  if (pathSegments.length === 0) return null;

  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', path: '/' }
  ];

  let current = '';
  pathSegments.forEach((segment) => {
    current += `/${segment}`;
    breadcrumbs.push({
      label: routeLabels[segment] || segment.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
      // /guides redirects to /resources; use the canonical destination as the parent href
      path: current === '/guides' ? '/resources' : current
    });
  });

  return breadcrumbs;
}

/** JSON-LD for an Astro `<head>` slot. Null on `/`. */
export function getBreadcrumbSchema(currentPath: string) {
  const breadcrumbs = buildBreadcrumbs(currentPath);
  if (!breadcrumbs) return null;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://argentinaresidence.com${item.path === '/' ? '' : item.path}`
    }))
  };
}

const Breadcrumbs = ({ currentPath }: { currentPath: string }) => {
  const breadcrumbs = buildBreadcrumbs(currentPath);
  if (!breadcrumbs) return null;

  return (
    <nav 
      aria-label="Breadcrumb" 
      className="py-4 px-4 md:px-8 bg-muted/30 border-b border-border"
    >
      <ol className="flex items-center flex-wrap gap-2 text-sm max-w-6xl mx-auto">
        {breadcrumbs.map((item, index) => {
          const isLast = index === breadcrumbs.length - 1;
          
          return (
            <li key={item.path} className="flex items-center gap-2">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
              )}
              {isLast ? (
                <span 
                  className="text-foreground font-medium"
                  aria-current="page"
                >
                  {index === 0 && <Home className="w-4 h-4 inline mr-1" aria-hidden="true" />}
                  {item.label}
                </span>
              ) : (
                <a 
                  href={item.path}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {index === 0 && <Home className="w-4 h-4 inline mr-1" aria-hidden="true" />}
                  {item.label}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
