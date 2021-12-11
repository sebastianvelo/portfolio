import CardPropsBuilder from "common/entities/builder/CardPropsBuilder";
import Model from "./Model";

interface IJob {
  company: string;
  position: string;
  start: number;
  end?: number;
  description?: string;
  image: string;
}

class JobModel extends Model implements IJob {
  protected folder: string = "/experience";
  company: string;
  position: string;
  start: number;
  end?: number;
  description?: string;
  image: string;

  constructor(job: IJob) {
    super();
    this.company = job.company;
    this.position = job.position;
    this.start = job.start;
    this.description = job.description;
    this.end = job.end;
    this.image = job.image;
  }

  getText = () =>
    `${this.start} ${
      !this.end ? "- Now" : this.end === this.start ? "" : "-" + this.end
    }`;

  getJobImage = () => this.getImage(this.image);

  toCard(className?: string) {
    return CardPropsBuilder.builder(this.company)
      .setClassName(className)
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

export default JobModel;
