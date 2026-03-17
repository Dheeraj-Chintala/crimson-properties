import { useState } from "react";
import { motion } from "framer-motion";
import { ConsultantModal } from "./ConsultantModal";

export const CTASection = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id="cta" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto text-center rounded-2xl p-12 md:p-20 bg-gradient-to-br from-secondary to-secondary/90 shadow-xl"
      >
        <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight mb-6 text-white">
          Find Your Dream <br />Property <span className="text-primary">Today</span>
        </h2>
        <p className="text-white/60 text-lg leading-relaxed max-w-xl mx-auto mb-10">
          Whether you're acquiring your first investment property or expanding a global portfolio,
          our team is ready to deliver results.
        </p>
        <button
          onClick={() => setOpen(true)}
          className="inline-block px-10 py-4 bg-primary text-primary-foreground font-bold rounded-lg transition-all duration-300 hover:brightness-110 active:scale-95 text-lg shadow-lg shadow-primary/25"
        >
          Get Started
        </button>
      </motion.div>
      <ConsultantModal open={open} onOpenChange={setOpen} />
    </section>
  );
};
