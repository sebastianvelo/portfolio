import CardPropsBuilder from "common/entities/builder/CardPropsBuilder";
import Page from "common/entities/Page";
import Route from "common/entities/Route";

const index = CardPropsBuilder.builder("experience")
  .setClassName("bg-orange-600 text-gray-200")
  .toggleInvertColors()
  .setFront({
    title: "Experience",
    img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/experience-icon.png?raw=true",
    action: {
      type: "link",
      route: Route.HOME,
      children: "Go back",
    },
  });

const mercadolibre = CardPropsBuilder.builder("mercadolibre")
  .setClassName("bg-yellow-400")
  .setFront({
    title: "Software Engineer",
    img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/experience/meli.png?raw=true",
    text: "MercadoLibre"
  })
  .setBack({
    img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/experience/meli.png?raw=true",
    text: "I'm currently working as a Software Engineer at MercadoLibre, developing both back-end and front-end.",
  });

const icbc2 = CardPropsBuilder.builder("icbcssr")
  .setClassName("bg-gray-200")
  .setFront({
    title: "Software Developer",
    img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/experience/icbc.png?raw=true",
    text: "ICBC"
  })
  .setBack({
    img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/experience/icbc.png?raw=true",
    text: "I was in the ICBC's Corporate Home banking team, developing projects from beginning to end and mentor junior developers on the team.",
  });

const galicia = CardPropsBuilder.builder("galicia")
  .setClassName("bg-orange-600 text-gray-200")
  .setFront({
    title: "Software Developer",
    img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/experience/galicia.png?raw=true",
    text: "Banco Galicia"
  });

const icbc1 = CardPropsBuilder.builder("icbcjr")
  .setClassName("bg-gray-200")
  .setFront({
    title: "Jr. Software Developer",
    img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/experience/icbc.png?raw=true",
    text: "ICBC"
  })
  .setBack({
    img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/experience/icbc.png?raw=true",
    text: "In my first professional experience, I worked developing software for ICBC's Corporate Home banking with Java 6, JSP and Struts.",
  });

const Experience: Page = {
  route: Route.EXPERIENCE,
  rows: [
    {
      cards: [index],
    },
    {
      cards: [mercadolibre],
    },
    {
      cards: [icbc2],
    },
    {
      cards: [galicia],
    },
    {
      cards: [icbc1],
    },
  ],
};

export default Experience;
