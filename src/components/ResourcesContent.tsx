import EditorialSection from "@/components/EditorialSection";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useParallax } from "@/hooks/useParallax";
import { resolveImageSrc } from "@/lib/resolveImageSrc";
import SupportingImage from "@/components/SupportingImage";
import resourcesBackground from "@/assets/argentina-flag-resources.jpg";
import flagBlueSky from "@/assets/site-photos-renamed/generic-flag-blue-sky-low-angle.jpg";

const ResourcesContent = () => {
  const parallaxY = useParallax(-0.3);
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
    }
  ];

  const usefulGuides = [
    {
      title: "Living in Argentina",
      description: "Understanding Argentine culture, cost of living, healthcare system, and daily life for expatriates."
    },
    {
      title: "Real Estate Market",
      description: "Overview of property investment opportunities in Buenos Aires, Mendoza, Patagonia, and other key regions."
    },
    {
      title: "Tax and Legal Considerations",
      description: "Important information about Argentine tax residency, obligations, and legal requirements for foreign investors."
    },
    {
      title: "Banking and Finance",
      description: "Opening bank accounts, currency exchange, money transfers, and financial services in Argentina."
    }
  ];

  return (
      <div className="pt-20">
        <EditorialSection className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
          <motion.div
            className="absolute inset-0 scale-110 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${resolveImageSrc(resourcesBackground)})`, y: parallaxY }}
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10">
            <h1 className="font-serif text-hero mb-8 tracking-wide text-white drop-shadow-lg">
              Argentina Residency Resources
            </h1>
            <p className="text-editorial text-white mb-12 tracking-wide drop-shadow-lg">
              Essential information and official sources for Argentina residency
            </p>
          </div>
        </EditorialSection>

        <EditorialSection>
          <SupportingImage
            image={flagBlueSky}
            alt="Argentine flag"
            caption="The Argentine flag catching the wind."
          />
        </EditorialSection>

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
            Helpful Guides
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            {usefulGuides.map((guide, index) => (
              <div key={index} className="border-l-2 border-gold pl-6">
                <h3 className="font-serif text-lg-editorial mb-3 tracking-wide">
                  {guide.title}
                </h3>
                <p className="text-body text-text-secondary tracking-wide">
                  {guide.description}
                </p>
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
      </div>
  );
};

export default ResourcesContent;
