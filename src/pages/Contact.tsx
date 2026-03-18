import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, User, MessageSquare, FileText } from "lucide-react";
import { Navbar } from "@/components/luxury/Navbar";
import { Footer } from "@/components/luxury/Footer";
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

  const inputBase =
    "w-full bg-[#1E293B] border border-[#334155] text-[#E2E8F0] placeholder:text-[#94A3B8] rounded-xl px-4 py-3.5 pl-12 text-sm outline-none transition-all duration-300 hover:brightness-110 hover:shadow-md focus:border-[#6366F1] focus:shadow-[0_0_12px_rgba(99,102,241,0.25)] focus:ring-0";

  const fields = [
    { key: "name", label: "Full Name", type: "text", placeholder: "John Doe", icon: User },
    { key: "email", label: "Email Address", type: "email", placeholder: "john@example.com", icon: Mail },
    { key: "phone", label: "Phone Number", type: "tel", placeholder: "+1 (555) 000-0000", icon: Phone },
    { key: "subject", label: "Subject", type: "text", placeholder: "Property inquiry", icon: FileText },
  ];

  return (
    <div className="min-h-screen bg-[#0F172A]">
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-10 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: cubicEase }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white mb-5"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: cubicEase }}
            className="text-[#94A3B8] text-base md:text-lg max-w-xl mx-auto leading-relaxed"
          >
            Ready to start your project? Send us a message and we'll get back to you soon.
          </motion.p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="max-w-5xl mx-auto px-6 pb-6">
        <div className="grid sm:grid-cols-3 gap-5">
          {contactCards.map((c, i) => {
            const inner = (
              <div className="bg-[#1E293B]/70 backdrop-blur-md border border-[#334155]/60 rounded-xl p-6 flex flex-col items-center text-center gap-3 transition-all duration-300 hover:border-[#6366F1]/40 hover:shadow-[0_0_20px_rgba(99,102,241,0.1)]">
                <div className="h-11 w-11 rounded-lg bg-[#6366F1]/15 flex items-center justify-center">
                  <c.icon size={20} className="text-[#818CF8]" />
                </div>
                <h3 className="font-display font-semibold text-white text-sm">{c.title}</h3>
                <p className="text-[#94A3B8] text-xs leading-relaxed">{c.value}</p>
              </div>
            );
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + i * 0.1, duration: 0.5, ease: cubicEase }}
              >
                {c.href ? <a href={c.href} className="block">{inner}</a> : inner}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Form + Map */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: cubicEase }}
          >
            {submitted ? (
              <div className="bg-[#1E293B]/60 backdrop-blur-xl border border-[#334155]/50 rounded-2xl p-12 flex flex-col items-center text-center gap-5 shadow-[0_8px_40px_rgba(0,0,0,0.3)]">
                <div className="h-16 w-16 rounded-full bg-[#6366F1]/20 flex items-center justify-center">
                  <CheckCircle size={32} className="text-[#818CF8]" />
                </div>
                <h3 className="font-display font-bold text-2xl text-white">Thank You!</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">Your message has been sent. Our team will contact you shortly.</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }}
                  className="mt-3 bg-[#6366F1] hover:bg-[#5558E6] text-white font-medium rounded-xl px-6 py-3 text-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(99,102,241,0.35)]"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[#1E293B]/40 backdrop-blur-xl border border-[#334155]/40 rounded-2xl p-8 md:p-10 shadow-[0_8px_40px_rgba(0,0,0,0.25)] space-y-6">
                <h3 className="font-display font-bold text-xl text-white mb-1">Send us a message</h3>

                <div className="grid sm:grid-cols-2 gap-5">
                  {fields.map((f) => (
                    <div key={f.key}>
                      <label className="text-xs font-medium text-[#CBD5E1] mb-2 block tracking-wide uppercase">{f.label}</label>
                      <div className="relative">
                        <f.icon size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]" />
                        <input
                          type={f.type}
                          placeholder={f.placeholder}
                          value={form[f.key as keyof typeof form]}
                          onChange={(e) => handleChange(f.key, e.target.value)}
                          className={inputBase}
                        />
                      </div>
                      {errors[f.key] && (
                        <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors[f.key]}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                <div>
                  <label className="text-xs font-medium text-[#CBD5E1] mb-2 block tracking-wide uppercase">Message</label>
                  <div className="relative">
                    <MessageSquare size={16} className="absolute left-4 top-4 text-[#64748B]" />
                    <textarea
                      placeholder="Tell us about your needs..."
                      rows={5}
                      value={form.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      className={`${inputBase} pl-12 pt-3.5 resize-none min-h-[140px]`}
                    />
                  </div>
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.message}
                    </p>
                  )}
                </div>

                <div className="flex justify-center pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2.5 bg-[#6366F1] hover:bg-[#5558E6] text-white font-semibold rounded-xl px-8 py-3.5 text-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_24px_rgba(99,102,241,0.4)] active:scale-[0.98]"
                  >
                    <Send size={16} /> Send Message
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: cubicEase }}
            className="rounded-2xl overflow-hidden border border-[#334155]/40 shadow-[0_8px_40px_rgba(0,0,0,0.25)] min-h-[400px]"
          >
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2422000795!2d-74.0134436!3d40.7127281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a197c06b7cb%3A0x40a06c78f79e5de6!2sOne%20World%20Trade%20Center!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 400, filter: "invert(0.9) hue-rotate(180deg) brightness(0.7) contrast(1.1)" }}
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
