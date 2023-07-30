"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface SkillsCardProps {
  label: string;
  src: StaticImageData;
  index: number;
}

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
      duration: 0.5,
    },
  }),
};

const SkillsCard: React.FC<SkillsCardProps> = ({ label, src, index }) => {
  return (
    <motion.div
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
      className="flex flex-col justify-center items-center space-y-3"
    >
      <div>
        <Image src={src} alt={label} height={100} width={100} />
      </div>
      <div>
        <h1>{label}</h1>
      </div>
    </motion.div>
  );
};

export default SkillsCard;
