import CardPropsBuilder from "common/entities/builder/CardPropsBuilder";

abstract class Model {
  protected folder: string = "";

  abstract toCard(className?: string): CardPropsBuilder;

  protected getImage = (file: string) =>
    `https://github.com/SebastianVelo/portfolio/blob/main/src/assets${this.folder}/${file}.png?raw=true`;
}

export default Model;
