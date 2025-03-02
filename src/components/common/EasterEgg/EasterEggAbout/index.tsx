import { useState } from "react";
import { useEasterEgg } from "../../EasterEgg/EasterEggContext";
import EasterEggImg from "../../../../assets/EasterEggImg.png";

const EasterEggAbout = () => {
  const [showNote, setShowNote] = useState(false);
  const { findEgg, foundEggs } = useEasterEgg();
  const [hovered, setHovered] = useState(false);


  

  return (
    <div className="relative flex items-center justify-center mt-6">
      {/* Golden Egg Icon */}
      <img
        src={EasterEggImg}
        alt="Easter Egg"
        className="w-5 h-5 cursor-pointer transition-transform duration-300 hover:scale-110"
        onMouseEnter={() => {
          setShowNote(true)
          if (!hovered && !foundEggs.has("about")) {
            findEgg("about"); // Only counts once
            setHovered(true);
            
          }
        }}
        onMouseLeave={() => setShowNote(false)}
      />

      {/* Fun Fact Note */}
      {showNote && (
        <div className="absolute bottom-10 bg-indigo-400/10 backdrop-blur-md 
            text-white px-4 py-2 rounded-md shadow-lg w-56 text-sm border border-white/20">
          🚀 Fun Fact: I used to dislike web development, but now I enjoy
          designing and building interactive experiences!
          <p className="text-indigo-300 font-semibold mt-2">
            🔍 <span className="italic">Hint:</span> Sometimes, a journey moves forward by taking a step back. 
            Check where progress is measured!
          </p>
        </div>
      )}
    </div>
  );
};

export default EasterEggAbout;
