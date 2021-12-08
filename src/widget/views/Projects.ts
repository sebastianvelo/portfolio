import Page from "common/entities/Page";
import Route from "common/entities/Route";
import { projects } from "widget/data/Indexes";
import {
  ifdb,
  socialNetwork,
  chat,
  resumeBuilder,
  pixelArt,
} from "widget/data/Projects";

const Projects: Page = {
  route: Route.PROJECTS,
  rows: [
    {
      cards: [projects.toCardIndex()],
    },
    {
      cards: [ifdb.toCard("bg-gradient-to-b from-yellow-300 to-yellow-600")],
    },
    {
      cards: [
        socialNetwork.toCard("bg-gradient-to-b from-rose-300 to-rose-600"),
        pixelArt.toCard("bg-gradient-to-b from-indigo-300 to-indigo-600"),
      ],
    },
    {
      cards: [
        chat.toCard("bg-gradient-to-b from-sky-300 to-sky-600"),
        resumeBuilder.toCard("bg-gradient-to-b from-esmerald-300 to-esmerald-600"),
      ],
    },
  ],
};

export default Projects;
