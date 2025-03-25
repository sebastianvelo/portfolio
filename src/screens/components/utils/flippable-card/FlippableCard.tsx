import { ReactNode } from "react";
import FlippableCardBack from "./FlippableCardBack";
import FlippableCardFront from "./FlippableCardFront";
import Card from "../card/Card";

export interface GenericFlippableCardSideProps {
  isFlipped: boolean;
  handleFlip: () => void;
}

export interface FlippableCardSideProps extends GenericFlippableCardSideProps {
  children: ReactNode;
}

interface FlippableCardProps extends GenericFlippableCardSideProps {
  color: string;
  children: [JSX.Element, JSX.Element];
}

const FlippableCard = (props: FlippableCardProps) => {
  return (
    <Card color={props.color}>
      <div className={`relative w-62 2xl:w-72 h-96 duration-700 card-container ${props.isFlipped ? "rotate-y-180" : ""}`}>
        <FlippableCardFront {...props} children={props.children[0]} />
        <FlippableCardBack {...props} children={props.children[1]} />
      </div>
    </Card>
  );
};

export default FlippableCard;
