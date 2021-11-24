import { bgColorStyle, hoverableStyle } from "common/tailwind/CommonStyles";
import StyleableProps from "common/tailwind/props/StyleableProps";
import Color from "common/tailwind/types/color/Color";
import TailwindStyle from "common/tailwind/TailwindStyle";
import { useState } from "react";
import CardSide, { CardSideProps } from "./side/CardSide";

const cardStyle = (props: CardProps, front: boolean) =>
  TailwindStyle.builder()
    .add("card")
    .add("w-full h-full")
    .add(bgColorStyle({ color: props.background }))
    .addIf(hoverableStyle(), props.back)
    .addIf("active", !front)
    .get();

const cardWrapperStyle = "card-wrapper relative w-full h-full";

export interface CardProps extends StyleableProps {
  id: string;
  front: CardSideProps;
  back?: CardSideProps;
  background?: Color;
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
