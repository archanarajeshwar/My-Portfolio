import { useEasterEgg } from "../common/EasterEgg/EasterEggContext";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SpotifyPlaylist from "../common/SpotifyPlaylist";
import GiftImg from "../../assets/GiftImg.png";

const RewardSection = () => {
  const { count } = useEasterEgg();
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showReward, setShowReward] = useState(false);

  useEffect(() => {
    console.log(count);
    if (count === 3) {
      setIsUnlocked(true);
    }
  }, [count]);

  if (!isUnlocked) return null;

  return (
    <div className="flex flex-col items-center justify-center mt-16 px-4">
      <h2 className="text-2xl md:text-xl sm:text-lg font-bold text-white text-center">
        🎉 You Did It!
      </h2>
      <p className="text-md md:text-sm text-gray-300 mt-2 text-center">
        You’ve discovered all the Easter eggs! Click the gift box to reveal your surprise.
      </p>

      {/* Animated Gift Box */}
      <motion.div
        className="mt-6 cursor-pointer"
        whileHover={{ scale: 1.2, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowReward(true)}
      >
        <img
          src={GiftImg}
          className="h-40 w-40 md:h-32 md:w-32 sm:h-24 sm:w-24 animate-bounce"
          alt="Gift Box"
        />
      </motion.div>

      {/* 🎁 Reward Modal */}
      <AnimatePresence>
        {showReward && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md px-4"
          >
            <div className="bg-[#1e1e2e] text-white p-6 rounded-xl shadow-lg w-96 md:w-80 sm:w-72 text-center border border-indigo-500">
              <h3 className="text-lg md:text-md font-bold">🎁 A Special Note for You!</h3>

              <p className="text-sm md:text-xs text-gray-400 mt-1">
                You have the curiosity to explore, the patience to discover, and the passion to keep going.  
                Keep building, keep learning, and keep surprising yourself! 🚀✨
              </p>

              <p className="text-sm md:text-xs text-gray-400 mt-1">
                Enjoy coding with this special playlist! 🎶
              </p>

              {/* Spotify Playlist Embed */}
              <SpotifyPlaylist />

              {/* Close Button */}
              <button
                className="mt-4 px-4 py-2 text-sm bg-indigo-600 rounded-lg hover:bg-indigo-700 transition"
                onClick={() => setShowReward(false)}
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RewardSection;
