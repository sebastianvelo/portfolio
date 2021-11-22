import TailwindStyle from "common/tailwind/TailwindStyle";
import { FunctionComponent } from "react";

const letterStyle = (i: number) =>
  TailwindStyle.builder()
    .add("text-4xl px-1 transform font-bold")
    .add("transition-all ease-in-out duration-300")
    .add("lg:group-hover:px-2")
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
