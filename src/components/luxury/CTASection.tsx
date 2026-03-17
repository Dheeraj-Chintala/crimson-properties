import { motion } from "framer-motion";

export const CTASection = () => (
  <section id="cta" className="section-padding">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-4xl mx-auto text-center glass-card rounded-lg p-12 md:p-20 border-primary/10"
    >
      <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-6">
        Find Your Dream <br />Property <span className="text-primary">Today</span>
      </h2>
      <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto mb-10">
        Whether you're acquiring your first investment property or expanding a global portfolio,
        our team is ready to deliver results.
      </p>
      <a
        href="#home"
        className="inline-block px-10 py-4 bg-primary text-primary-foreground font-bold rounded-sm transition-all duration-300 hover:brightness-110 active:scale-95 text-lg"
      >
        Get Started
      </a>
    </motion.div>
  </section>
);
