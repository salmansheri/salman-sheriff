"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsLinkedin, BsTwitter } from "react-icons/bs";

import { useSectionInView } from "@/hooks";
import { useActiveSectionContext } from "@/hooks/use-active-section";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import TypewriterComponent from "typewriter-effect";

const Intro = () => {
  const { ref } = useSectionInView("Home");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-justify sm:mb-0 scroll-mt-48 "
    >
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
              duration: 1,
              delay: 1,
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
              delay: 1,
              duration: 1,
            }}
            className="text-2xl absolute bottom-0 right-0"
          >
            🖐️
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1,
          duration: 1,
        }}
      >
        <strong>Hi, I am Salman Sheriff</strong>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-600">
          <TypewriterComponent
            options={{
              strings: [
                "Fullstack web developer",
                "Frontend Developer",
                "Backend Developer",
                "React Native Developer",
                "Svelte Developer",
                "Next.js Developer",
                "Node.js Developer",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </motion.h1>
      <motion.div
        className="flex items-center justify-center space-x-5 flex-col md:flex-row"
        initial={{
          y: 100,
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1,
          duration: 1,
        }}
      >
        <Link
          href="#contact"
          className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full w-full md:w-fit justify-center outline-none  hover:scale-110 hover:bg-gray-950 active:scale-105 transition  group"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transtion" />
        </Link>
        <a
          target="_blank"
          href="/new-resume.pdf"
          download
          className="bg-white px-7 py-3 flex items-center gap-2 justify-center w-full md:w-fit rounded-full hover:scale-110 active:scale-105 group transition border border-black/10"
        >
          Download CV{" "}
          <HiDownload
            size={20}
            className="group-hover:translate-y-1 transition opacity-60"
          />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/salman-sheriff-6b3721214/"
          className="bg-white p-4 flex items-center gap-2 rounded-full w-full md:w-fit justify-center hover:scale-110 active:scale-105 transition  hover:text-gray-800"
        >
          <BsLinkedin size={30} className="" />
        </a>
        <a
          target="_blank"
          href="https://github.com/salmansheri"
          className="bg-white p-4 flex items-center gap-2 rounded-full w-full md:w-fit justify-center hover:scale-110 active:scale-105 transition hover:text-gray-800"
        >
          <FaGithubSquare size={30} className="" />
        </a>
        <a
          target="_blank"
          href="https://twitter.com/sheriffsalman00"
          className="bg-white p-4 flex items-center gap-2 rounded-full w-full md:w-fit  justify-center hover:scale-110 active:scale-105 transition hover:text-gray-800"
        >
          <BsTwitter size={30} className="hover:opacity-90" />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
