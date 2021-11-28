import CardPropsBuilder from "common/entities/builder/CardPropsBuilder";
import Page from "common/entities/Page";
import Route from "common/entities/Route";
import { education } from "widget/data/Indexes";

const joseHernandez = CardPropsBuilder.builder("jh")
  .setClassName("bg-sky-200")
  .setFront({
    title: "Programming Technician",
    img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/education/jh.png?raw=true",
  });

const utn = CardPropsBuilder.builder("utn")
  .setClassName("bg-gray-300")
  .setFront({
    title: "UTN",
    subtitle: "Unity Game Development course",
    img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/education/utn.gif?raw=true",
  });

const exo = CardPropsBuilder.builder("exo")
  .setClassName("bg-gray-200")
  .setFront({
    title: "EXO",
    subtitle: "Advanced Programming in Java",
    img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/education/exo.png?raw=true",
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
