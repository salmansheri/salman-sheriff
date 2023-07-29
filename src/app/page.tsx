import About from "@/components/about";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";

export default function Home() {
  return (
    <main className="flex items-center flex-col  justify-center px-4 ">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
    </main>
  );
}
