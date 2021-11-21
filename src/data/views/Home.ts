import CardPropsBuilder from "common/entities/builder/CardPropsBuilder";
import Page from "common/entities/Page";
import Route from "common/entities/Route";

const index = CardPropsBuilder.builder("index")
  .setClassName("bg-yellow-400")
  .setFront({
    title: "Sebastian Velo",
    text: "Software Engineer",
  });

const experience = CardPropsBuilder.builder("experience")
  .setClassName("bg-orange-600 text-white")
  .setFront({
    title: "Experience",
    img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/experience-icon.png?raw=true",
  })
  .setBack({
    img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/experience-icon.png?raw=true",
    text: "I'm currently working as a Software Engineer at MercadoLibre.",
    action: {
      type: "link",
      route: Route.EXPERIENCE,
      children: "See more",
    },
  });

const education = CardPropsBuilder.builder("education")
  .setClassName("bg-blue-600 text-white")
  .setFront({
    title: "Education",
    img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/education-icon.png?raw=true",
  })
  .setBack({
    img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/education-icon.png?raw=true",
    text: "I'm Programming Technician and I have taken some courses.",
    action: {
      type: "link",
      route: Route.EDUCATION,
      children: "See more",
    },
  });

const skills = CardPropsBuilder.builder("skills")
  .setClassName("bg-rose-600 text-white")
  .setFront({
    title: "Skills",
    img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/skills-icon.png?raw=true",
  })
  .setBack({
    img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/skills-icon.png?raw=true",
    text: "Java and ReactJS are my main skills.",
    action: {
      type: "link",
      route: Route.SKILLS,
      children: "See more",
    },
  });

const projects = CardPropsBuilder.builder("projects")
  .setClassName("bg-pink-700 text-white")
  .setFront({
    title: "Projects",
    img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/proyects-icon.png?raw=true",
  })
  .setBack({
    img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/proyects-icon.png?raw=true",
    text: "I have developed personal projects in React and Svelte.",
    action: {
      type: "link",
      route: Route.PROJECTS,
      children: "See more",
    },
  });

const contact = CardPropsBuilder.builder("contact")
  .setClassName("bg-indigo-600 text-white")
  .setFront({
    title: "Contact",
    img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/contact-icon.png?raw=true",
  })
  .setBack({
    img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/contact-icon.png?raw=true",
    text: "You can contact me by Linkedin, E-mail or Github!",
    action: {
      type: "link",
      route: Route.CONTACT,
      children: "See more",
    },
  });

const Home: Page = {
  route: Route.HOME,
  rows: [
    {
      cards: [index, experience],
    },
    {
      cards: [skills, projects],
    },
    {
      cards: [education, contact],
    },
  ],
};

export default Home;
