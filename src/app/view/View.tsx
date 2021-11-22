import useScrollTop from "common/hooks/useScrollTop";
import { FunctionComponent } from "react";
import CardRow, { CardRowProps } from "../components/card-row/CardsRow";
export interface ViewProps {
  rows?: CardRowProps[];
}

const View: FunctionComponent<ViewProps> = (props: ViewProps) => {
  useScrollTop();
  return (
    <main className="view flex flex-col h-full">
      {props.rows?.map((row) => (
        <CardRow {...row} />
      ))}
    </main>
  );
};

export default View;
