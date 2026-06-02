"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

import { useEffect } from "react";

export default function Home() {
    useEffect(()=> {
        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll(".nav-link");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) =>{
                    if (entry.isIntersecting){
                        navLinks.forEach((link) =>
                            link.classList.remove("active")
                    );

                        const active = document.querySelector(
                            `.nav-link a[href="#${entry.target.id}"]`
                        );

                        active?.parentElement?.classList.add("active");
                    }
                });
            },
            {threshold: 0.5}
        );

        sections.forEach((section) =>
            observer.observe(section)
        );

        return () => observer.disconnect();
    }, []);

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