import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useEasterEgg } from "../../EasterEgg/EasterEggContext";
import { MoveDown } from 'lucide-react';

const EasterEggHintArrow = () => {
  const [showHint, setShowHint] = useState(false);
  const { findEgg, foundEggs } = useEasterEgg();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="text-indigo-500 text-4xl md:text-5xl font-extrabold cursor-pointer 
        bg-white/10 backdrop-blur-lg rounded-lg p-2 md:p-3 m-2 
        hover:text-indigo-600 hover:bg-white/20 transition duration-300 relative"
      onMouseEnter={() => {
        setShowHint(true);
        if (!hovered && !foundEggs.has("hero")) {
          findEgg("hero"); // Only counts once
          setHovered(true);
        }
      }}
      onMouseLeave={() => setShowHint(false)}
    >
      {/* Animated Arrow */}
      <motion.span
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeIn" }}
      >
       <MoveDown strokeWidth={3} height={30}/>
      </motion.span>

      {/* Popup Hint */}
      <AnimatePresence>
        {showHint && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2 
              bg-indigo-900 text-white px-3 py-2 rounded-md shadow-lg 
              w-72 md:w-86 text-xs md:text-sm border border-white/20"
          >
            💡
            <p className="text-xs md:text-sm text-white font-light mt-2">
              <span className="font-semibold text-white">Fun Fact: </span>
              I’m always curious about <span className="italic">why</span> things work and love diving deep into details!
            </p>
            <p className="text-xs text-indigo-300 mt-1">
              🔍 <span className="italic">Hint:</span> Sometimes curiosity leads to unexpected discoveries. Click below to explore!
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EasterEggHintArrow;