import { textColorStyle, textColorHoverableStyle } from "common/tailwind/CommonStyles";
import ColorProps from "common/tailwind/props/ColorProps";
import ParentProps from "common/tailwind/props/ParentProps";
import StyleableProps from "common/tailwind/props/StyleableProps";
import TailwindStyle from "common/tailwind/TailwindStyle";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

const linkStyle = (props: ActionLinkProps) =>
  TailwindStyle.builder()
    .add(textColorStyle(props))
    .add(textColorHoverableStyle(props))
    .add(props.className)
    .get();

export interface ActionLinkProps
  extends StyleableProps,
    ColorProps,
    ParentProps {
  route?: string;
}

const ActionLink: FunctionComponent<ActionLinkProps> = (
  props: ActionLinkProps
) => (
  <Link to={props.route ?? ""} className={linkStyle(props)}>
    {props.children}
  </Link>
);

export default ActionLink;
