
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const projectImages = [
  {
    id: 1,
    src: "https://18efabd6cf.clvaw-cdnwnd.com/4fc45f95ccb478fd517a21f0b40b9877/200000081-cfbabcfbae/700/1-Oct%2004%202023%2012_37pm-5W5X-3.webp?ph=18efabd6cf",
    caption: "Commercial Roofing Project - October 2023"
  },
  {
    id: 2,
    src: "https://18efabd6cf.clvaw-cdnwnd.com/4fc45f95ccb478fd517a21f0b40b9877/200000082-e3f95e3f98/700/2-Oct%2004%202023%2012_40pm-tnGP.webp?ph=18efabd6cf",
    caption: "Coating Application - October 2023"
  },
  {
    id: 3,
    src: "https://18efabd6cf.clvaw-cdnwnd.com/4fc45f95ccb478fd517a21f0b40b9877/200000080-9629796298/700/3-Oct%2004%202023%2012_41pm-iDDw.webp?ph=18efabd6cf",
    caption: "Industrial Roof Coating - October 2023"
  },
  {
    id: 4,
    src: "https://18efabd6cf.clvaw-cdnwnd.com/4fc45f95ccb478fd517a21f0b40b9877/200000085-5b5685b56b/700/4-Oct%2029%202023%2005_21pm-XMkY.webp?ph=18efabd6cf",
    caption: "Commercial Project - October 2023"
  },
  {
    id: 5,
    src: "https://18efabd6cf.clvaw-cdnwnd.com/4fc45f95ccb478fd517a21f0b40b9877/200000092-8db848db88/700/5-Nov%2016%202023%2001_07pm-Usmb-1.webp?ph=18efabd6cf",
    caption: "Roof Coating - November 2023"
  },
  {
    id: 6,
    src: "https://18efabd6cf.clvaw-cdnwnd.com/4fc45f95ccb478fd517a21f0b40b9877/200000089-dd26edd26f/700/6-Dec%2006%202023%2002_59pm-Pm4p.webp?ph=18efabd6cf",
    caption: "Industrial Project - December 2023"
  },
  {
    id: 7,
    src: "https://18efabd6cf.clvaw-cdnwnd.com/4fc45f95ccb478fd517a21f0b40b9877/200000090-dc30adc30c/700/7-Dec%2018%202023%2001_35pm-MekL-9.webp?ph=18efabd6cf",
    caption: "Commercial Building - December 2023"
  },
  {
    id: 8,
    src: "https://18efabd6cf.clvaw-cdnwnd.com/4fc45f95ccb478fd517a21f0b40b9877/200000099-959a3959a6/700/8-Apr%2001%202024%2012_11pm-U9BT.webp?ph=18efabd6cf",
    caption: "Roofing Project - April 2024"
  },
  {
    id: 9,
    src: "https://18efabd6cf.clvaw-cdnwnd.com/4fc45f95ccb478fd517a21f0b40b9877/200000095-5cd235cd24/700/9-Apr%2001%202024%2008_03pm-Exhq.webp?ph=18efabd6cf",
    caption: "Commercial Coating - April 2024"
  },
  {
    id: 10,
    src: "https://18efabd6cf.clvaw-cdnwnd.com/4fc45f95ccb478fd517a21f0b40b9877/200000098-6832f68331/700/10-Jun%2010%202024%2009_32pm-DyMF.webp?ph=18efabd6cf",
    caption: "Industrial Building - June 2024"
  },
  {
    id: 11,
    src: "https://18efabd6cf.clvaw-cdnwnd.com/4fc45f95ccb478fd517a21f0b40b9877/200000083-78aea78aec/700/11-Jun%2022%202024%2002_39pm-aRcQ-7.webp?ph=18efabd6cf",
    caption: "Commercial Project - June 2024"
  },
  {
    id: 12,
    src: "https://18efabd6cf.clvaw-cdnwnd.com/4fc45f95ccb478fd517a21f0b40b9877/200000096-5366153662/700/12-Jun%2022%202024%2002_41pm-tis2.webp?ph=18efabd6cf",
    caption: "Roofing Solution - June 2024"
  },
  {
    id: 13,
    src: "https://18efabd6cf.clvaw-cdnwnd.com/4fc45f95ccb478fd517a21f0b40b9877/200000104-ebca9ebcac/700/13-Jun%2022%202024%2002_43pm-k9cb.webp?ph=18efabd6cf",
    caption: "Industrial Coating - June 2024"
  },
  {
    id: 14,
    src: "https://18efabd6cf.clvaw-cdnwnd.com/4fc45f95ccb478fd517a21f0b40b9877/200000103-c76fdc76ff/700/14-Aug%2019%202024%2010_25am-c7ED.webp?ph=18efabd6cf",
    caption: "Commercial Building - August 2024"
  },
  {
    id: 15,
    src: "https://18efabd6cf.clvaw-cdnwnd.com/4fc45f95ccb478fd517a21f0b40b9877/200000106-388093880c/700/15-Aug%2025%202024%2005_14pm-XnkQ-6.webp?ph=18efabd6cf",
    caption: "Roofing Project - August 2024"
  },
  {
    id: 16,
    src: "https://18efabd6cf.clvaw-cdnwnd.com/4fc45f95ccb478fd517a21f0b40b9877/200000107-a4821a4837/700/16-Aug%2025%202024%2005_29pm-sMYD.webp?ph=18efabd6cf",
    caption: "Industrial Solution - August 2024"
  },
  {
    id: 17,
    src: "https://18efabd6cf.clvaw-cdnwnd.com/4fc45f95ccb478fd517a21f0b40b9877/200000108-f014ff0152/700/down-net_http20250129-152-g0as1i-0.webp?ph=18efabd6cf",
    caption: "Commercial Project - January 2025"
  },
  {
    id: 18,
    src: "https://18efabd6cf.clvaw-cdnwnd.com/4fc45f95ccb478fd517a21f0b40b9877/200000110-3b39e3b3a2/700/IMG_20240916_164311.webp?ph=18efabd6cf",
    caption: "Industrial Building - September 2024"
  },
  {
    id: 19,
    src: "https://18efabd6cf.clvaw-cdnwnd.com/4fc45f95ccb478fd517a21f0b40b9877/200000124-e597de597f/700/IMG_20250302_163525.webp?ph=18efabd6cf",
    caption: "Roofing Solution - March 2025"
  },
  {
    id: 20,
    src: "https://18efabd6cf.clvaw-cdnwnd.com/4fc45f95ccb478fd517a21f0b40b9877/200000125-4d4c94d4cc/700/IMG_20250228_155648.webp?ph=18efabd6cf",
    caption: "Commercial Project - February 2025"
  },
  {
    id: 21,
    src: "https://18efabd6cf.clvaw-cdnwnd.com/4fc45f95ccb478fd517a21f0b40b9877/200000126-90c0890c0b/700/IMG_20250210_201816.webp?ph=18efabd6cf",
    caption: "Industrial Coating - February 2025"
  },
  {
    id: 22,
    src: "https://18efabd6cf.clvaw-cdnwnd.com/4fc45f95ccb478fd517a21f0b40b9877/200000128-d5287d528a/700/IMG_20250211_164054.webp?ph=18efabd6cf",
    caption: "Commercial Building - February 2025"
  },
  {
    id: 23,
    src: "https://18efabd6cf.clvaw-cdnwnd.com/4fc45f95ccb478fd517a21f0b40b9877/200000149-6ae786ae7a/700/Lake%20Houston%20Church%20of%20Christ%20--%20Before%20and%20After%202.webp?ph=18efabd6cf",
    caption: "Lake Houston Church of Christ - Before and After"
  },
  {
    id: 24,
    src: "https://18efabd6cf.clvaw-cdnwnd.com/4fc45f95ccb478fd517a21f0b40b9877/200000152-1b6801b682/Modbit%20B-A%201.webp?ph=18efabd6cf",
    caption: "Modbit Project - Before and After"
  }
];

