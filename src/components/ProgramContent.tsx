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
        subtitle="Government applications are not currently open. This is a short overview of the anticipated program."
        backgroundImage="/argentina-golden-visa-2026.webp"
        imageAlt="Argentine flag with the Sun of May against a clear sky"
        ctaText="Join the Waitlist"
        ctaLink="/argentina-golden-visa-eligibility-checker"
        ctaSubline={programStatus.waitlistDisclaimer}
      />
      
      <EditorialSection>
        <h2 className="font-serif text-xl-editorial mb-8 tracking-wide">
          Argentina's Golden Visa is an anticipated citizenship-by-investment framework. Government applications are not open.
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
      
      <EditorialSection className="bg-secondary/30">
        <div className="grid md:grid-cols-2 gap-16 text-left">
          <div>
            <h2 className="font-serif text-xl-editorial mb-6 tracking-wide">Investment Amount Not Enacted</h2>
            <p className="text-body text-text-secondary mb-6 tracking-wide">
              Decree 524/2025 does not set a dollar amount. It assigns a relevant investment to the Ministry of Economy. Secondary reports have described a $500,000 USD Treasury contribution and a $1,000,000 USD seven-year bond. Those figures were not found in an enacted regulation, so they are not current qualifying requirements. The decree also does not name real estate, a business, or a fund as a qualifying asset. APCI is not processing citizenship applications.
            </p>
            <p className="text-body text-text-secondary tracking-wide mb-4">
              A cancelled consultancy tender described four years or 5,000 APCI recommendation reports, whichever came first. That quantity is not a statutory application cap. Decree 524/2025 does not require a biometrics visit.
            </p>
            <SupportingImage
              className="mx-0 max-w-none my-6"
              image={casaRosadaGoldenHour}
              alt="Casa Rosada on Plaza de Mayo at golden hour"
              caption="Casa Rosada, seat of Argentina's federal government. The anticipated decree implementing the Golden Visa program would be finalized here."
            />
              <a href="/faq/argentina-citizenship-investment-requirements" className="text-primary hover:underline text-sm font-medium">
              See detailed requirements →
            </a>
          </div>
          
          <div>
            <h2 className="font-serif text-xl-editorial mb-6 tracking-wide">Anticipated Program Characteristics</h2>
            <p className="text-body text-text-secondary mb-6 tracking-wide">
              The points below describe characteristics discussed for the anticipated program. They are not benefits of an open government application.
            </p>
            <ul className="text-body text-text-secondary space-y-4 tracking-wide mb-4">
              <li>• Anticipated temporary residence with <a href="/faq/argentina-residency-work-rights" className="text-primary hover:underline">work authorization</a>, not currently issued through this program</li>
              <li>• Healthcare access is discussed for residents generally. It is not a confirmed Golden Visa benefit</li>
              <li>• Tax treatment is not a confirmed investor exemption. See <a href="/faq/argentina-residency-tax-implications" className="text-primary hover:underline">tax implications</a></li>
              <li>• An anticipated pathway to permanent residency after two years has not been officially confirmed</li>
              <li>• <a href="/faq/argentina-visa-free-travel" className="text-primary hover:underline">Passport access</a> follows the Henley Passport Index score for an Argentine passport, if one is later issued. It is not a right of residency today.</li>
              <li>• Anticipated <a href="/faq/argentina-citizenship-investment-family" className="text-primary hover:underline">family inclusion</a> for a spouse and children under 18. Status of dependents 18 and older is unknown</li>
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
                "Decree 524/2025 does not set $500,000 or $1,000,000. Those reported figures are not an open filing option.",
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
                "APCI is not processing applications. A dossier cannot be filed as a Golden Visa application while that remains the case. See the status page.",
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
          <NewsletterSignup />
        </div>

        <div className="mt-16">
          <PageFAQ path="/program" wrapped={false} />
        </div>

        <div className="mt-16 text-center">
          <p className="text-body text-text-secondary mb-6 tracking-wide">
            Government applications are not open. Join the{" "}
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
