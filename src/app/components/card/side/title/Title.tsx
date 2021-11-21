import TailwindStyle from "app/util/TailwindStyle";
import { FunctionComponent } from "react";

const letterStyle = (i: number) =>
  TailwindStyle.builder()
    .add("text-3xl px-1 transform")
    .add("transition-all ease-in-out duration-300")
    .add("group-hover:translate-y-10 group-hover:px-2")
    .get();

interface TitleProps {
  children?: string;
}

const Title: FunctionComponent<TitleProps> = (props: TitleProps) => {
  return (
    <div>
      {props.children &&
        props.children.split("").map((letter, i) => (
          <span
            className={letterStyle(i)}
            style={{ transitionDelay: `${i * 30}ms` }}
          >
            {letter}
          </span>
        ))}
    </div>
  );
};

export default Title;
