import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function AboutSection() {
  const { ref: ref1, inView: inView1 } = useScrollAnimation();
  const { ref: ref2, inView: inView2 } = useScrollAnimation(0.2);
  
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

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div 
            ref={ref1}
            initial={{ opacity: 0, x: -50 }}
            animate={inView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            <h3 className="text-2xl font-heading font-semibold text-slate-800 dark:text-white">About Us</h3>
            <p>The Coating Pros is a locally owned, Houston-based company specializing in high-quality commercial roof coating services across Houston and Southeast Texas. Backed by a team of certified roofing experts, we provide end-to-end solutions tailored to protect and extend the life of your roof.</p>
            <p>What sets us apart? It’s our personalized approach. We understand that every business has unique roofing needs, so we take the time to assess each project and deliver customized, cost-effective solutions. From traditional materials to advanced systems like EPDM and TPO, we guide you through the best options to suit your property and budget.</p>
            <p>At The Coating Pros, we take pride in our attention to detail and commitment to excellent customer service. From consultation to completion, we handle everything—so you don’t have to worry about a thing.</p>
            <p className="text-xl font-semibold italic text-primary dark:text-primary-light">
              The Coating Pros — "We’ve got you covered!"
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="font-semibold text-lg">20+ Years Experience</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Decades of proven expertise</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <div>
                  <h4 className="font-semibold text-lg">Fully Licensed & Insured</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Your peace of mind guaranteed</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <div>
                  <h4 className="font-semibold text-lg">Industry-Leading Warranty</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Long-term protection</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <div>
                  <h4 className="font-semibold text-lg">Free Inspections & Quotes</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">No hidden costs</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            ref={ref2}
            initial={{ opacity: 0, x: 50 }}
            animate={inView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            <h3 className="text-2xl font-heading font-semibold text-slate-800 dark:text-white">What Sets Us Apart</h3>
            <p>
              What sets the Coating Pros apart from other companies in the industry? It is our approach. 
              We understand that every business has unique needs and requirements when it comes to their roof. 
              That's why we take the time to assess each project thoroughly and develop a customized solution 
              that fits our client's specific needs and budget. 
            </p>
            <p>
              When it comes to commercial roofing, there are countless options available in the market. 
              From traditional materials like asphalt and metal to newer options like EPDM and TPO, 
              it can be overwhelming for business owners to choose the best solution for their roof. 
              However, at The Coating Pros, exceptional customer service is our priority. So, as your 
              partner we will ensure that we provide best solution to fit your exact needs. We handle 
              every aspect of the roofing process from start to finish.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}