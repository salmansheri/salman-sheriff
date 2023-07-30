"use client";

import { TProjectsData, projectsData } from "@/lib/data";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { BsGithub } from "react-icons/bs";
import SectionHeading from "./section-heading";
import { Share } from "lucide-react";
import { useInView, useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { useActiveSectionContext } from "@/hooks/use-active-section";

const Project = ({ title, description, tags, imageUrl }: TProjectsData) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 group hover:bg-gray-200 transition"
    >
      <div className="pt-4 pb-8 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[26rem]">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
        <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
          {tags.map((tag) => (
            <li
              className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
              key={tag}
            >
              {tag}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-row items-center space-x-5">
          <a href="" className="text-gray-800 hover:text-gray-950">
            <BsGithub size={30} />
          </a>
          <a href="" className="text-gray-800 hover:text-gray-950">
            <Share />
          </a>
        </div>
      </div>

      <Image
        src={imageUrl}
        alt="projectimage"
        quality={95}
        className="absolute top-8 -right-40 w-[28.24rem] rounded-t-lg shadow-2xl group-even:-right-[initial] group-even:-left-40 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 transition group-hover:scale-[1.04] 
            group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-even:right-[initial]
            
        "
      />
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (isInView) {
      setActiveSection("Projects");
    }
  }, [isInView, setActiveSection]);
  return (
    <section ref={ref} className="scroll-mt-48" id="projects">
      <SectionHeading title="Projects" />
      <div>
        {projectsData.map((project) => (
          <React.Fragment key={project.title}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
