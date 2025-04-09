import { ExperienceItem } from "../../../data/model/ExperienceSectionProps";
import Badge from "../utils/badge/Badge";
import FlipCard from "../common/flip-card/FlipCard";
import FlipCardSide from "../common/flip-card/FlipCardSide";
import RichText from "../utils/text/RichText";

export interface ExperienceCardProps extends ExperienceItem { }

const CardFront = (props: ExperienceCardProps) => (
  <FlipCardSide>
    <div className="p-5 h-full flex flex-col">
      <div className="flex items-center mb-4">
        <img
          src={props.image}
          alt={props.company}
          className="w-12 h-12 rounded-md mr-4 object-contain"
        />
        <div>
          <h3 className="font-bold text-lg">{props.company}</h3>
          <p className="text-gray-600 dark:text-gray-300">{props.position}</p>
        </div>
      </div>
      <Badge>{props.start} - {props.end}</Badge>
      <p className="mt-4 text-gray-700 dark:text-gray-300 flex-grow">
        {props.description}
      </p>
      <p className="cursor-pointer text-sm text-blue-600 dark:text-blue-400 mt-4">
        See more
      </p>
    </div>
  </FlipCardSide>
);

const CardBack = (props: ExperienceCardProps) => (
  <FlipCardSide>
    <div className="p-5 h-full flex flex-col">
      <h3 className="font-bold text-lg mb-2">{props.company}</h3>
      <Badge>{props.start} - {props.end}</Badge>
      <p className="cursor-text mt-4 text-gray-700 dark:text-gray-300 flex-grow overflow-y-auto">
        <RichText>{props.fullDescription}</RichText>
      </p>
    </div>
  </FlipCardSide>
);

const ExperienceCard = (props: ExperienceCardProps) => {
  return (
    <div className="h-64">
      <FlipCard front={<CardFront {...props} />} back={<CardBack {...props} />} />
    </div>
  );
};

export default ExperienceCard;
