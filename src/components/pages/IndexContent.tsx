import Hero from "@/components/Hero";
import EditorialSection from "@/components/EditorialSection";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import GoldenVisaUpdatesSection from "@/components/GoldenVisaUpdatesSection";
import casaRosadaFlag from "@/assets/hero-casa-rosada-flag.jpg";
import argentinaPassport from "@/assets/argentina-passport.jpg";

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
}

const IndexContent = ({ posts }: { posts: HomepagePost[] }) => {
  return (
    <>
      <Hero
        title="Argentina Golden Visa Updates"
        subtitle="Live and invest in South America's most dynamic economy"
        backgroundImage={casaRosadaSrc}
        imageAlt="Argentine flag at Plaza de Mayo with the Casa Rosada presidential palace"
        ctaText="Explore Your Options"
        ctaLink="/contact"
        ctaSubline="Confidential guidance for qualified investors"
      />

      <EditorialSection className="pb-0">
        <figure className="max-w-xl mx-auto">
          <img
            src={passportSrc}
            alt="Argentina second passport through investment. See the Golden Visa updates."
            className="w-full h-auto"
            width={792}
            height={1024}
          />
          <figcaption className="text-sm text-text-secondary tracking-wide mt-4">
            Argentina second passport through investment. See the Golden Visa updates.
          </figcaption>
        </figure>
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <Button asChild variant="outline" size="lg" className="bg-white hover:bg-white/90">
            <a href="/industry-news">See the Golden Visa Updates</a>
          </Button>
        </div>
      </EditorialSection>

      <EditorialSection>
        <h2 className="font-serif text-xl-editorial mb-8 tracking-wide">
          Your roadmap to Argentine residency, citizenship, and long-term investment, in one place.
        </h2>
        <p className="text-editorial text-text-secondary mb-8 tracking-wide">
          Argentina Residence is an independent advisory resource built with licensed immigration attorneys. We help qualified investors understand the program, evaluate their options, and take the right next step.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <Button asChild variant="outline" size="lg" className="bg-white hover:bg-white/90">
            <a href="/about">About This Resource</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="bg-white hover:bg-white/90">
            <a href="/faq">FAQ</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="bg-white hover:bg-white/90">
            <a href="/resources">Resources</a>
          </Button>
        </div>
      </EditorialSection>

      <GoldenVisaUpdatesSection />

      <EditorialSection className="bg-secondary/30">
        <div className="grid md:grid-cols-3 gap-12 text-left">
          <div className="flex flex-col">
            <h2 className="font-serif text-lg-editorial mb-4 tracking-wide">Investment Program</h2>
            <p className="text-body text-text-secondary tracking-wide mb-4 flex-1">
              Secure temporary residency through strategic investments in Argentina's most promising sectors, from premium real estate to government bonds.
            </p>
            <div className="mt-6">
              <a href="/program" className="inline-block font-sans font-semibold text-[0.75rem] tracking-[0.08em] uppercase border-2 border-primary text-foreground px-6 py-3 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                Access Program Intelligence
              </a>
            </div>
          </div>

          <div className="flex flex-col">
            <h2 className="font-serif text-lg-editorial mb-4 tracking-wide">Strategic Location</h2>
            <p className="text-body text-text-secondary tracking-wide mb-4 flex-1">
              Access South America's second-largest economy while enjoying visa-free travel to over 170 countries worldwide.
            </p>
            <div className="mt-6">
              <a href="/faq/argentina-visa-free-travel" className="inline-block font-sans font-semibold text-[0.75rem] tracking-[0.08em] uppercase border-2 border-primary text-foreground px-6 py-3 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                Review Jurisdictional Advantages
              </a>
            </div>
          </div>

          <div className="flex flex-col">
            <h2 className="font-serif text-lg-editorial mb-4 tracking-wide">Premium Lifestyle</h2>
            <p className="text-body text-text-secondary tracking-wide mb-4 flex-1">
              Experience world-class culture, cuisine, and quality of life in one of South America's most sophisticated destinations.
            </p>
            <div className="mt-6">
              <a href="/about" className="inline-block font-sans font-semibold text-[0.75rem] tracking-[0.08em] uppercase border-2 border-primary text-foreground px-6 py-3 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                Review Investment Thesis
              </a>
            </div>
          </div>
        </div>
      </EditorialSection>

      <EditorialSection className="bg-secondary/30">
        <h2 className="font-serif text-xl-editorial mb-4 tracking-wide">
          Guided by Legal Excellence
        </h2>
        <p className="text-body text-text-secondary mb-12 max-w-2xl mx-auto tracking-wide">
          Our content and guidance are developed in close partnership with licensed immigration attorneys who specialize in Argentine residency and citizenship law.
        </p>
        <div className="grid md:grid-cols-3 gap-10 text-left">
          <div className="border-l-2 border-gold pl-6">
            <h3 className="font-serif text-lg-editorial mb-3 tracking-wide">Attorney-Reviewed Content</h3>
            <p className="text-sm text-text-secondary tracking-wide">
              Every guide and resource is reviewed by qualified immigration professionals to ensure accuracy and compliance with current Argentine law.
            </p>
          </div>
          <div className="border-l-2 border-gold pl-6">
            <h3 className="font-serif text-lg-editorial mb-3 tracking-wide">Licensed Legal Network</h3>
            <p className="text-sm text-text-secondary tracking-wide">
              We work exclusively with Buenos Aires–based attorneys who hold active matriculation with the Colegio Público de Abogados and specialize in migration law.
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
                    alt={post.title}
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

      <EditorialSection className="bg-secondary/30">
        <h2 className="font-serif text-xl-editorial mb-8 tracking-wide">Your pathway to Argentine residency</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
          <a
            href="/research/argentina-citizenship-investment-american-investors"
            className="group flex flex-col bg-card border border-border rounded-lg p-8 hover:border-primary hover:shadow-lg transition-all duration-300"
          >
            <h3 className="font-serif text-lg-editorial mb-3 tracking-wide">US Investors</h3>
            <p className="text-sm text-text-secondary tracking-wide flex-1 mb-6">
              Tax implications and timeline specifics for U.S. citizens pursuing Argentine residency through investment.
            </p>
            <span className="inline-flex items-center gap-2 font-sans font-semibold text-[0.75rem] tracking-[0.08em] uppercase text-primary group-hover:underline">
              Read Guide <ArrowRight className="w-4 h-4" />
            </span>
          </a>

          <a
            href="/resources"
            className="group flex flex-col bg-card border border-border rounded-lg p-8 hover:border-primary hover:shadow-lg transition-all duration-300"
          >
            <h3 className="font-serif text-lg-editorial mb-3 tracking-wide">Explore All Guides</h3>
            <p className="text-sm text-text-secondary tracking-wide flex-1 mb-6">
              The full guides and resources hub for Argentina residency, investment, and lifestyle.
            </p>
            <span className="inline-flex items-center gap-2 font-sans font-semibold text-[0.75rem] tracking-[0.08em] uppercase text-primary group-hover:underline">
              Browse Resources <ArrowRight className="w-4 h-4" />
            </span>
          </a>
        </div>
      </EditorialSection>

      <EditorialSection>
        <h2 className="font-serif text-xl-editorial mb-8 tracking-wide">Official Resources and Further Reading</h2>
        <p className="text-body text-text-secondary mb-8 max-w-3xl mx-auto tracking-wide">
          For official government information and comprehensive investment migration news, we recommend the following authoritative sources:
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
          <a
            href="https://www.imidaily.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
          >
            IMI Daily - Investment Migration News
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        </div>
      </EditorialSection>
    </>
  );
};

export default IndexContent;
