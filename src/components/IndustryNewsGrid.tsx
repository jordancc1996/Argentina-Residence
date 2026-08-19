import NewsCard from "@/components/NewsCard";
import type { NewsCardArticle } from "@/components/NewsCard";

const IndustryNewsGrid = ({ articles }: { articles: NewsCardArticle[] }) => {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-16 md:gap-y-20">
          {articles.map((article, index) => (
            <NewsCard key={article.id} article={article} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryNewsGrid;
