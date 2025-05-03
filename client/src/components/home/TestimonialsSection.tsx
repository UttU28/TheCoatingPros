import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Sample testimonial data (replaced with real client testimonials in production)
const testimonials = [
  {
    id: 1,
    text: "The Coating Pros did an exceptional job on our warehouse roof. Their team was professional, punctual, and very knowledgeable. The reflective coating they applied has already reduced our cooling costs by 22% this summer. Highly recommend their services!",
    author: "Michael Thompson",
    position: "Facilities Manager",
    company: "Houston Distribution Center",
    rating: 5,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256"
  },
  {
    id: 2,
    text: "We've used The Coating Pros for multiple commercial properties in our portfolio. Their attention to detail and quality of work is outstanding. The coatings have extended our roof lifespans significantly, saving us from costly replacements.",
    author: "Sarah Rodriguez",
    position: "Property Manager",
    company: "Gulf Coast Real Estate Group",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256"
  },
  {
    id: 3,
    text: "After experiencing leaks during heavy rain, we contacted The Coating Pros. Their waterproofing solution was applied quickly and has completely eliminated our issues. Their team was thorough in explaining the process and benefits.",
    author: "Robert Chen",
    position: "Operations Director",
    company: "Bayou Manufacturing Co.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256"
  }
];

export default function TestimonialsSection() {
  const { ref, inView } = useScrollAnimation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  // Auto rotate testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);
  
  // Pause auto rotation when hovering
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);
  
  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after user interaction
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };
  
  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-800 dark:text-white mb-3">
            What Our Clients Say
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto italic">
            Don't just take our word for it...
          </p>
        </motion.div>
        
        <div 
          ref={ref}
          className="max-w-5xl mx-auto relative px-4"
        >
          <div className="absolute inset-y-0 left-0 md:flex items-center justify-center -ml-4 hidden">
            <button 
              onClick={() => goToTestimonial((activeIndex - 1 + testimonials.length) % testimonials.length)}
              className="bg-white dark:bg-slate-700 rounded-full p-2 shadow-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors z-10"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-600 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="p-6 md:p-10"
              >
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                      <img 
                        src={testimonials[activeIndex].image} 
                        alt={testimonials[activeIndex].author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-5 h-5 ${i < testimonials[activeIndex].rating ? 'text-yellow-400' : 'text-gray-300'} mr-1`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    
                    <blockquote className="text-slate-700 dark:text-slate-200 text-lg font-light italic mb-4 relative">
                      <svg className="absolute -top-3 -left-6 h-12 w-12 text-primary/20 dark:text-primary/10" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M10 8c-3.9 0-7 3.1-7 7s3.1 7 7 7c3.9 0 7-3.1 7-7s-3.1-7-7-7zm0 12c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm0-8.5c-.6 0-1.1.5-1.1 1.1 0 .6.5 1.1 1.1 1.1s1.1-.5 1.1-1.1c0-.6-.5-1.1-1.1-1.1zm5.5 19.9c-1.2 0-2.1.9-2.1 2.1 0 1.2.9 2.1 2.1 2.1 1.2 0 2.1-.9 2.1-2.1 0-1.2-.9-2.1-2.1-2.1zm-11 0c-1.2 0-2.1.9-2.1 2.1 0 1.2.9 2.1 2.1 2.1 1.2 0 2.1-.9 2.1-2.1 0-1.2-.9-2.1-2.1-2.1zm12.1 5.3c-.6 0-1.1.5-1.1 1.1 0 .6.5 1.1 1.1 1.1.6 0 1.1-.5 1.1-1.1 0-.6-.5-1.1-1.1-1.1zm-11 0c-.6 0-1.1.5-1.1 1.1 0 .6.5 1.1 1.1 1.1.6 0 1.1-.5 1.1-1.1 0-.6-.5-1.1-1.1-1.1z"></path>
                      </svg>
                      "{testimonials[activeIndex].text}"
                    </blockquote>
                    
                    <div className="text-right">
                      <p className="text-primary dark:text-primary-light font-bold">{testimonials[activeIndex].author}</p>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        {testimonials[activeIndex].position}, {testimonials[activeIndex].company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            <div className="bg-slate-50 dark:bg-slate-700 px-6 py-3 flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activeIndex === index ? 'bg-primary w-8' : 'bg-slate-300 dark:bg-slate-500'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <div className="absolute inset-y-0 right-0 md:flex items-center justify-center -mr-4 hidden">
            <button 
              onClick={() => goToTestimonial((activeIndex + 1) % testimonials.length)}
              className="bg-white dark:bg-slate-700 rounded-full p-2 shadow-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors z-10"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-600 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Buttons */}
        <div className="flex justify-center space-x-4 mt-6 md:hidden">
          <button 
            onClick={() => goToTestimonial((activeIndex - 1 + testimonials.length) % testimonials.length)}
            className="bg-white dark:bg-slate-700 rounded-full p-3 shadow-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-600 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={() => goToTestimonial((activeIndex + 1) % testimonials.length)}
            className="bg-white dark:bg-slate-700 rounded-full p-3 shadow-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-600 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}