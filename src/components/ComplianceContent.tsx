import { Separator } from "@/components/ui/separator";
import SupportingImage from "@/components/SupportingImage";
import flagSnowMountains from "@/assets/site-photos-renamed/generic-flag-snow-mountains.jpg";

const ComplianceContent = () => {
  return (
      <main className="section-padding">
        <div className="max-w-[800px] mx-auto px-4 md:px-8">
          <h1 className="font-serif text-3xl md:text-4xl mb-4">Argentina Residence Compliance and Disclosures</h1>
          <p className="text-muted-foreground text-sm mb-10">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <SupportingImage
            className="mx-0"
            image={flagSnowMountains}
            alt="Argentine flag"
          />

          <Separator className="mb-10" />

          {/* General Disclosure */}
          <section className="mb-12">
            <h2 className="font-serif text-2xl mb-4">General Disclosure</h2>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                Argentina Residence Advisory ("ARA," "we," "us," or "our") provides market intelligence, program advisory, and facilitation services related to Argentine residency-by-investment programs and real estate acquisition. We act as an advisory intermediary connecting prospective investors with qualified legal, tax, and immigration professionals.
              </p>
              <p>
                <strong className="text-foreground">We are not licensed immigration attorneys, tax advisors, or registered investment advisors.</strong> Nothing on this website or in our communications constitutes legal, tax, or investment advice. All information is provided for informational and educational purposes only.
              </p>
              <p>
                Prospective investors should conduct their own due diligence and consult with qualified legal counsel, tax advisors, and financial professionals before making any investment, residency, or immigration decisions. Past program conditions, investment returns, and regulatory frameworks are not indicative of future availability, performance, or terms.
              </p>
            </div>
          </section>

          {/* Professional Network */}
          <section className="mb-12">
            <h2 className="font-serif text-2xl mb-4">Professional Network and Referral Relationships</h2>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                ARA maintains relationships with independent immigration attorneys, tax advisors, real estate professionals, and other service providers in Argentina and internationally. When we refer clients to these professionals, we may receive referral fees or commissions. Any such arrangements will be disclosed to clients prior to engagement.
              </p>
              <p>
                All referred professionals are independent practitioners. ARA does not employ, supervise, or guarantee the work of any referred professional. Clients engage referred professionals directly and are responsible for evaluating their qualifications and suitability.
              </p>
            </div>
          </section>

          {/* AML/KYC Policy */}
          <section className="mb-12">
            <h2 className="font-serif text-2xl mb-4">Anti-Money Laundering (AML) and Know Your Client (KYC) Policy</h2>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                ARA is committed to the highest standards of anti-money laundering compliance and adheres to applicable Argentine and international AML/KYC regulations. We implement the following measures:
              </p>
              <h3 className="font-serif text-lg text-foreground mt-6 mb-2">Client Identification and Verification</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>All prospective clients must provide valid government-issued identification before engagement.</li>
                <li>We verify the identity of all principals, beneficial owners, and authorized representatives.</li>
                <li>Enhanced due diligence is conducted for politically exposed persons (PEPs) and clients from high-risk jurisdictions as defined by FATF guidance.</li>
              </ul>
              <h3 className="font-serif text-lg text-foreground mt-6 mb-2">Source of Funds Verification</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>All clients must demonstrate the legitimate origin of investment funds.</li>
                <li>We require documentation supporting source of wealth and source of funds for all investment-related advisory engagements.</li>
                <li>We reserve the right to decline engagement with any prospective client who cannot satisfactorily demonstrate the legitimate origin of their funds.</li>
              </ul>
              <h3 className="font-serif text-lg text-foreground mt-6 mb-2">Sanctions Screening</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>All clients are screened against applicable sanctions lists, including OFAC (US), EU consolidated sanctions lists, and UN Security Council sanctions lists.</li>
                <li>We do not engage with individuals or entities subject to international sanctions.</li>
              </ul>
              <h3 className="font-serif text-lg text-foreground mt-6 mb-2">Suspicious Activity Reporting</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>We maintain procedures for identifying and reporting suspicious transactions to the relevant authorities, including Argentina's Unidad de Información Financiera (UIF).</li>
                <li>All staff receive regular AML/KYC training.</li>
              </ul>
            </div>
          </section>

          {/* Investment Risk Disclosure */}
          <section className="mb-12">
            <h2 className="font-serif text-2xl mb-4">Investment Risk Disclosure</h2>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                Real estate and other investment activities in Argentina involve significant risks, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">Currency risk:</strong> The Argentine peso has historically experienced significant volatility relative to major currencies. Investment values denominated in pesos may fluctuate substantially.</li>
                <li><strong className="text-foreground">Regulatory risk:</strong> Argentine immigration, tax, and investment regulations are subject to change without notice. Program eligibility criteria, investment thresholds, and benefits may be modified by government authorities at any time.</li>
                <li><strong className="text-foreground">Market risk:</strong> Real estate values can decline. Past appreciation is not indicative of future performance.</li>
                <li><strong className="text-foreground">Political risk:</strong> Changes in government policy, economic conditions, or political stability may adversely affect investments and residency programs.</li>
                <li><strong className="text-foreground">Liquidity risk:</strong> Real estate investments in Argentina may have limited liquidity. Investors may not be able to sell properties quickly or at favorable prices.</li>
              </ul>
            </div>
          </section>

          {/* Terms of Service */}
          <section className="mb-12" id="terms">
            <h2 className="font-serif text-2xl mb-4">Terms of Service</h2>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <h3 className="font-serif text-lg text-foreground mt-4 mb-2">Use of This Website</h3>
              <p>
                By accessing and using this website, you agree to be bound by these terms. The content on this website is provided for general informational purposes only and is subject to change without notice.
              </p>
              <h3 className="font-serif text-lg text-foreground mt-4 mb-2">Intellectual Property</h3>
              <p>
                All content on this website, including text, graphics, logos, research reports, and market analyses, is the property of Argentina Residence Advisory and is protected by applicable intellectual property laws. No content may be reproduced, distributed, or transmitted without prior written consent.
              </p>
              <h3 className="font-serif text-lg text-foreground mt-4 mb-2">Limitation of Liability</h3>
              <p>
                ARA shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of this website, reliance on any information provided, or engagement with any referred professional. Our total liability shall not exceed the fees paid by the client for the specific advisory service giving rise to the claim.
              </p>
              <h3 className="font-serif text-lg text-foreground mt-4 mb-2">Governing Law</h3>
              <p>
                These terms shall be governed by and construed in accordance with the laws of the Argentine Republic. Any disputes arising from these terms or the use of this website shall be subject to the exclusive jurisdiction of the courts of the City of Buenos Aires, Argentina.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="mb-12">
            <h2 className="font-serif text-2xl mb-4">Compliance Inquiries</h2>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                For compliance-related questions, concerns, or to report suspicious activity, please contact:
              </p>
              <p>
                <strong className="text-foreground">Argentina Residence Advisory: Compliance</strong><br />
                Email: <a href="mailto:admin@argentinaresidence.com" className="text-primary hover:underline">admin@argentinaresidence.com</a>
              </p>
            </div>
          </section>
        </div>
      </main>
  );
};

export default ComplianceContent;
