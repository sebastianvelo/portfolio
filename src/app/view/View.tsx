import { FunctionComponent } from "react";
import CardRow, { CardRowProps } from "../components/card-row/CardsRow";

export interface ViewProps {
  rows?: CardRowProps[];
}

const View: FunctionComponent<ViewProps> = (props: ViewProps) => {
  return (
    <div className="flex flex-col h-full">
      {props.rows?.map((row) => (
        <CardRow {...row} />
      ))}
    </div>
  );
};

export default View;
