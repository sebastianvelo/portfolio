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
    .get();

interface TitleProps {
  children?: string;
}

const Title: FunctionComponent<TitleProps> = (props: TitleProps) => {
  return (
    <div>
      {props.children &&
        [...props.children].map((letter, i) => (
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
