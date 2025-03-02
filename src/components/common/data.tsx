import SettingImg from "../../assets/SettingsImg.png";
import ideaImg from "../../assets/ideaImg.png";
import lightningImg from "../../assets/lightningImg.png";

export const HERO_CONTENT ="I'm a software developer who thrives on learning, building, and solving problems. I adapt quickly, refine my skills with every project, and approach challenges with curiosity and innovation to create meaningful solutions."
export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Jun 2024 - Present",
    role: "Software Developer",
    company: "Linedata - Innovation Lab",
    description: `Building Generative AI solutions by leveraging cloud technologies and Large Language Models (LLMs). Working with React.js and Python to develop scalable and efficient AI-driven applications. Collaborating with teams to integrate AI capabilities into innovative solutions.`,
    technologies: [
      "React.js",
      "Python",
      "LLMs",
      "Cloud Technologies",
      "Generative AI",
    ],
  },
  {
    year: "Nov 2023 - Feb 2024",
    role: "Data Science Intern",
    company: "Datagrind",
    description: `Implemented OCR solutions for efficient text extraction from images. Utilized Appsmith to build user-friendly data applications and designed MongoDB schemas to optimize database structures. Specialized in schema design for startup initiatives, ensuring scalability and business alignment. Conducted Exploratory Data Analysis (EDA) on various business problems.`,
    technologies: ["OCR", "Appsmith", "MongoDB", "Python", "Airtable"],
  },
  {
    year: "Jul 2023 - Sep 2023",
    role: "Data Science Intern",
    company: "Workverse",
    description: `Conducted in-depth research on data collection methodologies to ensure comprehensive data acquisition. Collaborated with cross-functional teams to identify data requirements and deliver tailored data solutions. Evaluated potential data storage solutions considering scalability, security, and future product usage.`,
    technologies: ["Data Collection", "Data Storage", "Research"],
  },
  {
    year: "May 2023 - Jul 2023",
    role: "Machine Learning Intern",
    company: "Feynn Labs",
    description: `Identified potential applications of AI in real-world commercial areas. Designed an abstract product framework and analyzed market segmentation. Worked with the team to classify and document market segments.`,
    technologies: ["Machine Learning", "Python"],
  },
];

export const PROJECTS = [
  {
    title: "Anemia Detection & Recommendation",
    description:
      "A deep learning-based system for detecting anemia using patient data and providing personalized dietary and medical recommendations.",
    technologies: [
      "Python",
      "Machine Learning",
      "Flask",
      "YOLOv5",
      "MySql",
      "Geopy",
    ],
  },

  {
    title: "Face Recognition for Clinic",
    description:
      "A facial recognition system for clinic check-ins, enabling seamless patient identification and record retrieval using deep learning models.",
    technologies: ["Python", "ResNet", "Deep Learning", "Flask", "MySql"],
  },

  {
    title: "Movie Recommendation System",
    description:
      "A recommendation engine that suggests movies based on user preferences and viewing history, utilizing collaborative and content-based filtering.",
    technologies: [
      "Python",
      "Scikit-Learn",
      "Pandas",
      "Flask",
      "NLP",
      "cosine-similarity",
    ],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};

export const SERVICES = [
  {
    img: SettingImg, // Replace with actual image path
    title: "System Architecture & Design",
    text: "Designing scalable and efficient system architectures that ensure performance, reliability, and adaptability.",
  },
  {
    img: ideaImg, // Replace with actual image path
    title: "Creative & Functional Design",
    text: "Blending creativity with functionality to craft intuitive user experiences, optimized workflows, and well-structured databases.",
  },
  {
    img: lightningImg, // Replace with actual image path
    title: "Software Development & Optimization",
    text: "Building high-performing applications with optimized databases, refined processes, and robust backend systems.",
  },
];
