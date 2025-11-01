import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1> 
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Sandhya Bhede
          </h2>
          {/* Skills Heading with typing effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a</span>
            <span className="text-[#8245ec]"> Frontend Developer</span>
          </h3>
          {/* About me paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8  leading-relaxed">
            I’m a frontend developer with hands-on experience in building
            responsive and user-friendly web applications. Skilled in HTML, CSS,
            JavaScript, React, Tailwind CSS, and Bootstrap, I focus on creating
            clean, efficient, and visually engaging interfaces that deliver
            seamless user experiences. Passionate about modern web technologies,
            I continuously work on projects that enhance my technical skills and
            creativity.
          </p>
          {/* Resume Button */}
          <a
            href="https://1drv.ms/w/c/8c5d36ed2a48975e/ESw7MOkszrBEkdifBw9PAMYByonzONvyc2tQoYazBtcFkA?e=2BUAuk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD RESUME
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
