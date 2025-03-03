import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiPython,
  SiTailwindcss,
  SiFastapi,
  SiFlask,
  SiMongodb,
  SiMysql,
  SiGraphql,
} from "react-icons/si";
import InstagramPost from "../common/InstagramPost";
import OrbitImg from "../../assets/OrbitImg.png";
import EasterEgg from "../common/EasterEgg/EasterEggAbout";

const techs = [
  {
    name: "React.js",
    icon: <RiReactjsLine className="text-5xl text-cyan-400" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-5xl text-blue-400" />,
  },
  { name: "Python", icon: <SiPython className="text-5xl text-yellow-400" /> },
  { name: "FastAPI", icon: <SiFastapi className="text-5xl text-green-400" /> },
  { name: "Flask", icon: <SiFlask className="text-5xl text-gray-400" /> },
  { name: "GraphQL", icon: <SiGraphql className="text-5xl text-pink-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-5xl text-green-600" /> },
  { name: "MySQL", icon: <SiMysql className="text-5xl text-blue-500" /> },
];

const About = () => {
  return (
    <section
      id="about"
      className="px-6 sm:px-12 py-16 rounded-4xl bg-gradient-to-b from-blue-800 to-black max-w-6xl mx-auto"
    >
      {/* Section Title */}
      <motion.div
        className="flex items-center justify-center gap-4 mb-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { delay: 0.2, duration: 0.8, ease: "easeOut" },
          },
        }}
      >
        <motion.img
          src={OrbitImg}
          alt="Decorative Left"
          className="w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24"
        />
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-white">
          About Me
        </h2>
        <motion.img
          src={OrbitImg}
          alt="Decorative Right"
          className="w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24"
        />
      </motion.div>

      {/* About Me Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        {/* Left - Profile Image */}
        <motion.div
          className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 flex justify-center"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 30, delay: 0.4 }}
          whileHover={{ scale: 1.05, rotate: 3 }}
        >
          <InstagramPost />
        </motion.div>

        {/* Right - About Text */}
        <motion.div
          className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 text-white text-base sm:text-lg leading-relaxed"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 30, delay: 0.6 }}
        >
          <p>
            I’ve always been drawn to{" "}
            <b>patterns, insights, and problem-solving</b>, which naturally led
            me to <b>backend development, data modeling, and solution design</b>
            . Over time, I realized that tech isn’t just about writing code—it’s
            about creating well-structured systems and{" "}
            <b>meaningful user experiences</b>.
          </p>
          <p className="mt-4">
            With experience working on{" "}
            <b>scalable backend solutions, UI/UX, and database architectures</b>
            , I enjoy blending <b>creativity with logic</b> to design{" "}
            <b>efficient, user-centric, and innovative solutions</b>. Whether
            it's structuring data models, optimizing system design, or refining
            UI/UX, I love bringing ideas to life.
          </p>
          <p className="mt-4">
            <b>Driven by innovation and adaptability</b>, I’m always exploring
            new technologies, refining my skills, and building{" "}
            <b>impactful solutions</b> that bridge{" "}
            <b>design and functionality</b>.
          </p>
        </motion.div>
      </div>

      {/* Technologies Section */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <h3 className="text-2xl font-semibold text-white mb-6">
          Technologies I Work With
        </h3>

        {/* Technology Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-white text-center mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          {techs.map((tech, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: "spring", stiffness: 80 }}
            >
              {tech.icon}
              <p className="text-lg font-medium mt-2">{tech.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <div className=" lg:absolute md:absolute md:ml-7 md:bottom-0.7/2 lg:bottom-0.7/2 lg:ml-7 sm:flex sm:justify-center">
        <EasterEgg />
      </div>
    </section>
  );
};

export default About;
