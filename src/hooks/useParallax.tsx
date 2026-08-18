import { useEffect, useRef, useState } from 'react';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

/**
 * Subtle parallax driven by requestAnimationFrame for smooth, throttled updates.
 * Speed is intentionally clamped to keep motion restrained and luxurious.
 * Honors prefers-reduced-motion by returning 0.
 */
export const useParallax = (speed = 0.3) => {
  const [offset, setOffset] = useState(0);
  const rafRef = useRef<number | null>(null);
  const targetRef = useRef(0);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    // Clamp speed so parallax always feels subtle.
    const safeSpeed = Math.max(-0.5, Math.min(0.5, speed));

    const update = () => {
      const next = window.scrollY * safeSpeed;
      if (Math.abs(next - targetRef.current) > 0.1) {
        targetRef.current = next;
        setOffset(next);
      }
      rafRef.current = null;
    };

    const handleScroll = () => {
      if (rafRef.current == null) {
        rafRef.current = window.requestAnimationFrame(update);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current != null) window.cancelAnimationFrame(rafRef.current);
    };
  }, [speed]);

  return offset;
};

export const useScrollOpacity = (threshold = 300) => {
  const [opacity, setOpacity] = useState(1);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const update = () => {
      const scrolled = window.scrollY;
      const next = Math.max(0, 1 - scrolled / threshold);
      setOpacity(next);
      rafRef.current = null;
    };

    const handleScroll = () => {
      if (rafRef.current == null) {
        rafRef.current = window.requestAnimationFrame(update);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current != null) window.cancelAnimationFrame(rafRef.current);
    };
  }, [threshold]);

  return opacity;
};
