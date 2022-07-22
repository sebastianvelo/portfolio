import Page from "common/entities/Page";
import Route from "common/entities/Route";
import { projects } from "widget/data/SectionsData";
import {
  filmaholiks,
  hiringroom,
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
      cards: [filmaholiks.toCard(), hiringroom.toCard()],
    },
    {
      cards: [ pixelArt.toCard(), chat.toCard(),  resumeBuilder.toCard()],
    },
    {
      cards: [socialNetwork.toCard(), tictactoe.toCard(),],
    },
  ],
};

export default Projects;
