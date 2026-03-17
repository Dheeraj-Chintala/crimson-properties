import { motion } from "framer-motion";
import { Shield, TrendingUp, Lightbulb } from "lucide-react";

const values = [
  { icon: Shield, title: "Trust", desc: "Every listing verified. Every deal transparent. Your confidence is our foundation." },
  { icon: TrendingUp, title: "Growth", desc: "Portfolio growth of 14.2% YoY across premium urban sectors." },
  { icon: Lightbulb, title: "Innovation", desc: "Pioneering data-driven strategies for next-generation real estate." },
];

const cubicEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: cubicEase },
  }),
};

export const About = () => (
  <section id="about" className="section-padding max-w-7xl mx-auto">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="grid md:grid-cols-2 gap-16 items-start"
    >
      <div>
        <motion.p variants={fadeUp} custom={0} className="text-primary font-mono text-xs tracking-widest uppercase mb-4">
          About Us
        </motion.p>
        <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-display font-semibold tracking-tight mb-6 text-foreground">
          The Future of Asset Acquisition
        </motion.h2>
        <motion.p variants={fadeUp} custom={2} className="text-muted-foreground text-lg leading-relaxed mb-6">
          InfinityInnovativeProperties is a premier real estate and investment firm
          dedicated to connecting discerning investors with exceptional properties worldwide.
          We combine market intelligence with uncompromising service.
        </motion.p>
        <motion.div variants={fadeUp} custom={3} className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-primary font-mono text-xs tracking-widest uppercase mb-2">Vision</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              To be the global standard in premium real estate investment and advisory.
            </p>
          </div>
          <div>
            <p className="text-primary font-mono text-xs tracking-widest uppercase mb-2">Mission</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Deliver institutional-grade real estate solutions to visionary investors.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="grid gap-6">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            variants={fadeUp}
            custom={i + 1}
            className="glass-card rounded-xl p-6 flex gap-5 items-start"
          >
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <v.icon size={22} className="text-primary" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-lg mb-1 text-foreground">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);
