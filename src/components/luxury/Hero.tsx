import { motion } from "framer-motion";
import heroImg from "@/assets/hero-luxury.jpg";

export const Hero = () => (
  <section id="home" className="relative h-svh w-full flex items-end overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img
        src={heroImg}
        className="h-full w-full object-cover opacity-50"
        alt="Modern luxury architecture at dusk"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
    </div>

    <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-12 pb-20 md:pb-28">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="inline-block px-4 py-1.5 mb-6 border border-primary/30 rounded-full text-primary text-xs font-mono tracking-widest uppercase bg-primary/5">
          Est. 2024 • Excellence in Equity
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter leading-[0.9] mb-8">
          REDEFINING <br />
          <span className="text-gradient">REAL ESTATE</span>
          <br />
          <span className="text-primary">EXCELLENCE</span>
        </h1>

        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
          <p className="max-w-md text-lg text-muted-foreground leading-relaxed">
            Smart investments. Premium properties. Trusted partnerships.
            We bridge the gap between architectural vision and capital growth.
          </p>
          <div className="flex gap-4">
            <a
              href="#properties"
              className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-sm transition-all duration-300 hover:brightness-110 active:scale-95"
            >
              Explore Properties
            </a>
            <a
              href="#cta"
              className="px-8 py-4 glass-card text-foreground font-bold rounded-sm hover:bg-secondary/50 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
