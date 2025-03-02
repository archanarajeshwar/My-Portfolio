import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useEasterEgg } from "../EasterEggContext"; // Import the context
import { Settings } from 'lucide-react';

const EasterEggProject = () => {
  const [showHint, setShowHint] = useState(false);
  const { findEgg, foundEggs } = useEasterEgg();
  const [hovered, setHovered] = useState(false);
 // Use context

 
  return (
    <div className="relative flex flex-col items-center">
      {/* Hidden Easter Egg Icon */}
      <motion.div
        className="cursor-pointer text-gray-600 hover:text-white transition duration-300"
        onMouseEnter={() => {
            setShowHint(true)
            if (!hovered && !foundEggs.has("projects")) {
              findEgg("projects"); // Only counts once
              setHovered(true);
              
            }
          }}
        onMouseLeave={() => setShowHint(false)}
      >
        <Settings className="text-indigo-500"/>
      </motion.div>

      {/* Easter Egg Hint Popup */}
      <AnimatePresence>
        {showHint && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute top-8 bg-indigo-900 text-white px-4 py-2 rounded-md shadow-lg w-80 text-center border border-white/20"
          >
            <h3 className="text-lg font-semibold">📌 Ideas Only Matter When You Build Them</h3>
            <p className="text-sm text-indigo-300 mt-2">
              "Curiosity led me here, observation taught me, but building is where everything comes together."
            </p>
           
              <p className="text-xs text-indigo-400 mt-2">
                🎁 <span className="italic">Final Hint:</span> You've uncovered all hidden Easter eggs!  
                Now, something special awaits at the very end...
              </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EasterEggProject;
