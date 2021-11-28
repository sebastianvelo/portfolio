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
      cards: [projects.toCardIndex(), ifdb.toCard("bg-gradient-to-b from-yellow-200 to-yellow-500")],
    },
    {
      cards: [
        socialNetwork.toCard("bg-gradient-to-b from-rose-200 to-rose-500"),
        chat.toCard("bg-gradient-to-b from-sky-200 to-sky-500"),
      ],
    },
    {
      cards: [
        pixelArt.toCard("bg-gradient-to-b from-pink-200 to-pink-500"),
        resumeBuilder.toCard("bg-gradient-to-b from-esmerald-200 to-esmerald-500"),
      ],
    },
  ],
};

export default Projects;
