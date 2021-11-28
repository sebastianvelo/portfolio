import Page from "common/entities/Page";
import Route from "common/entities/Route";
import TailwindStyle from "common/tailwind/TailwindStyle";
import { skills } from "widget/data/Indexes";

const skillStyle = (color: string, light?: boolean) =>
  TailwindStyle.builder()
    .add("bg-gradient-to-b")
    .addIf("text-light", light)
    .add(color)
    .get();

const Skills: Page = {
  route: Route.SKILLS,
  rows: [
    {
      cards: [skills.toCardIndex()],
    },
    {
      cards: [
        {
          id: "javascript",
          className: skillStyle("from-yellow-200 to-yellow-400"),
          front: {
            title: "JavaScript",
            img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/skills/js.png?raw=true",
          },
        },
        {
          id: "typescript",
          className: skillStyle("from-blue-500 to-blue-800", true),
          front: {
            title: "Typescript",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png",
          },
        },
        {
          id: "react",
          className: skillStyle("from-sky-500 to-sky-800", true),
          front: {
            title: "React",
            img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/skills/react.png?raw=true",
          },
        },
      ],
    },
    {
      cards: [
        {
          id: "tailwind",
          className: skillStyle("from-sky-700 to-sky-400"),
          front: {
            title: "Tailwind",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png", //TODO SUBIR A GIT
          },
        },
        {
          id: "sass",
          className: skillStyle("from-pink-400 to-pink-800", true),
          front: {
            title: "SASS",
            img: "https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png",
          },
        },
      ],
    },
    {
      cards: [
        {
          id: "java",
          className: skillStyle("from-red-300 to-blue-300"),
          front: {
            title: "Java",
            img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/skills/java.png?raw=true",
          },
        },
        {
          id: "spring",
          className: skillStyle("from-green-200 to-esmerald-400"),
          front: {
            title: "Spring",
            img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/skills/spring.png?raw=true",
          },
        },
        {
          id: "spark",
          className: skillStyle("from-red-700 to-orange-700", true),
          front: {
            title: "Spark",
            img: "https://www.pngkey.com/png/full/441-4411566_spark-logo-png-transparent-spark-java-logo-png.png", //TODO SUBIR A GIT
          },
        },
      ],
    },
    {
      cards: [
        {
          id: "git",
          className: skillStyle("from-gray-100 to-gray-400"),
          front: {
            title: "GIT",
            img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/skills/git.png?raw=true",
          },
        },
        {
          id: "mysql",
          className: skillStyle("from-orange-100 to-sky-900", true),
          front: {
            title: "MySQL",
            img: "https://d1.awsstatic.com/asset-repository/products/amazon-rds/1024px-MySQL.ff87215b43fd7292af172e2a5d9b844217262571.png", //TODO SUBIR A GIT
          },
        },
      ],
    },
  ],
};

export default Skills;
