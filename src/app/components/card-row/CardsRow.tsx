import Card, { CardProps } from "../card/Card";

export interface CardRowProps {
  cards: CardProps[];
}

const CardRow = (props: CardRowProps) => {
  return (
    <section className="flex flex-col lg:flex-row h-screen lg:h-96">
      {props.cards.map((card) => (
        <Card {...card} />
      ))}
    </section>
  );
};

export default CardRow;
