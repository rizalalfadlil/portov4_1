import { Image, Tooltip } from "antd";
import { Project, tagsType } from "./types";
import { FaGithub } from "react-icons/fa6";

export const ProjectCard = ({
  project,
  tags,
  setHovered,
}: {
  project: Project;
  tags: tagsType;
  setHovered: (tags: string[]) => void;
}) => {
  return (
    <div
      key={project.id}
      className="w-full bg-white rounded-md  border-gray-200 space-y-2 h-full p-4! flex flex-col shadow-sm"
      onMouseEnter={() => setHovered(project.tags.map((t) => t.toLowerCase()))}
      onMouseLeave={() => setHovered(Object.keys(tags) as string[])}
    >
      <Image
        src={project.imageUrl}
        alt={project.title}
        className="aspect-video rounded-md w-full object-cover"
      />
      <p className="text-lg font-bold">{project.title}</p>
      <Tooltip placement="top" title={project.description}>
        <p className="text-xs h-[3rem] overflow-hidden  grow justify-start">
          {project.description.length < 50
            ? project.description
            : project.description.slice(0, 50) + "..."}
        </p>
      </Tooltip>
      <a
        className="text-xs text-blue-400 hover:border-b truncate"
        href={project.url}
      >
        {project.url}
      </a>
      <a
        className="text-xs text-gray-600 hover:border-b w-fit truncate cursor-pointer flex items-center gap-2"
        href={project.sourceCode}
      >
        <FaGithub size={12}/><span>view source</span>
      </a>
      <div className="flex gap-2 mt-4 *:size-6">
        {project.tags.map((tag) => tags[tag.toLowerCase()])}
      </div>
    </div>
  );
};
