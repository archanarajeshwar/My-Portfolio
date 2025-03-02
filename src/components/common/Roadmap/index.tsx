interface ExperienceItem {
  year: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
}

const ExperienceRoadmap: React.FC<{ experiences: ExperienceItem[] }> = ({
  experiences,
}) => {
  return (
    <div className="relative w-full flex flex-wrap justify-center items-center px-5 py-10">
      {/* Roadmap Line */}
      <div className="absolute top-1/2 left-0 right-0 h-1 bg-indigo-400"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-6xl relative z-10">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`relative w-80 p-5 bg-indigo-500/20 backdrop-blur-lg border-2 border-indigo-400 
                          rounded-lg shadow-lg hover:-translate-y-2 transition duration-300
                          ${
                            index % 2 === 0
                              ? "self-start mt-10"
                              : "self-end mb-10"
                          }`}
          >
            {/* Connector Line Circle */}
            <div
              className="absolute left-1/2 -translate-x-1/2 top-full w-4 h-4 bg-indigo-400 border-2 border-white 
                           rounded-full"
            ></div>

            {/* Year */}
            <span className="block text-xs font-semibold text-gray-400 text-center mb-2">
              {exp.year}
            </span>

            {/* Experience Details */}
            <h3 className="text-lg font-bold text-white text-center">
              {exp.role}
            </h3>
            <p className="text-sm text-stone-400 text-center">{exp.company}</p>
            <p className="text-gray-300 text-sm mt-2 text-center">
              {exp.description}
            </p>

            {/* Technologies */}
            <div className="mt-3 flex flex-wrap gap-2 justify-center">
              {exp.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-white/20 backdrop-blur-sm border border-cyan-300/30 rounded-full 
                              px-3 py-1 text-xs font-semibold text-white shadow-sm"
                >
                  #{tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceRoadmap;
