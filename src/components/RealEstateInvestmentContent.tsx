import Hero from "@/components/Hero";
import EditorialSection from "@/components/EditorialSection";
import ScrollytellingSteps from "@/components/ScrollytellingSteps";
import { Button } from "@/components/ui/button";
import { Building2, TrendingUp, MapPin, ArrowRight } from "lucide-react";
import buenosAiresCityscape from "@/assets/buenos-aires-cityscape.jpg";

const RealEstateInvestmentContent = () => {
  const neighborhoods = [
    {
      name: "Puerto Madero",
      description: "Buenos Aires' most exclusive waterfront district with modern high-rises and premium amenities.",
      priceRange: "$150,000 - $2M+",
      highlights: ["Waterfront views", "New construction", "24/7 security", "Premium amenities"],
      appreciation: "12-15% annual growth"
    },
    {
      name: "Palermo",
      description: "The city's largest and most diverse barrio, home to embassies, parks, and trendy neighborhoods.",
      priceRange: "$100,000 - $800K",
      highlights: ["Cultural hub", "Restaurant scene", "Green spaces", "High rental demand"],
      appreciation: "10-12% annual growth"
    },
    {
      name: "Recoleta",
      description: "Classic European-style neighborhood known for French architecture and cultural institutions.",
      priceRange: "$120,000 - $1.5M",
      highlights: ["Historic charm", "Museums and galleries", "Upscale dining", "Central location"],
      appreciation: "8-10% annual growth"
    },
    {
      name: "Belgrano",
      description: "Upscale residential area popular with families and expats, featuring tree-lined streets.",
      priceRange: "$100,000 - $600K",
      highlights: ["Family-friendly", "International schools", "Parks", "Quiet streets"],
      appreciation: "9-11% annual growth"
    }
  ];

  return (
    <>
      <Hero
        title="Argentina Real Estate Investment"
        subtitle="Argentina real estate investment spans Buenos Aires and beyond for buyers interested in the market on its own terms, independent of the Golden Visa or any residency-by-investment program."
        backgroundImage={buenosAiresCityscape}
      />
      
      <EditorialSection>
        <h2 className="font-serif text-xl-editorial mb-8 tracking-wide">
          Where to Invest: Real Estate in Argentina
        </h2>
        <p className="text-editorial text-text-secondary mb-8 tracking-wide max-w-3xl mx-auto">
          This guide covers Buenos Aires property types and neighborhoods for buyers interested in the market on its own terms, independent of the Golden Visa or any residency-by-investment program.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/argentina-golden-visa-eligibility-checker">
            <Button size="lg" className="px-8">
              Check Your Eligibility
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
          <a href="/guides/argentina-golden-visa-program">
            <Button variant="outline" size="lg" className="px-8">
              View Program Details
            </Button>
          </a>
        </div>
      </EditorialSection>
      
      {/* Prime neighborhoods */}
      <EditorialSection>
        <h2 className="font-serif text-xl-editorial mb-4 tracking-wide text-center">
          Prime Investment Neighborhoods
        </h2>
        <p className="text-text-secondary text-center mb-12 max-w-2xl mx-auto">
          Buenos Aires offers exceptional real estate opportunities in world-class neighborhoods, with strong appreciation potential.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {neighborhoods.map((neighborhood) => (
            <div 
              key={neighborhood.name}
              className="border border-border rounded-lg overflow-hidden hover:border-gold/50 transition-colors"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-serif text-lg-editorial mb-1">{neighborhood.name}</h3>
                    <div className="flex items-center gap-2 text-gold text-sm">
                      <TrendingUp className="h-4 w-4" />
                      {neighborhood.appreciation}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-text-muted">Price Range</p>
                    <p className="font-semibold text-text-primary">{neighborhood.priceRange}</p>
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
          heading="From eligibility to keys in hand"
          intro="A guided five-step process for buyers deploying capital into Argentine real estate."
          steps={[
            {
              label: "Step 1",
              title: "Eligibility Assessment",
              description:
                "Complete our quick assessment to confirm your investor profile and clarify the residency pathway best suited to your objectives.",
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
              title: "Investment and Closing",
              description:
                "Funds are transferred through compliant banking channels and the deed is executed at the notary, with proof of investment prepared for migration filing.",
            },
            {
              label: "Step 5",
              title: "Residency Application",
              description:
                "Your residency application is filed with Migraciones, with case management through to approval and issuance of your DNI.",
            },
          ]}
        />
      </EditorialSection>
      
      {/* CTA Section */}
      <EditorialSection className="bg-dark-teal text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-xl-editorial mb-6 tracking-wide text-white">
            Ready to Explore Investment Options?
          </h2>
          <p className="text-text-cream mb-8 text-lg">
            Complete our eligibility assessment to receive personalized investment 
            recommendations and join our priority investor waitlist.
          </p>
          <a href="/argentina-golden-visa-eligibility-checker">
            <Button size="lg" className="bg-gold hover:bg-gold/90 text-primary px-10">
              Start Eligibility Check
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </EditorialSection>
      
      {/* Internal Linking */}
      <EditorialSection>
        <h2 className="font-serif text-lg-editorial mb-8 tracking-wide text-center">
          Related Resources
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <a 
            href="/guides/argentina-golden-visa-program" 
            className="p-6 border border-border rounded-lg hover:border-gold/50 hover:bg-secondary/20 transition-all group"
          >
            <h3 className="font-serif text-lg mb-2 group-hover:text-gold transition-colors">
              Program Details
            </h3>
            <p className="text-sm text-text-secondary">
              Full guide to Argentina's Golden Visa program and legal framework.
            </p>
          </a>
          
          <a 
            href="/research/buenos-aires-real-estate-bull-market-analysis" 
            className="p-6 border border-border rounded-lg hover:border-gold/50 hover:bg-secondary/20 transition-all group"
          >
            <h3 className="font-serif text-lg mb-2 group-hover:text-gold transition-colors">
              Market Analysis
            </h3>
            <p className="text-sm text-text-secondary">
              In-depth analysis of Buenos Aires real estate market trends.
            </p>
          </a>
          
          <a 
            href="/market-insights" 
            className="p-6 border border-border rounded-lg hover:border-gold/50 hover:bg-secondary/20 transition-all group"
          >
            <h3 className="font-serif text-lg mb-2 group-hover:text-gold transition-colors">
              Market Insights
            </h3>
            <p className="text-sm text-text-secondary">
              Latest data and trends in Argentine investment markets.
            </p>
          </a>
        </div>
      </EditorialSection>
    </>
  );
};

export default RealEstateInvestmentContent;
