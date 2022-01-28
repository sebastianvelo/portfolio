import CardPropsBuilder from "common/entities/builder/CardPropsBuilder";
import Page from "common/entities/Page";
import Route from "common/entities/Route";
import { education } from "widget/data/SectionsData";
import getImg from "widget/helpers/getImg";
console.log(education)
const getEducationImg = (file: string) => getImg(file, "/education");

const joseHernandez = CardPropsBuilder.builder("jh")
  .setClassName("bg-gradient-to-t from-blue-300 to-blue-600")
  .setFront({
    subtitle: "Programming Technician",
    img: getEducationImg("jh"),
  });

const utn = CardPropsBuilder.builder("utn")
  .setClassName("bg-gradient-to-t from-gray-200 to-gray-400")
  .setFront({
    title: "UTN",
    subtitle: "Unity Game Development course",
    img: getEducationImg("utn"),
  });

const exo = CardPropsBuilder.builder("exo")
  .setClassName("bg-gradient-to-t from-red-300 to-red-500")
  .setFront({
    title: "EXO",
    subtitle: "Advanced Programming in Java",
    img: getEducationImg("exo"),
  });

const Education: Page = {
  route: Route.EDUCATION,
  rows: [
    {
      cards: [education.toCardIndex()],
    },
    {
      cards: [joseHernandez],
    },
    {
      cards: [utn, exo],
    },
  ],
};

export default Education;
