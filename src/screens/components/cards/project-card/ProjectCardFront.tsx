import BigTitle from "../../utils/text/BigTitle";
import { ProjectCardProps } from "./ProjectCard";

const ProjectCardFrontHeader = (props: ProjectCardProps) => {
  return (
    <div className="cursor-pointer relative h-32 overflow-hidden flex justify-center" onClick={props.handleFlip}>
      <img className="self-center sm:w-12 h-12 object-cover" src={props.image} alt={props.title} />
      <div className="absolute inset-0 bg-black/20" />
    </div>
  )
};

const ProjectCardFrontBody = (props: ProjectCardProps) => {
  return (
    <div className="p-6 space-y-3 text-justify">
      <BigTitle size={0}>{props.title}</BigTitle>
      <p className="line-clamp-7 text-sm">{props.description}</p>
    </div>
  )
};

const ProjectCardFront = (props: ProjectCardProps) => {
  return (
    <>
      <ProjectCardFrontHeader {...props} />
      <ProjectCardFrontBody {...props} />
    </>
  );
};

export default ProjectCardFront;
