import CardPropsBuilder from "common/entities/builder/CardPropsBuilder";
import Route from "common/entities/Route";
import TailwindStyle from "common/tailwind/TailwindStyle";
import Model from "./Model";

interface ISection {
  id: string;
  className: string;
  title: string;
  subtitle?: string;
  text: string;
  image: string;
  route?: Route;
  button?: string;
}

class SectionModel extends Model implements ISection {
  id: string;
  className: string;
  title: string;
  subtitle?: string;
  text: string;
  image: string;
  route?: Route;
  button?: string;

  constructor(index: ISection) {
    super();
    this.id = index.id;
    this.className = index.className;
    this.title = index.title;
    this.subtitle = index.subtitle;
    this.text = index.text;
    this.image = index.image;
    this.route = index.route;
    this.button = index.button;
  }

  getIndexImage = () => this.getImage(this.image);
  
  getClassName = () =>
    TailwindStyle.builder()
      .add("bg-gradient-to-t text-gray-200")
      .add(this.className)
      .get();

  toCard() {
    return CardPropsBuilder.builder(this.id)
      .setClassName(this.getClassName())
      .toggleInvertColors()
      .setFront({
        title: this.title,
        subtitle: this.subtitle,
        img: this.getIndexImage(),
      })
      .setBack({
        img: this.getIndexImage(),
        text: this.text,
        action: this.route
          ? {
              type: "link",
              route: this.route,
              children: this.button,
            }
          : undefined,
      });
  }

  toCardIndex() {
    return CardPropsBuilder.builder(this.id)
    .setClassName(this.getClassName())
      .toggleInvertColors()
      .setFront({
        title: this.title,
        img: this.getIndexImage(),
        action: {
          type: "link",
          route: Route.HOME,
          children: "Home",
        },
      });
  }
}

export default SectionModel;
