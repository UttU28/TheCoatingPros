import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";

// Certification logos/images
const certifications = [
  {
    id: 1,
    name: "Tropical Roofing Products",
    image: "https://www.tropicalroofingproducts.com/wp-content/uploads/2023/03/TRP-logo-300x160.png",
    url: "https://www.tropicalroofingproducts.com/"
  },
  {
    id: 2,
    name: "GAF",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/GAF_logo.svg/2048px-GAF_logo.svg.png",
    url: "https://www.gaf.com/en-us/roofing-materials/commercial-roofing-materials/coatings"
  },
  {
    id: 3,
    name: "Polyglass USA",
    image: "https://cdn-jlhcl.nitrocdn.com/DQrHUAcSQTARUZsDJHrwSgZPeoUqhVfQ/assets/images/optimized/rev-0f5cc8b/polyglass.us/wp-content/uploads/2025/02/green-logo.png",
    url: "https://polyglass.us/product-category/liquid-applied-systems/roof-coatings/"
  },
  {
    id: 4,
    name: "Inland Coatings",
    image: "https://inlandcoatings.com/wp-content/uploads/2020/09/Inland-inland-co.-300x92.png",
    url: "https://inlandcoatings.com/"
  },
  {
    id: 5,
    name: "American Weatherstar",
    image: "https://www.americanweatherstar.com/wp-content/uploads/2020/09/american-weatherstar-logo-web.png",
    url: "https://www.americanweatherstar.com/"
  },
  {
    id: 6,
    name: "Isothermal Protective Coatings",
    image: "https://ipcroof.com/wp-content/uploads/2021/03/IPC_logo_teal_white-new-300x100-1.png",
    url: "https://ipcroof.com/"
  },
  {
    id: 7,
    name: "Gaco",
    image: "https://gaco.com/wp-content/themes/gaco-2020/images/gaco-primary-logo-color-with-tagline.svg",
    url: "https://gaco.com/"
  },
];

// Premium coating solutions data
const premiumSolutions = [
  {
    id: 1,
    title: "Roof Inspection",
    description: "Comprehensive assessment of roof condition, identifying areas of concern and recommending appropriate solutions.",
    icon: "🔍"
  },
  {
    id: 2,
    title: "Silicone Coatings",
    description: "Premium silicone roof coatings providing superior UV protection and weather resistance for long-lasting performance.",
    icon: "🛡️"
  },
  {
    id: 3,
    title: "Acrylic Coatings",
    description: "Cost-effective water-based solutions ideal for reflectivity and protection against moderate weather conditions.",
    icon: "🖌️"
  },
  {
    id: 4,
    title: "Flashing Materials",
    description: "High-quality materials for sealing roof penetrations, transitions, and other critical areas to prevent water intrusion.",
    icon: "🔧"
  },
  {
    id: 5,
    title: "Cool Roof Solutions",
    description: "Energy-efficient reflective coatings that reduce cooling costs and extend roof life by minimizing heat absorption.",
    icon: "❄️"
  },
  {
    id: 6,
    title: "Warranty Standards",
    description: "Industry-leading manufacturer warranties backed by our commitment to quality installation and service.",
    icon: "📝"
  }
];

export default function CertificationsSection() {
  const { ref, inView } = useScrollAnimation();
  const { ref: solutionsRef, inView: solutionsInView } = useScrollAnimation();
  const [mounted, setMounted] = useState(false);

  // Handle mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

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
            Certifications
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            As a leading turnkey operation in the Houston and Southeast Texas region, we specialize in working with elite industry manufactures. The Coating Pros carry full installation certifications for:
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className="bg-white dark:bg-slate-800/80 p-4 rounded-lg shadow-md flex flex-col items-center justify-center transition-all duration-300"
            >
              <a 
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full flex flex-col items-center"
              >
                <div className="bg-slate-300 dark:bg-slate-700/90 p-4 rounded-md flex items-center justify-center w-full h-40 mb-4">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <h3 className="text-center text-lg font-medium text-slate-800 dark:text-white mt-2 hover:text-primary dark:hover:text-primary transition-colors">
                  {cert.name}
                </h3>
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Premium Coating Solutions Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-20 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-800 dark:text-white mb-4">
            Premium Coating Solutions
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            We deliver comprehensive roof coating systems tailored to your specific requirements, ensuring optimal protection and performance for your commercial property.
          </p>
        </motion.div>

        <motion.div
          ref={solutionsRef}
          initial={{ opacity: 0, y: 30 }}
          animate={solutionsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
        >
          {premiumSolutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 20 }}
              animate={solutionsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.03,
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className="bg-white dark:bg-slate-800/80 p-6 rounded-lg shadow-md flex flex-col transition-all duration-300"
            >
              <div className="bg-primary/10 dark:bg-primary/20 w-14 h-14 rounded-full flex items-center justify-center mb-4 text-2xl">
                {solution.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3">
                {solution.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                {solution.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
