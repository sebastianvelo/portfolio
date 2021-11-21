import { hoverableStyle } from "app/tailwind/CommonStyles";
import StyleableProps from "app/tailwind/props/StyleableProps";
import TailwindStyle from "app/util/TailwindStyle";
import Title from "./title/Title";

const cardSideStyle = (props: CardSideProps) =>
  TailwindStyle.builder()
    .add("flex flex-col items-center justify-around absolute")
    .add("px-2 py-4")
    .add("h-full w-full")
    .add("group")
    .add("transition-all ease-in-out duration-300")
    .addIf("card--front", props.front)
    .addIf("card--back", !props.front)
    .add(props.className)
    .add(hoverableStyle())
    .get();

export interface CardSideProps extends StyleableProps {
  front?: boolean;
  img?: string;
  title?: string;
  text?: string;
}

const CardSide = (props: CardSideProps) => {
  return (
    <div className={cardSideStyle(props)}>
      {props.img && (
        <img
          className="w-24 transition-transform transform ease-in-out group-hover:scale-150 group-hover:rotate-360 duration-700"
          src={props.img}
          alt={props.title}
        />
      )}
      <Title>{props.title}</Title>
      {props.text && (
        <div className="text-center group">
          <h2 className={"text-2xl"}>{props.text}</h2>
        </div>
      )}
    </div>
  );
};

export default CardSide;
