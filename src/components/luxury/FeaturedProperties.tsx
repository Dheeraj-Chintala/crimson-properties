import { motion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const properties = [
  {
    image: property1,
    title: "The Skyline Penthouse",
    price: "$4,250,000",
    location: "Manhattan, New York",
    desc: "Panoramic city views from a 3,200 sq ft sanctuary above the clouds.",
  },
  {
    image: property2,
    title: "Ocean Crest Villa",
    price: "$7,800,000",
    location: "Malibu, California",
    desc: "Infinity pool meets infinite horizon in this coastal masterpiece.",
  },
  {
    image: property3,
    title: "Heritage Row",
    price: "$2,150,000",
    location: "Georgetown, DC",
    desc: "Modern luxury wrapped in timeless brick and contemporary glass.",
  },
];

const cubicEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: cubicEase },
  }),
};

export const FeaturedProperties = () => (
  <section id="properties" className="section-padding max-w-7xl mx-auto">
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
      <motion.p variants={fadeUp} custom={0} className="text-primary font-mono text-xs tracking-widest uppercase mb-4">
        Portfolio
      </motion.p>
      <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-display font-semibold tracking-tight mb-12 text-foreground">
        Featured Properties
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6">
        {properties.map((p, i) => (
          <motion.div
            key={p.title}
            variants={fadeUp}
            custom={i + 2}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.4, ease: cubicEase }}
            className="group relative overflow-hidden rounded-xl bg-card border border-border shadow-sm hover:shadow-lg transition-shadow duration-500"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/30 to-transparent" />
            </div>
            <div className="absolute bottom-0 p-6 w-full">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-primary font-mono text-sm mb-1 tracking-widest uppercase">
                    {p.price}
                  </p>
                  <h3 className="text-xl font-display font-semibold tracking-tight text-white">{p.title}</h3>
                  <div className="flex items-center gap-1 text-white/60 mt-1 text-sm">
                    <MapPin size={14} />
                    <span>{p.location}</span>
                  </div>
                  <p className="text-white/50 text-xs mt-2 leading-relaxed max-w-[220px]">{p.desc}</p>
                </div>
                <button className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-colors duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary flex-shrink-0">
                  <ArrowUpRight size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);
