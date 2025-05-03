import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import LightboxGallery from "../shared/LightboxGallery";

const projectImages = [
  {
    id: 1,
    src: "https://18efabd6cf.clvaw-cdnwnd.com/4fc45f95ccb478fd517a21f0b40b9877/200000081-cfbabcfbae/700/1-Oct%2004%202023%2012_37pm-5W5X-3.webp?ph=18efabd6cf",
    alt: "Commercial Roof Coating Project 1",
    caption: "Commercial Facility - October 2023"
  },
  {
    id: 2,
    src: "https://18efabd6cf.clvaw-cdnwnd.com/4fc45f95ccb478fd517a21f0b40b9877/200000082-e3f95e3f98/700/2-Oct%2004%202023%2012_40pm-tnGP.webp?ph=18efabd6cf",
    alt: "Commercial Roof Coating Project 2",
    caption: "Industrial Building - October 2023"
  },
  {
    id: 3,
    src: "https://18efabd6cf.clvaw-cdnwnd.com/4fc45f95ccb478fd517a21f0b40b9877/200000080-9629796298/700/3-Oct%2004%202023%2012_41pm-iDDw.webp?ph=18efabd6cf",
    alt: "Commercial Roof Coating Project 3",
    caption: "Warehouse Roofing - October 2023"
  },
  {
    id: 4,
    src: "https://18efabd6cf.clvaw-cdnwnd.com/4fc45f95ccb478fd517a21f0b40b9877/200000085-5b5685b56b/700/4-Oct%2029%202023%2005_21pm-XMkY.webp?ph=18efabd6cf",
    alt: "Commercial Roof Coating Project 4",
    caption: "Office Complex - October 2023"
  },
  {
    id: 5,
    src: "https://18efabd6cf.clvaw-cdnwnd.com/4fc45f95ccb478fd517a21f0b40b9877/200000092-8db848db88/700/5-Nov%2016%202023%2001_07pm-Usmb-1.webp?ph=18efabd6cf",
    alt: "Commercial Roof Coating Project 5",
    caption: "Retail Store - November 2023"
  },
  {
    id: 6,
    src: "https://18efabd6cf.clvaw-cdnwnd.com/4fc45f95ccb478fd517a21f0b40b9877/200000089-dd26edd26f/700/6-Dec%2006%202023%2002_59pm-Pm4p.webp?ph=18efabd6cf",
    alt: "Commercial Roof Coating Project 6",
    caption: "Medical Facility - December 2023"
  },
  {
    id: 7,
    src: "https://18efabd6cf.clvaw-cdnwnd.com/4fc45f95ccb478fd517a21f0b40b9877/200000090-dc30adc30c/700/7-Dec%2018%202023%2001_35pm-MekL-9.webp?ph=18efabd6cf",
    alt: "Commercial Roof Coating Project 7",
    caption: "School Building - December 2023"
  },
  {
    id: 8,
    src: "https://18efabd6cf.clvaw-cdnwnd.com/4fc45f95ccb478fd517a21f0b40b9877/200000099-959a3959a6/700/8-Apr%2001%202024%2012_11pm-U9BT.webp?ph=18efabd6cf",
    alt: "Commercial Roof Coating Project 8",
    caption: "Shopping Center - April 2024"
  },
  {
    id: 9,
    src: "https://18efabd6cf.clvaw-cdnwnd.com/4fc45f95ccb478fd517a21f0b40b9877/200000095-5cd235cd24/700/9-Apr%2001%202024%2008_03pm-Exhq.webp?ph=18efabd6cf",
    alt: "Commercial Roof Coating Project 9",
    caption: "Hotel Roofing - April 2024"
  },
  {
    id: 10,
    src: "https://18efabd6cf.clvaw-cdnwnd.com/4fc45f95ccb478fd517a21f0b40b9877/200000098-6832f68331/700/10-Jun%2010%202024%2009_32pm-DyMF.webp?ph=18efabd6cf",
    alt: "Commercial Roof Coating Project 10",
    caption: "Restaurant Building - June 2024"
  },
  {
    id: 11,
    src: "https://18efabd6cf.clvaw-cdnwnd.com/4fc45f95ccb478fd517a21f0b40b9877/200000083-78aea78aec/700/11-Jun%2022%202024%2002_39pm-aRcQ-7.webp?ph=18efabd6cf",
    alt: "Commercial Roof Coating Project 11",
    caption: "Manufacturing Facility - June 2024"
  },
  {
    id: 12,
    src: "https://18efabd6cf.clvaw-cdnwnd.com/4fc45f95ccb478fd517a21f0b40b9877/200000096-5366153662/700/12-Jun%2022%202024%2002_41pm-tis2.webp?ph=18efabd6cf",
    alt: "Commercial Roof Coating Project 12",
    caption: "Office Building - June 2024"
  },
  {
    id: 13,
    src: "https://18efabd6cf.clvaw-cdnwnd.com/4fc45f95ccb478fd517a21f0b40b9877/200000104-ebca9ebcac/700/13-Jun%2022%202024%2002_43pm-k9cb.webp?ph=18efabd6cf",
    alt: "Commercial Roof Coating Project 13",
    caption: "Commercial Complex - June 2024"
  },
  {
    id: 14,
    src: "https://18efabd6cf.clvaw-cdnwnd.com/4fc45f95ccb478fd517a21f0b40b9877/200000103-c76fdc76ff/700/14-Aug%2019%202024%2010_25am-c7ED.webp?ph=18efabd6cf",
    alt: "Commercial Roof Coating Project 14",
    caption: "Shopping Mall - August 2024"
  },
  {
    id: 15,
    src: "https://18efabd6cf.clvaw-cdnwnd.com/4fc45f95ccb478fd517a21f0b40b9877/200000106-388093880c/700/15-Aug%2025%202024%2005_14pm-XnkQ-6.webp?ph=18efabd6cf",
    alt: "Commercial Roof Coating Project 15",
    caption: "Warehouse Project - August 2024"
  },
  {
    id: 16,
    src: "https://18efabd6cf.clvaw-cdnwnd.com/4fc45f95ccb478fd517a21f0b40b9877/200000107-a4821a4837/700/16-Aug%2025%202024%2005_29pm-sMYD.webp?ph=18efabd6cf",
    alt: "Commercial Roof Coating Project 16",
    caption: "Industrial Facility - August 2024"
  },
  {
    id: 17,
    src: "https://18efabd6cf.clvaw-cdnwnd.com/4fc45f95ccb478fd517a21f0b40b9877/200000108-f014ff0152/700/down-net_http20250129-152-g0as1i-0.webp?ph=18efabd6cf",
    alt: "Commercial Roof Coating Project 17",
    caption: "Retail Center - January 2025"
  },
  {
    id: 18,
    src: "https://18efabd6cf.clvaw-cdnwnd.com/4fc45f95ccb478fd517a21f0b40b9877/200000110-3b39e3b3a2/700/IMG_20240916_164311.webp?ph=18efabd6cf",
    alt: "Commercial Roof Coating Project 18",
    caption: "Commercial Building - September 2024"
  },
  {
    id: 19,
    src: "https://18efabd6cf.clvaw-cdnwnd.com/4fc45f95ccb478fd517a21f0b40b9877/200000124-e597de597f/700/IMG_20250302_163525.webp?ph=18efabd6cf",
    alt: "Commercial Roof Coating Project 19",
    caption: "Office Complex - March 2025"
  },
  {
    id: 20,
    src: "https://18efabd6cf.clvaw-cdnwnd.com/4fc45f95ccb478fd517a21f0b40b9877/200000125-4d4c94d4cc/700/IMG_20250228_155648.webp?ph=18efabd6cf",
    alt: "Commercial Roof Coating Project 20",
    caption: "Retail Store - February 2025"
  },
  {
    id: 21,
    src: "https://18efabd6cf.clvaw-cdnwnd.com/4fc45f95ccb478fd517a21f0b40b9877/200000126-90c0890c0b/700/IMG_20250210_201816.webp?ph=18efabd6cf",
    alt: "Commercial Roof Coating Project 21",
    caption: "Hotel Project - February 2025"
  },
  {
    id: 22,
    src: "https://18efabd6cf.clvaw-cdnwnd.com/4fc45f95ccb478fd517a21f0b40b9877/200000128-d5287d528a/700/IMG_20250211_164054.webp?ph=18efabd6cf",
    alt: "Commercial Roof Coating Project 22",
    caption: "Commercial Facility - February 2025"
  },
  {
    id: 23,
    src: "https://18efabd6cf.clvaw-cdnwnd.com/4fc45f95ccb478fd517a21f0b40b9877/200000149-6ae786ae7a/700/Lake%20Houston%20Church%20of%20Christ%20--%20Before%20and%20After%202.webp?ph=18efabd6cf",
    alt: "Commercial Roof Coating Project 23",
    caption: "Lake Houston Church - Before & After"
  },
  {
    id: 24,
    src: "https://18efabd6cf.clvaw-cdnwnd.com/4fc45f95ccb478fd517a21f0b40b9877/200000152-1b6801b682/Modbit%20B-A%201.webp?ph=18efabd6cf",
    alt: "Commercial Roof Coating Project 24",
    caption: "Modbit Before & After"
  }
];

