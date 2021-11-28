import Page from "common/entities/Page";
import Route from "common/entities/Route";
import { skills } from "widget/data/Indexes";

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
          className: "bg-yellow-400",
          front: {
            title: "JavaScript",
            img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/skills/js.png?raw=true",
          },
        },
        {
          id: "typescript",
          className: "bg-blue-600 text-gray-200",
          front: {
            title: "Typescript",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png",
          },
        },
        {
          id: "react",
          className: "bg-sky-600 text-gray-200",
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
          id: "sass",
          className: "bg-pink-200",
          front: {
            title: "SASS",
            img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/skills/sass.png?raw=true",
          },
        },
        {
          id: "tailwind",
          className: "bg-sky-200",
          front: {
            title: "Tailwind",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png", //TODO SUBIR A GIT
          },
        },
      ],
    },
    {
      cards: [
        {
          id: "java",
          className: "bg-blue-200",
          front: {
            title: "Java",
            img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/skills/java.png?raw=true",
          },
        },
        {
          id: "spring",
          className: "bg-esmerald-200",
          front: {
            title: "Spring",
            img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/skills/spring.png?raw=true",
          },
        },
        {
          id: "spark",
          className: "bg-orange-200",
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
          className: "bg-gray-200",
          front: {
            title: "GIT",
            img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/skills/git.png?raw=true",
          },
        },
        {
          id: "mysql",
          className: "bg-sky-400",
          front: {
            title: "MySQL",
            img: "https://cdn-icons-png.flaticon.com/512/528/528260.png", //TODO SUBIR A GIT
          },
        },
      ],
    },
  ],
};

export default Skills;
