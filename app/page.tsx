import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
      <main className = "flex flex-col gap-24 px-6 md:px-16 py-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
  );
}