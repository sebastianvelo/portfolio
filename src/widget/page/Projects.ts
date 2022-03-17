import Page from "common/entities/Page";
import Route from "common/entities/Route";
import { projects } from "widget/data/SectionsData";
import {
  ifdb,
  socialNetwork,
  chat,
  resumeBuilder,
  pixelArt,
  tictactoe,
} from "widget/data/ProjectsData";

const Projects: Page = {
  route: Route.PROJECTS,
  rows: [
    {
      cards: [projects.toCardIndex()],
    },
    {
      cards: [ifdb.toCard(), socialNetwork.toCard()],
    },
    {
      cards: [tictactoe.toCard(), resumeBuilder.toCard()],
    },
    {
      cards: [pixelArt.toCard(), chat.toCard()],
    },
  ],
};

export default Projects;
