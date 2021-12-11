import Page from "common/entities/Page";
import Route from "common/entities/Route";
import { presentation, experience, skills, projects, education, contact } from "widget/data/Indexes";

const Index: Page = {
  id: "home",
  route: Route.HOME,
  rows: [
    {
      cards: [presentation.toCard(), experience.toCard()],
    },
    {
      cards: [skills.toCard(), projects.toCard()],
    },
    {
      cards: [education.toCard(), contact.toCard()],
    },
  ],
};

export default Index;
