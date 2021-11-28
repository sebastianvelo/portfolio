import Page from "common/entities/Page";
import Route from "common/entities/Route";
import { experience } from "widget/data/Indexes";
import { icbc, mercadolibre } from "widget/data/Jobs";

const Experience: Page = {
  route: Route.EXPERIENCE,
  rows: [
    {
      cards: [experience.toCardIndex()],
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
