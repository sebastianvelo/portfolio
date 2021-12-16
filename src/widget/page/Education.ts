import CardPropsBuilder from "common/entities/builder/CardPropsBuilder";
import Page from "common/entities/Page";
import Route from "common/entities/Route";
import { education } from "widget/data/SectionsData";
import getImg from "widget/helpers/getImg";
console.log(education)
const getEducationImg = (file: string) => getImg(file, "/education");

const joseHernandez = CardPropsBuilder.builder("jh")
  .setClassName("bg-gradient-to-b from-blue-200 to-blue-500")
  .setFront({
    subtitle: "Programming Technician",
    img: getEducationImg("jh"),
  });

const utn = CardPropsBuilder.builder("utn")
  .setClassName("bg-gradient-to-b from-gray-50 to-gray-400")
  .setFront({
    title: "UTN",
    subtitle: "Unity Game Development course",
    img: getEducationImg("utn"),
  });

const exo = CardPropsBuilder.builder("exo")
  .setClassName("bg-gradient-to-b from-gray-50 to-red-300")
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
