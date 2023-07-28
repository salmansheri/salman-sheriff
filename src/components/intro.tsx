"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin, BsTwitter } from "react-icons/bs";

import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

const Intro = () => {
  return (
    <section className="mb-28 max-w-[50rem] text-justify sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/my_photo.jpg"
              alt="myphoto"
              width={192}
              height={192}
              quality="95"
              priority
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover object-center shadow-xl"
            />
          </motion.div>
          <motion.span
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="text-2xl absolute bottom-0 right-0"
          >
            🖐️
          </motion.span>
        </div>
      </div>
      <motion.p
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
      >
        <strong>Hi, I, am Salman Sheriff</strong>, I am{" "}
        <strong className="underline">FullStack Developer</strong> and currently
        working as a <strong>Freelancer Contact</strong> for{" "}
        <strong className="italic">Final Projects</strong> Currently working
        with <strong className="underline">Next.js and React.js</strong>
      </motion.p>
      <motion.div className="flex items-center justify-center space-x-5 flex-col md:flex-row"
        initial={{
          y: 100, 
          opacity: 0, 
        }}
        animate={{
          opacity: 1, 
          y: 0, 
        }}
        transition={{
          delay: 0.1, 
        }}
      >
        <Link
          href="#contact"
          className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full w-full md:w-fit justify-center outline-none  hover:scale-110 hover:bg-gray-950 active:scale-105 transition  group"
        >
          Contact me <BsArrowRight className="opacity-70 group-hover:translate-x-1 transtion" />
        </Link>
        <a
          target="_blank"
          href="/new-resume.pdf"
          className="bg-white px-7 py-3 flex items-center gap-2 justify-center w-full md:w-fit rounded-full"
        >
          Download CV <HiDownload size={30} />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/salman-sheriff-6b3721214/"
          className="bg-white p-4 flex items-center gap-2 rounded-full w-full md:w-fit justify-center"
        >
          <BsLinkedin size={30} />
        </a>
        <a
          target="_blank"
          href="https://github.com/salmansheri"
          className="bg-white p-4 flex items-center gap-2 rounded-full w-full md:w-fit justify-center"
        >
          <FaGithubSquare size={30} />
        </a>
        <a
          target="_blank"
          href="https://twitter.com/sheriffsalman00"
          className="bg-white p-4 flex items-center gap-2 rounded-full w-full md:w-fit  justify-center"
        >
          <BsTwitter size={30} />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
