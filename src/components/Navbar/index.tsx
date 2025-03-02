import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import AR from "../../assets/AR.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["About", "Services", "Experience", "Projects", "Contact"];

  // Function to handle smooth scrolling using Framer Motion
  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const topOffset =
        section.getBoundingClientRect().top + window.scrollY - 80; // Adjust for navbar height
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
    setIsOpen(false); // Close menu on mobile after clicking
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-1 left-1/2 transform -translate-x-1/2 w-11/12 sm:w-2/3 md:w-1/2 z-50 
        bg-slate-900/50 backdrop-blur-lg text-white rounded-full shadow-lg"
    >
      <nav className="p-1">
        <div className="flex justify-between items-center px-5">
          {/* Logo */}
          <img
            src={AR}
            className=" p-1 w-12 h-10 md:w-16 md:h-12 lg:w-12 lg:h-10"
          />

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6">
            {navLinks.map((link, index) => (
              <motion.button
                key={index}
                onClick={() => handleScroll(link.toLowerCase())}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="hover:text-indigo-200"
              >
                {link}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown - Full Width */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-indigo-800 p-3 rounded-b-lg text-center"
          >
            {navLinks.map((link, index) => (
              <motion.button
                key={index}
                onClick={() => handleScroll(link.toLowerCase())}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="block py-2 hover:text-gray-300 w-full"
              >
                {link}
              </motion.button>
            ))}
          </motion.div>
        )}
      </nav>
    </motion.div>
  );
};

export default Navbar;
