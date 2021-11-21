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
    .addIf("bg-opacity-50", props.back)
    .addIf("active", !front)
    .add(props.className)
    .get();

export interface CardProps extends StyleableProps {
  id: string;
  front: CardSideProps;
  back?: CardSideProps;
  background?: Color;
}

const Card = (props: CardProps) => {
  const [front, toggle] = useState(true);

  return (
    <div
      className={cardStyle(props, !props.back || front)}
      onClick={() => toggle(!front)}
    >
      <div className="card-wrapper relative w-full h-full">
        <CardSide {...props.front} className={props.className} front />
        <CardSide {...props.back} className={props.className} />
      </div>
    </div>
  );
};

export default Card;
