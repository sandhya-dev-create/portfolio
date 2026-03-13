import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";

// Education Section Logo's
import sm from "./assets/education_logo/sm.png";
import kamla from "./assets/education_logo/kamla.png";

// Project Section Logo's
import movieapp from "./assets/work_logo/movieapp.png";
import portfolio from "./assets/work_logo/portfolio.png";
import game from "./assets/work_logo/game.png";
import currency from "./assets/work_logo/currency.png";
import proposal from "./assets/work_logo/proposal.png";
import coffee from "./assets/work_logo/coffee.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },

  {
    title: "Languages",
    skills: [{ name: "JavaScript", logo: javascriptLogo }],
  },

  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
    ],
  },
];

export const education = [
  {
    id: 0,
    img: kamla,
    school: "Kamla Nehru Mahavidyalay, Nagpur (RTMNU)",
    date: "July 2019 - July 2022",
    grade: "7.38 CGPA",
    desc: "I have completed my Bachelors's degree in Computer Applications from , Kamla Nehru Mahavidyalay, Nagpur. During my time at RTMNU, I gained a  foundation in programming,  and computer science principles. I have studied courses such as  Algorithms, Object-Oriented Programming, Database Management Systems, Web Development. My experience at RTMNU has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Bachelors of Computer Applications - BCA",
  },

  {
    id: 1,
    img: sm,
    school: "Shahid Mishra Junior College, Tirora",
    date: "Jun 2017 - Feb 2018",
    grade: "53.85%",
    desc: "I completed my class 12 education from Shahid Mishra Junior College, Tirora, under the MSBSHSE board, where I studied Physics, Chemistry, and Mathematics (PCMB).",
    degree: "MSBSHSE (XII) - PCMB",
  },
  {
    id: 2,
    img: sm,
    school: "Shahid Mishra High School, Tirora",
    date: "Apr 2015 - March 2016",
    grade: "79.20%",
    desc: "I completed my class 10 education from Shahid Mishra High School, under the MSBSHSE board, where I studied Science.",
    degree: "MSBSHSE (X) - Science ",
  },
];

export const projects = [
  {
    id: 0,
    title: "MovieManiac 🎬",
    description:
      "A responsive React movie app that fetches real-time data from the TMDB API. Features include filtering, sorting, and browsing popular, top-rated, and upcoming movies.",
    image: movieapp,
    tags: ["React JS", "CSS", "API"],
    github: "https://github.com/sandhya-dev-create/moviemaniac.git",
    webapp: "https://movie-app-six-weld.vercel.app",
  },
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio website created with React.js and Tailwind CSS, featuring sections for About, Education, Projects, and Skills with smooth navigation and a modern UI.",
    image: portfolio,
    tags: ["React JS", "Tailwind CSS"],
    github: "",
    webapp: "",
  },
  {
    id: 2,
    title: "Currency Converter",
    description:
      "An interactive browser game using JavaScript for logic and DOM manipulation. Features live score tracking, user interaction, and a clean responsive UI.",
    image: currency,
    tags: ["HTML", "CSS", "JavaScript", "API"],
    github: "https://github.com/sandhya-dev-create/Currency-Converter.git",
    webapp : "https://currency-converter-phi-black.vercel.app/"
  },
  {
    id: 3,
    title: "Proposal Website",
    description:
      "A creative React-based proposal website designed to tell a romantic story through animated sections, a timeline, and a final proposal interaction. Built with React, CSS animations, and modern UI styling.",
    image: proposal,
    tags: ["React Js", "CSS"],
    github: "https://github.com/sandhya-dev-create/proposal-website",
    webapp : "https://proposal-website-pearl-nu.vercel.app/"
  },
  {
  id : 4, 
   title: "Coffee Shop",
    description:
      "A creative React-based proposal website designed to tell a romantic story through animated sections, a timeline, and a final proposal interaction. Built with React, CSS animations, and modern UI styling.",
    image:coffee,
    tags: ["React Js", "CSS"],
    github : "https://github.com/sandhya-dev-create/coffee-shop",
    webapp : ""
    
  }
];
