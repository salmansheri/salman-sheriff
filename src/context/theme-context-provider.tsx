"use client";

import { createContext, useEffect, useState } from "react";

type ThemeType = "light" | "dark";

type ThemeContextStore = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextStore | null>(null);

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const localtheme = window.localStorage.getItem("theme") as ThemeType | null;

    if (localtheme) {
      setTheme(localtheme);

      if (localtheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
