import CardPropsBuilder from "common/entities/builder/CardPropsBuilder";
import TailwindStyle from "common/tailwind/TailwindStyle";
import Model from "./Model";

interface IContact {
  title: string;
  label?: string;
  image: string;
  url: string;
  className?: string;
}

class ContactModel extends Model implements IContact {
  protected folder: string = "/contact";
  title: string;
  label?: string;
  image: string;
  url: string;
  className?: string;

  constructor(contact: IContact) {
    super();
    this.title = contact.title;
    this.url = contact.url;
    this.label = contact.label;
    this.image = contact.image;
    this.className = contact.className;
  }

  getContactImage = () => this.getImage(this.image);

  getClassName = () =>
    TailwindStyle.builder().add("bg-gradient-to-b").add(this.className).get();

  toCard() {
    return CardPropsBuilder.builder(this.title)
      .setClassName(this.getClassName())
      .setFront({
        title: this.title,
        img: this.getContactImage(),
        action: {
          type: "anchor",
          children: this.label,
          url: this.url,
        },
      });
  }
}

export default ContactModel;
