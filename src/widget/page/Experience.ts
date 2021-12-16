import Page from "common/entities/Page";
import Route from "common/entities/Route";
import { experience } from "widget/data/SectionsData";
import { icbc, mercadolibre, despegar } from "widget/data/ExperienceData";

const Experience: Page = {
  route: Route.EXPERIENCE,
  rows: [
    {
      cards: [experience.toCardIndex()],
    },
    {
      cards: [despegar.toCard()],
    },
    {
      cards: [mercadolibre.toCard()],
    },
    {
      cards: [icbc.toCard()],
    },
  ],
};

export default Experience;
