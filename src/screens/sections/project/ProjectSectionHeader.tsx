import ProjectSectionProps from "../../../data/model/ProjectSectionProps";
import ProjectSectionTitle from "./ProjectSectionTitle";

const ProjectSectionHeader = (props: ProjectSectionProps) => {
  return (
    <div className="space-y-4 font-mono">
      <ProjectSectionTitle {...props} />
      <div className="text-sm sm:text-xl">{props.description}</div>
    </div>
  );
};

export default ProjectSectionHeader;
