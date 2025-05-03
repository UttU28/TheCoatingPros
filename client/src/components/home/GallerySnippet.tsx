import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import LightboxGallery from "@/components/shared/LightboxGallery";

// Gallery items
const galleryItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1621146027714-e8726d0666e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Commercial roof coating project"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1565938525338-868904466517?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Roof maintenance workers"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1572811777176-098942f8e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Commercial building with coated roof"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1595514535919-e297e71e21b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Waterproofing application"
  }
];

export default function GallerySnippet() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const { ref, inView } = useScrollAnimation();
  
  const openLightbox = (imgSrc: string) => {
    setCurrentImage(imgSrc);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };
  
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };
  
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      } 
    }
  };

  return (
    <section id="gallery" className="py-16 md:py-24 bg-slate-100 dark:bg-slate-800 transition-colors duration-300" ref={ref}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            className="font-heading text-3xl md:text-4xl font-bold text-primary dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Our Recent Projects
          </motion.h2>
          <motion.p 
            className="max-w-3xl mx-auto text-slate-600 dark:text-slate-400"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Browse through our gallery to see examples of our quality workmanship and successful projects.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              className="gallery-item"
              variants={itemVariants}
              onClick={() => openLightbox(item.image)}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-white dark:bg-slate-800 text-primary dark:text-white px-4 py-2 rounded-md font-medium">
                  View Project
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link 
              href="/gallery" 
              className="animate-btn inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-md shadow-lg transition-all duration-300"
            >
              View Full Gallery
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Lightbox Component */}
      <LightboxGallery 
        isOpen={lightboxOpen} 
        onClose={closeLightbox} 
        imageSrc={currentImage} 
      />
    </section>
  );
}
