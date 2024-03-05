import React from "react";
//import { CgWorkAlt } from "react-icons/cg";
//import { FaReact } from "react-icons/fa";
//import { LuGraduationCap } from "react-icons/lu";
import satelliteImg from "@/public/satellite.png";
import globaltempImg from "@/public/globaltemp.png";
import lexicalImg from "@/public/lexical.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  }, 
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

/* export const experiencesData = [
  {
    title: "",
    location: "",
    description: "",
    icon: React.createElement(LuGraduationCap),
    date: "",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },

] as const;
*/
export const projectsData = [
  {
    title: "Space Satellite Coordinator",
    description:
      "Hackathon - Girlhacks NJIT 2023 \"best use of streamlit\" winner - Streamlit web application that harnessed N2YO API to provide users with real-time data on the ten closest satellites to any location",
    tags: ["Python", "Streamlit"],
    imageUrl: satelliteImg,
  },
  {
    title: "Global Temperature Analysis",
    description:
      "Analyzed global temperature trends from 1850 to 2015 using UC Berkeley's dataset. Trained linear and random forest regression models for complex pattern recognition.",
    tags: ["Pandas", "Scikit-learn", "Matplotlib", "Python", "Machine Learning"],
    imageUrl: globaltempImg,
  },
  {
    title: "Lexical Analyzer, Parser, and Interpreter",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: lexicalImg,
  },
] as const;
export const skillsData = [
  "C/C++",
  "Python",
  "Bash",
  "GNU/Linux",
  "Git",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind",
  "MongoDB",
  "SQL",
] as const;
