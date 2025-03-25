import BigTitle from "../../../components/utils/text/BigTitle";
import { ExperienceCardProps } from "./ExperienceCard";

const ExperienceCardFrontHeader = (props: ExperienceCardProps) => {
  return (
    <div onClick={props.handleFlip} className="cursor-pointer relative h-32 xl:h-42 overflow-hidden flex justify-center">
      <img src={props.image} alt={props.company} className="self-center w-16 h-16 2xl:w-32 2xl:h-32 object-cover" />
      <div className="absolute inset-0 bg-black/20" />
    </div>
  )
};

const ExperienceCardFrontBody = (props: ExperienceCardProps) => {
  return (
    <div className="p-6 space-y-3">
      <BigTitle size={0}>{props.company}</BigTitle>
      <p className="text-lg">{props.position}</p>
      <p className="text-sm">
        {props.start} -{props.end ? ` ${props.end}` : " Now"}
      </p>
    </div>
  )
};

const ExperienceCardFront = (props: ExperienceCardProps) => {
  return (
    <>
      <ExperienceCardFrontHeader {...props} />
      <ExperienceCardFrontBody {...props} />
    </>
  );
};

export default ExperienceCardFront;
