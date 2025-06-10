"use client";
import React from "react";
import { HeroSection } from "../../components/sd/HeroSection";
import { ProjectsSection } from "../../components/sd/ProjectsSection";
import { AboutSection } from "../../components/sd/AboutSection";
import { CTASection } from "../../components/sd/CTASection";
import { Navbar } from "../../components/sd/Navbar";
import "./styles.css"
import { Poppins } from "next/font/google";
import { Footer } from "../../components/sd/Footer";

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

function App() {
  const heroRef = React.useRef<HTMLDivElement>(null);
  const projectsRef = React.useRef<HTMLDivElement>(null);
  const aboutRef = React.useRef<HTMLDivElement>(null);
  const ctaRef = React.useRef<HTMLDivElement>(null);

  return (<>
    <title>RizalAlfadlil | Software Developer Portfolio</title>
    <main className={`min-h-dvh w-full ${poppins.className}`}>
      <Navbar refs={
        {
          hero: heroRef,
          projects: projectsRef,
          about: aboutRef,
          cta: ctaRef,
        }
      } />
      <HeroSection ref={heroRef} refs={
        {
          about: aboutRef,
        }
      } />
      <ProjectsSection ref={projectsRef} />
      <AboutSection ref={aboutRef} />
      <CTASection ref={ctaRef} refs={
        {
          about: aboutRef,
        }
      } />
      <Footer />
    </main>
  </>
  );
}






export default App;