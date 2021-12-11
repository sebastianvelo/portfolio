import CardPropsBuilder from "common/entities/builder/CardPropsBuilder";
import Model from "./Model";

interface IProject {
  title: string;
  description?: string;
  image: string;
  url: string;
}

class ProjectModel extends Model implements IProject {
  protected folder: string = "/projects";
  title: string;
  description?: string;
  image: string;
  url: string;

  constructor(project: IProject) {
    super();
    this.title = project.title;
    this.url = project.url;
    this.description = project.description;
    this.image = project.image;
  }

  getProjectImage = () => this.getImage(this.image);

  toCard(className?: string) {
    return CardPropsBuilder.builder(this.title)
      .setClassName(className)
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
