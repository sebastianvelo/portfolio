import { ProjectItem } from "../../../../data/model/ProjectSectionProps";
import useFlip from "../../../../hooks/useFlip";
import FlippableCard, { GenericFlippableCardSideProps } from "../../utils/flippable-card/FlippableCard";
import ProjectCardBack from "./ProjectCardBack";
import ProjectCardFront from "./ProjectCardFront";

export interface ProjectCardProps extends ProjectItem, GenericFlippableCardSideProps { }

const ProjectCard = (props: ProjectItem) => {
  const [isFlipped, toggleFlip] = useFlip(false);

  return (
    <FlippableCard color={props.color} isFlipped={isFlipped} handleFlip={toggleFlip}>
      <ProjectCardFront {...props} isFlipped={isFlipped} handleFlip={toggleFlip} />
      <ProjectCardBack {...props} isFlipped={isFlipped} handleFlip={toggleFlip} />
    </FlippableCard>
  );
};

export default ProjectCard;
