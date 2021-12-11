import Page from "common/entities/Page";
import Route from "common/entities/Route";
import TailwindStyle from "common/tailwind/TailwindStyle";
import { skills } from "widget/data/IndexesData";
import getImg from "widget/helpers/getImg";

const getSkillsImg = (file: string) => getImg(file, "/skills");

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
            img: getSkillsImg("js"),
          },
        },
        {
          id: "typescript",
          className: skillStyle("from-blue-500 to-blue-800", true),
          front: {
            title: "Typescript",
            img: getSkillsImg("typescript"),
          },
        },
        {
          id: "react",
          className: skillStyle("from-sky-500 to-sky-800", true),
          front: {
            title: "React",
            img: getSkillsImg("react"),
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
            img: getSkillsImg("tailwind"),
          },
        },
        {
          id: "sass",
          className: skillStyle("from-pink-400 to-pink-800", true),
          front: {
            title: "SASS",
            img: getSkillsImg("sass"),
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
            img: getSkillsImg("java"),
          },
        },
        {
          id: "spring",
          className: skillStyle("from-green-200 to-esmerald-400"),
          front: {
            title: "Spring",
            img: getSkillsImg("spring"),
          },
        },
        {
          id: "spark",
          className: skillStyle("from-red-700 to-orange-700", true),
          front: {
            title: "Spark",
            img: getSkillsImg("spark"),
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
            img: getSkillsImg("git"),
          },
        },
        {
          id: "mysql",
          className: skillStyle("from-orange-100 to-sky-900", true),
          front: {
            title: "MySQL",
            img: getSkillsImg("mysql"),
          },
        },
      ],
    },
  ],
};

export default Skills;
