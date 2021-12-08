import CardPropsBuilder from "common/entities/builder/CardPropsBuilder";
import Model from "./Model";

interface IJob {
  company: string;
  position: string;
  start: number;
  end?: number;
  description?: string;
  img: string;
}

class JobModel extends Model implements IJob {
  company: string;
  position: string;
  start: number;
  end?: number;
  description?: string;
  img: string;

  constructor(job: IJob) {
    super();
    this.company = job.company;
    this.position = job.position;
    this.start = job.start;
    this.description = job.description;
    this.end = job.end;
    this.img = job.img;
  }

  toCard(className?: string) {
    return CardPropsBuilder.builder(this.company)
      .setClassName(className)
      .setFront({
        title: this.position,
        img: this.img,
        subtitle: this.company,
        text: `${this.start} ${
          !this.end ? "- Now" : this.end === this.start ? "" : "-" + this.end
        }`,
      })
      .setBack({
        img: this.img,
        text: this.description,
      });
  }
}

export default JobModel;
