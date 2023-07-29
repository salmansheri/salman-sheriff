"use client";

import { motion } from "framer-motion";
import React from "react";
import SectionHeading from "./section-heading";

const About = () => {
  return (
    <motion.section
      className="mb-23 max-w-[45rem] text-center leading-8 sm:mb-48"
      initial={{
        opacity: 0,
        y: 100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.175,
      }}
    >
      <SectionHeading title="About Me" />
      <p className="mb-3">
        I am Salman Sheriff, I am from Krishnagiri, I am a student with
        experience in making projects. I am Master of computer application
        Graduate and a Freelancer
      </p>

      <p></p>
    </motion.section>
  );
};

export default About;
