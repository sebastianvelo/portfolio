import { ReactNode } from "react";

export interface CardProps {
  color: string;
  children: ReactNode;
}

const Card = (props: CardProps) => {
  return (
    <div className={`grayscale-55 hover:filter-none text-black relative perspective rounded-xl flex-none font-mono transition-all duration-500 [background-size:200%] [background-position:0%_0%] hover:[background-position:100%_0%] ${props.color}`}>
      {props.children}
    </div>
  );
};

export default Card;
