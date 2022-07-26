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
  taxCalculator,
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
      cards: [resumeBuilder.toCard(), chat.toCard(), pixelArt.toCard(), tictactoe.toCard(),],
    },
    {
      cards: [taxCalculator.toCard(), socialNetwork.toCard(),],
    },
  ],
};

export default Projects;
