import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SplashScreenProps {
  onFinish: () => void;
}

const SplashScreen = ({ onFinish }: SplashScreenProps) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
  // Get theme from localStorage or system preference on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(savedTheme);
  }, []);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3000); // 3 seconds for the splash screen

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        className={`fixed inset-0 flex flex-col items-center justify-center ${
          theme === 'dark' 
            ? 'bg-gradient-to-b from-slate-900 to-slate-800' 
            : 'bg-gradient-to-b from-blue-50 to-slate-100'
        } z-50`}
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="w-32 h-32 mb-4"
        >
          <img 
            src="https://silver-imaginative-beetle-350.mypinata.cloud/ipfs/bafkreibikyk73phdlhho755ltj35an5uvs2oj3lgn4gcy2n5sddodrasjy"
            alt="The Coating Pros TX Logo" 
            className={`w-full h-full object-contain ${theme === 'dark' ? 'invert' : ''}`}
          />
        </motion.div>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className={`text-3xl md:text-4xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-slate-800'
          } text-center`}
        >
          The Coating Pros TX
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className={`text-lg mt-1 ${
            theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
          } text-center`}
        >
          Houston's Roof Coating Specialists
        </motion.p>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="h-1 bg-gradient-to-r from-blue-500 to-teal-500 w-48 mt-4"
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default SplashScreen; 