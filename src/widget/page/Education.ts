import CardPropsBuilder from "common/entities/builder/CardPropsBuilder";
import Page from "common/entities/Page";
import Route from "common/entities/Route";
import { education } from "widget/data/SectionsData";
import getImg from "widget/helpers/getImg";
console.log(education)
const getEducationImg = (file: string) => getImg(file, "/education");

const exo = CardPropsBuilder.builder("exo")
  .setClassName("bg-gradient-to-br from-red-300 to-red-600")
  .setFront({
    title: "EXO",
    subtitle: "Advanced Programming in Java",
    img: getEducationImg("exo"),
  });

const platzi = CardPropsBuilder.builder("platzi")
  .setClassName("bg-gradient-to-bl from-green-300 to-green-600")
  .setFront({
    title: "Platzi",
    subtitle: "JavaScript Course",
    img: getEducationImg("platzi"),
  });

const utn = CardPropsBuilder.builder("utn")
  .setClassName("bg-gradient-to-tr from-gray-300 to-gray-600")
  .setFront({
    title: "UTN",
    subtitle: "Unity Game Development course",
    img: getEducationImg("utn"),
  });

const joseHernandez = CardPropsBuilder.builder("jh")
  .setClassName("bg-gradient-to-tl from-blue-300 to-blue-600")
  .setFront({
    subtitle: "Programming Technician",
    img: getEducationImg("jh"),
  });



const Education: Page = {
  route: Route.EDUCATION,
  rows: [
    {
      cards: [education.toCardIndex()],
    },
    {
      cards: [exo, platzi],
    },
    {
      cards: [utn, joseHernandez],
    },
  ],
};

export default Education;
