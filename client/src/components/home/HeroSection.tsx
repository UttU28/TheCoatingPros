import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function HeroSection() {
  const { ref, inView } = useScrollAnimation();

  return (
    <section 
      className="relative bg-gradient-to-r from-primary to-primary-light dark:from-slate-800 dark:to-slate-900 text-white overflow-hidden"
      ref={ref}
    >
      <div 
        className="absolute inset-0 opacity-20 dark:opacity-10 bg-cover bg-center" 
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')` }}
      ></div>
      
      <div className="container-custom py-24 md:py-32 relative">
        <div className="max-w-3xl">
          <motion.h1 
            className="font-heading text-3xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Expert Roof Coating Solutions
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl mb-8 opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            At The Coating Pros, we specialize in providing top-quality commercial roof coating services for businesses and organizations in Houston and Southeast Texas. Our team is fully certified and equipped to handle all aspects of the coating process, making us a one-stop-shop for all your coating needs. Trust us to protect your building and save you money in the long run with our durable and cost-effective solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/contact" className="animate-btn inline-block bg-accent hover:bg-accent-dark text-white font-semibold py-3 px-8 rounded-md shadow-lg transition-all duration-300">
              Get a Free Estimate
            </Link>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-slate-50 dark:from-slate-900 to-transparent"></div>
    </section>
  );
}
