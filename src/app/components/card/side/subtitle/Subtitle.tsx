import { FunctionComponent } from "react";

interface SubtitleProps {
  children: string;
}

const Subtitle: FunctionComponent<SubtitleProps> = (props: SubtitleProps) => {
  return (
    <div className="text-center px-2">
      <h2 className={"text-xl md:text-3xl"}>{props.children}</h2>
    </div>
  );
};

export default Subtitle;
