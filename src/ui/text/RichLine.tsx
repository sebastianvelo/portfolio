interface RichLineProps {
  children: string;
}

const RichLine: React.FC<RichLineProps> = (props: RichLineProps) => {
  const children = props.children.trimStart();
  let className = "";

  if (children.startsWith("♦")) {
    className += " text-lg font-bold";
  }
  else if (children.startsWith("•")) {
    className += " ";
  } else if (children.startsWith("-")) {
    className += "text-sm"
  }

  if (children === "|") {
    className += " opacity-0";
  }

  return <p className={className.trim() || "text-sm 2xl:text-md"}>{children}</p>;
};


export default RichLine;
