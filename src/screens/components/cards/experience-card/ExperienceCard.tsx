import { ExperienceItem } from "../../../../data/model/ExperienceSectionProps";
import useFlip from "../../../../hooks/useFlip";
import FlippableCard, { GenericFlippableCardSideProps } from "../../utils/flippable-card/FlippableCard";
import ExperienceCardBack from "./ExperienceCardBack";
import ExperienceCardFront from "./ExperienceCardFront";

export interface ExperienceCardProps extends ExperienceItem, GenericFlippableCardSideProps { }

const ExperienceCard = (props: ExperienceCardProps) => {
  const [isFlipped, toggleFlip] = useFlip(false);

  return (
    <FlippableCard color={props.color} isFlipped={isFlipped} handleFlip={toggleFlip}>
      <ExperienceCardFront {...props} isFlipped={isFlipped} handleFlip={toggleFlip} />
      <ExperienceCardBack {...props} isFlipped={isFlipped} handleFlip={toggleFlip} />
    </FlippableCard>
  );
};

export default ExperienceCard;
