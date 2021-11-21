import CardPropsBuilder from "common/entities/builder/CardPropsBuilder";
import Page from "common/entities/Page";
import Route from "common/entities/Route";

const index = CardPropsBuilder.builder("index")
  .setClassName("bg-blue-600 text-white")
  .setFront({
    title: "Education",
    img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/education-icon.png?raw=true",
    action: {
      type: "link",
      route: Route.HOME,
      children: "Go back",
    },
  });

const joseHernandez = CardPropsBuilder.builder("jh")
  .setClassName("bg-blue-400")
  .setFront({
    title: "Programming Technician",
    img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/education/jh.png?raw=true",
    row: true,
  });

const utn = CardPropsBuilder.builder("utn")
  .setClassName("bg-grey-400")
  .setFront({
    text: "Unity Game Development course",
    img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/education/utn.gif?raw=true",
  });

const exo = CardPropsBuilder.builder("exo")
  .setClassName("bg-red-400")
  .setFront({
    text: "Advanced Programming in Java",
    img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/education/exo.png?raw=true",
  });

const Education: Page = {
  route: Route.EDUCATION,
  rows: [
    {
      cards: [index],
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
