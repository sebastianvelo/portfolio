import CardPropsBuilder from "common/entities/builder/CardPropsBuilder";
import Route from "common/entities/Route";
import Model from "./Model";

interface IIndex {
  id: string;
  className: string;
  title: string;
  subtitle?: string;
  text: string;
  img: string;
  route?: Route;
  button?: string;
}

class IndexModel extends Model implements IIndex {
  id: string;
  className: string;
  title: string;
  subtitle?: string;
  text: string;
  img: string;
  route?: Route;
  button?: string;

  constructor(index: IIndex) {
    super();
    this.id = index.id;
    this.className = index.className;
    this.title = index.title;
    this.subtitle = index.subtitle;
    this.text = index.text;
    this.img = index.img;
    this.route = index.route;
    this.button = index.button;
  }

  toCard() {
    return CardPropsBuilder.builder(this.id)
      .setClassName(this.className)
      .toggleInvertColors()
      .setFront({
        title: this.title,
        subtitle: this.subtitle,
        img: this.img,
      })
      .setBack({
        img: this.img,
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
      .setClassName(this.className)
      .toggleInvertColors()
      .setFront({
        title: this.title,
        img: this.img,
        action: {
          type: "link",
          route: Route.HOME,
          children: "Home",
        },
      });
  }
}

export default IndexModel;
