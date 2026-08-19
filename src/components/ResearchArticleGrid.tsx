import { AspectRatio } from "@/components/ui/aspect-ratio";

export interface ResearchCardPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image?: string;
}

const ResearchArticleGrid = ({ posts }: { posts: ResearchCardPost[] }) => {
  return (
      <section className="bg-background py-28 md:py-40">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <p className="font-body text-[0.95rem] text-muted-foreground leading-[1.8] mb-16 max-w-3xl">
            Our advisory team publishes original intelligence on Argentine investment conditions, regulatory developments, and residency program updates. For a dedicated analysis of <a href="/research/argentina-citizenship-investment-american-investors" className="text-primary hover:underline">Argentina citizenship by investment for US investors</a>, review our latest advisory brief on tax residency rules and the application timeline.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-20 md:gap-y-24">
            {posts.map((post) => (
              <a
                key={post.id}
                href={`/research/${post.slug}`}
                className="group block"
              >
                <div className="overflow-hidden rounded-md mb-8">
                  <AspectRatio ratio={3 / 2}>
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                  </AspectRatio>
                </div>
                <p className="font-body text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground mb-5">
                  {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </p>
                <h2 className="font-serif font-light text-xl md:text-2xl text-foreground mb-5 leading-[1.3] tracking-[0.005em] group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h2>
                <p className="font-body text-[0.95rem] text-muted-foreground leading-[1.8] font-light line-clamp-3">
                  {post.excerpt}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
  );
};

export default ResearchArticleGrid;
