import { EducationItem } from "../../../data/model/EducationSectionProps";
import Badge from "../utils/badge/Badge";
import FlipCard from "../common/flip-card/FlipCard";
import FlipCardSide from "../common/flip-card/FlipCardSide";

export interface EducationCardProps extends EducationItem { }

const CardFront = (props: EducationCardProps) => (
  <FlipCardSide>
    <div className="p-5 h-full flex flex-col">
      <div className="flex items-center mb-4">
        <img
          src={props.image}
          alt={props.title}
          className="w-12 h-12 rounded-md mr-4 object-contain"
        />
        <div>
          <h3 className="font-bold text-lg">{props.title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{props.description}</p>
        </div>
      </div>
      <Badge>{props.start} - {props.end}</Badge>
      <p className="cursor-text mt-4 text-gray-700 dark:text-gray-300 flex-grow">
        {props.description}
      </p>
      <p className="cursor-pointer text-sm text-blue-600 dark:text-blue-400 mt-4">
        See more details
      </p>
    </div>
  </FlipCardSide>
);

const CardBack = (props: EducationCardProps) => (
  <FlipCardSide>
    <div className="p-5 h-full flex flex-col">
      <h3 className="font-bold text-lg mb-2">{props.title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{props.description}</p>
      <Badge>{props.start} - {props.end}</Badge>
      <p className="cursor-text mt-4 text-gray-700 dark:text-gray-300 flex-grow overflow-y-auto [scrollbar-width:thin] [scrollbar-color:#111_#333]">
        {props.description}
      </p>
    </div>
  </FlipCardSide>
);

const EducationCard = (props: EducationCardProps) => {
  return (
    <div className="h-52">
      <FlipCard front={<CardFront {...props} />} back={<CardBack {...props} />} />
    </div>
  );
};

export default EducationCard;
