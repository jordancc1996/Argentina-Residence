import { useEffect, useRef } from "react";

const ScrollProgress = () => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    const progressbar = bar.parentElement;
    let frame = 0;
    let lastPercent = -1;

    const update = () => {
      frame = 0;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0
        ? Math.min(1, Math.max(0, window.scrollY / scrollable))
        : 0;
      bar.style.transform = `scaleX(${progress})`;
      const percent = Math.round(progress * 100);
      if (progressbar && percent !== lastPercent) {
        lastPercent = percent;
        progressbar.setAttribute("aria-valuenow", String(percent));
      }
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate, { passive: true });
    const observer = new ResizeObserver(requestUpdate);
    observer.observe(document.documentElement);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={0}
      className="pointer-events-none fixed top-0 left-0 z-[60] h-0.5 w-full"
    >
      <div
        ref={barRef}
        className="h-full w-full origin-left bg-gold"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
};

export default ScrollProgress;
