import Page from "common/entities/Page";
import Route from "common/entities/Route";
import {
  chat,
  filmaholiks,
  hiringroom,
  pixelArt,
  resumeBuilder,
  tictactoe,
  wikirdle
} from "widget/data/ProjectsData";
import { projects } from "widget/data/SectionsData";

const Projects: Page = {
  route: Route.PROJECTS,
  rows: [
    {
      cards: [projects.toCardIndex()],
    },
    {
      cards: [filmaholiks.toCard(), wikirdle.toCard()],
    },
    {
      cards: [hiringroom.toCard(), pixelArt.toCard()],
    },
    {
      cards: [resumeBuilder.toCard(), chat.toCard(), tictactoe.toCard(),],
    },
    {
      cards: []//[taxCalculator.toCard(), socialNetwork.toCard(),],
    },
  ],
};

export default Projects;
