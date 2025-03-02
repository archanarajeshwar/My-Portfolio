interface ServiceCardProps {
  img: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  img,
  title,
  description,
}) => {
  return (
    <div className="mb-20 relative w-[320px] h-[420px] perspective-1000">
      {/* 3D Wrapper */}
      <div
        className="relative px-6 py-6 bg-indigo-300/10 backdrop-blur-lg border-4 border-indigo-400   rounded-lg 
                     flex flex-col justify-between h-full shadow-[0_4px_10px_rgba(75,0,130,0.4),0_10px_40px_rgba(75,0,130,0.6)] 
                     transform transition-transform duration-500 hover:-translate-y-3 hover:shadow-2xl"
      >
        <div className="w-40 h-40 mx-auto mb-4">
          <img src={img} alt={title} className="w-full h-full object-contain" />
        </div>

        {/* Title & Description */}
        <h3 className="font-bold text-xl text-white text-center">{title}</h3>
        <p className="text-gray-300 text-base text-center">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
