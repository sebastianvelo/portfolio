import Page from "common/entities/Page";
import Route from "common/entities/Route";
import { presentation, experience, skills, projects, education, contact } from "widget/data/SectionsData";

const Home: Page = {
  id: "home",
  route: Route.HOME,
  rows: [
    {
      cards: [presentation.toCard()],
    },
    {
      cards: [experience.toCard(), projects.toCard()],
    },
    {
      cards: [skills.toCard(), education.toCard()],
    },
    {
      cards: [contact.toCard()],
    },
  ],
};

export default Home;
