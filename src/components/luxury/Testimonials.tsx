import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alexandra Chen",
    role: "Private Investor",
    text: "InfinityInnovativeProperties delivered a seamless acquisition experience. Their market intelligence is unmatched — we closed on a $12M portfolio in under 60 days.",
  },
  {
    name: "Marcus Whitfield",
    role: "CEO, Whitfield Capital",
    text: "The level of transparency and professionalism sets them apart. Every deal is structured with precision and our interests firmly at the center.",
  },
  {
    name: "Sofia Ramirez",
    role: "Real Estate Developer",
    text: "From off-market access to final negotiations, the team operates at an elite level. They've become our exclusive advisory partner.",
  },
];

export const Testimonials = () => {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === testimonials.length - 1 ? 0 : i + 1));
  const t = testimonials[idx];

  return (
    <section id="testimonials" className="section-padding bg-muted/50">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-primary font-mono text-xs tracking-widest uppercase mb-4">Testimonials</p>
        <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight mb-16 text-foreground">
          Client Voices
        </h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card rounded-xl p-10 md:p-14"
            >
              <Quote size={32} className="text-primary/30 mb-6 mx-auto" />
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-8 italic">
                "{t.text}"
              </p>
              <div>
                <p className="font-display font-semibold text-lg text-foreground">{t.name}</p>
                <p className="text-muted-foreground text-sm">{t.role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="h-12 w-12 rounded-full glass-card flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="h-12 w-12 rounded-full glass-card flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
