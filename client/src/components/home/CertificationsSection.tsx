import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Certifications() {
  const { ref, inView } = useScrollAnimation();
  
  const certifications = [
    {
      id: 1,
      name: "Energy Star Partner",
      logo: "https://www.energystar.gov/sites/default/files/tools/EnergyStar_logo-186px_0.png"
    },
    {
      id: 2,
      name: "NRCA Member",
      logo: "https://www.nrca.net/NRCA/graphics/logo/header.png"
    },
    {
      id: 3,
      name: "EPA Certified",
      logo: "https://www.epa.gov/sites/default/files/styles/medium/public/2021-01/social_media_card_epaseal_1200x675.jpg?itok=ODucCK7G"
    },
    {
      id: 4,
      name: "Better Business Bureau",
      logo: "https://www.bbb.org/globalassets/local-bbbs/council-113/media/logos/bbb-logo-blue-m.png"
    }
  ];
  
  return (
    <section ref={ref} className="py-16 bg-slate-50 dark:bg-slate-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-800 dark:text-white mb-4">
            Our Certifications
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            We maintain the highest industry standards and certifications to ensure quality service.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md dark:shadow-lg flex flex-col items-center justify-center transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="h-16 md:h-20 flex items-center justify-center mb-4">
                <img 
                  src={cert.logo} 
                  alt={`${cert.name} Certification`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="text-slate-800 dark:text-white font-heading font-medium text-center">
                {cert.name}
              </h3>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-slate-600 dark:text-slate-300 mb-8">
            Our team consists of certified professionals who stay up-to-date with the latest industry standards and technologies. We're committed to providing environmentally responsible and energy-efficient roofing solutions.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-primary hover:bg-primary-light text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-lg"
          >
            Request a Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}