import { Navbar } from "@/components/luxury/Navbar";
import { Hero } from "@/components/luxury/Hero";
import { About } from "@/components/luxury/About";
import { FeaturedProperties } from "@/components/luxury/FeaturedProperties";
import { WhyChooseUs } from "@/components/luxury/WhyChooseUs";
import { Services } from "@/components/luxury/Services";
import { Testimonials } from "@/components/luxury/Testimonials";
import { CTASection } from "@/components/luxury/CTASection";
import { Footer } from "@/components/luxury/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero />
    <About />
    <FeaturedProperties />
    <WhyChooseUs />
    <Services />
    <Testimonials />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
