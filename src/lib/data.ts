import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Grogstore from "../../public/grog.png";
import LawDiary from "../../public/lawdiary.png";
import { StaticImageData } from "next/image";
import PythonImage from "../../public/images/python.png";
import HTMLImage from "../../public/images/html-logo.png";
import CSSImage from "../../public/images/css.png";
import ReactImage from "../../public/images/react.png";
import NextjsImage from "../../public/images/nextjs.png";
import JavaScriptImage from "../../public/images/javascript-logo.png";
import TypeScriptImage from "../../public/images/typescript.png";
import PrismaImage from "../../public/images/prisma1.png";
import Postgres from "../../public/images/postgresql.png";
import MongoDB from "../../public/images/mongodb.png";
import Express from "../../public/images/express.png";
import FramerMotion from "../../public/images/framer.png";
import Nodejs from "../../public/images/nodejs.png";
import Git from "../../public/images/github.png";
import Tailwind from "../../public/images/tailwind.png";
import Redux from "../../public/images/redux.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export type TProjectsData = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: StaticImageData;
};

export const projectsData: TProjectsData[] = [
  {
    title: "Lawdiary",
    description: "I worked For this for advocates to manage their cases",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: LawDiary,
  },
  {
    title: "Grogstore",
    description: "An E-commerce Website for Groceries",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Clerk Authentication",
    ],
    imageUrl: Grogstore,
  },
];

export const skillsData = [
  {
    label: "HTML",
    src: HTMLImage,
  },
  {
    label: "CSS",
    src: CSSImage,
  },
  {
    label: "JavaScript",
    src: JavaScriptImage,
  },
  {
    label: "TypeScript",
    src: TypeScriptImage,
  },
  {
    label: "React",
    src: ReactImage,
  },
  {
    label: "Next.js",
    src: NextjsImage,
  },
  {
    label: "Node.js",
    src: Nodejs,
  },
  {
    label: "Git",
    src: Git,
  },
  {
    label: "Tailwind",
    src: Tailwind,
  },
  {
    label: "Prisma",
    src: PrismaImage,
  },
  {
    label: "Redux",
    src: Redux,
  },
  {
    label: "Express",
    src: Express,
  },
  {
    label: "PostgreSQL",
    src: Postgres,
  },
  {
    label: "Python",
    src: PythonImage,
  },
  {
    label: "Framer Motion",
    src: FramerMotion,
  },
  {
    label: "MongoDB",
    src: MongoDB,
  },
] as const;
