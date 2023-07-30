"use client";

import { useSectionInView } from "@/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

const About = () => {
  const { ref } = useSectionInView("About");

  const animationVariants = {
    initial: {
      y: 100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 1,
        duration: 1,
      },
    },
  };
  return (
    <motion.section
      ref={ref}
      id="about"
      className="mb-23 max-w-[45rem] text-center leading-8 sm:mb-48 scroll-mt-32"
      variants={animationVariants}
      initial="initial"
      whileInView="animate"
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
