import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 text-white py-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://18efabd6cf.clvaw-cdnwnd.com/4fc45f95ccb478fd517a21f0b40b9877/200000042-6774f67750/Final%20Pass%20Clearpoint.webp?ph=18efabd6cf"
          alt="Commercial Roof Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/70"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 leading-tight">
              <span className="text-accent">Professional</span> Commercial Roof
              Coating Solutions
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl">
              Extend the life of your commercial roof with our premium coating
              solutions. Serving Houston and Southeast Texas with quality and
              reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="btn bg-accent hover:bg-accent-light text-white font-bold py-3 px-6 rounded-md inline-flex items-center justify-center transition-colors animate-btn cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Get a Free Quote
              </ScrollLink>
              <ScrollLink
                to="services"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="btn bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold py-3 px-6 rounded-md inline-flex items-center justify-center transition-colors animate-btn cursor-pointer"
              >
                Explore Our Services
              </ScrollLink>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-full min-h-[300px] md:min-h-[400px] lg:min-h-[500px] rounded-lg overflow-hidden shadow-2xl"
          >
            <img
              src="https://18efabd6cf.clvaw-cdnwnd.com/4fc45f95ccb478fd517a21f0b40b9877/200000134-667d2667d4/20241127_161330.webp?ph=18efabd6cf"
              alt="Commercial Roof Coating"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <p className="text-xl font-bold mb-1">
                  Energy-Efficient Solutions
                </p>
                <p className="text-sm">
                  Reduce cooling costs by up to 30% with our reflective coatings
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator - centered for all screen sizes */}
        <div className="absolute left-1/2 top-[80%] transform -translate-x-1/2 z-20 w-full flex justify-center">
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <p className="text-sm text-gray-300 mb-2">Scroll to learn more</p>
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center pt-1"
            >
              <motion.div
                className="w-1 h-2 bg-white rounded-full"
                animate={{
                  opacity: [0.2, 1, 0.2],
                  y: [0, 4, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
