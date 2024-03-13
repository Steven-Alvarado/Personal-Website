"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I&apos;m currently a junior. {" "}
        <span className="font-medium"></span>I have a passion
        for software developing and cybersecurity.{" "}
        <span className="italic">My favorite part of programming and cybersecurity</span><span className="mb-3"> is the
        designing and problem-solving process. I have an inclination to understand systems and provide scalable solutions</span> driven by the idea of developing secure and efficient 
        software to <span className="underline">solve real-world problems.</span>{" "}
        <span className="font-medium">

        </span> I am always looking to
        learn new technologies. I am currently looking for an{" "}
        <span className="font-medium">internship position</span> in the software
        development or cybersecurity field.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy being outdoors, music, and reading. I also enjoy{" "}
        <span className="font-medium">learning new things and am always excited to take on challenges</span>.
        {" "}
        <span className="font-medium"></span>
      </p>
    </motion.section>
  );
}
