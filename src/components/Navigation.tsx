import { useState, useEffect, useCallback } from "react";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/program", label: "The Program" },
  { path: "/research", label: "Research and Intelligence" },
  { path: "/industry-news", label: "Industry News" },
  { path: "/contact", label: "Contact Us" },
];

const Navigation = ({ currentPath }: { currentPath: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when overlay is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const toggle = useCallback(() => setIsOpen((v) => !v), []);

  return (
    <>
      {/* ── Top Bar ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          height: 72,
          backgroundColor: isScrolled || isOpen
            ? "hsla(150, 5%, 6%, 0.95)"
            : "transparent",
          backdropFilter: isScrolled || isOpen ? "blur(8px)" : "none",
          borderBottom: isScrolled || isOpen
            ? "1px solid hsl(150, 3%, 17%)"
            : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-full">
          {/* Logo */}
          <a
            href="/"
            className="font-serif text-xl tracking-widest text-white hover:text-white/80 transition-colors duration-300"
            style={{ fontWeight: 400 }}
          >
            ARGENTINA RESIDENCE
          </a>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Contact pill */}
            <a
              href="/contact"
              className="hidden md:inline-flex transition-all duration-300 hover:opacity-90"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 500,
                fontSize: 17,
                letterSpacing: "0.35px",
                backgroundColor: "rgb(21, 76, 126)",
                color: "#FFFFFF",
                padding: "16px 32px",
                borderRadius: 300,
              }}
            >
              Contact Us
            </a>

            {/* Hamburger / Close */}
            <button
              onClick={toggle}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="relative flex flex-col items-center justify-center w-12 h-12 z-[10000]"
            >
              <span
                className="block bg-white rounded-full transition-all duration-300 absolute"
                style={{
                  width: 28,
                  height: 1.5,
                  transform: isOpen
                    ? "rotate(45deg) translateY(0)"
                    : "translateY(-5px)",
                }}
              />
              <span
                className="block bg-white rounded-full transition-all duration-300 absolute"
                style={{
                  width: 28,
                  height: 1.5,
                  opacity: isOpen ? 0 : 1,
                }}
              />
              <span
                className="block bg-white rounded-full transition-all duration-300 absolute"
                style={{
                  width: 28,
                  height: 1.5,
                  transform: isOpen
                    ? "rotate(-45deg) translateY(0)"
                    : "translateY(5px)",
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Backdrop ── */}
      <div
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
        className="fixed inset-0 z-[9998] transition-opacity duration-[250ms] ease-in-out"
        style={{
          backgroundColor: "hsla(150, 5%, 4%, 0.55)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? "visible" : "hidden",
          pointerEvents: isOpen ? "auto" : "none",
        }}
      />

      {/* ── Left slide-out sidebar ── */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Main navigation"
        className="fixed top-0 left-0 h-full z-[9999] flex flex-col transition-transform duration-[250ms] ease-in-out"
        style={{
          width: "min(340px, 88vw)",
          backgroundColor: "hsla(150, 5%, 6%, 0.98)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderRight: "1px solid hsla(45, 29%, 65%, 0.18)",
          transform: isOpen ? "translateX(0)" : "translateX(-100%)",
          boxShadow: isOpen ? "0 0 60px rgba(0,0,0,0.5)" : "none",
        }}
      >
        {/* Spacer for top bar */}
        <div style={{ height: 72, flexShrink: 0 }} />

        {/* Gold hairline divider */}
        <div
          style={{
            height: 1,
            background:
              "linear-gradient(to right, transparent, hsla(45, 29%, 65%, 0.35), transparent)",
            marginInline: 32,
          }}
        />

        {/* Nav links */}
        <nav className="flex-1 flex flex-col px-8 pt-10">
          <ul className="list-none p-0 m-0 flex flex-col">
            {navLinks.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <li key={item.path} className="py-1">
                  <a
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className="block transition-opacity duration-[250ms] ease-in-out hover:opacity-70"
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: 22,
                      fontWeight: 400,
                      letterSpacing: "0.01em",
                      color: isActive
                        ? "hsl(45, 29%, 65%)"
                        : "rgba(255,255,255,0.92)",
                      lineHeight: 1.4,
                      textDecoration: "none",
                      paddingBlock: 10,
                    }}
                  >
                    {item.label}
                  </a>
                  <div
                    style={{
                      height: 1,
                      backgroundColor: "hsla(45, 29%, 65%, 0.14)",
                    }}
                  />
                </li>
              );
            })}
          </ul>

          {/* Bottom CTA */}
          <div className="mt-auto pb-10 pt-12">
            <a
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="inline-block w-full text-center transition-all duration-[250ms] ease-in-out hover:bg-white hover:text-foreground"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 500,
                fontSize: "0.72rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.92)",
                border: "1px solid hsla(45, 29%, 65%, 0.5)",
                backgroundColor: "transparent",
                padding: "14px 28px",
                textDecoration: "none",
              }}
            >
              Explore Your Options
            </a>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Navigation;
