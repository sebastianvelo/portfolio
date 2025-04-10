import { useState, useRef, useEffect } from "react";
import ExperienceItem from "../../../model/ExperienceItem";
import FlipCard from "../common/flip-card/FlipCard";
import FlipCardSide from "../common/flip-card/FlipCardSide";
import Badge from "../utils/badge/Badge";
import RichText from "../utils/text/RichText";
import ExpandSVG from "../utils/svg/ExpandIcon";

export interface ExperienceCardProps extends ExperienceItem { }
interface ExperienceCardBackProps extends ExperienceCardProps {
  toggleExpand: () => void;
  isExpanded: boolean;
}

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
    </div>
  </FlipCardSide>
);

const CardBack = (props: ExperienceCardBackProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [hasOverflow, setHasOverflow] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      if (contentRef.current) {
        const element = contentRef.current;
        setHasOverflow(element.scrollHeight > element.clientHeight);
      }
    };

    checkOverflow();

    window.addEventListener('resize', checkOverflow);

    const timeoutId = setTimeout(checkOverflow, 500);

    return () => {
      window.removeEventListener('resize', checkOverflow);
      clearTimeout(timeoutId);
    };
  }, [props.fullDescription]);

  return (
    <FlipCardSide>
      <div className="p-5 h-full flex flex-col relative">
        <h3 className="font-bold text-lg mb-2">{props.company}</h3>
        <Badge>{props.start} - {props.end}</Badge>
        <div
          ref={contentRef}
          className="cursor-text mt-4 text-gray-700 dark:text-gray-300 flex-grow overflow-y-auto pb-8"
        >
          <RichText>{props.fullDescription}</RichText>

          {hasOverflow && !props.isExpanded && (
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white hover:from-blue-50  dark:from-black dark:hover:from-blue-900 to-transparent pointer-events-none" />
          )}
        </div>

        {hasOverflow && (
          <div className="absolute top-4 right-4 z-10">
            <button
              className="flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-gray-700 shadow-md hover:shadow-lg transition-shadow"
              onClick={props.toggleExpand}
              aria-label={props.isExpanded ? "Mostrar menos" : "Mostrar más"}
              title={props.isExpanded ? "Mostrar menos" : "Mostrar más"}
            >
              <span className={`transform transition-transform ${props.isExpanded ? "rotate-180" : ""}`}>
                <ExpandSVG />
              </span>
            </button>
          </div>
        )}
      </div>
    </FlipCardSide>
  );
};

const ExperienceCard = (props: ExperienceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const className = `${isExpanded ? "h-96" : "h-48"}`;

  return (
    <div className={`${className} transition-all duration-300`}>
      <FlipCard
        front={<CardFront {...props} />}
        back={
          <CardBack
            {...props}
            toggleExpand={toggleExpand}
            isExpanded={isExpanded}
          />
        }
      />
    </div>
  );
};

export default ExperienceCard;