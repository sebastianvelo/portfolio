import CardPropsBuilder from "common/entities/builder/CardPropsBuilder";
import getImg from "widget/helpers/getImg";

abstract class Model {
  protected folder: string = "";

  abstract toCard(className?: string): CardPropsBuilder;

  protected getImage = (file: string) => getImg(file, this.folder);
}

export default Model;
