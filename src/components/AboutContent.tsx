import EditorialSection from "@/components/EditorialSection";
import { Button } from "@/components/ui/button";
import { resolveImageSrc } from "@/lib/resolveImageSrc";
import buenosAiresCityscape from "@/assets/buenos-aires-cityscape.jpg";
import buenosAiresChurch from "@/assets/buenos-aires-architecture-church.jpg";

const AboutContent = () => {
  return (
      <div className="pt-20">
        <EditorialSection>
          <h1 className="font-serif text-hero mb-8 tracking-wide">
            About Argentina Residence
          </h1>
          <p className="text-editorial text-text-secondary mb-12 tracking-wide">
            A specialized advisory boutique facilitating strategic capital deployment and residency acquisition in Argentina.
          </p>
        </EditorialSection>
        
        <section className="relative py-32">
          <div className="absolute inset-0 z-0">
            <img
              src={resolveImageSrc(buenosAiresCityscape)}
              alt="Buenos Aires cityscape"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
            <h2 className="font-serif text-xl-editorial md:text-3xl text-white mb-8 tracking-wide">
              South America's most dynamic economy
            </h2>
            <p className="text-body md:text-lg text-white/90 max-w-2xl mx-auto tracking-wide">
              Argentina offers unmatched economic opportunity, from the cosmopolitan sophistication of Buenos Aires to the natural splendor of Patagonia.
            </p>
          </div>
        </section>
        
        <EditorialSection className="bg-secondary/30">
          <div className="grid md:grid-cols-2 gap-16 text-left">
            <div>
              <h2 className="font-serif text-xl-editorial mb-6 tracking-wide">Economic Landscape</h2>
              <p className="text-body text-text-secondary mb-6 tracking-wide">
                Argentina stands as Latin America's second-largest economy, offering diverse investment opportunities across agriculture, technology, renewable energy, and real estate sectors.
              </p>
              <p className="text-body text-text-secondary tracking-wide mb-4">
                The country's strategic location provides access to Mercosur markets while maintaining strong economic ties with Europe and North America.
              </p>
              <a href="/market-insights" className="text-primary hover:underline text-sm font-medium">
                View market insights →
              </a>
            </div>
            
            <div>
              <h2 className="font-serif text-xl-editorial mb-6 tracking-wide">Cultural Heritage</h2>
              <p className="text-body text-text-secondary mb-6 tracking-wide">
                From the European elegance of Buenos Aires to the wine regions of Mendoza, Argentina offers a sophisticated lifestyle that attracts international residents.
              </p>
              <p className="text-body text-text-secondary tracking-wide mb-4">
                The country's rich cultural heritage, world-class cuisine, and temperate climate create an exceptional quality of life for discerning expatriates.
              </p>
              <a href="/blog" className="text-primary hover:underline text-sm font-medium">
                Read our blog →
              </a>
            </div>
          </div>
        </EditorialSection>
        
        <section className="relative py-32">
          <div className="absolute inset-0 z-0">
            <img
              src={resolveImageSrc(buenosAiresChurch)}
              alt="Buenos Aires historic architecture"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
            <h2 className="font-serif text-xl-editorial md:text-3xl text-white mb-8 tracking-wide">
              Investment opportunities across diverse sectors
            </h2>
            <p className="text-body md:text-lg text-white/90 max-w-2xl mx-auto tracking-wide">
              From premium real estate in Palermo and Recoleta to agricultural investments in the Pampas, Argentina provides sophisticated investors with exceptional returns.
            </p>
          </div>
        </section>
        
        <EditorialSection>
          <h2 className="font-serif text-xl-editorial mb-8 tracking-wide">Why Choose Argentina</h2>
          <div className="max-w-3xl mx-auto text-left space-y-8">
            <div className="border-l-2 border-gold pl-8">
              <h3 className="font-serif text-lg-editorial mb-4 tracking-wide">Strategic Location</h3>
              <p className="text-body text-text-secondary tracking-wide">
                Argentina's position as the gateway to South America provides access to regional markets while maintaining proximity to both Atlantic and Pacific trade routes.
              </p>
            </div>
            
            <div className="border-l-2 border-gold pl-8">
              <h3 className="font-serif text-lg-editorial mb-4 tracking-wide">Natural Resources</h3>
              <p className="text-body text-text-secondary tracking-wide">
                Rich in agricultural land, mineral resources, and renewable energy potential, Argentina offers diverse investment opportunities across multiple sectors.
              </p>
            </div>
            
            <div className="border-l-2 border-gold pl-8">
              <h3 className="font-serif text-lg-editorial mb-4 tracking-wide">Quality of Life</h3>
              <p className="text-body text-text-secondary tracking-wide">
                World-class healthcare, excellent education systems, and a sophisticated cultural scene make Argentina an ideal destination for international families.
              </p>
            </div>
          </div>
        </EditorialSection>

        <EditorialSection>
          <h2 className="font-serif text-xl-editorial mb-6 tracking-wide">About This Resource</h2>
          <p className="text-body text-text-secondary mb-6 tracking-wide max-w-3xl mx-auto">
            Argentina Residence provides proprietary market intelligence and execution advisory for international investors and family offices seeking Argentine residency by investment opportunities.
          </p>
          <p className="text-body text-text-secondary mb-8 tracking-wide max-w-3xl mx-auto">
            This website provides educational content only and is not affiliated with any government agency, immigration service provider, or investment firm. All information should be verified with official sources, and visitors are encouraged to consult with qualified legal and financial professionals for personalized advice.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <a href="/contact">
              <Button size="lg" className="px-12">
                Contact Us
              </Button>
            </a>
            <a href="/faq">
              <Button size="lg" variant="outline" className="px-12">
                View FAQ
              </Button>
            </a>
          </div>
        </EditorialSection>
      </div>
  );
};

export default AboutContent;
