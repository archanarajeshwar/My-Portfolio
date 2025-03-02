import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EasterEggHint = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // Hide after 5 seconds

    return () => clearTimeout(timer); // Cleanup
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed top-20 left-1/2 transform -translate-x-1/2 
                     bg-indigo-400/10 backdrop-blur-mds text-white px-6 py-4 rounded-lg shadow-lg 
                     text-center w-80 z-50 border border-white/20"
        >
          <h3 className="text-lg font-semibold">🔍 Hidden Secrets Await!</h3>
          <p className="text-sm text-indigo-200 mt-2">
            There are <span className="font-bold">3 hidden Easter eggs</span> in this portfolio. Can you find them all? 
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EasterEggHint;
