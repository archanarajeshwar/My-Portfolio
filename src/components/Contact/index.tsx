import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import OrbitImg from "../../assets/OrbitImg.png";
import contactImg from "../../assets/contactImg.png";

const linkedInUrl = import.meta.env.VITE_LINKEDIN_URL;
const githubUrl = import.meta.env.VITE_GITHUB_URL;
const email = import.meta.env.VITE_EMAIL;

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 px-6 md:px-12 lg:px-24">
      {/* Contact Heading */}
      <div className="flex items-center justify-center gap-4 md:gap-6 mb-8">
        <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 animate-spin-slow">
          <img src={OrbitImg} alt="Orbit" className="w-full h-full object-contain" />
        </div>

        <h2 className="text-center text-3xl md:text-4xl font-bold text-white tracking-wide">
          Contact
        </h2>

        <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 animate-spin-slow">
          <img src={OrbitImg} alt="Orbit" className="w-full h-full object-contain" />
        </div>
      </div>

      <div className="flex flex-col gap-8 max-w-3xl mx-auto items-center text-center">
        <img src={contactImg} className="h-40 w-40 md:h-32 md:w-32 sm:h-24 sm:w-24" alt="Contact" />
        <h1 className="text-white font-bold text-4xl">Let's Connect!</h1>
        <p className="text-white text-lg md:text-xl">
          Have a project idea, feedback, or just want to chat about tech? Feel free to reach out—I’d love to hear from you!
        </p>
        <p className="text-indigo-300">Let's connect and build something amazing together!</p>

        {/* Contact Icons */}
        <div className="bg-white/10 p-6 md:p-8 rounded-lg shadow-lg border border-indigo-300/50 w-full flex flex-col items-center gap-4">
          <h3 className="text-white text-2xl font-semibold">Find me here</h3>
          <div className="flex gap-6 text-4xl">
            <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:scale-110 transition-transform">
              <FaLinkedin />
            </a>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:scale-110 transition-transform">
              <FaGithub />
            </a>
            <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`} 
               target="_blank" rel="noopener noreferrer" className="text-red-400 hover:scale-110 transition-transform">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
