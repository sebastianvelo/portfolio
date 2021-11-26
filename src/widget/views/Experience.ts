import CardPropsBuilder from "common/entities/builder/CardPropsBuilder";
import Page from "common/entities/Page";
import Route from "common/entities/Route";
import { icbc, mercadolibre } from "widget/data/job/Jobs";

const index = CardPropsBuilder.builder("experience")
  .setClassName("bg-gradient-to-b from-orange-600 to-orange-800 text-gray-200")
  .toggleInvertColors()
  .setFront({
    title: "Experience",
    img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/experience-icon.png?raw=true",
    action: {
      type: "link",
      route: Route.HOME,
      children: "Home",
    },
  });

const Experience: Page = {
  route: Route.EXPERIENCE,
  rows: [
    {
      cards: [index],
    },
    {
      cards: [mercadolibre.toCard("bg-yellow-400")],
    },
    {
      cards: [icbc.toCard("bg-gray-200")],
    },
  ],
};

export default Experience;
