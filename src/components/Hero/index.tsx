import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { HERO_CONTENT } from "../common/data";
import MainShape from "../../assets/MainShape.png";
import EasterEggHint from "../common/EasterEgg/EasterEggHint"
import EasterEggHintArrow from "../common/EasterEgg/EasterEggHero"

const Hero = () => {

  return (
    <>
    <EasterEggHint/>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center min-h-screen relative px-20">
        {/* Left Side (Text Section) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:p-10 text-center lg:text-left space-y-4"
        >
          <div className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold gap-2">
            <motion.div
              initial={{ opacity: 0, y: -7 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            >
              <span className="pb-1 text-transparent bg-clip-text bg-gradient-to-b from-white to-indigo-500">
                Hello,
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -7 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            >
              <span className="pb-1 text-transparent bg-clip-text bg-gradient-to-b from-white to-indigo-500">
                I'm Archana Rajeshwar
              </span>
            </motion.div>
          </div>

          {/* Typing Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.7 }}
            className="lg:text-2xl md:text-2xl sm:text-1xl  text-indigo-200 font-semibold mt-2"
          >
            <TypeAnimation
              sequence={[
                "Software Developer",
                  1000,
                  "Tech Explorer",
                  1000,
                  "Creative Thinker",
                  1000,
                  "Curious Innovator",
                  1000,
                  "Problem Solver",
                  1000,
              ]}
              wrapper="span"
              speed={60}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
          </motion.div>

         

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.9 }}
            className="text-sm text-white font-light mt-3"
          >
            {HERO_CONTENT}
          </motion.div>
        </motion.div>

        {/* Right Side (Floating Image Section) */}
        <motion.div
          animate={{
            y: [0, -10, 0, 0, 0], // Floating up & down in a loop
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className=" h-1/2 flex justify-center lg:justify-start w-full"
        >
          <img
            src={MainShape}
            className="w-3/4 sm:w-2/3 md:w-2/3 lg:w-[90%] xl:w-[90%] max-w-2xl"
            alt="Logo"
          />
        </motion.div>

        <motion.div
          animate={{
            y: [0, -10, 0, 0, 0], // Floating up & down in a loop
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeOut",
          }}
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
      <EasterEggHintArrow />
      {/* Rest of your Hero section */}
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
