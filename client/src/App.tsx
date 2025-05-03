import { useState, useEffect } from "react";
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
import SplashScreen from "./components/SplashScreen";
import ScrollToTopButton from "./components/ui/ScrollToTopButton";
import { Element } from "react-scroll";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow pt-20">
            <Element name="home">
              <HeroSection />
            </Element>

            <Element name="about">
              <AboutSection />
            </Element>

            <Element name="services">
              <ServiceHighlights />
            </Element>

            <TestimonialsSection />

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
          <ScrollToTopButton />
          <Toaster />
        </div>
      )}
    </>
  );
}

export default App;
