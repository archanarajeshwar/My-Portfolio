import { useState} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useEasterEgg } from "../../EasterEgg/EasterEggContext";

const EasterEggHintArrow = () => {
  const [showHint, setShowHint] = useState(false);
  const { findEgg, foundEggs } = useEasterEgg();
  const [hovered, setHovered] = useState(false);

  // Register this Easter egg only if it's not already found
 

  return (
    <div
      className="text-indigo-500 text-5xl font-extrabold cursor-pointer 
        bg-white/10 backdrop-blur-lg rounded-xl p-2 m-2 
        hover:text-indigo-600 hover:bg-white/10 transition duration-300 relative"
        onMouseEnter={() => {
            setShowHint(true)
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
        ⬇
      </motion.span>

      {/* Popup Hint */}
      <AnimatePresence>
        {showHint && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-10 bg-indigo-900 
              text-white px-4 py-2 rounded-md shadow-lg 
              w-86 text-sm border border-white/20"
          >
            💡
            <p className="text-sm text-white font-light mt-3">
              <span className="font-semibold text-white">Fun Fact: </span>
              I’m always curious about <span className="italic">why</span>{" "}
              things work and love diving deep into details!
            </p>
            <p className="text-xs text-indigo-300 mt-1">
              🔍 <span className="italic">Hint:</span> Sometimes curiosity
              leads to unexpected discoveries. Click below to explore!
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EasterEggHintArrow;
