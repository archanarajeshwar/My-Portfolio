import { useState } from "react";

interface CardProps {
  title: string;
  description: string;
  technologies: string[];
}

const Card: React.FC<CardProps> = ({ title, description, technologies }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-[320px] h-[320px] perspective-1000 transition-transform duration-500 "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glowing Gradient Background */}
      <div
        className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-violet-700 rounded-lg blur opacity-30 
                   group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
      ></div>

      {/* 3D Glass Card */}
      <div
        className={`relative px-6 py-6 bg-white/10 backdrop-blur-xl border-2 border-indigo-400
                    ring-1 ring-gray-900/10 rounded-lg leading-none flex flex-col justify-between h-full shadow-lg 
                    transform-gpu transition-all duration-500 ease-out
                    ${
                      isHovered
                        ? "rotate-x-3 rotate-y-6 scale-105 shadow-xl"
                        : "scale-100"
                    }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Shine Effect */}
        <div
          className={`absolute inset-0 bg-white/5 rounded-lg transition-opacity duration-700 
                      ${isHovered ? "opacity-40" : "opacity-20"}`}
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 100%)",
          }}
        ></div>

        {/* Title */}
        <h3 className="font-bold text-xl text-white z-10">{title}</h3>

        {/* Description */}
        <p className="text-gray-300 text-base flex-grow z-10">{description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 z-10">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="inline-block bg-indigo-300 rounded-full px-3 py-1 
                        text-sm font-semibold text-indigo-950 shadow-sm"
            >
              #{tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
