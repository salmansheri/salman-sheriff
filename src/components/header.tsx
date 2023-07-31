"use client";

import { useActiveSectionContext } from "@/hooks/use-active-section";
import { links } from "@/lib/data";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5] sm:w-[36rem] sm:rounded-full dark:bg-gray-900"
        initial={{
          y: -100,
          x: "-50%",
          opacity: 0,
        }}
        animate={{
          y: 0,
          x: "-50%",
          opacity: 1,
        }}
      ></motion.div>
      <nav className=" flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 ">
        <ul className="flex w-[22rem] flex-wrap items-center justify-between md:justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center"
              key={link.hash}
              initial={{
                y: -100,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
            >
              <Link
                className={cn(
                  "flex items-center justify-center w-full  hover:text-gray-950 transition dark:text-gray-50 dark:hover:text-gray-100",
                  activeSection === link.name &&
                    "text-gray-950 dark:text-gray-100"
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    layoutId="acitveSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-900 text-white"
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
