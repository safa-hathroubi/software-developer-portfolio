// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github, food4future, telcotec, nasoft, flutter, firebase,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "source-code",
    title: "Source Code",
    link: "https://github.com/safa-hathroubi/software-developer-portfolio",
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Node.js Developer",
    icon: backend,
  },
  {
    title: "Graphic Designer",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Mobile Software Engineer",
    company_name: "Food4Future Startup",
    icon: food4future,
    iconBg: "#383E56",
    date: "January 2024 - June 2024",
    points: [
      "Developed Spiraw, a multifunctional IoT mobile application for spirulina cultivation.",
      "Designed and implemented an animated social networking module to enhance user engagement.",
      "Integrated an e-shop module into the app.",
      "Set up MQTT communications between the app and the IoT device for real-time updates.",
    ],
  },
  {
    title: "Flutter Developer",
    company_name: "Telcotec",
    icon: telcotec,
    iconBg: "#E6DEDD",
    date: "June 2023 - August 2023",
    points: [
      "Designed the full UI/UX for a disaster management system, optimizing task allocation.",
      "Developed the front-end application using Flutter.",
      "Mentored a developer to learn Flutter and its ecosystem.",
    ],
  },
  {
    title: "Mobile Developer",
    company_name: "Na Soft",
    icon: nasoft,
    iconBg: "#383E56",
    date: "August 2022 - September 2023",
    points: [
      "The goal was to build a stock market trading app. My primary responsibility was to design the app's\n" +
      "front-end and implement it in Flutter. I learned about the Flutter framework and I also gained\n" +
      "experience in design thinking, prototyping, and Ul/UX design",
    ],
  },
  /*{
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },*/
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "It was a pleasure working with you.",
    name: "Insaf Ayari",
    designation: "CEO",
    company: "Food4Future",
    image: user1,
  },
  {
    testimonial:
      "Truly phenomenal, best developer in the entire world!",
    name: "Hela Talbi",
    designation: "Future Co-Founder",
    company: "Hack & Stack",
    image: user2,
  },
  /*{
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: user3,
  },*/
] as const;

// Projects
export const PROJECTS = [
  {
    name: "NoteCraft",
    description:
      "A comprehensive Novel-Writing app designed to make writing novels easier " +
        "with world-building and plotting tools all in one place.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/safa-hathroubi",
    live_site_link: "https://www.linkedin.com/in/safa-hathroubi-9a295523a/",
  },
  {
    name: "Spiraw",
    description:
      "A multifunctional IoT mobile application for spirulina cultivation," +
        "complete with a social media module and an integrated e-shop",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "mqtt",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/safa-hathroubi",
    live_site_link: "https://www.linkedin.com/in/safa-hathroubi-9a295523a/",
  },
  {
    name: "AquaBob",
    description:
      "An ocean-themed 3D exploration game that enables the player to delve into various environments," +
        "collect the jewels and postcards all while learning about different fauna and flora.",
    tags: [
      {
        name: "unity3d",
        color: "blue-text-gradient",
      },
      {
        name: "c#",
        color: "green-text-gradient",
      },
      {
        name: "navmesh",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/safa-hathroubi",
    live_site_link: "https://www.linkedin.com/in/safa-hathroubi-9a295523a/",
  },
  {
    name: "Esprit Space",
    description:
      "A student iOS app for managing academic activities, including grades, attendance,\n" +
        "club events, and university news, ensuring seamless navigation, security with FaceID and dark mode.",
    tags: [
      {
        name: "swiftui",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://github.com/safa-hathroubi",
    live_site_link: "https://www.linkedin.com/in/safa-hathroubi-9a295523a/",
  },
  {
    name: "Task Management App",
    description:
      "This application was designed and developed" +
        "to facilitate task management and allocation during natural disasters, enhancing preparedness and response efforts.",
    tags: [
      {
        name: "figma",
        color: "blue-text-gradient",
      },
      {
        name: "flutter",
        color: "green-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://github.com/safa-hathroubi",
    live_site_link: "https://www.linkedin.com/in/safa-hathroubi-9a295523a/",
  },
  {
    name: "Elemental Odyssey",
    description:
      "A trading card game featuring 1v1 battles between characters from the Four Elemental Clans: Fire, Water, Earth and Air. " +
        "My role was designing the game and marketplace UI, as well as all the character cards, and developing the outside-game interfaces.",
    tags: [
      {
        name: "unity2d",
        color: "blue-text-gradient",
      },
      {
        name: "c#",
        color: "green-text-gradient",
      },
      {
        name: "figma",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "yellow-text-gradient",
      }
    ],
    image: project6,
    source_code_link: "https://github.com/safa-hathroubi",
    live_site_link: "https://www.linkedin.com/in/safa-hathroubi-9a295523a/",
  },
] as const;

export const SOCIALS = [
  /*{
    name: "YouTube",
    icon: youtube,
    link: "https://www.youtube.com/@OPGAMER.",
  },*/
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/safa-hathroubi-9a295523a/",
  },/*
  {
    name: "Twitter",
    icon: twitter,
    link: "https://twitter.com/TechnicalShubam",
  },*/
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/safa-hathroubi",
  },
] as const;
