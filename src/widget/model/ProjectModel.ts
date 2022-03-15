import CardPropsBuilder from "common/entities/builder/CardPropsBuilder";
import TailwindStyle from "common/tailwind/TailwindStyle";
import Model from "./Model";

interface IProject {
  title: string;
  description?: string;
  image: string;
  url: string;
  className?: string;
}

class ProjectModel extends Model implements IProject {
  protected folder: string = "/projects";
  title: string;
  description?: string;
  image: string;
  url: string;
  className?: string;

  constructor(project: IProject) {
    super();
    this.title = project.title;
    this.url = project.url;
    this.description = project.description;
    this.image = project.image;
    this.className = project.className;
  }

  getClassName = () =>
    TailwindStyle.builder().add("bg-gradient-to-tl").add(this.className).get();

  getProjectImage = () => this.getImage(this.image);

  toCard() {
    return CardPropsBuilder.builder(this.title)
      .setClassName(this.getClassName())
      .setFront({
        title: this.title,
        img: this.getProjectImage(),
      })
      .setBack({
        img: this.getProjectImage(),
        text: this.description,
        action: {
          type: "anchor",
          children: `See ${this.title}`,
          url: this.url,
        },
      });
  }
}

export default ProjectModel;
