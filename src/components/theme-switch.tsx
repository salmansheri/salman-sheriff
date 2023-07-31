"use client";

import { useThemeContext } from "@/hooks/use-theme-context";
import { Moon, Sun } from "lucide-react";

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button
      className="z-[999] fixed bottom-48 right-20 bg-white w-[3rem] h-[3rem] rounded-full bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all"
      onClick={toggleTheme}
    >
      {theme === "light" ? <Sun /> : <Moon />}
    </button>
  );
};

export default ThemeSwitch;
