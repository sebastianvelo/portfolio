import StyleableProps from "common/tailwind/props/StyleableProps";
import TailwindStyle from "common/tailwind/TailwindStyle";
import Action, { ActionProps } from "common/ui/components/action/Action";
import Image from "./image/Image";
import Title from "./title/Title";
import Subtitle from "./subtitle/Subtitle";

const cardSideStyle = (props: CardSideProps) =>
  TailwindStyle.builder()
    .add("flex flex-col absolute items-center justify-around")
    .add("px-2 py-4")
    .add("h-full w-full")
    .add("group")
    .add("transition-all ease-in-out duration-300")
    .addIf("card--front", props.front)
    .addIf("card--back", !props.front)
    .addIf("lg:flex-row lg:justify-center lg:space-x-10", props.row)
    .add(props.className)
    .get();

export interface CardSideProps extends StyleableProps {
  front?: boolean;
  img?: string;
  title?: string;
  subtitle?: string;
  action?: ActionProps;
  text?: string;
  row?: boolean;
  invertColors?: boolean;
}

const CardSide = (props: CardSideProps) => {
  return (
    <div className={cardSideStyle(props)}>
      <Image src={props.img} alt={props.title} invertColors={props.invertColors} />
      {props.title && <Title>{props.title}</Title>}
      {props.subtitle && <Subtitle>{props.subtitle}</Subtitle>}
      {props.text && <p className="text-justify lg:text-2xl px-6 font-extralight">{props.text}</p>}
      {props.action && (
        <Action
          {...props.action}
          className={
            "bg-black text-gray-200 bg-opacity-50 hover:bg-opacity-100 transition-all w-full text-center text-xl p-2 absolute bottom-0 font-bold"
          }
        />
      )}
    </div>
  );
};

export default CardSide;
