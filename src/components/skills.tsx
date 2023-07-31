"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import SkillsCard from "./skills-card";
import { useSectionInView } from "@/hooks";

const Skills = () => {
  const { ref } = useSectionInView("Skills", 0.5);
  return (
    <section
      id="skills"
      ref={ref}
      className="min-h-screen mb-28 max-w-[53rem] mx-auto scroll-mt-28 mt-52 dark:text-gray-50"
    >
      <SectionHeading title="Skills" />
      <div className="flex flex-row flex-wrap gap-10 items-center justify-center">
        {skillsData.map((data, index) => (
          <SkillsCard
            key={data.label}
            label={data.label}
            index={index}
            src={data.src}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