export default function ProjectGallery() {
  const { ref, inView } = useScrollAnimation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState("");
  const thumbnailsRef = useRef<HTMLDivElement>(null);
  
  // Function to scroll thumbnails to the active image
  const scrollToActiveThumbnail = (index: number) => {
    if (thumbnailsRef.current) {
      const thumbnailWidth = 100; // Width of thumbnail + margin
      const containerWidth = thumbnailsRef.current.offsetWidth;
      const maxScrollPosition = thumbnailsRef.current.scrollWidth - containerWidth;
      
      // Calculate position to center the active thumbnail
      const scrollPosition = Math.max(
        0,
        Math.min(
          maxScrollPosition,
          index * thumbnailWidth - (containerWidth / 2) + (thumbnailWidth / 2)
        )
      );
      
      thumbnailsRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  };
  
  // Auto rotate images
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const newIndex = (prev + 1) % projectImages.length;
        scrollToActiveThumbnail(newIndex);
        return newIndex;
      });
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);
  
  // Pause auto rotation when hovering
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);
  
  const goToImage = (index: number) => {
    setActiveIndex(index);
    scrollToActiveThumbnail(index);
    setIsAutoPlaying(false);
    // Resume auto-play after user interaction
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };
  
  const openLightbox = (imageSrc: string) => {
    setLightboxImage(imageSrc);
    setLightboxOpen(true);
  };
  
  return (
    <section className="py-16 bg-slate-900 text-white" ref={ref}>
      <div className="container-custom" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our Projects</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Browse through our portfolio of successful commercial roof coating projects in the Houston area.
          </p>
        </motion.div>
        
        <div className="relative overflow-hidden">
          {/* Main Image Gallery */}
          <div className="relative aspect-square max-w-4xl mx-auto mb-4 rounded-lg overflow-hidden shadow-2xl">
            <AnimatedImage
              src={projectImages[activeIndex].src}
              alt={projectImages[activeIndex].alt}
              onClick={() => openLightbox(projectImages[activeIndex].src)}
              className="w-full h-full object-cover cursor-pointer"
            />
            
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <p className="text-white text-lg font-medium">{projectImages[activeIndex].caption}</p>
            </div>
            
            {/* Navigation Arrows */}
            <button 
              onClick={() => goToImage((activeIndex - 1 + projectImages.length) % projectImages.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={() => goToImage((activeIndex + 1) % projectImages.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Thumbnails */}
          <div 
            ref={thumbnailsRef}
            className="flex overflow-x-auto scrollbar-hide pb-4 max-w-4xl mx-auto gap-2"
          >
            {projectImages.map((image, index) => (
              <div 
                key={image.id}
                onClick={() => goToImage(index)}
                className={`
                  flex-shrink-0 cursor-pointer rounded-md overflow-hidden transition-all duration-300
                  ${activeIndex === index 
                    ? 'outline outline-offset-2 outline-4 outline-primary scale-110 shadow-lg' 
                    : 'opacity-60 hover:opacity-90'}
                `}
                style={{ width: '80px', height: '80px' }}
              >
                <img 
                  src={image.src} 
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* View More Projects Button */}
        <div className="text-center mt-10">
          <button className="bg-primary hover:bg-primary-light text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-lg inline-flex items-center gap-2">
            View All Projects
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
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

// Animated Image Component
function AnimatedImage({ src, alt, className, onClick }: { src: string; alt: string; className?: string; onClick?: () => void }) {
  return (
    <motion.img
      key={src}
      src={src}
      alt={alt}
      className={className}
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    />
  );
}

// Add this to your CSS
// .scrollbar-hide::-webkit-scrollbar {
//   display: none;
// }
// .scrollbar-hide {
//   -ms-overflow-style: none;  /* IE and Edge */
//   scrollbar-width: none;  /* Firefox */
// }