import { EducationItem } from "../../../../data/model/EducationSectionProps";
import useFlip from "../../../../hooks/useFlip";
import FlippableCard, { GenericFlippableCardSideProps } from "../../utils/flippable-card/FlippableCard";
import EducationCardBack from "./EducationCardBack";
import EducationCardFront from "./EducationCardFront";

export interface EducationCardProps extends EducationItem, GenericFlippableCardSideProps { }

const EducationCard = (props: EducationCardProps) => {
  const [isFlipped, toggleFlip] = useFlip(false);

  return (
    <FlippableCard color={props.color} isFlipped={isFlipped} handleFlip={toggleFlip}>
      <EducationCardFront {...props} isFlipped={isFlipped} handleFlip={toggleFlip} />
      <EducationCardBack {...props} isFlipped={isFlipped} handleFlip={toggleFlip} />
    </FlippableCard>
  );
};

export default EducationCard;
