import { FunctionComponent } from "react";

interface TextProps {
  text: string;
}

const Text: FunctionComponent<TextProps> = (props: TextProps) => {
  return (
    <div className="text-center px-2">
      <h2 className={"text-xl md:text-3xl"}>{props.text}</h2>
    </div>
  );
};

export default Text;
