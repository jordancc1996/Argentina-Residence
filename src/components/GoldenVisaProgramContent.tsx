import Hero from "@/components/Hero";
import EditorialSection from "@/components/EditorialSection";
import ScrollytellingSteps from "@/components/ScrollytellingSteps";
import { Button } from "@/components/ui/button";
import NewsletterSignup from "@/components/NewsletterSignup";
import InquiryCard from "@/components/InquiryCard";
import { defaultInquiryCard, getRelatedGuides } from "@/data/relatedGuides";
import RelatedGuideCards from "@/components/RelatedGuideCards";
import PageFAQ from "@/components/PageFAQ";
import { Clock, Shield, Globe, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import goldenVisaHero from "@/assets/argentina-golden-visa-flag-hero.webp";

const related = getRelatedGuides("argentina-golden-visa-program", 5);

const GoldenVisaProgramContent = ({ children }: { children?: ReactNode }) => {
  return (
    <>
      <Hero
        title="Argentina's Golden Visa"
        subtitle="The 2026 Investor Guide"
        backgroundImage={goldenVisaHero}
        imageAlt="Argentine flag against a clear sky, representing the Argentina Golden Visa program"
      />
      
      {/* Program Status Banner */}
      <div className="bg-gold/10 border-y border-gold/30 py-4">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-center gap-3 text-center">
          <Clock className="h-5 w-5 text-gold flex-shrink-0" />
          <p className="text-sm md:text-base text-text-primary">
            <span className="font-semibold">
              <a href="/research/argentina-citizenship-by-investment-status" className="text-primary hover:underline">
                Program Status
              </a>:
            </span>{" "}
            Proposed legislation under review. Anticipated launch date not yet confirmed
          </p>
        </div>
      </div>
      
      <EditorialSection>
        <h2 className="font-serif text-xl-editorial mb-8 tracking-wide">
          Argentina's New Golden Visa: The 2026 Investor Guide
        </h2>
        {children}
        <p className="text-editorial text-text-secondary mb-8 tracking-wide max-w-3xl mx-auto">
          Argentina Golden Visa 2026 is proposed, not operating. The{" "}
          <a href="/research/argentina-citizenship-by-investment-launch-date" className="text-primary hover:underline">
            citizenship by investment launch date
          </a>{" "}
          is not confirmed.{" "}
          <a href="https://www.boletinoficial.gob.ar/detalleAviso/primera/329061/20250731" className="text-primary hover:underline">
            Decree 524/2025
          </a>{" "}
          created the pathway; APCI has not published operational regulations or opened applications.
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
              Argentina's{" "}
              <a href="/faq/argentina-citizenship-investment-application-timeline" className="text-primary hover:underline">
                processing time
              </a>{" "}
              is not a filing-to-citizenship calendar. Decree 524/2025 gives Migraciones 30 business days after it receives APCI's report. APCI is not processing applications.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-gold" />
            </div>
            <h3 className="font-serif text-lg mb-3">Legal Framework</h3>
            <p className="text-text-secondary text-sm">
              Decree 524/2025 created a framework. Operational rules are unpublished, and government applications are not open.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-gold" />
            </div>
            <h3 className="font-serif text-lg mb-3">Global Mobility</h3>
            <p className="text-text-secondary text-sm">
              <a href="/faq/argentina-visa-free-travel" className="text-primary hover:underline">
                Visa-free access
              </a>{" "}
              The Henley Passport Index of 13 April 2026 gives an Argentine passport a visa-free score of 168 and rank 15. That score is not residency travel.
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
              Reported Figures, Not Enacted Amounts
            </h2>
            <p className="text-body text-text-secondary mb-6 tracking-wide">
              Reported figures are not an enacted schedule. See the{" "}
              <a href="/faq/argentina-citizenship-investment-requirements" className="text-primary hover:underline">
                anticipated investment requirements
              </a>
              . Decree 524/2025 does not set a dollar amount. Secondary reports have described a $500,000 USD Treasury contribution and a $1,000,000 USD 7-year bond. Those figures were not found in an enacted regulation. They are not current qualifying requirements. APCI is not processing applications.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 p-4 bg-secondary/30 rounded-lg">
                <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-text-primary">$500,000 USD Treasury contribution</p>
                  <p className="text-sm text-text-secondary">Described in secondary reports. Not found in Decree 524/2025. Not a current qualifying requirement.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-secondary/30 rounded-lg">
                <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-text-primary">$1,000,000 USD 7-year government bond</p>
                  <p className="text-sm text-text-secondary">Described in secondary reports, including 0% interest and principal at maturity. Not found in an enacted regulation.</p>
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
          heading="Argentina Residence Waitlist Open"
          intro="Government applications are not open. The Argentina Residence waitlist is this firm's list for updates. It is not a government application, a government priority list, or a reserved filing place. Launch timing is not confirmed."
          steps={[
            {
              label: "Now",
              title: "Argentina Residence Waitlist Open",
              description:
                "Join the Argentina Residence waitlist for updates. This does not apply to the Argentine government and does not reserve a government position.",
            },
            {
              label: "Next",
              title: "Rules Still Unpublished",
              description:
                "Operational regulations are not published. The anticipated launch date is not confirmed. See the launch-date page for timing.",
            },
            {
              label: "Later",
              title: "Government Applications, If Opened",
              description:
                "A later government filing channel would be a separate process. The Argentina Residence waitlist would not create government priority or approval.",
            },
          ]}
        />
      </EditorialSection>

      <PageFAQ path="/guides/argentina-golden-visa-program" />
      
      {/* CTA Section */}
      <EditorialSection className="bg-dark-teal text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-xl-editorial mb-6 tracking-wide text-white">
            Join the Argentina Residence Waitlist
          </h2>
          <p className="text-text-cream mb-8 text-lg">
            Government applications are not open. The waitlist is for updates from Argentina Residence. It does not file an application or hold a government place.
          </p>
          <a href="/argentina-golden-visa-eligibility-checker">
            <Button size="lg" className="bg-gold hover:bg-gold/90 text-primary px-10">
              Join the Waitlist
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
        <RelatedGuideCards related={related} />
      </EditorialSection>
    </>
  );
};

export default GoldenVisaProgramContent;
