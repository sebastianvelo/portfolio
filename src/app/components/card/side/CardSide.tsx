import StyleableProps from "common/tailwind/props/StyleableProps";
import TailwindStyle from "common/tailwind/TailwindStyle";
import Action, { ActionProps } from "common/ui/components/action/Action";
import Title from "./title/Title";

const cardSideStyle = (props: CardSideProps) =>
  TailwindStyle.builder()
    .add("flex absolute flex-col items-center justify-around")
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
  text?: string;
  action?: ActionProps;
  row?: boolean;
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
      {props.title && <Title>{props.title}</Title>}
      {props.text && (
        <div className="text-center group">
          <h2 className={"text-2xl"}>{props.text}</h2>
        </div>
      )}
      {props.action && (
        <Action
          {...props.action}
          className={
            "bg-black text-white bg-opacity-50 hover:bg-opacity-100 transition-all w-full text-center text-xl p-2 absolute bottom-0"
          }
        />
      )}
    </div>
  );
};

export default CardSide;
