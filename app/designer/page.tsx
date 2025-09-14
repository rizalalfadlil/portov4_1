"use client";
import React, { useRef, useState } from "react";
import "./styles.css";
import { ReturnBlock } from "../../components/gd/ReturnBlock";
import { ContactBlock } from "../../components/gd/ContactBlock";
import { AboutBlock } from "../../components/gd/AboutBlock";
import { ProjectsBlock } from "../../components/gd/ProjectsBlock";
import { WelcomeBlock } from "./WelcomeBlock";
import { Alata } from "next/font/google";
import { ProjectsSection } from "../../components/sd/sections/projects";
import { SocialSection } from "@/components/sd/sections/socialSection";

const alata = Alata({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-alata",
});


export default function Page() {
  const [activeBlock, setActiveBlock] = useState<string | null>(null);
  const activeBlockRef = useRef<HTMLDivElement | null>(null);
  const updateActiveBlock = (block: string) => {
    setActiveBlock(block);
    setTimeout(() => {
      scrollToActiveBlock();
    }, 100);
  };
  const scrollToActiveBlock = () => {
    if (activeBlockRef.current) {
      const element = activeBlockRef.current;
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const removeActiveBlock = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      setActiveBlock(null);
    }, 200);
  };
  const sections: Record<string, React.ReactNode> = {
    welcome: <section>welcome</section>,
    projects: <ProjectsSection />,
    about: <section>about</section>,
    contact: <SocialSection />,
    form: <section>form</section>,
    return: <section>return</section>,
  };
  return (
    <main
      className={`${alata.className} bg-radial-[at_10%_10%] from-[#1F1F1F] from-10% to-[#141414] to-50%`}
    >
      <div className="p-4 w-full min-h-dvh grid lg:grid-cols-2 gap-4">
        <div className=" grid gap-4 grid-rows-3">
          <WelcomeBlock />
          <ProjectsBlock onClick={() => updateActiveBlock("projects")} />
        </div>
        <div className="flex md:flex-col flex-wrap gap-4 *:grow">
          <ContactBlock onClick={() => updateActiveBlock("contact")} />
          {/* <FormBlock onClick={() => updateActiveBlock("form")} /> */}
          <ReturnBlock   />
          <AboutBlock/>
        </div>
      </div>
      {activeBlock && (
        <div className="min-h-dvh p-4 flex flex-col" ref={activeBlockRef}>
          <div className="h-full grow">{sections[activeBlock]}</div>
          <button
            className="bg-[#353535] p-4 rounded-lg flex justify-center"
            onClick={() => removeActiveBlock()}
          >
            Back
          </button>
        </div>
      )}
    </main>
  );
}
