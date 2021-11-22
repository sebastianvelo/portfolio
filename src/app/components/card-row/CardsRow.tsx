import Card, { CardProps } from "../card/Card";

export interface CardRowProps {
  cards: CardProps[];
}

const CardRow = (props: CardRowProps) => {
  return (
    <div className="flex flex-col lg:flex-row h-screen lg:h-96">
      {props.cards.map((card) => (
        <Card {...card} />
      ))}
    </div>
  );
};

export default CardRow;
