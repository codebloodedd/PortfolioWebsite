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
  ecell,
  antariksh,
  unicode,
  synapse,
  healthi,
  threejs,
  github,
  behance,
  summarizerAI,
  gericht
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-end Developer",
    icon: web,
  },
  {
    title: "UI/UX Designer",
    icon: mobile,
  },
  {
    title: "ML Developer",
    icon: backend,
  }
];

const technologies = [
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
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
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Marketing Team Member",
    company_name: "DJS Antariksh",
    icon: antariksh,
    iconBg: "#E6DEDD",
    date: "May 2022 - March 2023",
    points: [
      "Sponsorship Acquisition: Secured sponsorships for college team in national and international mar rover competitions, ensuring financial support and resources.",
      "Email Marketing: Developed and executed effective email to potential sponsors and established proper communication regarding sponsorship deals.",
      "Social Media Management: Implemented impactful marketing strategies, elevating team's visibility, follower growth, and engagement.",
      "Logistics and Documentation: Managed team's logistics and required documentation when the team participated in national and international competitions",
    ],
  },
  {
    title: "UI/UX Mentee",
    company_name: "DJ Unicode",
    icon: unicode,
    iconBg: "#E6DEDD",
    date: "Sept 2022 - Present",
    points: [
      // "UI/UX Mentee: Actively engaged in a learning period as a UI/UX mentee within my college committee, receiving valuable guidance and evaluation to enhance my skills in the field.",
      "Learning and Skill Development: Successfully completed assigned tasks during the learning period, actively seeking feedback from mentors to continuously improve my UI/UX design abilities.",
      "Website and App Design Opportunity: Demonstrated proficiency and growth during the learning period, leading to the opportunity to design the website and app for the attendance portal of my college using Figma.",
      "Front-End Development: Contributed to coding the front-end of the attendance portal website using React.js and other related technologies. Translated the designed interfaces into functional code.",
    ],
  },
  {
    title: "Creatives Team Member",
    company_name: "Synapse",
    icon: synapse,
    iconBg: "#383E56",
    date: "Sept 2022 - Present",
    points: [
      "Made post and stories for social media using Canva.",
      "Contributed in website design using Figma.",
      "Contributed in developing the website using React.js and other technologies.",
      "Was in organization committee of HackNiche and Re-Quest.",
    ],
  },
  {
    title: "Technical Team Member",
    company_name: "DJ E-Cell",
    icon: ecell,
    iconBg: "#383E56",
    date: "Sept 2022 - Present",
    points: [
      "Developing and maintaining E-Cell's website using React.js and other related technologies.",
      "Worked with other team member when forms had to created to for taking registrations for an event.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Summarizer.ai",
    description:
      "Simplify your reading with Summarize, an open-source article summarizer that transforms lengthy articles into clear and concise summaries.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "OpenAI api",
        color: "blue-text-gradient",
      },
    ],
    image: summarizerAI,
    source_icon: github,
    source_code_link:
      "https://github.com/codebloodedd/Summarizer.ai/tree/master",
  },
  {
    name: "Gericht",
    description:
      "Web app showcasing a fine dining restaurant's essence. Explore the founder, accolades, and menu, bringing the exquisite dining experience to diners worldwide.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "pure CSS",
        color: "green-text-gradient",
      },
    ],
    image: gericht,
    source_icon: github,
    source_code_link:
      "https://github.com/codebloodedd/Restaurant-Website/tree/master",
  },
  {
    name: "Healthi",
    description:
      "A mobile application specifically developed to aid individuals in tracking their physical activities, monitoring their progress, and achieving their fitness objectives.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
    ],
    image: healthi,
    source_icon: behance,
    source_code_link:
      "https://www.behance.net/gallery/173850617/Healthi-Presentation",
  },
];

export { services, technologies, experiences, testimonials, projects };
