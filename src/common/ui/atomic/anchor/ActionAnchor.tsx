import {
  textColorStyle,
  textColorHoverableStyle,
} from "common/tailwind/CommonStyles";
import ColorProps from "common/tailwind/props/ColorProps";
import ParentProps from "common/tailwind/props/ParentProps";
import StyleableProps from "common/tailwind/props/StyleableProps";
import TailwindStyle from "common/tailwind/TailwindStyle";
import { FunctionComponent } from "react";

const anchorStyle = (props: ActionAnchorProps) =>
  TailwindStyle.builder()
    .add(textColorStyle(props))
    .add(textColorHoverableStyle(props))
    .add(props.className)
    .get();

export interface ActionAnchorProps
  extends StyleableProps,
    ColorProps,
    ParentProps {
  url?: string;
}

const ActionAnchor: FunctionComponent<ActionAnchorProps> = (
  props: ActionAnchorProps
) => (
  <a
    className={anchorStyle(props)}
    href={props.url}
    target="_blank"
    rel="noreferrer"
  >
    {props.children}
  </a>
);

export default ActionAnchor;
