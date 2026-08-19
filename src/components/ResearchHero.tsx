import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { useParallax, useScrollOpacity } from "@/hooks/useParallax";
import { resolveImageSrc } from "@/lib/resolveImageSrc";
import heroImage from "@/assets/research-intelligence-hero.jpg";

const ResearchHero = () => {
  const parallaxY = useParallax(-0.3);
  const opacity = useScrollOpacity(600);

  return (
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden -mt-[72px] pt-[72px] md:-mt-[88px] md:pt-[88px]">
        <motion.div className="absolute inset-0 z-0 scale-110" style={{ y: parallaxY }}>
          <img src={resolveImageSrc(heroImage)} alt="Financial research and market intelligence" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>

        <motion.div className="relative z-10 text-center max-w-4xl mx-auto px-4 md:px-8 py-20" style={{ opacity }}>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-8 tracking-wide leading-tight">
            Argentina Residence Advisory:<br />Research and Intelligence
          </h1>
          <p className="text-white/80 text-xl max-w-2xl mx-auto leading-relaxed mb-8">
            Argentina research and intelligence covers Decree 524/2025, residency by investment, and Buenos Aires market briefings.
          </p>
          <Separator className="mx-auto max-w-[120px] bg-primary h-[1px]" />
        </motion.div>
      </section>
  );
};

export default ResearchHero;
