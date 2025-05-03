
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function AboutSection() {
  const { ref: ref1, inView: inView1 } = useScrollAnimation();

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-800 dark:text-white mb-4">About Us</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div 
            ref={ref1}
            initial={{ opacity: 0, y: 50 }}
            animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg dark:prose-invert max-w-none text-center mb-12"
          >
            <p>The Coating Pros is a locally owned, Houston-based company specializing in high-quality commercial roof coating services across Houston and Southeast Texas. Backed by a team of certified roofing experts, we provide end-to-end solutions tailored to protect and extend the life of your roof.</p>
            <p>At The Coating Pros, we take pride in our attention to detail and commitment to excellent customer service. From consultation to completion, we handle everything—so you don't have to worry about a thing.</p>
            <p className="text-xl font-semibold italic text-primary dark:text-primary-light">
              The Coating Pros — "We've got you covered!"
            </p>
          </motion.div>

          <div className="grid gap-4">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="ml-4">
                <h4 className="font-semibold text-xl text-slate-800 dark:text-white">20+ Years Experience</h4>
                <p className="text-slate-600 dark:text-slate-400">Decades of proven expertise</p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div className="ml-4">
                <h4 className="font-semibold text-xl text-slate-800 dark:text-white">Fully Licensed & Insured</h4>
                <p className="text-slate-600 dark:text-slate-400">Your peace of mind guaranteed</p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <div className="ml-4">
                <h4 className="font-semibold text-xl text-slate-800 dark:text-white">Industry-Leading Warranty</h4>
                <p className="text-slate-600 dark:text-slate-400">Long-term protection</p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <div className="ml-4">
                <h4 className="font-semibold text-xl text-slate-800 dark:text-white">Free Inspections & Quotes</h4>
                <p className="text-slate-600 dark:text-slate-400">No hidden costs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
