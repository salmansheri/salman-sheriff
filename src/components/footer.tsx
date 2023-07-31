"use client";
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  const animationVariants = {
    initial: {
      y: 100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.75,
        duration: 0.75,
      },
    },
  };
  return (
    <motion.div
      variants={animationVariants}
      initial="initial"
      whileInView="animate"
      className="bg-zinc-950 text-white dark:bg-transparent rounded-t-lg text-center p-6 flex flex-col space-y-3"
    >
      <small>&copy; {year} Salman Sheriff. All rights reserved.</small>
      <p>
        <span>About this website: </span>
        built with React.js and Next.js (App router & Server Actions),
        Typescript, Tailwind CSS, Framer motion React-Email, Resend
      </p>
      <div className="flex items-center justify-center gap-2">
        Deployed on
        <span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 76 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#ffffff" />
          </svg>
        </span>{" "}
        Vercel
      </div>
    </motion.div>
  );
};

export default Footer;
