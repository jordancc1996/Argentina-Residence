import EditorialSection from "@/components/EditorialSection";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";
import { resolveImageSrc } from "@/lib/resolveImageSrc";
import faqBackground from "@/assets/faq-colombia-cityscape.jpg";

export interface FAQHubItem {
  slug: string;
  question: string;
}

const FAQHubContent = ({ faqs }: { faqs: FAQHubItem[] }) => {
  const parallaxY = useParallax(-0.3);

  return (
    <div className="pt-20">
      <EditorialSection className="relative overflow-hidden">
        <motion.div
          className="absolute inset-0 scale-110 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${resolveImageSrc(faqBackground)})`, y: parallaxY }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10">
          <h1 className="font-serif text-hero mb-8 tracking-wide text-white drop-shadow-lg">
            Frequently Asked Questions
          </h1>
          <p className="text-editorial mb-12 tracking-wide text-white/90 drop-shadow-md">
            Common questions about Argentina's residency by investment program
          </p>
        </div>
      </EditorialSection>

      <EditorialSection className="bg-secondary/30">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-3">
            {faqs.map((faq) => (
              <a
                key={faq.slug}
                href={`/faq/${faq.slug}`}
                className="block"
              >
                <div className="group p-6 bg-background/50 rounded-lg border border-border hover:border-primary transition-all hover:shadow-md">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-serif text-lg-editorial tracking-wide group-hover:text-primary transition-colors text-left flex-1">
                      {faq.question}
                    </h3>
                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </EditorialSection>

      <EditorialSection>
        <p className="text-body text-text-secondary tracking-wide">
          Have more questions? We advise a select number of sophisticated investors on Argentine capital deployment and residency acquisition. For personalized guidance, please request a principal consultation.
        </p>
      </EditorialSection>
    </div>
  );
};

export default FAQHubContent;
