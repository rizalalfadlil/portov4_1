"use client"
import type React from "react";
import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { useState } from "react"
import { SiFirebase, SiJavascript, SiTypescript } from "react-icons/si";
import { Image, Tooltip } from "antd";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    tags: string[];
    url:string
}
interface tagsType {
    [key: string]: React.ReactNode;
}
export function ProjectsSection({ ref }: { ref?: React.Ref<HTMLDivElement> }) {

    const tags: tagsType = {
        html: <FaHtml5 size={32} color="#e34c26" />,
        css: <FaCss3Alt size={32} color="#1572B6" />,
        javascript: <SiJavascript size={32} color="#f7df1e" />,
        react: <FaReact size={32} color="#61dafb" />, // Replace with FaReact if imported
        typescript: <SiTypescript size={32} color="#3178c6" />, // Replace with SiTypescript if imported
        nodejs: <FaNodeJs size={32} color="#339933" />, // Replace with FaNodeJs if imported
        firebase:<SiFirebase size={32} color="orange"/>,
        next: <RiNextjsFill size={32} color="#252525" />,
        tailwindcss:<RiTailwindCssFill size={32} color="#178dbb"/>
    }

    const [hovered, setHovered] = useState(Object.keys(tags) as string[]);
    const [selected, setSelected] = useState("All");

    const projects: Project[] = [
        {
            id: 1,
            title: "Fita Pro",
            description: "Selamat datang di Fita Pro, aplikasi jurnal digital yang dikelola oleh Akademi Farmasi YPF, yang dirancang untuk memudahkan akademisi, peneliti, dan mahasiswa dalam mengakses dan berbagi informasi terkini seputar ilmu farmasi.",
            imageUrl: "./projectsThumbnail/fitapro.png",
            url:"https://fitapro.akfarypf.ac.id/",
            tags: ["typescript","next","tailwindcss","firebase"]
        }
    ]

    const filteredProjects = selected === "All" ? projects : projects.filter(project => project.tags.map(tag => tag.toLowerCase()).includes(selected.toLowerCase()));
    return (<section ref={ref} className="p-4 h-screen flex flex-col items-center py-40 space-y-10 justify-center bg-white max-w-5xl mx-auto" id="Projects">
        <div className=" w-full max-w-5xl mx-auto text-center prose">
            <h2 className="text-2xl font-bold text-primary">Projects</h2>
            <h4 className="text-secondary">A curated collection of my development work—highlighting diverse technologies, real-world solutions, and creative problem-solving.
            </h4>
        </div>
        <div className="grow min-h-96 p-4 bg-gray-100 rounded-xl w-full grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto overflow-y-scroll  border-gray-200">
            {filteredProjects.map((project) => (
                <div key={project.id} className="w-full bg-white rounded-md  border-gray-200 space-y-2 h-fit p-4!" onMouseEnter={() => setHovered(project.tags.map((t) => t.toLowerCase()))} onMouseLeave={() => setHovered(Object.keys(tags) as string[])}>
                    <Image src={project.imageUrl} alt={project.title} className="aspect-video rounded-md w-full object-cover" />
                    <p className="text-lg font-bold">{project.title}</p>
                    <Tooltip placement="bottom" title={project.description}>
                        <p className="text-xs h-[3rem] overflow-hidden">{project.description.length < 50 ? project.description : project.description.slice(0, 50) + "..."}</p>
                    </Tooltip>
                    <a className="text-xs text-blue-400 hover:border-b" href={project.url}>{project.url}</a>
                    <div className="flex gap-2 mt-4 *:size-6">
                        {project.tags.map((tag) => tags[tag.toLowerCase()])}
                    </div>
                </div>
            ))}
        </div>
        <div className="  border-gray-200 bg-gray-100 rounded-md w-full p-4 items-start">
            <b>Filter</b>
            <div className="flex flex-wrap gap-2 w-full">
                {Object.keys(tags).length === 0 ? (
                    <p className="text-center text-secondary p-4">No tags available</p>
                ) : (
                    Object.keys(tags).map((tag) => (
                        <Tooltip key={tag} title={tag} placement="top" color="#f59e42">
                            <div className={`flex items-center gap-2 p-2 cursor-pointer  *:transition-all duration-100 border-accent ${selected === tag ? "border-b-3" : ""}`} onClick={() => setSelected(selected === tag ? "All" : tag)}>
                                {Array.isArray(hovered) && <span className={` transition-all duration-300 ${!hovered.includes(tag) ? `*:text-gray-500!` : ``}`}>{tags[tag]}</span>}
                            </div>
                        </Tooltip>
                    ))
                )}
            </div>
        </div>
    </section>);
}
