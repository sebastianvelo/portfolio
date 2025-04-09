import ProjectSectionProps, { ProjectItem } from "../../../../data/model/ProjectSectionProps";
import ProjectCard from "../../cards/ProjectCard";

const ProjectSectionBody = (props: ProjectSectionProps) => {
  return (
    <div className="flex flex-nowrap overflow-y-hidden overflow-x-scroll gap-x-2 justify-between items-center md:grid md:grid-cols-4 xl:grid-cols-4 md:gap-y-4 md:justify-items-center w-full">
      {props.items.map((project: ProjectItem) => (
        <div key={project.title} className="flex-none">
          <ProjectCard {...project} />
        </div>
      ))}
    </div>
  );
};

export default ProjectSectionBody;
