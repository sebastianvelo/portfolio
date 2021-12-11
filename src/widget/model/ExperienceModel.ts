import CardPropsBuilder from "common/entities/builder/CardPropsBuilder";
import TailwindStyle from "common/tailwind/TailwindStyle";
import Model from "./Model";

interface IExperience {
  company: string;
  position: string;
  start: number;
  end?: number;
  description?: string;
  image: string;
  className?: string;
}

class ExperienceModel extends Model implements IExperience {
  protected folder: string = "/experience";
  company: string;
  position: string;
  start: number;
  end?: number;
  description?: string;
  className?: string;
  image: string;

  constructor(job: IExperience) {
    super();
    this.company = job.company;
    this.position = job.position;
    this.start = job.start;
    this.description = job.description;
    this.end = job.end;
    this.image = job.image;
    this.className = job.className;
  }

  getText = () =>
    `${this.start} ${
      !this.end ? "- Now" : this.end === this.start ? "" : "-" + this.end
    }`;

  getJobImage = () => this.getImage(this.image);

  getClassName = () =>
    TailwindStyle.builder().add("bg-gradient-to-br").add(this.className).get();

  toCard() {
    return CardPropsBuilder.builder(this.company)
      .setClassName(this.getClassName())
      .setFront({
        title: this.position,
        subtitle: this.company,
        img: this.getJobImage(),
        text: this.getText(),
      })
      .setBack({
        img: this.getJobImage(),
        text: this.description,
      });
  }
}

export default ExperienceModel;
