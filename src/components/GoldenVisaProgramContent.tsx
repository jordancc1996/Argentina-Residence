import Hero from "@/components/Hero";
import EditorialSection from "@/components/EditorialSection";
import ScrollytellingSteps from "@/components/ScrollytellingSteps";
import { Button } from "@/components/ui/button";
import NewsletterSignup from "@/components/NewsletterSignup";
import InquiryCard from "@/components/InquiryCard";
import { defaultInquiryCard, getRelatedGuides } from "@/data/relatedGuides";
import RelatedGuideCards from "@/components/RelatedGuideCards";
import PageFAQ from "@/components/PageFAQ";
import CompareOptionsModal from "@/components/CompareOptionsModal";
import { Clock, Shield, Globe, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import goldenVisaHero from "@/assets/argentina-golden-visa-flag-hero.webp";
import EditorialByline from "@/components/EditorialByline";
import { reviewDateFor } from "@/data/reviews";

const related = getRelatedGuides("argentina-golden-visa-program", 5);

const GoldenVisaProgramContent = ({ children }: { children?: ReactNode }) => {
  return (
    <>
      <Hero
        title="Argentina Citizenship by Investment Guide"
        subtitle="Announced terms for 2026. Applications are not confirmed open."
        backgroundImage={goldenVisaHero}
        imageAlt="Argentine flag against a clear sky"
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
        <div className="mb-8 flex flex-wrap items-center gap-6 text-left text-text-secondary">
          <EditorialByline reviewedAt={reviewDateFor("/guides/argentina-golden-visa-program")} />
        </div>
        <h2 className="font-serif text-xl-editorial mb-8 tracking-wide">
          Announced citizenship-by-investment terms
        </h2>
        {children}
        <p className="text-editorial text-text-secondary mb-8 tracking-wide max-w-3xl mx-auto">
          Argentina citizenship by investment has announced financial terms. Government applications are not yet confirmed as open. The{" "}
          <a href="/research/argentina-citizenship-by-investment-launch-date" className="text-primary hover:underline">
            citizenship by investment launch date
          </a>{" "}
          has no exact filing date. The government expects applications to become operational during Q4 2026.{" "}
          <a href="https://www.boletinoficial.gob.ar/detalleAviso/primera/329061/20250731" className="text-primary hover:underline">
            Decree 524/2025
          </a>{" "}
          set the review procedure. The{" "}
          <a href="/press/argentina-citizenship-by-investment-q4-2026" className="text-primary hover:underline">
            October 2, 2026 announcement
          </a>{" "}
          later stated a $350,000 Treasury contribution or an $800,000 public-bond route. People may search for the announced program as an "Argentina Golden Visa," but the framework described here is citizenship by investment rather than a conventional residence-based Golden Visa. The short map of{" "}
          <a href="/" className="text-primary hover:underline">
            the Argentina citizenship-by-investment program
          </a>{" "}
          is on the homepage.
        </p>
        <div className="flex flex-col items-center gap-4">
          <CompareOptionsModal
            triggerLabel="Compare Your Options"
            heading="Compare Your Options"
            description="Counsel on the citizenship-by-investment route can be arranged through this office."
            wrapper="none"
          />
          <p className="text-sm text-text-secondary tracking-wide">
            Prefer to check eligibility directly?{" "}
            <a href="/argentina-golden-visa-eligibility-checker" className="text-primary hover:underline">
              Open the readiness check
            </a>
          </p>
        </div>
      </EditorialSection>

      {/* Key Benefits */}
      <EditorialSection className="bg-secondary/30">
        <h2 className="font-serif text-xl-editorial mb-12 tracking-wide text-center">
          Why this citizenship-by-investment route?
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
              is not a filing-to-citizenship calendar. Decree 524/2025 gives DNM 30 business days to decide after DNM receives APCI's report. That period is not 30 days from the application, and it is not a total or guaranteed processing time. APCI's assessment and interagency review occur before this period. Government applications are not yet confirmed as open.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-gold" />
            </div>
            <h3 className="font-serif text-lg mb-3">Legal Framework</h3>
            <p className="text-text-secondary text-sm">
              Decree 524/2025 created a framework. The October 2, 2026 announcement stated the financial routes. Government applications are not yet confirmed as open.
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

      <EditorialSection centered={false}>
        <NewsletterSignup className="my-0" />
      </EditorialSection>
      
      {/* Investment Requirements */}
      <EditorialSection>
        <div className="text-left">
          <div className="max-w-2xl">
            <h2 className="font-serif text-xl-editorial mb-6 tracking-wide">
              Announced Financial Terms
            </h2>
            <p className="text-body text-text-secondary mb-6 tracking-wide">
              Decree 524/2025 does not set a dollar amount. The{" "}
              <a href="/press/argentina-citizenship-by-investment-q4-2026" className="text-primary hover:underline">
                October 2, 2026 announcement
              </a>{" "}
              later stated a $350,000 non-refundable National Treasury contribution or an $800,000 public-bond subscription. Those announced terms are not a guarantee of approval. Government applications are not yet confirmed as open. See the{" "}
              <a href="/faq/argentina-citizenship-investment-requirements" className="text-primary hover:underline">
                investment requirements
              </a>
              .
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 p-4 bg-secondary/30 rounded-lg">
                <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-text-primary">$350,000 Treasury contribution</p>
                  <p className="text-sm text-text-secondary">Announced non-refundable contribution to the National Treasury for a principal applicant. Not a guarantee of approval.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-secondary/30 rounded-lg">
                <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-text-primary">$800,000 public-bond route</p>
                  <p className="text-sm text-text-secondary">Announced subscription to a public bond created for the program. Not a guarantee of approval.</p>
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
          intro="Government applications are not yet confirmed as open. The Argentina Residence waitlist is this firm's list for updates. It is not a government application, a government priority list, or a reserved filing place. The government expects applications to become operational during Q4 2026. No exact filing date has been announced."
          steps={[
            {
              label: "Now",
              title: "Argentina Residence Waitlist Open",
              description:
                "Join the Argentina Residence waitlist for updates. This does not apply to the Argentine government and does not reserve a government position.",
            },
            {
              label: "Next",
              title: "Expected Q4 2026 Window",
              description:
                "The government expects applications to become operational during Q4 2026. That is not a guaranteed opening date, and no exact filing date has been announced.",
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
            The pathway should not be treated as an open application program. The waitlist is for updates from Argentina Residence. It does not file an application or hold a government place.
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
