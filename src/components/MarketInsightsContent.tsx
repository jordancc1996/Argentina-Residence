import Hero from "../components/Hero";
import EditorialSection from "../components/EditorialSection";
import FormCarryForm from "../components/FormCarryForm";
import SupportingImage from "../components/SupportingImage";
import heroImage from "../assets/argentina-flag-market.webp";
import flagDeepBlue from "../assets/site-photos-renamed/generic-flag-deep-blue-sky.webp";
import PageFAQ from "@/components/PageFAQ";

const MarketInsightsContent = () => {
  return (
    <>
      <Hero
        backgroundImage={heroImage}
        imageAlt="Argentine flag waving against a blue sky"
        title="Argentina Investment Trends"
        subtitle="An index of the market research on this site"
        description="This page points to longer research. It does not publish a separate set of current statistics, and it does not mean citizenship-by-investment applications are open."
      />
      
      <EditorialSection>
        <h2 className="font-serif text-xl-editorial mb-8 tracking-wide">Where the market writing lives</h2>
        <p className="text-editorial text-text-secondary mb-8 tracking-wide">
          Argentina investment trends on this site are in the research articles below. This page does not repeat those articles, and it does not add new figures.
        </p>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="border-l-2 border-gold pl-6">
            <h3 className="font-serif text-lg-editorial mb-3 tracking-wide">
              <a href="/research/argentine-investment-landscape-golden-visa-value-proposition" className="text-primary hover:underline">
                Argentine investment landscape
              </a>
            </h3>
            <p className="text-body text-text-secondary tracking-wide">
              The longer note on fiscal policy, sectors, and how the anticipated Golden Visa is discussed as capital policy. Launch timing is not confirmed there.
            </p>
          </div>
          <div className="border-l-2 border-gold pl-6">
            <h3 className="font-serif text-lg-editorial mb-3 tracking-wide">
              <a href="/research/buenos-aires-real-estate-bull-market-analysis" className="text-primary hover:underline">
                Buenos Aires real estate analysis
              </a>
            </h3>
            <p className="text-body text-text-secondary tracking-wide">
              Neighborhood-level property writing. The decrees do not identify a purchase as a qualifying or disqualifying investment.
            </p>
          </div>
          <div className="border-l-2 border-gold pl-6">
            <h3 className="font-serif text-lg-editorial mb-3 tracking-wide">
              <a href="/industry-news/buenos-aires-foreign-buyer-activity-q1" className="text-primary hover:underline">
                Foreign-buyer activity
              </a>
            </h3>
            <p className="text-body text-text-secondary tracking-wide">
              A short industry note on foreign buyers. It is not an announcement that government applications are open.
            </p>
          </div>
          <div className="border-l-2 border-gold pl-6">
            <h3 className="font-serif text-lg-editorial mb-3 tracking-wide">
              <a href="/guides/argentina-real-estate-investment" className="text-primary hover:underline">
                Real estate investment guide
              </a>
            </h3>
            <p className="text-body text-text-secondary tracking-wide">
              How foreign buyers approach Argentine property, kept separate from the announced Treasury and bond routes.
            </p>
          </div>
        </div>
        <SupportingImage
          image={flagDeepBlue}
          alt="Argentine flag against a deep blue sky"
          caption="The Argentine flag against a clear blue sky."
        />
      </EditorialSection>

      <PageFAQ path="/market-insights" />

      <EditorialSection className="bg-secondary/30">
        <FormCarryForm
          formType="market-insights"
          buttonText="Request market notes"
          title="Request Argentina Residence market notes"
          description="Ask for the market writing this site already publishes. This form does not file a government application, and it does not send a separate statistics report."
        />
      </EditorialSection>
    </>
  );
};

export default MarketInsightsContent;
