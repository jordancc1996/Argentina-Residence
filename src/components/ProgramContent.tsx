import Hero from "@/components/Hero";
import EditorialSection from "@/components/EditorialSection";
import ScrollytellingSteps from "@/components/ScrollytellingSteps";
import { Button } from "@/components/ui/button";
import goldenVisaHero from "@/assets/argentina-golden-visa-2026.jpg";

const ProgramContent = () => {
  return (
    <>
      <Hero
        title="Argentina Residency by Investment: The Fastest Path to a Global Passport"
        subtitle="Secure permanent residency in one of South America's most vibrant economies. With a strategic investment, you can qualify for Argentine citizenship in as little as two years, gaining visa-free access to over 170 destinations and a gateway to the MERCOSUR region."
        backgroundImage={goldenVisaHero}
        ctaText="Request Program Details"
        ctaLink="/contact"
      />
      
      <EditorialSection>
        <h2 className="font-serif text-xl-editorial mb-8 tracking-wide">
          Argentina's Residency by Investment Program offers unparalleled opportunities for global investors seeking South American residency.
        </h2>
        <p className="text-editorial text-text-secondary mb-12 tracking-wide">
          Our program is synonymous with exceptional value and strategic advantage.
        </p>
      </EditorialSection>
      
      <EditorialSection className="bg-secondary/30">
        <div className="grid md:grid-cols-2 gap-16 text-left">
          <div>
            <h2 className="font-serif text-xl-editorial mb-6 tracking-wide">Investment Requirements</h2>
            <p className="text-body text-text-secondary mb-6 tracking-wide">
              The Argentina residency by investment program is expected to require a minimum investment of $500,000 USD, subject to final regulation, in approved sectors including real estate, government bonds, or establishing a local business. APCI has not published operational regulations and is not processing applications.
            </p>
            <p className="text-body text-text-secondary tracking-wide mb-4">
              Investments must be maintained for a minimum period of three years, with clear pathways to permanent residency and eventual citizenship.
            </p>
              <a href="/faq/argentina-citizenship-investment-requirements" className="text-primary hover:underline text-sm font-medium">
              See detailed requirements →
            </a>
          </div>
          
          <div>
            <h2 className="font-serif text-xl-editorial mb-6 tracking-wide">Program Benefits</h2>
            <ul className="text-body text-text-secondary space-y-4 tracking-wide mb-4">
              <li>• Temporary residence visa with <a href="/faq/argentina-residency-work-rights" className="text-primary hover:underline">work authorization</a></li>
              <li>• Access to Argentina's comprehensive healthcare system</li>
              <li>• Favorable <a href="/faq/argentina-residency-tax-implications" className="text-primary hover:underline">tax treatment</a> for foreign investors</li>
              <li>• Pathway to permanent residency after two years</li>
              <li>• <a href="/faq/argentina-visa-free-travel" className="text-primary hover:underline">Visa-free travel</a> to 170+ countries</li>
              <li>• <a href="/faq/argentina-citizenship-investment-family" className="text-primary hover:underline">Family inclusion</a> for spouse and dependent children</li>
            </ul>
          </div>
        </div>
      </EditorialSection>
      
      <EditorialSection centered={false} className="!pt-12">
        <ScrollytellingSteps
          className="-mt-20"
          eyebrow="A Bespoke Process"
          heading="From first conversation to approved residency"
          intro="Our advisory team guides qualified investors through every stage: discreetly, methodically, and in close coordination with licensed immigration counsel."
          steps={[
            {
              label: "Step 1",
              title: "Initial Consultation",
              description:
                "Comprehensive assessment of your investment objectives and residency goals. Our team provides detailed guidance on investment options and program requirements.",
            },
            {
              label: "Step 2",
              title: "Eligibility and Strategy",
              description:
                "We evaluate your profile against the program's qualifying criteria and design an investment route tailored to your timeline, family situation, and risk tolerance.",
            },
            {
              label: "Step 3",
              title: "Documentation and Investment",
              description:
                "Complete preparation of required documentation and facilitation of your investment. We handle all legal requirements and coordinate with local authorities.",
            },
            {
              label: "Step 4",
              title: "Application Filing",
              description:
                "Your dossier is filed with the Dirección Nacional de Migraciones by licensed immigration counsel, with full ongoing case management until decision.",
            },
            {
              label: "Step 5",
              title: "Residency Approval",
              description:
                "Final review and approval process typically completed within 6-8 months. Upon approval, receive your temporary residence visa and begin your Argentine residency journey.",
            },
          ]}
        />

        <div className="mt-16 text-center">
          <p className="text-body text-text-secondary mb-6 tracking-wide">
            Ready to begin your application?
          </p>
          <a href="/contact">
            <Button size="lg" className="px-12">
              Schedule a Consultation
            </Button>
          </a>
        </div>
      </EditorialSection>
    </>
  );
};

export default ProgramContent;
