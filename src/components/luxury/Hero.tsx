import { motion } from "framer-motion";
import heroImg from "@/assets/hero-luxury.jpg";

export const Hero = () => (
  <section id="home" className="relative h-svh w-full flex items-end overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img
        src={heroImg}
        className="h-full w-full object-cover"
        alt="Modern luxury architecture at golden hour"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-secondary/70 to-secondary/95" />
    </div>

    <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-12 pb-20 md:pb-28">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="inline-block px-4 py-1.5 mb-6 border border-primary/30 rounded-full text-primary-foreground/80 text-xs font-mono tracking-widest uppercase bg-primary/20 backdrop-blur-sm">
          Est. 2024 • Excellence in Equity
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter leading-[0.9] mb-8 text-white">
          REDEFINING <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-primary">REAL ESTATE</span>
          <br />
          <span className="text-primary">EXCELLENCE</span>
        </h1>

        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
          <p className="max-w-md text-lg text-white/70 leading-relaxed">
            Smart investments. Premium properties. Trusted partnerships.
            We bridge the gap between architectural vision and capital growth.
          </p>
          <div className="flex gap-4">
            <a
              href="#properties"
              className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg transition-all duration-300 hover:brightness-110 active:scale-95 shadow-lg shadow-primary/25"
            >
              Explore Properties
            </a>
            <a
              href="#cta"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-lg hover:bg-white/20 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
