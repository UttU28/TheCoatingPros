import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function AboutSection() {
  const { ref, inView } = useScrollAnimation();
  
  return (
    <section ref={ref} className="py-16 bg-white dark:bg-slate-800">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-lg overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1620558135339-94019a1229b7?q=80&w=1600&auto=format&fit=crop"
              alt="Commercial Roof Coating Application"
              className="w-full h-auto"
            />
          </motion.div>
          
          {/* Right side - Text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-800 dark:text-white mb-4">
                Houston's Trusted Roof Coating Specialists
              </h2>
              <div className="w-20 h-1 bg-accent mb-6"></div>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-600 dark:text-slate-300 mb-4 text-lg"
            >
              For over 15 years, The Coating Pros has been providing Houston businesses with top-quality commercial roof coating solutions that extend roof life, reduce energy costs, and protect your investment.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-slate-600 dark:text-slate-300 mb-6"
            >
              Our team specializes in elastomeric, silicone, and reflective roof coatings for all types of commercial buildings. We're dedicated to providing eco-friendly, energy-efficient solutions that save our clients money while protecting their properties from Houston's harsh weather conditions.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-2 gap-4 mb-6"
            >
              <div className="flex items-start space-x-2">
                <div className="rounded-full bg-accent/10 p-1 mt-1">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-heading font-bold text-slate-700 dark:text-white">Energy Efficient</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Reduce cooling costs</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-2">
                <div className="rounded-full bg-accent/10 p-1 mt-1">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-heading font-bold text-slate-700 dark:text-white">Extends Roof Life</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Up to 15+ years</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-2">
                <div className="rounded-full bg-accent/10 p-1 mt-1">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-heading font-bold text-slate-700 dark:text-white">Weather Resistant</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Waterproof protection</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-2">
                <div className="rounded-full bg-accent/10 p-1 mt-1">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-heading font-bold text-slate-700 dark:text-white">Environmentally Safe</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Low-VOC options</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <a href="#contact" className="inline-block bg-primary hover:bg-primary-light text-white py-3 px-6 rounded-lg transition-colors shadow-lg mt-2">
                Get a Free Estimate
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}