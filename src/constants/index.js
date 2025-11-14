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
  gericht,
  Fraud_detection,
  asknova,
  Network,
  Sociablast,
  externalLink,
  Rpipd,
} from "../assets";

import cuBoulder from "../assets/company/CUBLogo.png";
import tamu from "../assets/company/TAM-MaroonBox.png";
import engibrains from "../assets/company/EB-Small-logo.png";
import hueai from "../assets/company/HorizontalLogo.svg";
import python from "../assets/tech/python.png";
import pytorch from "../assets/tech/pytorch.png";
import tensorflow from "../assets/tech/tensorflow.png";
import opencv from "../assets/tech/opencv.png";
import pandas from "../assets/tech/pandas.png";
import numpy from "../assets/tech/numpy.png";
import powerbi from "../assets/tech/powerbi.png";
import tableau from "../assets/tech/tableau.png";
import cpp from "../assets/tech/cpp.png";
import java from "../assets/tech/java.png";
import node from "../assets/tech/node.png";
import django from "../assets/tech/django.png";
// import graphql from "../assets/tech/graphql.png";
// import rest from "../assets/tech/rest.png";
import postgres from "../assets/tech/Postgres.png";
import nextjs from "../assets/tech/nextjs.png";
// import chartjs from "../assets/tech/chartjs.png";
// import aws from "../assets/tech/aws.png";
import dockerLogo from "../assets/tech/docker.png";
import langchain from "../assets/tech/langchain.png";
import snowflake from "../assets/tech/snowflake.png";
// import cicd from "../assets/tech/cicd.png";

export const navLinks = [
  { id: "about",        title: "About" },
  { id: "skills",       title: "Skills" },
  { id: "experience",   title: "Experience" },
  { id: "work",         title: "Projects" },     // section id = "work" in Works.jsx
  { id: "testimonials", title: "Testimonials" }, // will add later
  { id: "contact",      title: "Contact" },
];

const services = [
  { title: "Data Scientist", icon: backend },
  { title: "Computer Vision", icon: mobile },
  { title: "Full-Stack Developer", icon: web },
  { title: "ML Developer", icon: creator },
];

export const techGroups = {
  Languages: [
    { name: "Python", icon: python },
    { name: "JavaScript", icon: javascript },
    { name: "TypeScript", icon: typescript },
    { name: "C++", icon: cpp },
    { name: "Java", icon: java },
  ],

  "ML / Data": [
    { name: "PyTorch", icon: pytorch },
    { name: "TensorFlow", icon: tensorflow },
    { name: "OpenCV", icon: opencv },
    { name: "Langchain", icon: langchain },
    { name: "Snowflake", icon: snowflake },
    { name: "Power BI", icon: powerbi },
    { name: "Tableau", icon: tableau },
  ],

  Backend: [
    // { name: "FastAPI", icon: fastapi },
    { name: "Node.js", icon: node },
    { name: "Django", icon: django },
    // { name: "GraphQL", icon: graphql },
    // { name: "REST", icon: rest },
    { name: "Postgres", icon: postgres },
  ],

  Frontend: [
    { name: "React", icon: reactjs },
    { name: "Redux", icon: redux },
    { name: "Tailwind", icon: tailwind },
    { name: "Next.js", icon: nextjs },
    { name: "Three.js", icon: threejs },
    // { name: "Chart.js", icon: chartjs },
  ],

  "Cloud & DevOps": [
    // { name: "AWS", icon: aws },
    { name: "Git", icon: git },
    { name: "Docker", icon: docker },
    // { name: "CI/CD", icon: cicd },
  ],
};

