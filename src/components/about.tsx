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
      className="mb-52 max-w-[45rem] text-center leading-8 sm:mb-48 scroll-mt-32 mt-52 dark:text-gray-50"
      variants={animationVariants}
      initial="initial"
      whileInView="animate"
    >
      <SectionHeading title="About Me" />
      <p className="mb-3 text-justify">
        I am Salman Sheriff, an aspiring Fullstack Developer from Krishnagiri with a Master&apos;s degree in Computer Applications. Passionate about building impactful web applications, I specialize in crafting dynamic and responsive projects using modern technologies.

        Currently, I work as a freelancer, helping clients bring their ideas to life, especially in the domain of final projects. My expertise lies in Next.js and React.js, and I constantly strive to learn and implement the latest tools and practices in web development.

        With a strong foundation in full-stack development, I am dedicated to delivering high-quality solutions that solve real-world problems.

      </p>

      <p></p>
    </motion.section>
  );
};

export default About;
