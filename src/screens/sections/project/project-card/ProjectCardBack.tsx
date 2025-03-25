import BigTitle from "../../../components/utils/text/BigTitle";
import SkillsContainer from "../../skill/skills-container/SkillsContainer";
import { ProjectCardProps } from "./ProjectCard";
import ProjectCardButtons from "./ProjectCardButtons";

const ProjectCardBackHeader = (props: ProjectCardProps) => {
  return (
    <div className="flex space-x-2">
      <img className="self-center w-4 h-4 2xl:w-6 2xl:h-6 object-cover" src={props.image} alt={props.title} />
      <h3 className="cursor-pointer" onClick={props.handleFlip}>
        <BigTitle size={0}>{props.title}</BigTitle>
      </h3>
    </div>
  )
};

const ProjectCardBackBody = (props: ProjectCardProps) => {
  return (
    <div className="flex flex-col h-full space-y-4">
      <ProjectCardButtons githubUrl={props.githubUrl} liveUrl={props.liveUrl} />
      <SkillsContainer stack={props.stack} />
    </div>
  )
};

const ProjectCardBack = (props: ProjectCardProps) => {
  return (
    <div className="space-y-8">
      <ProjectCardBackHeader {...props} />
      <ProjectCardBackBody {...props} />
    </div>
  );
};

export default ProjectCardBack;
