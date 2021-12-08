import Page from "common/entities/Page";
import Route from "common/entities/Route";
import { experience } from "widget/data/Indexes";
import { icbc, mercadolibre, despegar } from "widget/data/Jobs";

const Experience: Page = {
  route: Route.EXPERIENCE,
  rows: [
    {
      cards: [experience.toCardIndex()],
    },
    {
      cards: [despegar.toCard("bg-gradient-to-br from-indigo-400 to-indigo-700")],
    },
    {
      cards: [
        mercadolibre.toCard("bg-gradient-to-br from-yellow-200 to-yellow-500"),
      ],
    },
    {
      cards: [icbc.toCard("bg-gradient-to-br from-red-200 to-red-500")],
    },
  ],
};

export default Experience;
