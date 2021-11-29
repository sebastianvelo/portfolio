import useScrollTop from "common/hooks/useScrollTop";
import { FunctionComponent } from "react";
import CardRow, { CardRowProps } from "../components/card-row/CardsRow";
export interface ViewProps {
  id?: string;
  rows?: CardRowProps[];
  className?: string;
}

const View: FunctionComponent<ViewProps> = (props: ViewProps) => {
  useScrollTop();
  return (
    <main id={props.id} className={`view flex flex-col h-full ${props.className}`}>
      {props.rows?.map((row) => (
        <CardRow {...row} />
      ))}
    </main>
  );
};

export default View;
