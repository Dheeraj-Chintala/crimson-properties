import { motion } from "framer-motion";
import { BadgeCheck, Users, Handshake, MapPinned } from "lucide-react";

const points = [
  { icon: BadgeCheck, title: "Verified Listings", desc: "Every property undergoes rigorous due diligence before listing." },
  { icon: Users, title: "Expert Guidance", desc: "Dedicated advisors with decades of market expertise." },
  { icon: Handshake, title: "Transparent Deals", desc: "Full disclosure. No hidden fees. No surprises." },
  { icon: MapPinned, title: "Premium Locations", desc: "Access to off-market properties in the world's most coveted addresses." },
];

const cubicEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: cubicEase },
  }),
};

export const WhyChooseUs = () => (
  <section className="section-padding bg-card/50">
    <div className="max-w-7xl mx-auto">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
        <motion.p variants={fadeUp} custom={0} className="text-primary font-mono text-xs tracking-widest uppercase mb-4">
          Why Us
        </motion.p>
        <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-12">
          The Infinity Advantage
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              custom={i + 2}
              className="glass-card rounded-lg p-6 group hover:border-primary/20 transition-colors duration-500"
            >
              <div className="h-12 w-12 rounded-sm bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-500">
                <p.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
