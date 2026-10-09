import Hero from "@/components/Hero";
import EditorialSection, { EditorialDivider } from "@/components/EditorialSection";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import GoldenVisaUpdatesSection from "@/components/GoldenVisaUpdatesSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import SupportingImage from "@/components/SupportingImage";
import casaRosadaFlag from "@/assets/hero-casa-rosada-flag.webp";
import argentinaPassport from "@/assets/argentina-passport.webp";
import flagAconcagua from "@/assets/site-photos-renamed/generic-flag-aconcagua-mountains.webp";
import { programStatus } from "@/data/programStatus";
import { editorial } from "@/data/editorial";

const colegioName = editorial.reviewerCredential.replace(
  /^an immigration attorney enrolled with the /,
  "",
);

const casaRosadaSrc =
  typeof casaRosadaFlag === "string" ? casaRosadaFlag : casaRosadaFlag.src;
const passportSrc =
  typeof argentinaPassport === "string" ? argentinaPassport : argentinaPassport.src;

export interface HomepagePost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
  imageAlt?: string;
}

const cbiTopics = [
  {
    href: "/program",
    anchor: "program overview",
    body: "The short account of the anticipated framework. It is not an open application channel.",
  },
  {
    href: "/research/argentina-citizenship-by-investment-status",
    anchor: "current program status",
    body: "Whether government applications are open. They are not yet confirmed as open.",
  },
  {
    href: "/research/argentina-citizenship-by-investment-launch-date",
    anchor: "expected launch date",
    body: "No exact filing date has been announced. The government expects applications during Q4 2026.",
  },
  {
    href: "/faq/argentina-citizenship-investment-requirements",
    anchor: "Argentina citizenship-by-investment requirements",
    body: "The announced routes are a $350,000 Treasury contribution or an $800,000 public bond. They are not a guarantee of approval.",
  },
  {
    href: "/faq/argentina-citizenship-investment-application-timeline",
    anchor: "application timeline",
    body: "Decree 524/2025 gives DNM 30 business days after it receives APCI's report. That period is not a total processing time.",
  },
  {
    href: "/faq/argentina-citizenship-investment-documents",
    anchor: "required documents",
    body: "The decrees do not publish an application-document checklist for investor applicants.",
  },
  {
    href: "/faq/argentina-citizenship-investment-family",
    anchor: "family members",
    body: "The October 2, 2026 announcement includes extra Treasury contributions for some relatives. Those amounts are not automatic eligibility, and they are not general residency rules.",
  },
  {
    href: "/guides/argentina-golden-visa-program",
    anchor: "complete citizenship-by-investment guide",
    body: "The longer explanation of the announced framework.",
  },
] as const;

