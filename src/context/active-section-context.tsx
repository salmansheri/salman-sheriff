"use client";

import { links } from "@/lib/data";
import { useState, createContext } from "react";

type SectionName = (typeof links)[number]["name"];

interface ActiveSectionContextInterface {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
}

export const ActiveSectionContext =
  createContext<ActiveSectionContextInterface | null>(null);

const ActiveSectionContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

export default ActiveSectionContextProvider;
