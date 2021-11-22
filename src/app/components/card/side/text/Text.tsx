import { FunctionComponent } from "react";

interface TextProps {
  text: string;
}

const Text: FunctionComponent<TextProps> = (props: TextProps) => {
  return (
    <div className="text-center">
      <h2 className={"text-3xl"}>{props.text}</h2>
    </div>
  );
};

export default Text;
