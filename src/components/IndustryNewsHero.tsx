import { motion } from "framer-motion";
import { useParallax, useScrollOpacity } from "@/hooks/useParallax";

const IndustryNewsHero = () => {
  const parallaxY = useParallax(-0.3);
  const opacity = useScrollOpacity(600);

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden -mt-[72px] pt-[72px] md:-mt-[88px] md:pt-[88px]">
      <motion.div
        className="absolute inset-0 z-0 scale-110"
        style={{ y: parallaxY }}
      >
        <img
          src="/industry-news-hero.jpg"
          alt="Buenos Aires financial district and historic architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto px-4 md:px-8 py-20"
        style={{ opacity }}
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-8 tracking-wide leading-tight">
          Industry News
        </h1>
        <p className="text-white/80 text-xl max-w-2xl mx-auto leading-relaxed">
          Regulatory updates, market briefings, and the latest developments shaping Argentina's residency-by-investment landscape.
        </p>
      </motion.div>
    </section>
  );
};

export default IndustryNewsHero;
