import getImg from "widget/helpers/getImg";
import ProjectModel from "widget/model/ProjectModel";

const getProjectImg = (file: string) => getImg(file, "/projects");

export const ifdb = new ProjectModel({
  title: "IFDb",
  img: getProjectImg("ifdb"),
  description:
    "This site is an IMDB clone, my second project with Typescript. It was hosted with Firebase.",
  url: "https://internetfilmdb.web.app/#/movie",
});

export const socialNetwork = new ProjectModel({
  title: "SocialNetwork",
  img: getProjectImg("loremipsum"),
  description:
    "This social network is an Instagram clone, made with React and ExpressJS, styled with SCSS and deployed with GitHub Pages.",
  url: "https://sebastianvelo.github.io/social-network/#/",
});

export const chat = new ProjectModel({
  title: "Chat",
  img: getProjectImg("chat"),
  description:
    "This chat app was made with React and Typescript, styled with Tailwind and deployed with Firebase. It has a 00's style!",
  url: "https://chat-msn.web.app/",
});

export const pixelArt = new ProjectModel({
  title: "PixelArt",
  img: getProjectImg("pixelart"),
  description:
    "A pixel-art web application, created with React, pure CSS and deployed with GitHub Pages.",
  url: "https://sebastianvelo.github.io/pixel-art",
});

export const resumeBuilder = new ProjectModel({
  title: "ResumeCreator",
  img: getProjectImg("resumecreator"),
  description:
    "You can build your resume in a easy way! My first project with React.",
  url: "https://resumecreator.github.io/cvbuilder/#/",
});
