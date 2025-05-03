import { Link } from "wouter";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ContactTeaser() {
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="contact" className="py-16 md:py-24 bg-white dark:bg-slate-900 transition-colors duration-300" ref={ref}>
      <div className="container-custom">
        <motion.div 
          className="bg-gradient-to-r from-primary to-primary-light dark:from-slate-800 dark:to-slate-700 rounded-xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="md:flex items-center">
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                Get in Touch
              </h2>
              <p className="text-white text-opacity-90 mb-8">
                Ready to protect your commercial property with professional roof coating services? Contact us today for a free consultation and estimate. We serve Houston and all of Southeast Texas.
              </p>
              <Link 
                href="/contact" 
                className="animate-btn inline-block bg-white hover:bg-slate-100 text-primary font-semibold py-3 px-8 rounded-md shadow-lg transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
            <div className="md:w-1/2 relative h-64 md:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1619364726002-dfd4fdaee79f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Contact our team" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
