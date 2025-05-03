import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import LightboxGallery from "../shared/LightboxGallery";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

// Project gallery images
const projectImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f",
    alt: "Commercial Roof Coating Project - Before",
    caption: "Commercial Building - Before Coating",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198",
    alt: "Commercial Roof Coating Project - After",
    caption: "Commercial Building - After Coating",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1605910909756-b8f014b99f0c",
    alt: "Warehouse Roof Restoration",
    caption: "Warehouse Roof Restoration",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198",
    alt: "Industrial Building Roof Coating",
    caption: "Industrial Building - Complete Roof Coating",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f",
    alt: "Office Building Roof Maintenance",
    caption: "Office Building - Preventative Maintenance",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1584677626646-7c8f83690304",
    alt: "Retail Center Roof Repair",
    caption: "Retail Center - Roof Repair & Coating",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1560817679-f6076ba87591",
    alt: "Apartment Complex Roof Coating",
    caption: "Apartment Complex - Full Roof Coating",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1602847213180-50e43a80bef4",
    alt: "Church Roof Restoration",
    caption: "Church - Roof Restoration Project",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1560817679-f6076ba87591",
    alt: "Restaurant Roof Coating",
    caption: "Restaurant - UV Reflective Coating",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f",
    alt: "School Building Roof Repair",
    caption: "School Building - Complete Roof System",
  },
];

export default function ProjectGallery() {
  const { ref, inView } = useScrollAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projectImages.length);
    }, 5000); // Changed to 5 seconds

    return () => clearInterval(timer);
  }, []);

  // Removed auto-scrolling behavior
  // useEffect(() => {
  //   const scrollToActiveThumb = () => {
  //     if (carouselRef.current) {
  //       const activeThumbElement = carouselRef.current.querySelector(`[data-thumb-index="${currentIndex}"]`);
  //       if (activeThumbElement instanceof HTMLElement) {
  //         activeThumbElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  //       }
  //     }
  //   };

  //   setTimeout(scrollToActiveThumb, 100); // Slight delay to ensure DOM is updated
  // }, [currentIndex]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleLightboxNavigation = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      setLightboxIndex((prev) => (prev + 1) % projectImages.length);
    } else {
      setLightboxIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-slate-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-800 dark:text-white mb-4">
            Our Recent Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Browse our portfolio of successful commercial roof coating projects.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Main Image with Side Navigation */}
          <div className="relative max-w-4xl mx-auto mb-6">
            <div className="cursor-pointer" onClick={() => openLightbox(currentIndex)}>
              <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                <img
                  src={projectImages[currentIndex].src}
                  alt={projectImages[currentIndex].caption}
                  className="w-full h-full object-cover transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-lg font-medium">{projectImages[currentIndex].caption}</p>
                </div>
              </div>
            </div>

            {/* Side Navigation Buttons */}
            <button
              onClick={() => setCurrentIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-slate-800/80 p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-slate-700 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setCurrentIndex((prev) => (prev + 1) % projectImages.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-slate-800/80 p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-slate-700 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Thumbnails Carousel */}
          <div ref={carouselRef} className="w-full max-w-3xl mx-auto overflow-hidden">
            <div className="flex space-x-2 pb-4 overflow-x-auto scrollbar-hide" style={{ scrollBehavior: 'smooth' }}>
              {projectImages.map((image, index) => (
                <div
                  key={image.id}
                  data-thumb-index={index}
                  className={cn(
                    "flex-shrink-0 cursor-pointer overflow-hidden rounded-lg transition-all duration-300 w-16 h-16",
                    currentIndex === index 
                      ? "ring-2 ring-primary scale-105 opacity-100" 
                      : "ring-0 scale-100 opacity-70 hover:opacity-100 hover:scale-105"
                  )}
                  onClick={() => setCurrentIndex(index)}
                >
                  <img
                    src={image.src}
                    alt={image.caption}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Custom CSS classes added directly to index.css */}
        </motion.div>
      </div>

      {/* Enhanced Lightbox with Navigation */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button
            className="absolute top-4 right-4 text-white text-2xl z-10"
            onClick={() => setLightboxOpen(false)}
          >
            ×
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl"
            onClick={() => handleLightboxNavigation('prev')}
          >
            ‹
          </button>
          <img
            src={projectImages[lightboxIndex].src}
            alt={projectImages[lightboxIndex].caption}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl"
            onClick={() => handleLightboxNavigation('next')}
          >
            ›
          </button>
          <div className="absolute bottom-4 left-0 right-0 text-center text-white">
            <p className="text-lg">{projectImages[lightboxIndex].caption}</p>
          </div>
        </div>
      )}
    </section>
  );
}