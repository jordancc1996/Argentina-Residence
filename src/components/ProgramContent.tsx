import Hero from "@/components/Hero";
import EditorialSection from "@/components/EditorialSection";
import ScrollytellingSteps from "@/components/ScrollytellingSteps";
import { Button } from "@/components/ui/button";
import NewsletterSignup from "@/components/NewsletterSignup";
import SupportingImage from "@/components/SupportingImage";
import PageFAQ from "@/components/PageFAQ";
import casaRosadaGoldenHour from "@/assets/site-photos-renamed/casa-rosada-plaza-de-mayo-golden-hour.webp";
import { programStatus } from "@/data/programStatus";

const ProgramContent = () => {
  return (
    <>
      <Hero
        title="Argentina Golden Visa Program Overview"
        subtitle="The pathway should not be treated as an open application program. This is a short overview of the anticipated program."
        backgroundImage="/argentina-golden-visa-2026.webp"
        imageAlt="Argentine flag with the Sun of May against a clear sky"
        ctaText="Join the Waitlist"
        ctaLink="/argentina-golden-visa-eligibility-checker"
        ctaSubline={programStatus.waitlistDisclaimer}
      />
      
      <EditorialSection>
        <h2 className="font-serif text-xl-editorial mb-8 tracking-wide">
          Argentina's Golden Visa is an anticipated citizenship-by-investment framework. The pathway should not be treated as an open application program.
        </h2>
        <p className="text-editorial text-text-secondary mb-8 tracking-wide">
          Whether applications are open is answered on the{" "}
          <a href="/research/argentina-citizenship-by-investment-status" className="text-primary hover:underline">
            citizenship by investment status
          </a>{" "}
          page. Launch timing is on the{" "}
          <a href="/research/argentina-citizenship-by-investment-launch-date" className="text-primary hover:underline">
            launch date
          </a>{" "}
          page. The{" "}
          <a href="/guides/argentina-golden-visa-program" className="text-primary hover:underline">
            Argentina Golden Visa program guide
          </a>{" "}
          is the longer write-up. This page is the short overview.
        </p>
        <p className="text-editorial text-text-secondary mb-12 tracking-wide">
          The Argentina Residence waitlist is this firm's list for updates. Joining it does not file a government application, reserve a filing place, or grant residency or citizenship. Whether a stay in Argentina is anticipated is on the{" "}
          <a href="/faq/argentina-residency-physical-presence" className="text-primary hover:underline">physical presence</a>{" "}
          page. Expected papers are on the{" "}
          <a href="/faq/argentina-citizenship-investment-documents" className="text-primary hover:underline">documents</a>{" "}
          page.
        </p>
      </EditorialSection>

      <EditorialSection centered={false} className="!pt-0">
        <NewsletterSignup className="my-0" />
      </EditorialSection>
      
      <EditorialSection className="bg-secondary/30">
        <div className="grid md:grid-cols-2 gap-16 text-left">
          <div>
            <h2 className="font-serif text-xl-editorial mb-6 tracking-wide">Announced Financial Terms</h2>
            <p className="text-body text-text-secondary mb-6 tracking-wide">
              Decree 524/2025 does not set a dollar amount. It assigns a relevant investment to the Ministry of Economy. The October 2, 2026 announcement states a $350,000 non-refundable National Treasury contribution or an $800,000 subscription to a public bond created for the program. Those announced terms are not a guarantee of approval. Government applications are not yet confirmed as open. The government expects the application process to become operational during Q4 2026. No exact filing date has been announced. The <a href="/press/argentina-citizenship-by-investment-q4-2026" className="text-primary hover:underline">October 2 announcement</a> is the first-party summary.
            </p>
            <p className="text-body text-text-secondary tracking-wide mb-4">
              This page does not state 5,000 as an application cap. Gazette publication of a resolution cancelling a consultancy tender was not located. The decrees do not specify a biometrics rule for investor applicants.
            </p>
            <SupportingImage
              className="mx-0 max-w-none my-6"
              image={casaRosadaGoldenHour}
              alt="Casa Rosada on Plaza de Mayo at golden hour"
              caption="Casa Rosada, seat of Argentina's federal government."
            />
              <a href="/faq/argentina-citizenship-investment-requirements" className="text-primary hover:underline text-sm font-medium">
              See detailed requirements →
            </a>
          </div>
          
          <div>
            <h2 className="font-serif text-xl-editorial mb-6 tracking-wide">What the decrees do not establish</h2>
            <p className="text-body text-text-secondary mb-6 tracking-wide">
              The investment-naturalization provision is distinct from temporary or permanent residence. The decrees do not specify a physical-presence, biometrics, or application-document checklist for investor applicants. The October 2, 2026 announcement states additional Treasury contributions of $100,000 for a spouse, $100,000 for a qualifying child age 18 to 25, and $25,000 for a child under 18. The 18-to-25 category has announced conditions. Those amounts are not automatic eligibility.
            </p>
            <ul className="text-body text-text-secondary space-y-4 tracking-wide mb-4">
              <li>• A pending inquiry is not <a href="/faq/argentina-residency-work-rights" className="text-primary hover:underline">work authorization</a></li>
              <li>• Healthcare access is not stated as a benefit of investment naturalization</li>
              <li>• Tax residence depends on the statutory tests. See <a href="/faq/argentina-residency-tax-implications" className="text-primary hover:underline">tax implications</a></li>
              <li>• The decrees do not set a two-year path to permanent residence for investor applicants</li>
              <li>• <a href="/faq/argentina-visa-free-travel" className="text-primary hover:underline">Passport access</a> is not a benefit of residence or of an uncompleted application</li>
              <li>• <a href="/faq/argentina-citizenship-investment-family" className="text-primary hover:underline">Family contribution amounts</a> were announced on October 2, 2026. They are not automatic eligibility</li>
            </ul>
          </div>
        </div>
      </EditorialSection>
      
      <EditorialSection centered={false} className="!pt-12">
        <ScrollytellingSteps
          className="-mt-20"
          eyebrow="Before any government filing"
          heading="Preparation while government applications are closed"
          intro="Argentina Residence can explain the anticipated program and keep you on its own waitlist. That work does not file, reserve, or approve a government application."
          steps={[
            {
              label: "Step 1",
              title: "Initial Conversation",
              description:
                "A discussion of objectives against the anticipated program. This is not a government eligibility determination.",
            },
            {
              label: "Step 2",
              title: "Compare Anticipated Paths",
              description:
                "The October 2, 2026 announcement states a $350,000 National Treasury contribution or an $800,000 public-bond route. These announced terms are not a guarantee of approval.",
            },
            {
              label: "Step 3",
              title: "Document Preparation",
              description:
                "Source-of-funds records can be organized before a filing channel exists. Organizing documents does not submit an application.",
            },
            {
              label: "Step 4",
              title: "No Government Filing Today",
              description:
                "Government applications are not yet confirmed as open. A dossier cannot be filed as a Golden Visa application while that remains the case. See the status page.",
            },
            {
              label: "Step 5",
              title: "If Applications Later Open",
              description:
                "Any later filing would be a separate government process. Processing time is not confirmed. The Argentina Residence waitlist would not create government priority.",
            },
          ]}
        />

        <div className="mt-16">
          <PageFAQ path="/program" wrapped={false} />
        </div>

        <div className="mt-16 text-center">
          <p className="text-body text-text-secondary mb-6 tracking-wide">
            The pathway should not be treated as an open application program. Join the{" "}
            <a href="/argentina-golden-visa-eligibility-checker" className="text-primary hover:underline">
              Argentina Residence Waitlist
            </a>{" "}
            for updates, or request a consultation. Neither step files an application with the Argentine government.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/argentina-golden-visa-eligibility-checker">
              <Button size="lg" className="px-12">
                Join the Waitlist
              </Button>
            </a>
            <a href="/contact">
              <Button size="lg" variant="outline" className="px-12">
                Schedule a Consultation
              </Button>
            </a>
          </div>
        </div>
      </EditorialSection>
    </>
  );
};

export default ProgramContent;
