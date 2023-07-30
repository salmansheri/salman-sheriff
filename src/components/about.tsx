"use client";

import { motion } from "framer-motion";
import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/hooks/use-active-section";

const About = () => {
  const { ref, inView } = useInView();
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("About");
    }
  }, [inView, setActiveSection, timeOfLastClick]);
  return (
    <motion.section
      ref={ref}
      id="about"
      className="mb-23 max-w-[45rem] text-center leading-8 sm:mb-48 scroll-mt-28"
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
