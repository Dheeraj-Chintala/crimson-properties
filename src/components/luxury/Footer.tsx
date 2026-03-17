import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = ["Home", "About", "Properties", "Services", "Testimonials"];

export const Footer = () => (
  <footer className="border-t border-border bg-muted/30">
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
      <div className="grid md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <p className="font-display text-lg font-bold tracking-tight mb-4 text-foreground">
            Infinity<span className="text-primary">.</span>
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Premium real estate and investment solutions for discerning investors worldwide.
          </p>
        </div>

        <div>
          <p className="text-primary font-mono text-xs tracking-widest uppercase mb-4">Quick Links</p>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-300"
                >
                  {link}
                </a>
              </li>
            ))}
            <li>
              <Link to="/contact" className="text-muted-foreground text-sm hover:text-foreground transition-colors duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-primary font-mono text-xs tracking-widest uppercase mb-4">Contact</p>
          <ul className="space-y-3">
            <li>
              <a href="mailto:info@infinityproperties.com" className="flex items-center gap-2 text-muted-foreground text-sm hover:text-foreground transition-colors">
                <Mail size={14} className="text-primary" /> info@infinityproperties.com
              </a>
            </li>
            <li>
              <a href="tel:+15550001234" className="flex items-center gap-2 text-muted-foreground text-sm hover:text-foreground transition-colors">
                <Phone size={14} className="text-primary" /> +1 (555) 000-1234
              </a>
            </li>
            <li className="flex items-center gap-2 text-muted-foreground text-sm">
              <MapPin size={14} className="text-primary" /> 1 World Trade Center, NYC
            </li>
          </ul>
        </div>

        <div>
          <p className="text-primary font-mono text-xs tracking-widest uppercase mb-4">Follow Us</p>
          <div className="flex gap-3">
            {["LinkedIn", "Twitter", "Instagram"].map((s) => (
              <a
                key={s}
                href="#"
                className="px-4 py-2 glass-card rounded-lg text-muted-foreground text-xs hover:text-foreground hover:border-primary/20 transition-colors duration-300"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-border text-center">
        <p className="text-muted-foreground text-xs">
          © 2024 InfinityInnovativeProperties. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);
