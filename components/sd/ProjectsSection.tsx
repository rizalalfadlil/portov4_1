"use client";
import React from "react";
import "@ant-design/v5-patch-for-react-19";
import { useState } from "react";

import { Checkbox, Tooltip } from "antd";

import { ProjectCard } from "./ProjectCard";
import { projects, tags } from "./data";

export function ProjectsSection({ ref }: { ref?: React.Ref<HTMLDivElement> }) {
  const [hovered, setHovered] = useState(Object.keys(tags) as string[]);
  const [selected, setSelected] = useState("All");
  const [showOnlyLive, setShowOnlyLive] = useState(false);

  const filterLive = showOnlyLive
    ? projects.filter((project) => project.url)
    : projects;

  const filteredProjects =
    selected === "All"
      ? filterLive
      : filterLive.filter((project) =>
          project.tags
            .map((tag) => tag.toLowerCase())
            .includes(selected.toLowerCase())
        );

  const categorizedProjects = {
    commission: {
      title: "Commissioned Projects",
      description:
        "Work developed for real clients or organizations, commissioned and funded to meet specific business or operational needs.",
      projects: filteredProjects.filter(
        (project) => project.category === "commissioned"
      ),
    },
    academic: {
      title: "Academic Projects",
      description:
        "Projects created as part of coursework, assignments, or academic exercises to explore concepts and demonstrate skills.",
      projects: filteredProjects.filter(
        (project) => project.category === "academic"
      ),
    },
    personal: {
      title: "Personal Projects",
      description:
        "Self-initiated or experimental work built to explore new ideas, test technologies, or develop personal interests.",
      projects: filteredProjects.filter(
        (project) => project.category === "personal"
      ),
    },
  };
  return (
    <section
      ref={ref}
      className="p-4 min-h-screen flex flex-col items-center py-40 space-y-10 justify-center bg-white max-w-5xl mx-auto"
      id="Projects"
    >
      <div className=" w-full max-w-5xl mx-auto text-center prose">
        <h2 className="text-2xl font-bold text-primary">Projects</h2>
        <h4 className="text-secondary">
          A curated collection of my development work—highlighting diverse
          technologies, real-world solutions, and creative problem-solving.
        </h4>
      </div>
      <div className="grow h-96 bg-gray-100 p-4 rounded-xl w-full grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto overflow-y-scroll  border-gray-200">
        {Object.values(categorizedProjects).map(
          (category, index) =>
            category.projects.length > 0 && (
              <React.Fragment key={index}>
                <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 bg-white p-2 z-30 rounded-lg shadow-sm">
                  <h2>{category.title}</h2>
                  <p className="text-xs text-muted">{category.description}</p>
                </div>
                {category.projects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    tags={tags}
                    setHovered={setHovered}
                  />
                ))}
              </React.Fragment>
            )
        )}
      </div>
      <div className="  border-gray-200 bg-gray-100 rounded-md w-full p-4 items-start">
        <b>Filter</b>
        <p className="text-xs">tech stacks</p>
        <div className="flex flex-wrap gap-2 w-full">
          {Object.keys(tags).length === 0 ? (
            <p className="text-center text-secondary p-4">No tags available</p>
          ) : (
            Object.keys(tags).map((tag) => (
              <Tooltip key={tag} title={tag} placement="top" color="#f59e42">
                <div
                  className={`flex items-center gap-2 p-2 cursor-pointer *:transition-all duration-100 border-accent ${
                    selected === tag ? "border-b-3" : ""
                  }`}
                  onClick={() => setSelected(selected === tag ? "All" : tag)}
                >
                  {Array.isArray(hovered) && (
                    <span
                      className={` transition-all duration-300 ${
                        !hovered.includes(tag)
                          ? `*:text-gray-500! grayscale opacity-50`
                          : ``
                      }`}
                    >
                      {tags[tag as keyof typeof tags]}
                    </span>
                  )}
                </div>
              </Tooltip>
            ))
          )}
        </div>
        <div className="flex gap-2 items-center mt-8">
          <Checkbox
            checked={showOnlyLive}
            onChange={(c) => setShowOnlyLive(c.target.checked)}
            title="show only live"
          />
          <p className="text-xs">show only live</p>
        </div>
      </div>
    </section>
  );
}
