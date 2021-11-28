import CardPropsBuilder from "common/entities/builder/CardPropsBuilder";
import Page from "common/entities/Page";
import Route from "common/entities/Route";
import { contact } from "widget/data/Indexes";

const github = CardPropsBuilder.builder("github")
  .setClassName("bg-gradient-to-b from-gray-300 to-indigo-900 text-light")
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
  .setClassName("bg-gradient-to-b from-gray-100 to-gray-900 text-light")
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
  .setClassName("bg-gradient-to-b from-sky-600 to-sky-200")
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
  .setClassName("bg-gradient-to-b from-sky-200 to-sky-400")
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
      cards: [contact.toCardIndex()],
    },
    {
      cards: [email, linkedin],
    },
    {
      cards: [github, codepen],
    },
  ],
};

export default Contact;
