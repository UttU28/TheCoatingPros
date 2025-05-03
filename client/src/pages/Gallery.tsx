import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

export default function Gallery() {
  return (
    <>
      <Helmet>
        <title>Project Gallery | The Coating Pros</title>
        <meta name="description" content="Browse our gallery of completed commercial roof coating projects across Houston and Southeast Texas." />
      </Helmet>
      
      <div className="py-16 md:py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary dark:text-white mb-4">
              Project Gallery
            </h1>
            <p className="max-w-3xl mx-auto text-slate-600 dark:text-slate-400">
              Coming soon! We're working on this page.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}
