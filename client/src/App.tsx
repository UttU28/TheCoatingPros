import { Toaster } from "@/components/ui/toaster";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/home/HeroSection";
import AboutSection from "./components/home/AboutSection";
import TestimonialsSection from "./components/home/TestimonialsSection";
import ServiceHighlights from "./components/home/ServiceHighlights";
import ProjectGallery from "./components/home/ProjectGallery";
import Certifications from "./components/home/CertificationsSection";
import ContactTeaser from "./components/home/ContactTeaser";
import { Element } from "react-scroll";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <Element name="home">
          <HeroSection />
        </Element>
        
        <Element name="about">
          <AboutSection />
        </Element>
        
        {/* Adding Testimonials right after About section */}
        <TestimonialsSection />
        
        <Element name="services">
          <ServiceHighlights />
        </Element>
        
        <Element name="gallery">
          <ProjectGallery />
        </Element>
        
        <Element name="certifications">
          <Certifications />
        </Element>
        
        <Element name="contact">
          <ContactTeaser />
        </Element>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
