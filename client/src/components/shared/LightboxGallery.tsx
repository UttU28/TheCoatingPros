import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

interface LightboxGalleryProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
}

export default function LightboxGallery({ isOpen, onClose, imageSrc }: LightboxGalleryProps) {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleBackdropClick}
        >
          <div className="relative max-w-5xl w-full">
            <button
              className="absolute top-4 right-4 text-white text-2xl z-10 hover:text-accent transition-colors"
              onClick={onClose}
              aria-label="Close lightbox"
            >
              <FaTimes />
            </button>
            <motion.img
              src={imageSrc}
              alt="Project detail"
              className="max-w-full max-h-[80vh] mx-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
