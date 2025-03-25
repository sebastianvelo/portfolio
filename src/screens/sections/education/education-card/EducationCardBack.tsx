import BigTitle from "../../../components/utils/text/BigTitle";
import { EducationCardProps } from "./EducationCard";

const EducationCardBackHeader = (props: EducationCardProps) => {
  return (
    <h3 onClick={props.handleFlip} className="cursor-pointer ">
      <BigTitle size={0}>{props.title}</BigTitle>
    </h3>
  )
};

const EducationCardBackBody = (props: EducationCardProps) => {
  return (
    <div className="flex flex-col justify-between h-full space-y-4">
      <p className="text-sm 2xl:text-xs">{props.description}</p>
    </div>
  )
};

const EducationCardBack = (props: EducationCardProps) => {
  return (
    <div className="space-y-4 flex flex-col h-full font-mono">
      <EducationCardBackHeader {...props} />
      <EducationCardBackBody {...props} />
    </div>
  );
};

export default EducationCardBack;
