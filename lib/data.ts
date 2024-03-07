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
    title: 
    location: 
    description:
    icon: React.createElement(CgWorkAlt),
    date: 
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
    tags: [ "Python", "Machine Learning"],
    imageUrl: globaltempImg,
  },
  {
    title: "Lexical Analyzer, Parser, and Interpreter",
    description:
      "Developed lexical analyzer in C++, implementing regular expressions and finite automata techniques to efficiently tokenize source code for a Perl-like language",
    tags: ["C++", "Parsing", "Lexical Analyzer"],
    imageUrl: lexicalImg,
  },
] as const;
export const skillsData = [
  "C/C++",
  "Python",
  "Bash",
  "GNU/Linux",
  "Git",
  "SQL",	
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Tailwind",
  "MongoDB",
] as const;
