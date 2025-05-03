import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Certification logos/images
const certifications = [
  {
    id: 1,
    name: "Better Business Bureau Accredited",
    image: "https://www.bbb.org/content/dam/bbblive/us/en/bblogos-new/bbbb/BBB-sealsvg.svg"
  },
  {
    id: 2,
    name: "EPA Certified",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/US-EPA-Logo.png/1200px-US-EPA-Logo.png"
  },
  {
    id: 3,
    name: "NRCA Member",
    image: "https://www.nrca.net/NRCA/media/Images/nrca-logo.jpg?ext=.jpg"
  },
  {
    id: 4,
    name: "Energy Star Partner",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Energy_Star_logo.svg/1024px-Energy_Star_logo.svg.png"
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
              className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md flex flex-col items-center justify-center hover:shadow-lg transition-all duration-300"
            >
              <div className="w-24 h-24 p-2 flex items-center justify-center mb-4">
                <img 
                  src={cert.image} 
                  alt={cert.name} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <h3 className="text-center text-lg font-medium text-slate-800 dark:text-white">
                {cert.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}