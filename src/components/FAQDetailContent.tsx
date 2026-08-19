import EditorialSection from "@/components/EditorialSection";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

export interface AdjacentFAQ {
  slug: string;
  question: string;
}

interface FAQDetailContentProps {
  question: string;
  answer: string;
  hasRichBody: boolean;
  previous: AdjacentFAQ | null;
  next: AdjacentFAQ | null;
  children?: ReactNode;
}

const FAQDetailContent = ({
  question,
  answer,
  hasRichBody,
  previous,
  next,
  children,
}: FAQDetailContentProps) => {
  return (
    <div className="pt-20">
      <EditorialSection>
        <div className="max-w-3xl mx-auto">
          <a href="/faq">
            <Button variant="ghost" className="mb-8 -ml-4">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to FAQs
            </Button>
          </a>

          {hasRichBody ? (
            <div className="faq-rich-content text-left">
              {children}
            </div>
          ) : (
            <>
              <h1 className="font-serif text-2xl-editorial md:text-3xl-editorial mb-8 tracking-wide text-left">
                {question}
              </h1>

              <div className="text-body text-text-secondary tracking-wide text-left leading-relaxed">
                {answer}
              </div>
            </>
          )}
        </div>
      </EditorialSection>

      <EditorialSection className="bg-secondary/30">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between items-center gap-4">
            <div className="flex-1">
              {previous && (
                <a href={`/faq/${previous.slug}`}>
                  <Button variant="outline" className="w-full justify-start text-left h-auto py-4">
                    <div className="flex items-start gap-3">
                      <ChevronLeft className="w-5 h-5 mt-1 flex-shrink-0" />
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">Previous</div>
                        <div className="font-medium">{previous.question}</div>
                      </div>
                    </div>
                  </Button>
                </a>
              )}
            </div>

            <div className="flex-1">
              {next && (
                <a href={`/faq/${next.slug}`}>
                  <Button variant="outline" className="w-full justify-end text-right h-auto py-4">
                    <div className="flex items-start gap-3">
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">Next</div>
                        <div className="font-medium">{next.question}</div>
                      </div>
                      <ChevronRight className="w-5 h-5 mt-1 flex-shrink-0" />
                    </div>
                  </Button>
                </a>
              )}
            </div>
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

export default FAQDetailContent;
