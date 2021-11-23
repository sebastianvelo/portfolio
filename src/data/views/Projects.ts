import CardPropsBuilder from "common/entities/builder/CardPropsBuilder";
import Page from "common/entities/Page";
import Route from "common/entities/Route";

const index = CardPropsBuilder.builder("index")
  .setClassName("bg-pink-700 text-gray-200")
  .toggleInvertColors()
  .setFront({
    title: "Projects",
    img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/proyects-icon.png?raw=true",
    action: {
      type: "link",
      route: Route.HOME,
      children: "Go back",
    },
  });

const ifdb = CardPropsBuilder.builder("ifdb")
  .setClassName("bg-yellow-400")
  .setFront({
    title: "IFDb",
    img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/proyects/ifdb.png?raw=true",
  })
  .setBack({
    img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/proyects/ifdb.png?raw=true",
    text: "This site is an IMDB clone, my second project with Typescript. It was hosted with Firebase.",
    action: {
      type: "anchor",
      children: "See IFDb",
      url: "https://internetfilmdb.web.app/#/movie",
    },
  });

const socialNetwork = CardPropsBuilder.builder("socialnetwork")
  .setClassName("bg-pink-400")
  .setFront({
    title: "SocialNetwork",
    img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/proyects/loremipsum.png?raw=true",
  })
  .setBack({
    img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/proyects/loremipsum.png?raw=true",
    text: "This social network is an Instagram clone, made with React and ExpressJS, styled with SCSS and deployed with GitHub Pages.",
    action: {
      type: "anchor",
      children: "See SocialNetwork",
      url: "https://sebastianvelo.github.io/social-network/#/",
    },
  });

const chat = CardPropsBuilder.builder("chat")
  .setClassName("bg-blue-400")
  .setFront({
    title: "Chat",
    img: "https://www.iconninja.com/files/949/440/966/net-messenger-msn-online-group-web-chat-icon.svg",
  })
  .setBack({
    img: "https://www.iconninja.com/files/949/440/966/net-messenger-msn-online-group-web-chat-icon.svg",
    text: "This chat app was made with React and Typescript, styled with Tailwind and deployed with Firebase. It has a 00's style!",
    action: {
      type: "anchor",
      children: "See Chat",
      url: "https://chat-msn.web.app/",
    },
  });

const pixelArt = CardPropsBuilder.builder("pixelart")
  .setClassName("bg-gray-100")
  .setFront({
    title: "PixelArt",
    img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/proyects/pixelart.png?raw=true",
  })
  .setBack({
    img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/proyects/pixelart.png?raw=true",
    text: "A pixel-art web application, created with React, pure CSS and deployed with GitHub Pages.",
    action: {
      type: "anchor",
      children: "See PixelArt",
      url: "https://sebastianvelo.github.io/pixel-art",
    },
  });

const resumeBuilder = CardPropsBuilder.builder("resumebuilder")
  .setClassName("bg-green-400")
  .setFront({
    title: "ResumeCreator",
    img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/proyects/resumecreator.png?raw=true",
  })
  .setBack({
    img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/proyects/resumecreator.png?raw=true",
    text: "You can build your resume in a easy way! My first project with React.",
    action: {
      type: "anchor",
      children: "See ResumeCreator",
      url: "https://resumecreator.github.io/cvbuilder/#/",
    },
  });
const Projects: Page = {
  route: Route.PROJECTS,
  rows: [
    {
      cards: [index],
    },
    {
      cards: [ifdb],
    },
    {
      cards: [socialNetwork, chat],
    },
    {
      cards: [pixelArt, resumeBuilder],
    },
  ],
};

export default Projects;
