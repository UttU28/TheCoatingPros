import { Helmet } from "react-helmet";
import HeroSection from "@/components/home/HeroSection";
import ServiceHighlights from "@/components/home/ServiceHighlights";
import GallerySnippet from "@/components/home/GallerySnippet";
import ContactTeaser from "@/components/home/ContactTeaser";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>The Coating Pros | Houston's Trusted Roof Coating Specialists</title>
        <meta name="description" content="Expert commercial roof coating services in Houston and Southeast Texas. Protect your building with our durable and cost-effective solutions." />
      </Helmet>
      
      <HeroSection />
      <ServiceHighlights />
      <GallerySnippet />
      <ContactTeaser />
    </>
  );
}
