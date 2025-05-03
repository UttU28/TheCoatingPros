import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ContactTeaser() {
  const { ref, inView } = useScrollAnimation();
  
  return (
    <section ref={ref} className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Extend Your Roof's Life and Reduce Energy Costs?
            </h2>
            
            <p className="text-lg text-white/80 mb-6">
              Contact The Coating Pros today for a no-obligation consultation and free estimate on your commercial roof coating project. Our team of experts is ready to help you find the perfect solution for your building's needs.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="rounded-full bg-white/10 p-2 mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-lg">Call Us</p>
                  <p className="text-white/80">(713) 555-0123</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="rounded-full bg-white/10 p-2 mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-lg">Email Us</p>
                  <p className="text-white/80">info@thecoatingpros.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="rounded-full bg-white/10 p-2 mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-lg">Visit Us</p>
                  <p className="text-white/80">5678 Business Park Dr, Houston, TX 77002</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-lg shadow-xl"
          >
            <h3 className="text-2xl font-heading font-bold text-slate-800 mb-6">Get a Free Quote</h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="John Smith"
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    placeholder="(713) 555-0123"
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <div>
                <label htmlFor="buildingType" className="block text-sm font-medium text-slate-700 mb-1">Building Type</label>
                <select 
                  id="buildingType"
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select Building Type</option>
                  <option value="commercial">Commercial Office</option>
                  <option value="industrial">Industrial Warehouse</option>
                  <option value="retail">Retail Store</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Project Details</label>
                <textarea 
                  id="message" 
                  rows={4}
                  placeholder="Tell us about your project needs"
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>
              
              <div>
                <button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-light text-white font-bold py-3 px-6 rounded-md transition-colors shadow-lg"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}