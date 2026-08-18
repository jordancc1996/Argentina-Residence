import heroImage from "@/assets/hero-aerial-buenos-aires.jpg";
import { motion } from 'framer-motion';
import { useParallax, useScrollOpacity } from '@/hooks/useParallax';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  imageAlt?: string;
  overlay?: boolean;
  ctaText?: string;
  ctaLink?: string;
  ctaSubline?: string;
}

const Hero = ({ 
  title, 
  subtitle, 
  description, 
  backgroundImage = heroImage,
  imageAlt = "Argentina landscape",
  overlay = true,
  ctaText,
  ctaLink,
  ctaSubline,
}: HeroProps) => {
  const parallaxY = useParallax(-0.3);
  const opacity = useScrollOpacity(600);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-[72px] pt-[72px] md:-mt-[88px] md:pt-[88px]">
      {/* Parallax Background Image */}
      <motion.div 
        className="absolute inset-0 z-0 scale-110"
        style={{ y: parallaxY }}
      >
        <img
          src={backgroundImage}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
        {overlay && (
          <div className="absolute inset-0 bg-black/40" />
        )}
      </motion.div>
      
      {/* Content with Parallax Effects */}
      <motion.div 
        className="relative z-10 text-center max-w-3xl mx-auto px-6 md:px-10"
        style={{ opacity }}
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.h1 
          className="font-serif font-light text-[2.25rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] mb-7 md:mb-10 leading-[1.1]"
          style={{ color: "rgba(255,255,255,0.94)", letterSpacing: "0.005em" }}
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {title}
        </motion.h1>
        
        {subtitle && (
          <motion.h2 
            className="font-serif font-light italic text-base sm:text-lg md:text-2xl mb-10 md:mb-14 max-w-2xl mx-auto leading-[1.4]"
            style={{ color: "rgba(255,255,255,0.78)", letterSpacing: "0.01em" }}
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {subtitle}
          </motion.h2>
        )}
        
        {description && (
          <motion.p 
            className="font-sans text-sm md:text-base max-w-xl mx-auto leading-[1.7]"
            style={{ color: "rgba(255,255,255,0.72)", letterSpacing: "0.01em", fontWeight: 300 }}
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            {description}
          </motion.p>
        )}

        {ctaText && ctaLink && (
          <motion.div
            className="mt-12 md:mt-14"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <a
              href={ctaLink}
              className="inline-block font-sans font-medium text-[0.7rem] tracking-[0.22em] uppercase bg-primary text-primary-foreground px-11 py-[14px] hover:bg-primary/80 hover:-translate-y-0.5 transition-all duration-300"
            >
              {ctaText}
            </a>
            {ctaSubline && (
              <p className="mt-4 text-xs font-sans tracking-[0.08em]" style={{ color: "rgba(255,255,255,0.6)" }}>
                {ctaSubline}
              </p>
            )}
          </motion.div>
        )}
      </motion.div>

      {/* Editorial scroll indicator — signals content continues below the hero */}
      <motion.div
        aria-hidden="true"
        className="absolute left-1/2 -translate-x-1/2 bottom-8 md:bottom-10 z-10 flex flex-col items-center pointer-events-none"
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.6 }}
      >
        <span
          className="font-sans text-[0.6rem] tracking-[0.32em] uppercase mb-3"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          Scroll
        </span>
        <motion.span
          className="block w-px bg-white/40"
          initial={{ height: 0 }}
          animate={{ height: 48 }}
          transition={{ duration: 1.2, delay: 1.8, ease: "easeOut" }}
          style={{ transformOrigin: "top" }}
        />
        <motion.span
          className="block w-px bg-white/70"
          animate={{ height: [0, 20, 0], y: [0, 28, 48] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 2.4 }}
          style={{ position: "absolute", top: "calc(0.75rem + 12px)" }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
