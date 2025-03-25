import BigTitle from "../../../utils/text/BigTitle";
import SkillsContainer from "../../skill/skills-container/SkillsContainer";
import { ExperienceCardProps } from "./ExperienceCard";

const ExperienceCardBackHeader = (props: ExperienceCardProps) => {
  return (
    <h3 onClick={props.handleFlip} className="cursor-pointer ">
      <BigTitle size={0}>{props.company}</BigTitle>
    </h3>
  )
};

const ExperienceCardBackBody = (props: ExperienceCardProps) => {
  return (
    <div className="flex flex-col justify-between h-full space-y-4">
      <p className="text-sm 2xl:text-xs">{props.description}</p>
      <SkillsContainer stack={props.stack} />
    </div>
  )
};

const ExperienceCardBack = (props: ExperienceCardProps) => {
  return (
    <div className="space-y-4 flex flex-col h-full font-mono">
      <ExperienceCardBackHeader {...props} />
      <ExperienceCardBackBody {...props} />
    </div>
  );
};

export default ExperienceCardBack;
