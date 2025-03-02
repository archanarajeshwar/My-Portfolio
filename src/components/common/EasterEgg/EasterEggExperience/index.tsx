import { useState } from "react";
import { useEasterEgg } from "../../EasterEgg/EasterEggContext";
import { motion, AnimatePresence } from "framer-motion";
import { FiBox } from "react-icons/fi"; // Using a minimal black icon

const EasterEggExperience = () => {
  const [showHint, setShowHint] = useState(false);
  const { findEgg, foundEggs } = useEasterEgg();
  const [hovered, setHovered] = useState(false);


  

  return (
    <div className="relative flex items-center justify-center mt-6">
      {/* Hidden Black Icon */}
      <FiBox
        className="w-6 h-6 text-slate-700 cursor-pointer transition-opacity 
                   duration-300 opacity-10 hover:opacity-80"
                   onMouseEnter={() => {
                    setShowHint(true)
                    if (!hovered && !foundEggs.has("experience")) {
                      findEgg("experience"); // Only counts once
                      setHovered(true);
                      
                    }
                  }}
        onMouseLeave={() => setShowHint(false)}
      />

      {/* Fun Fact Popup */}
      <AnimatePresence>
        {showHint && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute bottom-10 bg-indigo-400/10 backdrop-blur-md 
                       text-white px-4 py-2 rounded-md shadow-lg w-64 text-sm 
                       border border-white/20"
          >
            🛠️ <span className="font-bold">Observation Leads to Ideas </span>  
            I’ve always learned a lot by observing how things work and trying them myself.  
            <p className="text-indigo-300 font-semibold mt-2">
              🔍 <span className="italic">Hint:</span> Some ideas turn into <span className="font-semibold">projects</span>—take a look!
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EasterEggExperience;
