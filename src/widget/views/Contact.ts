import CardPropsBuilder from "common/entities/builder/CardPropsBuilder";
import Page from "common/entities/Page";
import Route from "common/entities/Route";

const index = CardPropsBuilder.builder("index")
  .setClassName("bg-gradient-to-b from-indigo-700 to-indigo-900 text-gray-200")
  .toggleInvertColors()
  .setFront({
    title: "Contact",
    img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/contact-icon.png?raw=true",
    action: {
      type: "link",
      route: Route.HOME,
      children: "Home",
    },
  });

const github = CardPropsBuilder.builder("github")
  .setClassName("bg-gray-300")
  .setFront({
    title: "Github",
    img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/contact/github.png?raw=true",
    action: {
      type: "anchor",
      children: "Go to GitHub",
      url: "https://github.com/sebastianvelo",
    },
  });

const codepen = CardPropsBuilder.builder("codepen")
  .setClassName("bg-gray-400")
  .setFront({
    title: "CodePen",
    img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/contact/codepen.png?raw=true",
    action: {
      type: "anchor",
      children: "Go to CodePen",
      url: "https://codepen.io/sebastianvelo/",
    },
  });

const linkedin = CardPropsBuilder.builder("linkedin")
  .setClassName("bg-sky-500")
  .setFront({
    title: "LinkedIn",
    img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/contact/linkedin.png?raw=true",
    action: {
      type: "anchor",
      children: "Go to LinkedIn",
      url: "https://www.linkedin.com/in/sebastian-velo/",
    },
  });

const email = CardPropsBuilder.builder("email")
  .setClassName("bg-sky-400")
  .setFront({
    title: "E-Mail",
    img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/contact/email.png?raw=true",
    action: {
      type: "anchor",
      children: "sebastian_velo@hotmail.com",
      url: "sebastian_velo@hotmail.com",
    },
  });

const Contact: Page = {
  route: Route.CONTACT,
  rows: [
    {
      cards: [index],
    },
    {
      cards: [linkedin, email],
    },
    {
      cards: [github, codepen],
    },
  ],
};

export default Contact;
