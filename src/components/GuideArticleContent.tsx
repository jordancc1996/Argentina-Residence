import type { ReactNode } from "react";
import Hero from "@/components/Hero";
import EditorialSection from "@/components/EditorialSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import { Clock } from "lucide-react";

export type GuideHeroImage = string | { src: string };

export type GuideRelatedLink = {
  href: string;
  title: string;
  description: string;
};

interface GuideArticleContentProps {
  heroTitle: string;
  subtitle?: string;
  backgroundImage: GuideHeroImage;
  imageAlt?: string;
  statusBanner?: string;
  related: GuideRelatedLink[];
  children?: ReactNode;
}

const GuideArticleContent = ({
  heroTitle,
  subtitle,
  backgroundImage,
  imageAlt = "Argentina landscape",
  statusBanner,
  related,
  children,
}: GuideArticleContentProps) => {
  return (
    <>
      <Hero
        title={heroTitle}
        subtitle={subtitle}
        backgroundImage={backgroundImage}
        imageAlt={imageAlt}
      />

      {statusBanner && (
        <div className="bg-gold/10 border-y border-gold/30 py-4">
          <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-center gap-3 text-center">
            <Clock className="h-5 w-5 text-gold flex-shrink-0" />
            <p className="text-sm md:text-base text-text-primary">
              <span className="font-semibold">Program Status:</span> {statusBanner}
            </p>
          </div>
        </div>
      )}

      <EditorialSection centered={false}>
        <div
          className="text-left
            [&_h2]:font-serif [&_h2]:text-xl-editorial [&_h2]:mb-8 [&_h2]:mt-12 [&_h2]:tracking-wide [&_h2]:first:mt-0
            [&_h3]:font-serif [&_h3]:text-lg [&_h3]:mb-4 [&_h3]:mt-8
            [&_p]:text-editorial [&_p]:text-text-secondary [&_p]:mb-6 [&_p]:tracking-wide
            [&_ul]:text-editorial [&_ul]:text-text-secondary [&_ul]:mb-6 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2
            [&_li]:text-editorial [&_li]:text-text-secondary
            [&_a]:text-primary [&_a]:hover:underline
            [&_strong]:text-foreground
            [&_figure.photo-placeholder]:my-8
            [&_figure.photo-placeholder_span]:text-sm [&_figure.photo-placeholder_span]:text-text-muted [&_figure.photo-placeholder_span]:mb-0 [&_figure.photo-placeholder_span]:tracking-wide
            [&_.not-prose_ul]:list-none [&_.not-prose_ul]:pl-0 [&_.not-prose_ul]:mb-0
            [&_.not-prose_ol]:list-none [&_.not-prose_ol]:pl-0 [&_.not-prose_ol]:mb-0
            [&_.not-prose_p]:mb-0
            [&_.not-prose_a]:no-underline"
        >
          {children}
        </div>
      </EditorialSection>

      <EditorialSection centered={false}>
        <NewsletterSignup />
      </EditorialSection>

      {related.length > 0 && (
        <EditorialSection>
          <h2 className="font-serif text-lg-editorial mb-8 tracking-wide text-center">
            Continue Your Research
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {related.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="p-6 border border-border rounded-lg hover:border-gold/50 hover:bg-secondary/20 transition-all group text-left"
              >
                <h3 className="font-serif text-lg mb-2 group-hover:text-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary">{item.description}</p>
              </a>
            ))}
          </div>
        </EditorialSection>
      )}
    </>
  );
};

export default GuideArticleContent;
