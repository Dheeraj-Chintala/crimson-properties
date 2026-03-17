import { motion } from "framer-motion";
import { Home, DollarSign, Settings, BarChart3 } from "lucide-react";

const services = [
  { icon: Home, title: "Property Buying", desc: "End-to-end acquisition support from search to settlement." },
  { icon: DollarSign, title: "Property Selling", desc: "Strategic positioning and marketing for maximum returns." },
  { icon: Settings, title: "Property Management", desc: "Full-service management to protect and grow your assets." },
  { icon: BarChart3, title: "Investment Consulting", desc: "Data-driven insights for portfolio diversification and growth." },
];

const cubicEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: cubicEase },
  }),
};

export const Services = () => (
  <section id="services" className="section-padding max-w-7xl mx-auto">
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
      <motion.p variants={fadeUp} custom={0} className="text-primary font-mono text-xs tracking-widest uppercase mb-4">
        Services
      </motion.p>
      <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-12">
        What We Deliver
      </motion.h2>

      <div className="grid sm:grid-cols-2 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            variants={fadeUp}
            custom={i + 2}
            className="glass-card rounded-lg p-8 group hover:border-primary/20 transition-all duration-500"
          >
            <div className="flex items-start gap-5">
              <div className="h-14 w-14 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-500">
                <s.icon size={26} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);
