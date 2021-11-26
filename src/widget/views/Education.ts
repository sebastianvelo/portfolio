import CardPropsBuilder from "common/entities/builder/CardPropsBuilder";
import Page from "common/entities/Page";
import Route from "common/entities/Route";

const index = CardPropsBuilder.builder("index")
  .setClassName("bg-gradient-to-b from-blue-700 to-blue-900 text-gray-200")
  .toggleInvertColors()
  .setFront({
    title: "Education",
    img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/education-icon.png?raw=true",
    action: {
      type: "link",
      route: Route.HOME,
      children: "Home",
    },
  });

const joseHernandez = CardPropsBuilder.builder("jh")
  .setClassName("bg-sky-500")
  .setFront({
    title: "Programming Technician",
    img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/education/jh.png?raw=true",
  });

const utn = CardPropsBuilder.builder("utn")
  .setClassName("bg-gray-400")
  .setFront({
    title: "UTN",
    subtitle: "Unity Game Development course",
    img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/education/utn.gif?raw=true",
  });

const exo = CardPropsBuilder.builder("exo")
  .setClassName("bg-red-300")
  .setFront({
    title: "EXO",
    subtitle: "Advanced Programming in Java",
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
