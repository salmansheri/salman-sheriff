"use client";
import { ThemeContext } from "@/context/theme-context-provider";
import { useContext } from "react";

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("useThemeContext must be used within ThemeContextProvider");
  }

  return context;
};
