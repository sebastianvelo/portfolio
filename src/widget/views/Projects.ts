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
      cards: [ifdb.toCard("bg-yellow-400")],
    },
    {
      cards: [
        socialNetwork.toCard("bg-pink-400"),
        chat.toCard("bg-sky-400"),
      ],
    },
    {
      cards: [
        resumeBuilder.toCard("bg-esmerald-400"),
        pixelArt.toCard("bg-orange-400"),
      ],
    },
  ],
};

export default Projects;
