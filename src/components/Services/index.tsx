import { SERVICES } from "../common/data";
import ServiceCard from "../common/ServiceCard";
import OrbitImg from "../../assets/OrbitImg.png";

const Services: React.FC = () => {
  return (
    <section id="services" className="p-5">
      {/* Section Header */}
      <div className="flex items-center justify-center gap-4 md:gap-6 mb-16">
        <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 animate-spin-slow">
          <img
            src={OrbitImg}
            alt="Orbit"
            className="w-full h-full object-contain"
          />
        </div>

        <h2 className="text-center text-3xl md:text-4xl font-bold text-white tracking-wide">
          Services
        </h2>

        <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 animate-spin-slow">
          <img
            src={OrbitImg}
            alt="Orbit"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-2  place-items-center">
        {SERVICES.map((service, index) => (
          <ServiceCard
            key={index}
            img={service.img}
            title={service.title}
            description={service.text}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
