import BigTitle from "../../utils/text/BigTitle";
import TimeRange from "../../utils/text/TimeRange";
import { EducationCardProps } from "./EducationCard";

const EducationCardFrontHeader = (props: EducationCardProps) => {
  return (
    <div onClick={props.handleFlip} className="cursor-pointer relative h-32 xl:h-42 overflow-hidden flex justify-center">
      <img src={props.image} alt={props.title} className="self-center w-16 h-16 2xl:w-32 2xl:h-32 object-cover" />
      <div className="absolute inset-0 bg-black/20" />
    </div>
  )
};

const EducationCardFrontBody = (props: EducationCardProps) => {
  return (
    <div className="p-6 space-y-3">
      <BigTitle size={0}>{props.description}</BigTitle>
      <p className="text-lg">{props.title}</p>
      <TimeRange start={props.start} end={props.end} />
    </div>
  )
};

const EducationCardFront = (props: EducationCardProps) => {
  return (
    <>
      <EducationCardFrontHeader {...props} />
      <EducationCardFrontBody {...props} />
    </>
  );
};

export default EducationCardFront;
