import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    id: 1,
    title: "Elastomeric Roof Coatings",
    description: "Extend your roof's life with our premium elastomeric coatings that expand and contract with temperature changes.",
    icon: (
      <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Reflective Roof Coatings",
    description: "Reduce energy costs with our highly reflective coatings that minimize heat absorption and lower cooling expenses.",
    icon: (
      <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Silicone Roof Coatings",
    description: "Maximum weather protection with our silicone coatings, offering superior resistance against ponding water and UV rays.",
    icon: (
      <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    )
  },
  {
    id: 4,
    title: "Roof Leak Repairs",
    description: "Quickly address leaks and prevent water damage with our professional repair services for all commercial roof types.",
    icon: (
      <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: 5,
    title: "Roof Inspections",
    description: "Comprehensive evaluations to identify issues before they become costly problems, with detailed reports and recommendations.",
    icon: (
      <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    )
  },
  {
    id: 6,
    title: "Preventative Maintenance",
    description: "Scheduled maintenance programs to extend roof longevity and maintain warranty compliance for your commercial property.",
    icon: (
      <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

export default function ServiceHighlights() {
  const { ref, inView } = useScrollAnimation();
  
  return (
    <section ref={ref} className="py-16 bg-white dark:bg-slate-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-800 dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Comprehensive commercial roof coating solutions to protect your investment
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="service-card group"
            >
              <div className="mb-4 text-primary dark:text-accent-light transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-xl font-heading font-bold text-slate-800 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a 
            href="#contact" 
            className="inline-block bg-primary hover:bg-primary-light text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-lg animate-btn"
          >
            Request a Service Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
}