import Hero from "@/components/Hero";
import EditorialSection from "@/components/EditorialSection";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import flagBlueSky from "@/assets/site-photos-renamed/generic-flag-blue-sky-low-angle.webp";

const ResourcesContent = () => {
  const officialResources = [
    {
      title: "Argentine Immigration Office (Dirección Nacional de Migraciones)",
      url: "https://www.argentina.gob.ar/interior/migraciones",
      description: "Official government immigration website with forms, requirements, and application procedures."
    },
    {
      title: "Ministry of Foreign Affairs",
      url: "https://www.cancilleria.gob.ar/",
      description: "Information on consular services, visa requirements, and international relations."
    },
    {
      title: "Argentine Investment and Trade Promotion Agency",
      url: "https://www.inversionycomercio.org.ar/",
      description: "Official information on investment opportunities, business climate, and economic sectors."
    },
    {
      title: "Boletín Oficial de la República Argentina",
      url: "https://www.boletinoficial.gob.ar/",
      description: "Official gazette. Decrees and other national acts are published here."
    },
    {
      title: "AFIP",
      url: "https://www.afip.gob.ar/",
      description: "Federal Administration of Public Revenue. Tax administration, separate from immigration residence."
    }
  ];

  const siteGuides = [
    { title: "Program overview", href: "/program", description: "Short overview of the anticipated framework. The pathway should not be treated as an open application program." },
    { title: "Argentina Golden Visa program guide", href: "/guides/argentina-golden-visa-program", description: "The long guide to the announced citizenship-by-investment terms. Applications are not confirmed open." },
    { title: "Current program status", href: "/research/argentina-citizenship-by-investment-status", description: "Whether Argentina citizenship by investment is open." },
    { title: "Launch date", href: "/research/argentina-citizenship-by-investment-launch-date", description: "Expected Q4 2026 window. No exact filing date." },
    { title: "Real estate investment", href: "/guides/argentina-real-estate-investment", description: "Buying property in Argentina. The decrees do not identify a purchase as a qualifying or disqualifying investment." },
    { title: "Research", href: "/research", description: "Market and investor research published on this site." },
  ];

  const siteFaqs = [
    { title: "What is the Argentina Golden Visa?", href: "/faq/what-is-argentina-golden-visa" },
    { title: "Investment requirements", href: "/faq/argentina-citizenship-investment-requirements" },
    { title: "Family members", href: "/faq/argentina-citizenship-investment-family" },
    { title: "Physical presence", href: "/faq/argentina-residency-physical-presence" },
    { title: "Documents", href: "/faq/argentina-citizenship-investment-documents" },
    { title: "Work rights", href: "/faq/argentina-residency-work-rights" },
    { title: "Tax implications", href: "/faq/argentina-residency-tax-implications" },
    { title: "Visa-free travel", href: "/faq/argentina-visa-free-travel" },
    { title: "All FAQs", href: "/faq" },
  ];

  return (
      <>
        <Hero
          title="Argentina Residency Resources"
          subtitle="Essential information and official sources for Argentina residency"
          backgroundImage={flagBlueSky}
          imageAlt="Argentine flag photographed from a low angle against a blue sky"
        />

        <EditorialSection className="bg-secondary/30">
          <h2 className="font-serif text-xl-editorial mb-8 tracking-wide text-left">
            Official Government Resources
          </h2>
          <div className="space-y-6 text-left">
            {officialResources.map((resource, index) => (
              <div key={index} className="border-l-2 border-gold pl-8 py-2">
                <a 
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-lg-editorial mb-2 tracking-wide text-primary hover:text-text-secondary transition-colors inline-flex items-center gap-2"
                >
                  {resource.title}
                  <ExternalLink className="w-4 h-4" />
                </a>
                <p className="text-body text-text-secondary tracking-wide mt-2">
                  {resource.description}
                </p>
              </div>
            ))}
          </div>
        </EditorialSection>

        <EditorialSection>
          <h2 className="font-serif text-xl-editorial mb-8 tracking-wide text-left">
            Guides and research on this site
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            {siteGuides.map((guide) => (
              <div key={guide.href} className="border-l-2 border-gold pl-6">
                <h3 className="font-serif text-lg-editorial mb-3 tracking-wide">
                  <a href={guide.href} className="text-primary hover:underline">
                    {guide.title}
                  </a>
                </h3>
                <p className="text-body text-text-secondary tracking-wide">
                  {guide.description}
                </p>
              </div>
            ))}
          </div>
        </EditorialSection>

        <EditorialSection>
          <h2 className="font-serif text-xl-editorial mb-8 tracking-wide text-left">
            Short answers
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            {siteFaqs.map((item) => (
              <div key={item.href} className="border-l-2 border-gold pl-6">
                <h3 className="font-serif text-lg-editorial tracking-wide">
                  <a href={item.href} className="text-primary hover:underline">
                    {item.title}
                  </a>
                </h3>
              </div>
            ))}
          </div>
        </EditorialSection>

        <EditorialSection className="bg-secondary/30">
          <h2 className="font-serif text-xl-editorial mb-6 tracking-wide">
            Important Notice
          </h2>
          <p className="text-body text-text-secondary mb-8 tracking-wide max-w-3xl mx-auto">
            Argentina Residence provides proprietary market intelligence and execution advisory for international investors and family offices. 
            All information provided is for educational purposes only and should not be considered 
            legal or financial advice. Immigration laws and investment requirements are subject to 
            change. Always verify current requirements with official government sources and consult 
            with qualified immigration attorneys and financial advisors before making any decisions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/faq">
              <Button size="lg" variant="outline" className="px-12">
                View FAQ
              </Button>
            </a>
            <a href="/contact">
              <Button size="lg" className="px-12">
                Contact Us
              </Button>
            </a>
          </div>
        </EditorialSection>
      </>
  );
};

export default ResourcesContent;
