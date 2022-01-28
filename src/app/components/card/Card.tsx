import { hoverableStyle } from "common/tailwind/CommonStyles";
import StyleableProps from "common/tailwind/props/StyleableProps";
import TailwindStyle from "common/tailwind/TailwindStyle";
import { useState } from "react";
import CardSide, { CardSideProps } from "./side/CardSide";

const cardStyle = (props: CardProps, front: boolean) =>
  TailwindStyle.builder()
    .add("card")
    .add("w-full h-96")
    .addIf("active", !front)
    .addIf(hoverableStyle(), props.back)
    .get();

const cardWrapperStyle = "card-wrapper relative w-full h-full";

export interface CardProps extends StyleableProps {
  id: string;
  front: CardSideProps;
  back?: CardSideProps;
  invertColors?: boolean;
}

const Card = (props: CardProps) => {
  const [front, setFront] = useState(true);

  const toggle = () => {
    setFront(!front);
  };

  return (
    <article className={cardStyle(props, !props.back || front)} onClick={toggle}>
      <div className={cardWrapperStyle}>
        <CardSide
          {...props.front}
          className={props.className}
          invertColors={props.invertColors}
          front
        />
        <CardSide
          {...props.back}
          className={props.className}
          invertColors={props.invertColors}
        />
      </div>
    </article>
  );
};

export default Card;
