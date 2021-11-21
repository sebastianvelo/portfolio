import Card, { CardProps } from "../card/Card";

export interface CardRowProps {
  cards: CardProps[];
}

const CardRow = (props: CardRowProps) => {
  return (
    <div className="flex flex-col lg:flex-row lg:h-full">
      {props.cards.map((card) => (
        <Card {...card} />
      ))}
    </div>
  );
};

export default CardRow;
