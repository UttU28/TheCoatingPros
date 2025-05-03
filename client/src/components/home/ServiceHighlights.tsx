import { Link } from "wouter";
import { motion } from "framer-motion";
import { FaBrush, FaTint, FaShieldAlt } from "react-icons/fa";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    id: 1,
    icon: <FaBrush className="text-2xl text-accent" />,
    title: "Roof Coating Solutions",
    description: "All of the manufacturers that The Coating Pros work with are leading providers of high-quality and cost-effective roof coating products. Our team of experienced professionals specializes in protecting and preserving all types of commercial roofs, using innovative coating solutions.",
    link: "/services"
  },
  {
    id: 2,
    icon: <FaTint className="text-2xl text-accent" />,
    title: "Waterproofing Services",
    description: "Waterproofing services refer to a range of techniques and methods used to protect buildings and other structures from water damage. This includes preventing water from seeping into the walls, floors, and foundations of a structure, as well as protecting against moisture and mold growth.",
    link: "/services"
  },
  {
    id: 3,
    icon: <FaShieldAlt className="text-2xl text-accent" />,
    title: "Protective Roofing Coatings",
    description: "Protective Roofing Coatings are a type of specialized coating applied to roofs to provide an extra layer of protection against various elements such as UV rays, extreme temperatures, moisture, and physical damage. These coatings are designed to extend the lifespan of roofs.",
    link: "/services"
  }
];

export default function ServiceHighlights() {
  const { ref, inView } = useScrollAnimation();
  
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-white dark:bg-slate-900 transition-colors duration-300" ref={ref}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            className="font-heading text-3xl md:text-4xl font-bold text-primary dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Expert Roof Coatings Solutions
          </motion.h2>
          <motion.p 
            className="max-w-3xl mx-auto text-slate-600 dark:text-slate-400"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Based in Houston and serving Southeast Texas, our team offers top-quality services to protect and extend the lifespan of your commercial roof. With multiple manufacturer certifications, you can trust The Coating Pros to provide a solution to all your roof coating needs.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id} 
              className="service-card"
              variants={itemVariants}
            >
              <div className="rounded-full bg-accent/10 w-16 h-16 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary dark:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                {service.description}
              </p>
              <Link 
                href={service.link} 
                className="inline-flex items-center text-accent hover:text-accent-dark font-medium transition-colors"
              >
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Link 
              href="/services" 
              className="animate-btn inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-md shadow-lg transition-all duration-300"
            >
              All Services
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
