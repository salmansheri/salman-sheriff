import Header from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ToasterProvider from "@/Providers/toaster-provider";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import { cn } from "@/lib/utils";
import ThemeContextProvider from "@/context/theme-context-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Salman Sheriff | Developer Portfolio",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={cn(
          inter.className,
          "pt-32 bg-gray-50 text-gray-950 dark:bg-gray-900  dark:text-opacity-90 "
        )}
      >
        <ThemeContextProvider>
          <div className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] "></div>
          <div className="bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] -z-10 h-[50rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

          <ActiveSectionContextProvider>
            <ToasterProvider />
            <Header />

            {children}
            <Footer />
          </ActiveSectionContextProvider>
          <ThemeSwitch />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
