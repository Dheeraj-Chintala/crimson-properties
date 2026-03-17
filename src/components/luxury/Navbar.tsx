import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Properties", href: "#properties" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
];

const InfinityLogo = () => (
  <svg width="40" height="24" viewBox="0 0 40 24" fill="none" className="inline-block">
    <path
      d="M10 12C10 8 6 4 3 7C0 10 3 17 7 14C9 12.5 10 12 10 12ZM10 12C10 12 11 11.5 13 10C17 7 20 14 17 17C14 20 10 16 10 12Z"
      stroke="currentColor"
      strokeWidth="1.5"
      className="text-primary"
    />
    <rect x="16" y="2" width="6" height="16" rx="1" stroke="currentColor" strokeWidth="1" className="text-foreground" opacity="0.6" />
    <rect x="24" y="6" width="6" height="12" rx="1" stroke="currentColor" strokeWidth="1" className="text-foreground" opacity="0.4" />
    <rect x="32" y="4" width="6" height="14" rx="1" stroke="currentColor" strokeWidth="1" className="text-foreground" opacity="0.3" />
  </svg>
);

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-expo ${
          scrolled ? "bg-background/90 backdrop-blur-xl border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4">
          <button onClick={() => scrollTo("#home")} className="flex items-center gap-3">
            <InfinityLogo />
            <span className="font-display text-lg font-bold tracking-tight text-foreground">
              Infinity<span className="text-primary">.</span>
            </span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#cta")}
              className="px-6 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-sm transition-all duration-300 hover:brightness-110 active:scale-95"
            >
              Get Started
            </button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-foreground"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-24 px-6"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-2xl font-display font-bold text-foreground text-left"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("#cta")}
                className="mt-4 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-sm text-lg"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
