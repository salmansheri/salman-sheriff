import ClinicManager from "../../public/clinicmanager.png";
import Finaco from "../../public/finacohome.png";
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

export type TProjectsData = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: StaticImageData;
  githubUrl: string;
  liveUrl: string;
};

export const projectsData: TProjectsData[] = [
  {
    title: "Clinic manager",
    description: "All in one Solution For clinic management",
    tags: [
      "React",
      "Next.js",
      "PostgreSQL",
      "Tailwind",
      "Prisma",
      "Typescript",
    ],
    imageUrl: ClinicManager,
    githubUrl: "https://github.com/salmansheri/clinic_manager",
    liveUrl: "https://clinic-manager-nu.vercel.app",
  },
  {
    title: "Finaco",
    description: "Financial dashboard manager",
    tags: [
      "React",
      "TypeScript",
      "Drizzle",
      "Next.js",
      "Tailwind",
      "Clerk Authentication",
    ],
    imageUrl: Finaco,
    githubUrl: "https://github.com/salmansheri/finaco",
    liveUrl: "https://finaco-one.vercel.app",
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
