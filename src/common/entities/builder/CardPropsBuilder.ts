import { CardProps } from "app/components/card/Card";
import { CardSideProps } from "app/components/card/side/CardSide";
import Color from "common/tailwind/types/color/Color";

class CardPropsBuilder implements CardProps {
  id: string;
  front: CardSideProps = {};
  back?: CardSideProps;
  background?: Color;
  className?: string;

  private constructor(id: string) {
    this.id = id;
  }

  static builder = (id: string) => {
    return new CardPropsBuilder(id);
  };

  setFront = (side: CardSideProps) => {
    this.front = side;
    return this;
  };

  setBack = (side: CardSideProps) => {
    this.back = side;
    return this;
  };

  setBackground = (color: Color) => {
    this.background = color;
    return this;
  };

  setClassName = (className: string) => {
    this.className = className;
    return this;
  };
}

export default CardPropsBuilder;
