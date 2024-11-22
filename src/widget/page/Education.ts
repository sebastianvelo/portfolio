import CardPropsBuilder from "common/entities/builder/CardPropsBuilder";
import Page from "common/entities/Page";
import Route from "common/entities/Route";
import { education } from "widget/data/SectionsData";
import getImg from "widget/helpers/getImg";
console.log(education)
const getEducationImg = (file: string) => getImg(file, "/education");

const exo = CardPropsBuilder.builder("exo")
  .setClassName("bg-gradient-to-br from-red-600 to-red-300")
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
  .setClassName("bg-gradient-to-tr from-gray-600 to-gray-300")
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

const hongKong = CardPropsBuilder.builder("hongKong")
  .setClassName("bg-gradient-to-tl from-yellow-500 to-yellow-300")
  .setFront({
    title: "HKUST",
    subtitle: "Front-End JavaScript Frameworks: Angular",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/UST.svg/120px-UST.svg.png",
  });



const Education: Page = {
  route: Route.EDUCATION,
  rows: [
    {
      cards: [education.toCardIndex()],
    },
    {
      cards: [hongKong, platzi],
    },
    {
      cards: [utn, exo, joseHernandez],
    },
  ],
};

export default Education;
