import Hero from "../components/Hero";
import EditorialSection from "../components/EditorialSection";
import FormCarryForm from "../components/FormCarryForm";
import heroImage from "../assets/argentina-flag-market.jpg";

const MarketInsightsContent = () => {
  return (
    <>
      <Hero
        backgroundImage={heroImage}
        title="Argentina Investment Trends"
        subtitle="Understanding Argentina's Investment Landscape"
        description="Comprehensive analysis of economic trends, investment opportunities, and market dynamics shaping Argentina's future."
      />
      
      <EditorialSection>
        <h2 className="font-serif text-2xl-editorial mb-8 tracking-wide">Argentina Investment Landscape</h2>
        <h2 className="font-serif text-xl-editorial mb-8 tracking-wide">Economic Overview</h2>
        <p className="text-editorial text-text-secondary mb-8 tracking-wide">
          Argentina's economy presents unique opportunities for savvy investors. With a diverse industrial base, 
          abundant natural resources, and a highly educated workforce, the country offers compelling investment 
          prospects across multiple sectors.
        </p>
        <p className="text-editorial text-text-secondary mb-8 tracking-wide">
          Recent economic reforms have created a more favorable environment for foreign investment, 
          with streamlined regulations and enhanced legal protections for international investors.
        </p>
      </EditorialSection>

      <EditorialSection className="bg-secondary/30">
        <h2 className="font-serif text-xl-editorial mb-8 tracking-wide">Key Investment Sectors</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-serif text-lg-editorial mb-4 tracking-wide">Agriculture and Agribusiness</h3>
            <p className="text-editorial text-text-secondary mb-6 tracking-wide">
              Argentina is one of the world's leading agricultural producers, offering opportunities in 
              crop production, livestock, and food processing technologies.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-lg-editorial mb-4 tracking-wide">Technology and Innovation</h3>
            <p className="text-editorial text-text-secondary mb-6 tracking-wide">
              Buenos Aires has emerged as a major tech hub in Latin America, with a thriving startup 
              ecosystem and world-class software development talent.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-lg-editorial mb-4 tracking-wide">Real Estate</h3>
            <p className="text-editorial text-text-secondary mb-6 tracking-wide">
              Premium properties in Buenos Aires and coastal regions offer excellent value compared 
              to other major international cities, with strong rental yield potential.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-lg-editorial mb-4 tracking-wide">Energy and Mining</h3>
            <p className="text-editorial text-text-secondary mb-6 tracking-wide">
              With vast shale oil reserves and renewable energy potential, Argentina presents 
              significant opportunities in the energy sector.
            </p>
          </div>
        </div>
      </EditorialSection>

      <EditorialSection className="bg-secondary/30">
        <FormCarryForm
          formType="market-insights"
          buttonText="Access the 2026 Investment Thesis"
          title="Get Detailed Market Insights Report"
          description="Receive our comprehensive Argentina market analysis report delivered directly to your inbox. This exclusive report includes investment opportunities, risk assessments, and strategic recommendations."
        />
      </EditorialSection>
    </>
  );
};

export default MarketInsightsContent;
