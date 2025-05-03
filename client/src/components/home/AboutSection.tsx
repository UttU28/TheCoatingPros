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
            <p>
              We are Houston based and locally owned company, with a team of roofing experts that 
              specialize in providing top-quality commercial roof coating services for businesses 
              and organizations in Houston and Southeast Texas. We are fully certified and equipped 
              to handle all aspects of the coating process, making us a one-stop-shop for all your 
              coating needs.
            </p>
            <p>
              At The Coating Pros we prioritize attention to detail and value excellent customer service. 
              Simply put, we take pride in what we do. You can trust The Coating Pros to protect your roof...
            </p>
            <p className="text-xl font-semibold italic text-primary dark:text-primary-light">
              "We've got you covered!"
            </p>
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