export default function ProjectGallery() {
  const { ref, inView } = useScrollAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Auto-scroll to the current thumbnail
    if (sliderRef.current) {
      const thumbnail = sliderRef.current.children[currentIndex] as HTMLElement;
      if (thumbnail) {
        const scrollPosition = thumbnail.offsetLeft - (sliderRef.current.clientWidth / 2) + (thumbnail.clientWidth / 2);
        sliderRef.current.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });
      }
    }
  }, [currentIndex]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
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
          {/* Main Image */}
          <div className="relative max-w-2xl mx-auto mb-6">
            <div className="cursor-pointer" onClick={() => openLightbox(currentIndex)}>
              <div className="relative aspect-square overflow-hidden rounded-lg">
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

            {/* Navigation Buttons */}
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

          {/* Thumbnails Slider */}
          <div className="max-w-4xl mx-auto overflow-hidden">
            <div 
              ref={sliderRef}
              className="flex space-x-2 pb-4 overflow-x-auto scrollbar-hide"
              style={{ scrollBehavior: 'smooth' }}
            >
              {projectImages.map((image, index) => (
                <div
                  key={image.id}
                  className={cn(
                    "flex-shrink-0 cursor-pointer overflow-hidden rounded-lg transition-all duration-300 w-16 h-16",
                    currentIndex === index 
                      ? "ring-2 ring-primary scale-105 opacity-100" 
                      : "ring-0 scale-100 opacity-70 hover:opacity-100"
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
        </motion.div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button
            className="absolute top-4 right-4 text-white text-4xl"
            onClick={() => setLightboxOpen(false)}
          >
            ×
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl"
            onClick={() => setLightboxIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length)}
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
            onClick={() => setLightboxIndex((prev) => (prev + 1) % projectImages.length)}
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
