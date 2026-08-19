import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

export interface NewsCardArticle {
  id: number;
  slug: string;
  title: string;
  date: string;
  summary: string;
  source?: string;
  image?: string;
}

interface NewsCardProps {
  article: NewsCardArticle;
  index?: number;
}

const NewsCard = ({ article, index = 0 }: NewsCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <a
        href={`/industry-news/${article.slug}`}
        className="bg-card border border-border/60 rounded-xl overflow-hidden h-full flex flex-col shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.18)] hover:-translate-y-1 hover:border-border transition-all duration-500 ease-out cursor-pointer block"
      >
        {article.image && (
          <div className="relative overflow-hidden aspect-[16/9]">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
        )}
        <div className="px-8 md:px-10 pt-10 pb-12 flex-1 flex flex-col">
          <div className="flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground mb-7">
            {article.source && (
              <>
                <span className="text-primary font-medium">{article.source}</span>
                <span className="text-border">·</span>
              </>
            )}
            <time dateTime={article.date}>
                {new Date(article.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
            </time>
          </div>

          <h2 className="text-2xl md:text-[1.75rem] font-serif font-light leading-[1.25] tracking-[0.005em] mb-6 text-foreground group-hover:text-primary transition-colors duration-300">
            {article.title}
          </h2>

          <p className="text-text-secondary leading-[1.8] font-light flex-1">{article.summary}</p>
        </div>
      </a>
    </motion.article>
  );
};

export default NewsCard;
