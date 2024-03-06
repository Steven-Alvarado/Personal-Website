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
        I&apos;m a junior studying{" "}
        <span className="font-medium">Computer Science. </span>I have a passion
        passion for software developing and cybersecurity/IT.{" "}
        <span className="italic">My favorite part of programming</span> is the
        designing and problem-solving process. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">internship position</span> as a software
        developer or cybersecurity researcher.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy being outdoors, music, and reading. I also enjoy{" "}
        <span className="font-medium">learning new things and am always excited to take on challenges whether its tech-related or hobby-related.</span>.
        {" "}
        <span className="font-medium"></span>
      </p>
    </motion.section>
  );
}