const IndexContent = ({ posts }: { posts: HomepagePost[] }) => {
  return (
    <>
      <Hero
        title="Argentina Citizenship by Investment"
        subtitle={programStatus.applicationStatusLabel}
        backgroundImage={casaRosadaSrc}
        imageAlt="Argentine flag at Plaza de Mayo with the Casa Rosada presidential palace"
        ctaText="Join the Waitlist"
        ctaLink="/argentina-golden-visa-eligibility-checker"
        ctaSubline={programStatus.waitlistDisclaimer}
      />

      <EditorialSection>
        <p className="text-editorial text-text-secondary mb-0 tracking-wide">
          Argentina Citizenship by Investment is Argentina's announced citizenship-by-investment framework for a foreign national who makes an investment the Ministry of Economy defines as relevant. It is a naturalization pathway, not a residence permit. The October 2, 2026 announcement states a $350,000 National Treasury contribution or an $800,000 public-bond subscription. Government applications are not yet confirmed as open. The{" "}
          <a href="/faq/what-is-argentina-golden-visa" className="text-primary hover:underline">
            detailed definition
          </a>{" "}
          stays on its own page.
        </p>
        <EditorialDivider />
        <h2 className="font-serif text-xl-editorial mb-10 tracking-wide">
          Argentina Citizenship by Investment: What We Know
        </h2>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 text-left">
          {cbiTopics.map((topic) => (
            <div key={topic.href} className="border-l-2 border-gold pl-6">
              <h3 className="font-serif text-lg-editorial mb-2 tracking-wide">
                <a href={topic.href} className="text-primary hover:underline inline-block py-1">
                  {topic.anchor}
                </a>
              </h3>
              <p className="text-body text-text-secondary tracking-wide">{topic.body}</p>
            </div>
          ))}
        </div>
        <EditorialDivider className="mb-0" />
      </EditorialSection>

      <EditorialSection className="!pt-0 pb-6">
        <figure className="max-w-xl mx-auto">
          <img
            src={passportSrc}
            alt="Argentine passport on a dark surface"
            className="w-full h-auto"
            width={792}
            height={1024}
          />
          <figcaption className="text-sm text-text-secondary tracking-wide mt-4">
            An Argentine passport is a separate document from residence. See the citizenship-by-investment updates.
          </figcaption>
        </figure>
      </EditorialSection>

      <EditorialSection className="!pt-0" divider>
        <div className="editorial-divider-actions flex flex-wrap gap-4 justify-center">
          <Button asChild variant="outline" size="lg" className="bg-white editorial-nav-button">
            <a href="/industry-news">Citizenship-by-Investment Updates</a>
          </Button>
        </div>
        <div className="editorial-after-divider">
        <h2 className="font-serif text-xl-editorial mb-8 tracking-wide">
          Your roadmap to Argentine residency, citizenship, and long-term investment, in one place.
        </h2>
        <p className="text-editorial text-text-secondary mb-8 tracking-wide">
          Argentina Residence is an independent advisory resource built with licensed immigration attorneys. We help qualified investors understand the{" "}
          <a href="/guides/argentina-golden-visa-program" className="text-primary hover:underline">
            citizenship-by-investment guide
          </a>
          , evaluate their options, and take the right next step.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <Button asChild variant="outline" size="lg" className="bg-white editorial-nav-button">
            <a href="/about">About This Resource</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="bg-white editorial-nav-button">
            <a href="/faq">FAQ</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="bg-white editorial-nav-button">
            <a href="/resources">Resources</a>
          </Button>
        </div>
        </div>
      </EditorialSection>

      <EditorialSection centered={false} className="!pt-0">
        <NewsletterSignup className="my-0" formType="golden-visa-updates-signup" />
      </EditorialSection>

      <GoldenVisaUpdatesSection />

      <EditorialSection className="bg-secondary/30">
        <div className="grid md:grid-cols-3 gap-12 text-left">
          <div className="flex flex-col">
            <h2 className="font-serif text-lg-editorial mb-4 tracking-wide">Investment Program</h2>
            <p className="text-body text-text-secondary tracking-wide mb-4 flex-1">
              The pathway should not be treated as an open application program. This card points to the anticipated program overview.
            </p>
            <div className="mt-6">
              <a href="/program" className="inline-block font-sans font-semibold text-[0.75rem] tracking-[0.08em] uppercase border-2 border-primary text-foreground px-6 py-3 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                Access Program Intelligence
              </a>
            </div>
          </div>

          <div className="flex flex-col">
            <h2 className="font-serif text-lg-editorial mb-4 tracking-wide">Visa-Free Travel</h2>
            <p className="text-body text-text-secondary tracking-wide mb-4 flex-1">
              The Henley Passport Index of 13 April 2026 scores an Argentine passport at 168 destinations without a prior visa, rank 15. That score is not a residency right, and it is not a benefit of an investment-naturalization application.
            </p>
            <div className="mt-6">
              <a href="/faq/argentina-visa-free-travel" className="inline-block font-sans font-semibold text-[0.75rem] tracking-[0.08em] uppercase border-2 border-primary text-foreground px-6 py-3 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                Review visa-free travel
              </a>
            </div>
          </div>

          <div className="flex flex-col">
            <h2 className="font-serif text-lg-editorial mb-4 tracking-wide">About This Resource</h2>
            <p className="text-body text-text-secondary tracking-wide mb-4 flex-1">
              Who publishes this site and how the advisory describes its work on Argentine residency and investment.
            </p>
            <div className="mt-6">
              <a href="/about" className="inline-block font-sans font-semibold text-[0.75rem] tracking-[0.08em] uppercase border-2 border-primary text-foreground px-6 py-3 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                About Argentina Residence
              </a>
            </div>
          </div>
        </div>
      </EditorialSection>

      <EditorialSection>
        <SupportingImage
          image={flagAconcagua}
          alt="Argentine flag in the high Andes near Aconcagua"
          caption="The Argentine flag in the high Andes, near the country's western border."
        />
      </EditorialSection>

      <EditorialSection className="bg-secondary/30">
        <h2 className="font-serif text-xl-editorial mb-12 tracking-wide">
          Guided by Legal Excellence
        </h2>
        <div className="grid md:grid-cols-3 gap-10 text-left">
          <div className="border-l-2 border-gold pl-6">
            <h3 className="font-serif text-lg-editorial mb-3 tracking-wide">Attorney-Reviewed Content</h3>
            <p className="text-sm text-text-secondary tracking-wide">
              Content on this site is legally reviewed by {editorial.reviewerCredential}. Articles and guides show the date of their most recent review.
            </p>
          </div>
          <div className="border-l-2 border-gold pl-6">
            <h3 className="font-serif text-lg-editorial mb-3 tracking-wide">Licensed Legal Network</h3>
            <p className="text-sm text-text-secondary tracking-wide">
              We work exclusively with Buenos Aires–based attorneys who hold active matriculation with the {colegioName} and specialize in migration law.
            </p>
          </div>
          <div className="border-l-2 border-gold pl-6">
            <h3 className="font-serif text-lg-editorial mb-3 tracking-wide">Transparent and Independent</h3>
            <p className="text-sm text-text-secondary tracking-wide">
              Argentina Residence is an independent advisory practice. We provide unbiased intelligence to help you make informed decisions about your residency journey.
            </p>
          </div>
        </div>
      </EditorialSection>

      <EditorialSection>
        <div className="text-center mb-12">
          <h2 className="font-serif text-xl-editorial mb-4 tracking-wide">Latest Insights and Guides</h2>
          <p className="text-body text-text-secondary max-w-2xl mx-auto">
            Stay informed with our latest articles on Argentina residency, investment opportunities, and expat lifestyle.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <a
              key={post.id}
              href={`/research/${post.slug}`}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary hover:shadow-lg transition-all duration-300"
            >
              {post.image && (
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-8">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span className="text-primary font-medium">{post.category}</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>
                <h3 className="font-serif text-lg-editorial mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-base text-text-secondary mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                  <span className="text-primary font-medium group-hover:underline flex items-center gap-1">
                    Read more <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild variant="outline" size="lg">
            <a href="/research" className="inline-flex items-center gap-2">
              View All Articles <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </EditorialSection>

      <EditorialSection className="bg-secondary">
        <h2 className="font-serif text-xl-editorial mb-8 tracking-wide">Reading on the anticipated program</h2>
        <p className="text-body text-text-secondary tracking-wide mb-8 max-w-3xl mx-auto">
          The pathway should not be treated as an open application program. These links are research and resources, not a filing channel.
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
          <a
            href="/research/argentina-citizenship-investment-american-investors"
            className="group flex flex-col bg-card border border-border rounded-lg p-8 hover:border-primary hover:shadow-lg transition-all duration-300"
          >
            <h3 className="font-serif text-lg-editorial mb-3 tracking-wide">US Investors</h3>
            <p className="text-sm text-text-secondary tracking-wide flex-1 mb-6">
              Tax and timeline notes for U.S. citizens. The pathway should not be treated as an open application program.
            </p>
            <span className="inline-flex items-center gap-2 font-sans font-semibold text-[0.75rem] tracking-[0.08em] uppercase text-primary group-hover:underline">
              Read Guide <ArrowRight className="w-4 h-4" />
            </span>
          </a>

          <a
            href="/resources"
            className="group flex flex-col bg-card border border-border rounded-lg p-8 hover:border-primary hover:shadow-lg transition-all duration-300"
          >
            <h3 className="font-serif text-lg-editorial mb-3 tracking-wide">Official resources</h3>
            <p className="text-sm text-text-secondary tracking-wide flex-1 mb-6">
              Official government links for Argentina residency are on Argentina residency resources.
            </p>
            <span className="inline-flex items-center gap-2 font-sans font-semibold text-[0.75rem] tracking-[0.08em] uppercase text-primary group-hover:underline">
              Browse Resources <ArrowRight className="w-4 h-4" />
            </span>
          </a>
        </div>
      </EditorialSection>

      <EditorialSection>
        <h2 className="font-serif text-xl-editorial mb-8 tracking-wide">Official Resources</h2>
        <p className="text-body text-text-secondary mb-8 max-w-3xl mx-auto tracking-wide">
          Official immigration information is published by the Dirección Nacional de Migraciones. Updates on this site are in <a href="/industry-news" className="text-primary hover:underline">Industry News</a>.
        </p>
        <div className="flex flex-wrap gap-6 justify-center">
          <a
            href="https://www.argentina.gob.ar/interior/migraciones"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
          >
            Argentina National Migration Office (DNM)
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        </div>
      </EditorialSection>
    </>
  );
};

export default IndexContent;
