import Route from "common/entities/Route";
import SectionModel from "widget/model/SectionModel";

export const presentation = new SectionModel({
  id: "index",
  className: "from-red-600 to-red-900",
  image: "index-icon",
  title: "Sebastian Velo",
  subtitle: "Fullstack Developer",
  text: `Hi! Thanks for visiting my portfolio 🙂. 
    I have been a developer since 2017, when I started to work at ICBC. I currently work as a Software Developer III at Despegar.`,
});

export const experience = new SectionModel({
  id: "experience",
  className: "from-orange-600 to-orange-900",
  title: "Experience",
  image: "experience-icon",
  text: "I'm currently working as a Fullstack Developer at Despegar.",
  route: Route.EXPERIENCE,
  button: "See my experience",
});

export const skills = new SectionModel({
  id: "skills",
  className: "from-blue-600 to-blue-900",
  title: "Skills",
  image: "skills-icon",
  text: "Java and React are my main skills.",
  route: Route.SKILLS,
  button: "See my skills",
});

export const projects = new SectionModel({
  id: "projects",
  className: "from-sky-600 to-sky-900",
  title: "Projects",
  image: "projects-icon",
  text: "I have developed personal projects in React and Typescript.",
  route: Route.PROJECTS,
  button: "See my projects",
});

export const education = new SectionModel({
  id: "education",
  className: "from-esmerald-600 to-esmerald-900",
  title: "Education",
  image: "education-icon",
  text: "I'm Programming Technician and I have taken some courses.",
  route: Route.EDUCATION,
  button: "See my education",
});

export const contact = new SectionModel({
  id: "contact",
  className: "from-green-600 to-green-900",
  title: "Contact",
  image: "contact-icon",
  text: "You can contact me by Linkedin, E-mail or Github!",
  route: Route.CONTACT,
  button: "Contact me!",
});
