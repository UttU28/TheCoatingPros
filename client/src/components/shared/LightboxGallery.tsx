import { motion } from "framer-motion";
import { useEffect } from "react";

interface LightboxGalleryProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
}

export default function LightboxGallery({ isOpen, onClose, imageSrc }: LightboxGalleryProps) {
  // Close lightbox when Escape key is pressed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      // Prevent background scrolling when lightbox is open
      document.body.style.overflow = "hidden";
    }
    
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      // Re-enable scrolling when lightbox is closed
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);
  
  if (!isOpen) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative max-w-screen-lg max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()} // Prevent click from closing when clicking on content
      >
        <img
          src={imageSrc}
          alt="Enlarged view"
          className="max-h-[80vh] max-w-full object-contain rounded-lg"
        />
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition-all"
          aria-label="Close lightbox"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </motion.div>
    </motion.div>
  );
}