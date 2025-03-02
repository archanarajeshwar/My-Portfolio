import { PROJECTS } from "../common/data";
import Card from "../common/Card";
import OrbitImg from "../../assets/OrbitImg.png";
import { motion } from "framer-motion"; // Import Framer Motion
import EasterEggProject from "../common/EasterEgg/EasterEggProject";

interface Project {
  title: string;
  description: string;
  technologies: string[];
}

// Animation Variants for Cards
const cardVariants = {
  hidden: { opacity: 0, y: 20 }, // Start slightly below and invisible
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: index * 0.2 }, // Delays each card
  }),
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="pd-10 my-10">
      {/* Section Title */}
      <div className="flex items-center justify-center gap-4 md:gap-6 mb-16">
        <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 animate-spin-slow">
          <img
            src={OrbitImg}
            alt="Orbit"
            className="w-full h-full object-contain"
          />
        </div>

        <h2 className="text-center text-3xl md:text-4xl font-bold text-white tracking-wide">
          Projects
        </h2>

        <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 animate-spin-slow">
          <img
            src={OrbitImg}
            alt="Orbit"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Project Cards with Animation */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 p-10"
        initial="hidden"
        animate="visible"
      >
        {PROJECTS.map((project: Project, index: number) => (
          <motion.div key={index} variants={cardVariants} custom={index}>
            <Card
              title={project.title}
              description={project.description}
              technologies={project.technologies}
            />
          </motion.div>
        ))}
      </motion.div>
      <div className="flex justify-center ">
        <EasterEggProject />
      </div>
    </section>
  );
};

export default Projects;
