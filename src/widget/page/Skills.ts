import Page from "common/entities/Page";
import Route from "common/entities/Route";
import TailwindStyle from "common/tailwind/TailwindStyle";
import { skills } from "widget/data/SectionsData";
import getImg from "widget/helpers/getImg";

const getSkillsImg = (file: string) => getImg(file, "/skills");

const skillStyle = (color: string, light?: boolean) =>
  TailwindStyle.builder()
    .add("bg-gradient-to-t")
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
          id: "typescript",
          className: skillStyle("from-blue-500 to-blue-800", true),
          front: {
            title: "Typescript",
            img: getSkillsImg("typescript"),
          },
        },
        {
          id: "javascript",
          className: skillStyle("from-yellow-200 to-yellow-400"),
          front: {
            title: "JavaScript",
            img: getSkillsImg("js"),
          },
        },
      ],
    }, {
      cards: [
        {
          id: "react",
          className: skillStyle("from-sky-500 to-sky-800", true),
          front: {
            title: "React",
            img: getSkillsImg("react"),
          },
        },
        {
          id: "svelte",
          className: skillStyle("from-orange-600 to-red-600", true),
          front: {
            title: "Svelte",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1702px-Svelte_Logo.svg.png",
          },
        },
        {
          id: "angular",
          className: skillStyle("from-red-600 to-red-900", true),
          front: {
            title: "Angular",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png",
          },
        },
      ],
    },
    {
      cards: [
        {
          id: "tailwind",
          className: skillStyle("from-sky-500 to-sky-200"),
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
          className: skillStyle("from-red-500 via-blue-200 to-blue-200"),
          front: {
            title: "Java",
            img: getSkillsImg("java"),
          },
        },
        {
          id: "mysql",
          className: skillStyle("from-orange-500 via-sky-300 to-sky-400"),
          front: {
            title: "MySQL",
            img: getSkillsImg("mysql"),
          },
        },
        {
          id: "spring",
          className: skillStyle("from-green-400 via-emerald-100 to-emerald-100"),
          front: {
            title: "Spring",
            img: getSkillsImg("spring"),
          },
        },
        {
          id: "spark",
          className: skillStyle("from-orange-300 via-red-500 to-red-500", true),
          front: {
            title: "Spark",
            img: getSkillsImg("spark"),
          },
        },
      ],
    },
  ],
};

export default Skills;
