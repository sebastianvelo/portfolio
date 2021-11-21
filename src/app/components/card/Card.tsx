import { bgColorStyle } from "app/tailwind/CommonStyles";
import StyleableProps from "app/tailwind/props/StyleableProps";
import Color from "app/tailwind/types/color/Color";
import TailwindStyle from "app/util/TailwindStyle";
import { useState } from "react";
import CardSide, { CardSideProps } from "./side/CardSide";

const cardStyle = (props: CardProps, front: boolean) =>
  TailwindStyle.builder()
    .add("card")
    .add("w-full h-96 lg:h-full")
    .add(bgColorStyle({ color: props.background }))
    .addIf("active", !front)
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
    <div className={cardStyle(props, front)} onClick={() => toggle(!front)}>
      <div className="card-wrapper relative w-full h-96 lg:h-full">
        <CardSide {...props.front} className={props.className} front />
        <CardSide {...props.back} className={props.className} />
      </div>
    </div>
  );
};

export default Card;
