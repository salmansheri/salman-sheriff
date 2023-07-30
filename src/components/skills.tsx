import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import SkillsCard from "./skills-card";

const Skills = () => {
  return (
    <section className="h-[100dvh]">
      <SectionHeading title="Skills" />
      <div className="flex flex-row flex-wrap gap-10 items-center justify-center">
        {skillsData.map((data) => (
          <SkillsCard key={data.label} label={data.label} src={data.src} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
