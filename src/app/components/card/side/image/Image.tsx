import TailwindStyle from "common/tailwind/TailwindStyle";
import { FunctionComponent } from "react";

const imageStyle = (props: ImageProps) =>
  TailwindStyle.builder()
    .add("w-24 scale-90")
    .add("transition-transform ease-in-out duration-700")
    .add("transform lg:group-hover:scale-125 group-hover:rotate-360 drop-shadow-xl filter")
    .addIf("filter invert", props.invertColors)
    .get();

interface ImageProps {
  src?: string;
  alt?: string;
  invertColors?: boolean;
}

const Image: FunctionComponent<ImageProps> = (props: ImageProps) => {
  return props.src ? (
    <img className={imageStyle(props)} src={props.src} alt={props.alt} />
  ) : (
    <></>
  );
};

export default Image;