export const concepts = [
  "Computer Vision",
  "Data structures and algorithms",
  "Time-Series",
  "Predictive Modeling",
  "Data Engineering",
  "Data Analytics",
  "API Design",
  "Generative AI",
  "Data Warehousing & Mining",
  "ETL",
  "Predictive Modeling",
  "Deep Learning",
  "LLMs"
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
    title: "Website Developer",
    company_name: "CU Boulder & Texas A&M",
    icon: cuBoulder, // or a combined badge if you have one
    iconBg: "#0B1220",
    date: "Sept 2025 – Present",
    points: [
      "Migrating a legacy Drupal CMS to a custom Next.js app with an integrated CMS, cutting hosting + maintenance costs by ~80% while improving scalability.",
      "Developing/consuming APIs for IIIF manifest image handling; redesigned front-end components for accessibility and responsiveness.",
      "Decreased page load time by ~35% and resolved major UI defects by refactoring layout, image delivery, and routing.",
    ],
  },
  {
    title: "Data Science & Computer Vision Intern",
    company_name: "Engibrains",
    icon: engibrains,
    iconBg: "#031B34",
    date: "Nov 2023 – Nov 2024",
    points: [
      "Designed the company’s first Data Intelligence Framework to centralize project/finance/HR data and track the Client Delivery Trust Index; reduced delayed delivery rate by ~18% in 6 months.",
      "Built a Predictive Project Overrun Model (regression + time-series) that flagged high-risk projects by 25% completion with ~82% precision, cutting cost overruns by ~30%.",
      "Developed a Resource Allocation Dashboard (Power BI + Python) for utilization across 7 domains; improved niche-skill utilization by ~22%.",
      "Forecasted skill demand from sales pipeline + backlog, revealing surges in Embedded QA and Edge AI; enabled a 90-day hiring roadmap and ~15% faster staffing.",
      "Architected image processing pipelines (RAW capture, noise reduction, curation) — 30% faster preprocessing and +15% model accuracy via higher-quality datasets.",
      "Processed 18MP images for a Micro-object Detection Camera Design project; boosted feature visibility and enabled ~88% accuracy in cell identification.",
      "Streamlined preprocessing (Python, PyTorch, OpenCV) to reduce manual intervention by ~40% and ensure reproducible, large-scale DL data flows.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company_name: "HUE-AI",
    icon: hueai,
    iconBg: "#FFF",
    date: "May 2023 – Oct 2023",
    points: [
      "Directed development of a scalable e-commerce platform with React, Tailwind, Redux, and REST APIs (JWT auth); increased user engagement by ~20%.",
      "Implemented responsive landing pages and motion/analytics (Framer Motion, Chart.js), lowering bounce rate by ~15% and improving frontend performance.",
    ],
  },
  {
    title: "Frontend & Design Mentor",
    company_name: "DJ Unicode",
    icon: unicode,
    iconBg: "#1F2937",
    date: "Aug 2022 – Aug 2024",
    points: [
      "Mentored 80+ 1st/2nd-year students in frontend and UI/UX; guided project work (e.g., NOTENG student information-sharing platform).",
      "Delivered 10+ workshops on Git/version control, ML fundamentals, and frontend best practices; coached interview prep for summer internships.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Pratham’s data science and computer vision work directly strengthened our delivery reliability and profitability across key client accounts.",
    name: "Mr. Harikrushna Sheth",
    designation: "Founder & CEO",
    company: "Engibrains",
    image: "", // not used anymore
    link: "https://drive.google.com/file/d/1iZ63_MyVcZDhcIVOV181lGTckcna3O8R/view?usp=sharingr", // TODO: replace with real LOR URL
  },
  {
    testimonial:
      "He quickly translated product requirements into clean, high-performing frontend experiences and consistently raised the quality bar for our engineering team.",
    name: "Mr. Shaunak Dave",
    designation: "Deputy CTO",
    company: "HUE-AI",
    image: "",
    link: "https://drive.google.com/file/d/1zK6yiHkGwuMS8cRUG68HLhTOMyMINmfw/view?usp=sharing",
  },
  {
    testimonial:
      "Pratham’s overall performance has been exemplary, consistently delivering high-quality work that shows deep analytical thinking and strong technical proficiency.",
    name: "Dr. Lynette D’Mello",
    designation: "Assistant Professor",
    company: "Dwarkadas J. Sanghvi College of Engineering",
    image: "",
    link: "https://drive.google.com/file/d/1fUfuIb8d1ysA90qM2nWr_59YRSlq6-qC/view?usp=sharing",
  },
  {
    testimonial:
      "He has repeatedly demonstrated his ability to navigate complex ideas and deliver original solutions, particularly in the information security domain.",
    name: "Prof. Sridhar Iyer",
    designation: "Assistant Professor",
    company: "Dwarkadas J. Sanghvi College of Engineering",
    image: "",
    link: "https://drive.google.com/file/d/1-GhF5UXhmAyCe9dh60NtxY0-L7iCObYH/view?usp=sharing",
  },
  {
    testimonial:
      "Pratham’s strong leadership, collaboration skills, and research in machine learning and sentiment analysis make him an ideal candidate for advanced study.",
    name: "Dr. Nilesh Patil",
    designation: "Associate Professor",
    company: "Dwarkadas J. Sanghvi College of Engineering",
    image: "",
    link: "https://drive.google.com/file/d/1g3eUWKwvR07FBqkAH67efyYYR-aIf0sK/view?usp=sharing",
  },
];

const projects = [
  {
    name: "FinTrust — Fraud Detection & Risk Analytics",
    description:
      "End-to-end fraud analytics pipeline: cleans & engineers features, trains ML models, and evaluates with business-centric metrics. Includes dashboards/visuals for model insight and risk reporting.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Pandas", color: "green-text-gradient" },
      { name: "Scikit-learn", color: "pink-text-gradient" },
      { name: "EDA", color: "blue-text-gradient" },
    ],
    image: Fraud_detection,
    source_icon: github,
    source_code_link:
      "https://github.com/codebloodedd/FinTrust---fraud-detection-risk-analytics",
  },
  {
    name: "AskNova — RAG Chat + Tools",
    description:
      "Retrieval-Augmented Generation assistant with tool use: embeddings + vector search, document QA, web search, and a Streamlit UI for quick experiments and demos.",
    tags: [
      { name: "LangChain", color: "blue-text-gradient" },
      { name: "FAISS", color: "green-text-gradient" },
      { name: "OpenAI", color: "pink-text-gradient" },
      { name: "Streamlit", color: "blue-text-gradient" },
    ],
    image: asknova,
    source_icon: github,
    source_code_link: "https://github.com/codebloodedd/AskNova",
  },
  {
    name: "Social Network Link Prediction",
    description:
      "Predicts future connections in social graphs via graph-based features and classic ML. Covers data prep, feature engineering (e.g., common neighbors, Jaccard), model training, and evaluation.",
    tags: [
      { name: "NetworkX", color: "blue-text-gradient" },
      { name: "Scikit-learn", color: "green-text-gradient" },
      { name: "Graph Mining", color: "pink-text-gradient" },
      { name: "Python", color: "blue-text-gradient" },
    ],
    image: Network,
    source_icon: github,
    source_code_link:
      "https://github.com/codebloodedd/Social-Network-Link-Prediction",
  },
  {
    name: "Sociablast — Realtime Chat + Bots",
    description:
      "Realtime chat app with image sharing, authentication, and handy chat-bot commands (.wiki, .weather, .time, .stocks, etc.). Built with React, Node, MongoDB, and Socket.io.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Node", color: "green-text-gradient" },
      { name: "Socket.io", color: "pink-text-gradient" },
      { name: "MongoDB", color: "blue-text-gradient" },
    ],
    image: Sociablast,
    source_icon: github,
    source_code_link: "https://github.com/codebloodedd/Sociablast",
  },
  {
    name: "Research Paper — Multi-Label k-NN Classification",
    description:
      "Published research exploring a multi-label k-NN approach using a simulated dataset of dummy health parameters to detect co-occurring medical conditions. Evaluates model behavior on imbalanced data and reports insights relevant for healthcare ML deployments.",
    tags: [
      { name: "Machine Learning", color: "blue-text-gradient" },
      { name: "kNN", color: "green-text-gradient" },
      { name: "Multi-Label", color: "pink-text-gradient" },
      { name: "Research", color: "blue-text-gradient" },
    ],
    image: Rpipd,
    source_icon: externalLink,
    source_code_link:
      "https://link.springer.com/chapter/10.1007/978-981-96-1687-9_17",
  },
];


export { services, technologies, experiences, testimonials, projects };
