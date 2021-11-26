import TailwindStyle from "common/tailwind/TailwindStyle";
import { FunctionComponent } from "react";

const letterStyle = () =>
  TailwindStyle.builder()
    .add("text-3xl px-1 py-2 font-bold")
    .add("transition-all ease-in-out duration-500")
    .add("transform")
    .add("border-dashed border-current")
    .add("text-current")
    .add("group-hover:px-2 lg:group-hover:text-4xl")
    //.add("group-hover:border-t-2 group-hover:border-b-2 ")
    .get();

interface TitleProps {
  children?: string;
}

const Title: FunctionComponent<TitleProps> = (props: TitleProps) => {
  return (
    <div className="text-center">
      {props.children &&
        props.children.split("").map((letter, i) => (
          <span
            className={letterStyle()}
            style={{ transitionDelay: `${i * 25}ms` }}
          >
            {letter}
          </span>
        ))}
    </div>
  );
};

export default Title;
