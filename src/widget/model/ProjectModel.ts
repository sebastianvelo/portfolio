import CardPropsBuilder from "common/entities/builder/CardPropsBuilder";
import Model from "./Model";

interface IProject {
  title: string;
  description?: string;
  img: string;
  url: string;
}

class ProjectModel extends Model implements IProject {
  title: string;
  description?: string;
  img: string;
  url: string;

  constructor(project: IProject) {
    super();
    this.title = project.title;
    this.url = project.url;
    this.description = project.description;
    this.img = project.img;
  }

  toCard(className?: string) {
    return CardPropsBuilder.builder(this.title)
      .setClassName(className)
      .setFront({
        title: this.title,
        img: this.img,
      })
      .setBack({
        img: this.img,
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
