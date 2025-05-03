import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Certification logos/images
const certifications = [
  {
    id: 1,
    name: "Better Business Bureau Accredited",
    image: "https://crst.net/wp-content/uploads/2024/02/CornerStone-Services-Better-Business-Bureau-A-Rating.png.webp"
  },
  {
    id: 2,
    name: "EPA Certified",
    image: "https://ww2.epatest.com/wp-content/uploads/2022/09/cropped-android-chrome-512x512-1.png"
  },
  {
    id: 3,
    name: "NRCA Member",
    image: "https://eu-images.contentstack.com/v3/assets/blt2ded89bf530e7d7a/blt58000f6a17b37f31/6526a249e9c06c5fb14cc0ad/NRCA_20logo.jpg?width=1280&auto=webp&quality=95&format=jpg&disable=upscale"
  },
  {
    id: 4,
    name: "Energy Star Partner",
    image: "https://www.bulbs.com/images/resources/color_estar.gif"
  }
];

export default function CertificationsSection() {
  const { ref, inView } = useScrollAnimation();
  
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-800 dark:text-white mb-4">
            Our Certifications
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            We're proud to be certified by industry-leading organizations. These certifications 
            demonstrate our commitment to quality, safety, and environmental responsibility.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md flex flex-col items-center justify-center transition-all duration-300"
            >
              <motion.div 
                className="w-28 h-28 p-2 flex items-center justify-center mb-4"
                whileHover={{ rotate: [0, -5, 5, -5, 0], transition: { duration: 0.5 } }}
              >
                <img 
                  src={cert.image} 
                  alt={cert.name} 
                  className="max-w-full max-h-full object-contain"
                />
              </motion.div>
              <motion.h3 
                className="text-center text-lg font-medium text-slate-800 dark:text-white"
                whileHover={{ color: '#338ef7' }}
              >
                {cert.name}
              </motion.h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}