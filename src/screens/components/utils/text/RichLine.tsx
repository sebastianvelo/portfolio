interface RichLineProps {
  children: string;
}

const RichLine: React.FC<RichLineProps> = (props: RichLineProps) => {
  const children = props.children.trimStart();
  // Clase base para el texto
  let className = "";

  // Si la línea comienza con "○", se trata de un título
  if (children.startsWith("○")) {
    className += " text-lg font-bold";
  }
  // Si la línea comienza con "•", se trata de un item o subtítulo
  else if (children.startsWith("•")) {
    className += " ";
  } else if (children.startsWith("-")) {
    className += "text-sm"
  }

  // Si la línea es "|" se oculta (salto de línea)
  if (children === "|") {
    className += " opacity-0";
  }

  return <p className={className.trim() || "text-sm 2xl:text-md"}>{children}</p>;
};


export default RichLine;
