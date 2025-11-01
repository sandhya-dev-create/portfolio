import React from "react";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  // Smooth Scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center ">
        <h2 className="text-xl font-semibold text-purple-500">Sandhya Bhede</h2>
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1"
            >
              {item.name}{" "}
            </button>
          ))}
        </nav>
        {/* Social media Icons */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaTwitter />, link: "https://x.com/sandhyabhede" },

            { 
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/sandhya-bhede/",
            },
            { icon: <FaInstagram />, link: "https://www.instagram.com/diary_of_a_coder/" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}{" "}
            </a>
          ))}
        </div>
        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Sandhya Bhede. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
