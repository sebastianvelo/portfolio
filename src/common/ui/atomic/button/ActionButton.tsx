import { buttonSizeStyle, transitionStyle, bgColorStyle, bgColorHoverableStyle, borderColorStyle, bgColorQuietHoverableStyle, textColorStyle } from "common/tailwind/CommonStyles";
import ColorProps from "common/tailwind/props/ColorProps";
import ParentProps from "common/tailwind/props/ParentProps";
import SizeProps from "common/tailwind/props/SizeProps";
import StyleableProps from "common/tailwind/props/StyleableProps";
import TailwindStyle from "common/tailwind/TailwindStyle";
import { FunctionComponent } from "react";

const buttonStyle = (props: ActionButtonProps) =>
  TailwindStyle.builder()
    .add(props.className)
    .add("rounded-md text-center border")
    .add(buttonSizeStyle(props))
    .add(transitionStyle())
    .addIf(bgColorStyle(props), !props.quiet)
    .addIf(bgColorHoverableStyle(props), !props.quiet)
    .add(borderColorStyle(props))
    .addIf(bgColorQuietHoverableStyle(props), props.quiet)
    .addIf(textColorStyle({}), props.quiet)
    .get();

export interface ActionButtonProps
  extends StyleableProps,
    ColorProps,
    ParentProps,
    SizeProps {
  onClick?: (...x: any[]) => void;
  quiet?: boolean;
  disabled?: boolean;
}

const ActionButton: FunctionComponent<ActionButtonProps> = (
  props: ActionButtonProps
) => (
  <button
    disabled={props.disabled}
    className={buttonStyle(props)}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

export default ActionButton;
