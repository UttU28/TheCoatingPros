import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import LightboxGallery from "../shared/LightboxGallery";

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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState("");

  const openLightbox = (imageSrc: string) => {
    setLightboxImage(imageSrc);
    setLightboxOpen(true);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === Math.floor(projectImages.length / 3) - 1
        ? 0
        : prevSlide + 1,
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0
        ? Math.floor(projectImages.length / 3) - 1
        : prevSlide - 1,
    );
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
            Swipe through to see our work and click on any image for a closer
            look.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(projectImages.length / 3) }).map(
                (_, slideIndex) => (
                  <div key={slideIndex} className="min-w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {projectImages
                        .slice(slideIndex * 3, slideIndex * 3 + 3)
                        .map((image) => (
                          <div
                            key={image.id}
                            className="gallery-item overflow-hidden rounded-lg shadow-md cursor-pointer group"
                            onClick={() => openLightbox(image.src)}
                          >
                            <div className="relative aspect-[4/3] overflow-hidden">
                              <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300">
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  <span className="text-white text-lg font-medium px-4 py-2 rounded-md bg-primary bg-opacity-90">
                                    View Project
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="p-4 bg-slate-50 dark:bg-slate-700">
                              <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                                {image.caption}
                              </h3>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white dark:bg-slate-700 rounded-full p-3 shadow-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors z-10"
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-slate-800 dark:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-slate-700 rounded-full p-3 shadow-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors z-10"
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-slate-800 dark:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Slide indicators */}
          <div className="flex items-center justify-center space-x-2 mt-6">
            {Array.from({ length: Math.ceil(projectImages.length / 3) }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${currentSlide === index ? "bg-primary" : "bg-slate-300 dark:bg-slate-600"}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ),
            )}
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <LightboxGallery
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        imageSrc={lightboxImage}
      />
    </section>
  );
}
