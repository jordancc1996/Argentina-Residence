import Hero from "@/components/Hero";
import EditorialSection from "@/components/EditorialSection";
import ScrollytellingSteps from "@/components/ScrollytellingSteps";
import { Button } from "@/components/ui/button";
import NewsletterSignup from "@/components/NewsletterSignup";
import InquiryCard from "@/components/InquiryCard";
import { defaultInquiryCard, getRelatedGuides } from "@/data/relatedGuides";
import { Clock, Shield, Globe, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";
import goldenVisaHero from "@/assets/argentina-golden-visa-flag-hero.jpg";

const related = getRelatedGuides("argentina-golden-visa-program", 5);

const GoldenVisaProgramContent = () => {
  return (
    <>
      <Hero
        title="Argentina's Golden Visa"
        subtitle="The 2026 Investor Guide"
        backgroundImage={goldenVisaHero}
      />
      
      {/* Program Status Banner */}
      <div className="bg-gold/10 border-y border-gold/30 py-4">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-center gap-3 text-center">
          <Clock className="h-5 w-5 text-gold flex-shrink-0" />
          <p className="text-sm md:text-base text-text-primary">
            <span className="font-semibold">Program Status:</span> Proposed legislation under review. Anticipated launch date not yet confirmed
          </p>
        </div>
      </div>
      
      <EditorialSection>
        <h2 className="font-serif text-xl-editorial mb-8 tracking-wide">
          Argentina's New Golden Visa: The 2026 Investor Guide
        </h2>
        <p className="text-editorial text-text-secondary mb-8 tracking-wide max-w-3xl mx-auto">
          Argentina Golden Visa 2026 is proposed, not operating. Decree 524/2025 created the pathway; APCI has not published operational regulations or opened applications.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/argentina-golden-visa-eligibility-checker">
            <Button size="lg" className="px-8">
              Check Your Eligibility
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </EditorialSection>

      <EditorialSection centered={false}>
        <NewsletterSignup />
      </EditorialSection>
      
      {/* Key Benefits */}
      <EditorialSection className="bg-secondary/30">
        <h2 className="font-serif text-xl-editorial mb-12 tracking-wide text-center">
          Why Argentina's Golden Visa?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-gold" />
            </div>
            <h3 className="font-serif text-lg mb-3">Decision Window</h3>
            <p className="text-text-secondary text-sm">
              Processing time is not yet officially confirmed. No decision window has been published. APCI is not processing applications.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-gold" />
            </div>
            <h3 className="font-serif text-lg mb-3">Secure Investment</h3>
            <p className="text-text-secondary text-sm">
              Government-backed program with clear legal framework
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-gold" />
            </div>
            <h3 className="font-serif text-lg mb-3">Global Mobility</h3>
            <p className="text-text-secondary text-sm">
              Visa-free access to 170+ countries with Argentine passport
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-gold" />
            </div>
            <h3 className="font-serif text-lg mb-3">Investment Growth</h3>
            <p className="text-text-secondary text-sm">
              Access to one of South America's largest economies
            </p>
          </div>
        </div>
      </EditorialSection>
      
      {/* Investment Requirements */}
      <EditorialSection>
        <div className="text-left">
          <div className="max-w-2xl">
            <h2 className="font-serif text-xl-editorial mb-6 tracking-wide">
              Anticipated Investment Paths
            </h2>
            <p className="text-body text-text-secondary mb-6 tracking-wide">
              Two paths are currently anticipated, subject to final regulation: a non-refundable $500,000 USD contribution to the Argentine Treasury, or a $1,000,000 USD investment in a 7-year, 0% interest Argentine government bond, with principal returned at maturity. Real estate, business or startup ventures, and investment funds are not anticipated qualifying paths. Neither path has been officially confirmed. APCI is not processing applications.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 p-4 bg-secondary/30 rounded-lg">
                <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-text-primary">$500,000 USD Treasury contribution</p>
                  <p className="text-sm text-text-secondary">Anticipated as non-refundable. Subject to final regulation. Not yet officially confirmed.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-secondary/30 rounded-lg">
                <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-text-primary">$1,000,000 USD 7-year government bond</p>
                  <p className="text-sm text-text-secondary">Anticipated at 0% interest, with principal returned at maturity. Subject to final regulation. Not yet officially confirmed.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </EditorialSection>

      {/* Program Timeline: Scrollytelling */}
      <EditorialSection centered={false} className="bg-secondary/30">
        <ScrollytellingSteps
          eyebrow="Program Timeline"
          heading="A short window to position early"
          intro="The Argentina Golden Visa is moving from announcement to active program. Each milestone unlocks specific advantages for early-positioned investors."
          steps={[
            {
              label: "Now",
              title: "Early Registration Open",
              description:
                "Join the priority waitlist for first-mover advantages when the program launches.",
            },
            {
              label: "Next",
              title: "Final Legislation",
              description:
                "Expected passage of enabling legislation and regulatory framework. Anticipated launch date not yet confirmed.",
            },
            {
              label: "Launch",
              title: "Applications Open",
              description:
                "Official program launch with priority processing for waitlist members. Anticipated launch date not yet confirmed.",
            },
          ]}
        />
      </EditorialSection>
      
      {/* CTA Section */}
      <EditorialSection className="bg-dark-teal text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-xl-editorial mb-6 tracking-wide text-white">
            Secure Your Priority Status
          </h2>
          <p className="text-text-cream mb-8 text-lg">
            Be among the first to apply when Argentina's Golden Visa launches. 
            Complete our eligibility assessment to join the priority waitlist.
          </p>
          <a href="/argentina-golden-visa-eligibility-checker">
            <Button size="lg" className="bg-gold hover:bg-gold/90 text-primary px-10">
              Check Eligibility Now
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
      
      {/* Internal Linking Section */}
      <EditorialSection innerClassName="max-w-7xl">
        <h2 className="font-serif text-lg-editorial mb-8 tracking-wide text-center">
          Related Guides
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
          {related.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="p-6 border border-border rounded-lg hover:border-gold/50 hover:bg-secondary/20 transition-all group text-left"
            >
              <h3 className="font-serif text-lg mb-2 group-hover:text-gold transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-text-secondary">{item.description}</p>
            </a>
          ))}
        </div>
      </EditorialSection>
    </>
  );
};

export default GoldenVisaProgramContent;
