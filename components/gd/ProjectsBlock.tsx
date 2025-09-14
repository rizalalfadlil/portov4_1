"use client";
import React from "react";
import { works } from "./works";

export const ProjectsBlock = ({ onClick }: { onClick: () => void }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer select-none relative hover:outline-2 rounded-xl p-4 sm:p-10 flex flex-col justify-between md:px-20 text-[#FFFFFF]"
      id="projects"
    >
      <div className="absolute inset-0 bg-gradient-to-l from-[#0079DB] to-[#0099B4] rounded-xl"></div>
      <div className="z-20">
        <p className="text-2xl font-bold">Projects</p>
        <p>view my works</p>
      </div>
      <div className="flex gap-4 *:text-center z-20 justify-center mt-4">
        <div>
          <p className="text-2xl font-bold">{works.length}</p>
          <p >projects</p>
        </div>
        <div>
          <p className="text-2xl font-bold">
            {works.reduce((acc, work) => acc + work.imageUrl.length, 0)}
          </p>
          <p>files</p>
        </div>
        <div>
          <p className="text-2xl font-bold">
            {new Set(works.map((work) => work.category)).size}
          </p>
          <p>categories</p>
        </div>
      </div>
    </div>
  );
};
