import { EXPERIENCES } from "../common/data";
import OrbitImg from "../../assets/OrbitImg.png";
import { motion } from "framer-motion";
import EasterEggExperience from "../common/EasterEgg/EasterEggExperience";

const Experience = () => {
  return (
    <section
      id="experience"
      className="p-10 md:p-18 bg-black 
                    rounded-t-3xl md:rounded-t-full 
                    backdrop-blur-lg transition-all duration-300"
    >
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex items-center justify-center gap-4 md:gap-6"
      >
        <motion.div className="w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24">
          <img
            src={OrbitImg}
            alt="Orbit"
            className="w-full h-full object-contain"
          />
        </motion.div>

        <h2 className="text-center text-3xl md:text-4xl font-bold text-white tracking-wide">
          Experience
        </h2>

        <motion.div className="w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24">
          <img
            src={OrbitImg}
            alt="Orbit"
            className="w-full h-full object-contain"
          />
        </motion.div>
      </motion.div>

      {/* Timeline Container */}
      <div className="relative flex flex-col items-center w-full md:w-3/4 lg:w-1/2 mx-auto mt-12 gap-5">
        {/* Timeline Line (Only on Tablet & Laptop) */}
        <div className="absolute w-[5px] bg-indigo-500 top-0 bottom-0 left-1/2 transform -translate-x-1/2 hidden md:block"></div>

        {/* Experience Cards with Sequential Motion Effect */}
        {EXPERIENCES.map((experience, index) => (
          <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ 
            opacity: 0.8, 
            y: 0,
          }}
          viewport={{ 
            once: true,
            margin: "0px 0px -200px 0px" 
          }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 20,
            mass: 1,
            delay: index * 0.15
          }}
            className={`relative w-full max-w-xs md:max-w-md lg:w-[350px] p-5 md:p-6 
                        bg-indigo-500/20 backdrop-blur-lg border border-indigo-400 
                        rounded-lg shadow-lg transition-all
                        ${index % 2 === 0 ? "md:self-start" : "md:self-end"}
                        flex flex-col items-center md:items-start text-center md:text-left`}
          >
            {/* Experience Year */}
            <span className="block text-xs font-semibold text-gray-400 mb-1">
              {experience.year}
            </span>

            {/* Experience Role & Company */}
            <h3 className="text-lg font-bold text-white">{experience.role}</h3>
            <p className="text-sm text-stone-400">{experience.company}</p>

            {/* Description */}
            <p className="text-gray-300 text-sm mt-2 leading-snug">
              {experience.description}
            </p>

            {/* Technologies */}
            <div className="mt-5 flex flex-wrap gap-1.5 justify-center">
              {experience.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-white/20 backdrop-blur-sm border border-cyan-300/30 rounded-full 
                            px-2 py-1 text-xs font-semibold text-white shadow-sm"
                >
                  #{tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center">
      <EasterEggExperience/>
      </div>
    </section>
  );
};

export default Experience;
