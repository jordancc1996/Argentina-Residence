import Hero from "@/components/Hero";
import EditorialSection from "@/components/EditorialSection";
import ScrollytellingSteps from "@/components/ScrollytellingSteps";
import { Button } from "@/components/ui/button";
import NewsletterSignup from "@/components/NewsletterSignup";
import InquiryCard from "@/components/InquiryCard";
import { defaultInquiryCard, getRelatedGuides } from "@/data/relatedGuides";
import RelatedGuideCards from "@/components/RelatedGuideCards";
import PageFAQ from "@/components/PageFAQ";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import CompareOptionsModal from "@/components/CompareOptionsModal";
import { Building2, TrendingUp, MapPin, ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import buenosAiresCityscape from "@/assets/buenos-aires-cityscape.webp";
import EditorialByline from "@/components/EditorialByline";
import { reviewDateFor } from "@/data/reviews";

const related = getRelatedGuides("argentina-real-estate-investment", 5);

const RealEstateInvestmentContent = ({ children }: { children?: ReactNode }) => {
  const neighborhoods = [
    {
      name: "Puerto Madero",
      photoAlt: "Aerial view of Puerto Madero, Buenos Aires",
      description: "Buenos Aires' most exclusive waterfront district with modern high-rises and premium amenities.",
      highlights: ["Waterfront views", "New construction", "24/7 security", "Premium amenities"]
    },
    {
      name: "Palermo",
      photoAlt: "Aerial view of Palermo, Buenos Aires",
      description: "The city's largest and most diverse barrio, home to embassies, parks, and trendy neighborhoods.",
      highlights: ["Cultural hub", "Restaurant scene", "Green spaces", "High rental demand"]
    },
    {
      name: "Recoleta",
      photoAlt: "Aerial view of Recoleta, Buenos Aires",
      description: "Classic European-style neighborhood known for French architecture and cultural institutions.",
      highlights: ["Historic charm", "Museums and galleries", "Upscale dining", "Central location"]
    },
    {
      name: "Belgrano",
      photoAlt: "Aerial view of Belgrano, Buenos Aires",
      description: "Upscale residential area popular with families and expats, featuring tree-lined streets.",
      highlights: ["Family-friendly", "International schools", "Parks", "Quiet streets"]
    }
  ];

  return (
    <>
      <Hero
        title="Argentina Real Estate Investment"
        subtitle="Argentina real estate investment spans Buenos Aires and beyond for buyers interested in the market on its own terms, separate from the announced citizenship-by-investment routes."
        backgroundImage={buenosAiresCityscape}
        imageAlt="Buenos Aires high-rise skyline representing Argentina real estate investment"
      />
      
      <EditorialSection>
        <div className="mb-8 flex flex-wrap items-center gap-6 text-left text-text-secondary">
          <EditorialByline reviewedAt={reviewDateFor("/guides/argentina-real-estate-investment")} />
        </div>
        <h2 className="font-serif text-xl-editorial mb-8 tracking-wide">
          Where to Invest: Real Estate in Argentina
        </h2>
        {children}
        <p className="text-editorial text-text-secondary mb-8 tracking-wide max-w-3xl mx-auto">
          Owning property in Argentina does not itself qualify for the announced citizenship-by-investment routes. Buenos Aires property can be bought as a market decision. The October 2, 2026 announcement states a Treasury contribution or a public bond, not a property purchase.
        </p>
        <div className="flex flex-col items-center gap-4">
          <CompareOptionsModal
            triggerLabel="Compare Your Options"
            heading="Compare Your Options"
            description="Counsel on Argentine property and investment-migration routes can be arranged through this office."
            wrapper="none"
          />
          <p className="text-sm text-text-secondary tracking-wide">
            Prefer to send a property inquiry?{" "}
            <a href="/contact" className="text-primary hover:underline">
              Contact this office
            </a>
          </p>
        </div>
      </EditorialSection>

      {/* Prime neighborhoods */}
      <EditorialSection>
        <h2 className="font-serif text-xl-editorial mb-4 tracking-wide text-center">
          Prime Investment Neighborhoods
        </h2>
        <p className="text-text-secondary text-center mb-12 max-w-2xl mx-auto">
          Neighborhood pricing and buyer activity are covered in the{" "}
          <a href="/research/buenos-aires-real-estate-bull-market-analysis" className="text-primary hover:underline">
            Buenos Aires real estate bull market
          </a>{" "}
          analysis. A separate note on foreign buyers is the{" "}
          <a href="/industry-news/buenos-aires-foreign-buyer-activity-q1" className="text-primary hover:underline">
            Buenos Aires foreign-buyer activity
          </a>{" "}
          brief. Neighborhood purchase-price ranges and appreciation rates were removed because no Colegio de Escribanos or official series was found to support them.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {neighborhoods.map((neighborhood) => (
            <div 
              key={neighborhood.name}
              className="border border-border rounded-lg overflow-hidden hover:border-gold/50 transition-colors"
            >
              <PhotoPlaceholder
                label={neighborhood.name}
                alt={neighborhood.photoAlt}
                variant="card"
              />
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-serif text-lg-editorial mb-1">{neighborhood.name}</h3>
                  </div>
                </div>
                
                <p className="text-text-secondary text-sm mb-4">
                  {neighborhood.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {neighborhood.highlights.map((highlight) => (
                    <span 
                      key={highlight}
                      className="text-xs bg-secondary/50 text-text-secondary px-3 py-1 rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </EditorialSection>

      <EditorialSection centered={false}>
        <NewsletterSignup className="my-0" />
      </EditorialSection>
      
      {/* Why Invest Section */}
      <EditorialSection className="bg-secondary/30">
        <div className="text-left">
          <div className="max-w-2xl">
            <h2 className="font-serif text-xl-editorial mb-6 tracking-wide">
              Why Buenos Aires Real Estate?
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Undervalued Market</h4>
                  <p className="text-text-secondary text-sm">
                    Buenos Aires property prices are 40-60% below comparable global cities, 
                    offering exceptional value for international investors.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <TrendingUp className="h-5 w-5 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Strong Rental Yields</h4>
                  <p className="text-text-secondary text-sm">
                    Premium neighborhoods offer 6-10% gross rental yields in USD, 
                    significantly outperforming many developed markets.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Building2 className="h-5 w-5 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Quality Construction</h4>
                  <p className="text-text-secondary text-sm">
                    New developments feature European-standard construction with 
                    modern amenities and professional property management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </EditorialSection>

      {/* Investment Process: Scrollytelling */}
      <EditorialSection centered={false}>
        <ScrollytellingSteps
          eyebrow="A Bespoke Process"
          heading="From search to keys in hand"
          intro="A guided five-step process for buyers deploying capital into Argentine real estate."
          steps={[
            {
              label: "Step 1",
              title: "Property Search",
              description:
                "Identify properties in Argentina that match your budget, use case, and preferred location, including Buenos Aires and other markets of interest.",
            },
            {
              label: "Step 2",
              title: "Property Shortlist",
              description:
                "Review a curated shortlist of properties in Palermo, Puerto Madero, and other premium neighborhoods.",
            },
            {
              label: "Step 3",
              title: "Due Diligence",
              description:
                "Independent legal and title due diligence on the selected asset, coordinated with licensed Argentine counsel and a notary public.",
            },
            {
              label: "Step 4",
              title: "Purchase and Escritura",
              description:
                "Funds are transferred through compliant banking channels. The escritura is executed at the notary, and title documentation is prepared for the buyer.",
            },
            {
              label: "Step 5",
              title: "Title Registration",
              description:
                "The escritura is registered with the relevant property registry, completing the transfer of title and handing over the keys.",
            },
          ]}
        />
      </EditorialSection>

      <PageFAQ path="/guides/argentina-real-estate-investment" />
      
      {/* CTA Section */}
      <EditorialSection className="bg-dark-teal text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-xl-editorial mb-6 tracking-wide text-white">
            Ready to Explore Investment Options?
          </h2>
          <p className="text-text-cream mb-8 text-lg">
            Contact us to discuss Buenos Aires property, due diligence, and the purchase process.
          </p>
          <a href="/contact">
            <Button size="lg" className="bg-gold hover:bg-gold/90 text-primary px-10">
              Inquire About Property
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </EditorialSection>

      <EditorialSection centered={false}>
        <InquiryCard
          heading={defaultInquiryCard.heading}
          body={defaultInquiryCard.body}
          ctaLabel={defaultInquiryCard.ctaLabel}
        />
      </EditorialSection>
      
      {/* Internal Linking */}
      <EditorialSection innerClassName="max-w-7xl">
        <h2 className="font-serif text-lg-editorial mb-8 tracking-wide text-center">
          Related Resources
        </h2>
        <RelatedGuideCards related={related} />
      </EditorialSection>
    </>
  );
};

export default RealEstateInvestmentContent;
