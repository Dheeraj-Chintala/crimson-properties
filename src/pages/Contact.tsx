import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { Navbar } from "@/components/luxury/Navbar";
import { Footer } from "@/components/luxury/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const cubicEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const contactCards = [
  { icon: Phone, title: "Call Us", value: "+1 (555) 000-1234", href: "tel:+15550001234" },
  { icon: Mail, title: "Email Us", value: "info@infinityproperties.com", href: "mailto:info@infinityproperties.com" },
  { icon: MapPin, title: "Visit Office", value: "1 World Trade Center, New York, NY 10007", href: undefined },
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Full name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid email is required";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    toast({ title: "Message sent!", description: "We'll get back to you shortly." });
  };

  const handleChange = (field: string, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: "" }));
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero banner */}
      <section className="pt-32 pb-16 section-padding bg-gradient-to-b from-muted to-background">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: cubicEase }}
            className="text-4xl md:text-6xl font-display font-semibold tracking-tight text-foreground mb-4"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: cubicEase }}
            className="text-muted-foreground text-lg max-w-lg mx-auto"
          >
            Have a question or ready to start your investment journey? We'd love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 -mt-4">
        <div className="grid sm:grid-cols-3 gap-6">
          {contactCards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: cubicEase }}
            >
              {c.href ? (
                <a href={c.href} className="glass-card rounded-xl p-6 flex flex-col items-center text-center gap-3 hover:shadow-md transition-shadow duration-300 block">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <c.icon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground">{c.title}</h3>
                  <p className="text-muted-foreground text-sm">{c.value}</p>
                </a>
              ) : (
                <div className="glass-card rounded-xl p-6 flex flex-col items-center text-center gap-3">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <c.icon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground">{c.title}</h3>
                  <p className="text-muted-foreground text-sm">{c.value}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Form + Map */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: cubicEase }}
          >
            {submitted ? (
              <div className="glass-card rounded-xl p-12 flex flex-col items-center text-center gap-4">
                <CheckCircle size={48} className="text-primary" />
                <h3 className="font-display font-semibold text-2xl text-foreground">Thank You!</h3>
                <p className="text-muted-foreground">Your message has been sent. Our team will contact you shortly.</p>
                <Button onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }} className="mt-4 rounded-lg">
                  Send Another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card rounded-xl p-8 md:p-10 space-y-5">
                <h3 className="font-display font-semibold text-2xl text-foreground mb-2">Send us a message</h3>
                {[
                  { key: "name", label: "Full Name", type: "text", placeholder: "John Doe" },
                  { key: "email", label: "Email", type: "email", placeholder: "john@example.com" },
                  { key: "phone", label: "Phone", type: "tel", placeholder: "+1 (555) 000-0000" },
                  { key: "subject", label: "Subject", type: "text", placeholder: "Property inquiry" },
                ].map((f) => (
                  <div key={f.key}>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">{f.label}</label>
                    <Input
                      type={f.type}
                      placeholder={f.placeholder}
                      value={form[f.key as keyof typeof form]}
                      onChange={(e) => handleChange(f.key, e.target.value)}
                      className="rounded-lg"
                    />
                    {errors[f.key] && (
                      <p className="text-destructive text-xs mt-1 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors[f.key]}
                      </p>
                    )}
                  </div>
                ))}
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                  <Textarea
                    placeholder="Tell us about your needs..."
                    rows={5}
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className="rounded-lg"
                  />
                  {errors.message && (
                    <p className="text-destructive text-xs mt-1 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.message}
                    </p>
                  )}
                </div>
                <Button type="submit" className="w-full rounded-lg shadow-md shadow-primary/20 gap-2">
                  <Send size={16} /> Send Message
                </Button>
              </form>
            )}
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: cubicEase }}
            className="rounded-xl overflow-hidden border border-border shadow-sm min-h-[400px]"
          >
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2422000795!2d-74.0134436!3d40.7127281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a197c06b7cb%3A0x40a06c78f79e5de6!2sOne%20World%20Trade%20Center!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 400 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
