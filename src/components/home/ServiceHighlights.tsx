import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link as ScrollLink } from "react-scroll";

const services = [
  {
    id: 1,
    title: "Commercial Roof Coatings",
    description: "Our premium roof coatings extend the life of your existing roof while providing protection against UV rays, water damage, and weathering. Available in various formulations to suit your specific needs.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Roof Restoration & Repair",
    description: "Our experienced team provides comprehensive roof restoration services to address leaks, punctures, and deterioration. We'll restore your commercial roof to optimal condition without the cost of a full replacement.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0 0L9.121 9.121" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Waterproofing & Sealants",
    description: "We offer specialized waterproofing solutions and sealants that provide superior protection against water infiltration. Our products are designed to bond strongly to various roof materials for long-lasting performance.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    id: 4,
    title: "Energy-Efficient Coatings",
    description: "Our reflective roof coatings can significantly reduce your building's cooling costs by reflecting solar radiation. These coatings minimize heat absorption, lowering interior temperatures and reducing energy consumption.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: 5,
    title: "Preventative Maintenance",
    description: "We provide scheduled inspections and maintenance to prevent costly roof problems before they occur. Our comprehensive maintenance programs help extend your roof's life and protect your investment.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    )
  },
  {
    id: 6,
    title: "Inspection & Assessment",
    description: "Our comprehensive roof inspections identify existing and potential problems. We provide detailed reports with recommendations, helping you make informed decisions about maintenance, repairs, or replacements.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
];

export default function ServiceHighlights() {
  const { ref, inView } = useScrollAnimation();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <section className="relative py-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://18efabd6cf.clvaw-cdnwnd.com/4fc45f95ccb478fd517a21f0b40b9877/200000136-74c3574c38/dji_fly_20250325_110426_0_1742919607139_photo.webp?ph=18efabd6cf"
          alt="Commercial Roof Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/70"></div>
      </div>
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Our Professional Services
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            We provide comprehensive commercial roof coating services to protect and extend the life of your building's roof. Our expert team delivers quality solutions tailored to your specific needs.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {services.map((service) => (
            <motion.div 
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="service-card"
            >
              <div className="text-primary dark:text-accent mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-slate-800 dark:text-white">
                {service.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="inline-block bg-primary hover:bg-primary-light text-white font-bold py-3 px-8 rounded-md transition-colors animate-btn cursor-pointer"
          >
            Get a Free Consultation
          </ScrollLink>
        </motion.div>
      </div>
    </section>
  );
}