import TailwindStyle from "common/tailwind/TailwindStyle";
import { FunctionComponent } from "react";

const wordStyle = (visibility: string) =>
  TailwindStyle.builder()
    .add("text-3xl px-1 py-2 font-bold")
    .add("text-current")
    .add(visibility)
    .get();

const letterStyle = () =>
  TailwindStyle.builder()
    .add(wordStyle("hidden md:inline"))
    .add("transition-all ease-in-out duration-500")
    .add("transform")
    .add("group-hover:px-2 lg:group-hover:text-4xl")
    .get();

interface TitleProps {
  children?: string;
}

const Title: FunctionComponent<TitleProps> = (props: TitleProps) => {
  return (
    <div className="text-center">
      {props.children &&
        [...props.children].map((letter, i) => (
          <span
            className={letterStyle()}
            style={{ transitionDelay: `${i * 25}ms` }}
          >
            {letter}
          </span>
        ))}
      <span className={wordStyle("block md:hidden")}>
        {props.children}
      </span>
    </div>
  );
};

export default Title;
