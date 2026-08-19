import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import ShareButtons from "@/components/ShareButtons";
import type { ReactNode } from "react";

export interface RelatedPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image?: string;
}

export interface AdjacentPost {
  slug: string;
  title: string;
}

interface BlogPostContentProps {
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  excerpt: string;
  slug: string;
  related: RelatedPost[];
  previous: AdjacentPost | null;
  next: AdjacentPost | null;
  children?: ReactNode;
}

const BlogPostContent = ({
  title,
  category,
  author,
  date,
  readTime,
  excerpt,
  slug,
  related,
  previous,
  next,
  children,
}: BlogPostContentProps) => {
  return (
      <main className="section-padding">
        <article className="max-w-4xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <a 
              href="/research"
              className="inline-flex items-center gap-2 text-primary hover:underline mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Research and Intelligence
            </a>

            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                {category}
              </span>
              
              <h1 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">
                {title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-text-secondary">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={date}>
                    {new Date(date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </time>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{readTime}</span>
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

            {/* Share Buttons Section */}
            <div className="mt-12 pt-8 border-t border-border">
              <ShareButtons
                url={`https://argentinaresidence.com/research/${slug}`}
                title={title}
                excerpt={excerpt}
              />
            </div>

            {/* Article Footer Conversion Block */}
            <div className="mt-12 bg-[hsl(var(--nav-bg-dark))] text-primary-foreground rounded-lg p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-serif mb-4">
                Discuss Your Strategy
              </h3>
              <p className="font-sans text-primary-foreground/80 max-w-xl mx-auto mb-8 leading-relaxed">
                Speak directly with our advisory team to understand how these market dynamics impact your specific residency and investment goals.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/80 text-primary-foreground font-sans font-semibold text-[0.85rem] tracking-widest uppercase px-10 py-4 h-auto">
                <a href="/contact">Schedule a Consultation</a>
              </Button>
              <p className="mt-3 text-sm text-primary-foreground/60 font-sans">No obligation. Complete confidentiality.</p>
            </div>

            {/* Related Articles Section */}
            {related.length > 0 && (
              <section className="mt-12 pt-8 border-t border-border">
                <h2 className="text-2xl font-serif mb-6 text-foreground">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {related.map((relatedPost) => (
                      <a 
                        key={relatedPost.id}
                        href={`/research/${relatedPost.slug}`}
                        className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-colors"
                      >
                        {relatedPost.image && (
                          <div className="aspect-[16/9] overflow-hidden">
                            <img 
                              src={relatedPost.image} 
                              alt={relatedPost.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        )}
                        <div className="p-4">
                          <span className="text-xs text-primary font-medium">{relatedPost.category}</span>
                          <h3 className="text-lg font-serif text-foreground group-hover:text-primary transition-colors mt-1 line-clamp-2">
                            {relatedPost.title}
                          </h3>
                          <p className="text-sm text-text-secondary mt-2 line-clamp-2">{relatedPost.excerpt}</p>
                        </div>
                      </a>
                    ))}
                </div>
              </section>
            )}

            {(previous || next) && (
              <nav className="mt-8 pt-8 border-t border-border">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {previous && (
                    <a 
                      href={`/research/${previous.slug}`}
                      className="group p-6 bg-card border border-border rounded-lg hover:border-primary transition-colors"
                    >
                      <div className="text-sm text-text-secondary mb-2">Previous Article</div>
                      <div className="text-lg font-serif text-foreground group-hover:text-primary transition-colors">
                        {previous.title}
                      </div>
                    </a>
                  )}
                  {next && (
                    <a 
                      href={`/research/${next.slug}`}
                      className="group p-6 bg-card border border-border rounded-lg hover:border-primary transition-colors md:text-right"
                    >
                      <div className="text-sm text-text-secondary mb-2">Next Article</div>
                      <div className="text-lg font-serif text-foreground group-hover:text-primary transition-colors">
                        {next.title}
                      </div>
                    </a>
                  )}
                </div>
              </nav>
            )}
          </motion.div>
        </article>
      </main>
  );
};

export default BlogPostContent;
