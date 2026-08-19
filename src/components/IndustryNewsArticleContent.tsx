import { motion } from "framer-motion";
import { ArrowLeft, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useParallax } from "@/hooks/useParallax";
import type { ReactNode } from "react";

export interface RelatedNewsArticle {
  id: number;
  slug: string;
  title: string;
  summary: string;
  source?: string;
}

interface IndustryNewsArticleContentProps {
  title: string;
  date: string;
  source?: string;
  image?: string;
  related: RelatedNewsArticle[];
  children?: ReactNode;
}

const IndustryNewsArticleContent = ({
  title,
  date,
  source,
  image,
  related,
  children,
}: IndustryNewsArticleContentProps) => {
  const parallaxY = useParallax(-0.3);

  return (
    <main>
      {image && (
        <section className="relative min-h-[50vh] overflow-hidden -mt-[72px] pt-[72px] md:-mt-[88px] md:pt-[88px]">
          <motion.div
            className="absolute inset-0 z-0 scale-110"
            style={{ y: parallaxY }}
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>
        </section>
      )}

      <div className={image ? "pt-16 pb-16 md:pt-24 md:pb-24" : "section-padding"}>
        <article className="max-w-4xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <a
              href="/industry-news"
              className="inline-flex items-center gap-2 text-primary hover:underline mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Industry News
            </a>

            <div className="mb-6">
              {source && (
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  {source}
                </span>
              )}

              <h1 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">
                {title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-text-secondary">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={date}>
                    {new Date(date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-8 mb-12"></div>

            <div
              className="prose prose-lg max-w-none
                prose-headings:font-serif prose-headings:text-foreground
                prose-p:text-text-secondary prose-p:leading-relaxed
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-strong:text-foreground prose-strong:font-semibold
                prose-ul:text-text-secondary prose-li:text-text-secondary
                prose-h2:text-5xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-4xl prose-h3:mt-8 prose-h3:mb-4"
            >
              {children}
            </div>

            <div className="mt-12 bg-[hsl(var(--nav-bg-dark))] text-primary-foreground rounded-lg p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-serif mb-4">
                Discuss Your Strategy
              </h3>
              <p className="font-sans text-primary-foreground/80 max-w-xl mx-auto mb-8 leading-relaxed">
                Speak directly with our advisory team to understand how these developments impact your residency and investment plans.
              </p>
              <Button
                asChild
                className="bg-primary hover:bg-primary/80 text-primary-foreground font-sans font-semibold text-[0.85rem] tracking-widest uppercase px-10 py-4 h-auto"
              >
                <a href="/contact">Schedule a Consultation</a>
              </Button>
              <p className="mt-3 text-sm text-primary-foreground/60 font-sans">
                No obligation. Complete confidentiality.
              </p>
            </div>

            {related.length > 0 && (
              <section className="mt-12 pt-8 border-t border-border">
                <h2 className="text-2xl font-serif mb-6 text-foreground">More Industry News</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {related.map((rel) => (
                    <a
                      key={rel.id}
                      href={`/industry-news/${rel.slug}`}
                      className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-colors p-4"
                    >
                      {rel.source && (
                        <span className="text-xs text-primary font-medium">{rel.source}</span>
                      )}
                      <h3 className="text-lg font-serif text-foreground group-hover:text-primary transition-colors mt-1 line-clamp-2">
                        {rel.title}
                      </h3>
                      <p className="text-sm text-text-secondary mt-2 line-clamp-2">{rel.summary}</p>
                    </a>
                  ))}
                </div>
              </section>
            )}
          </motion.div>
        </article>
      </div>
    </main>
  );
};

export default IndustryNewsArticleContent;
