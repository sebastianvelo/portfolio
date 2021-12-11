import Route from "common/entities/Route";
import TailwindStyle from "common/tailwind/TailwindStyle";
import getImg from "widget/helpers/getImg";
import IndexModel from "widget/model/IndexModel";

const indexStyle = (color?: string) =>
  TailwindStyle.builder()
    .add("bg-gradient-to-b text-gray-200")
    .add(color)
    .get();

export const presentation = new IndexModel({
  id: "index",
  className: indexStyle("from-red-600 to-red-900"),
  img: getImg("index-icon"),
  title: "Sebastian Velo",
  subtitle: "Software Engineer",
  text: `Hi! Thanks for visiting my portfolio 🙂. 
    I have been a developer since 2017, when I started to work at ICBC. I currently work as a Software Engineer at Despegar.`,
});

export const experience = new IndexModel({
  id: "experience",
  className: indexStyle("from-orange-600 to-orange-900"),
  title: "Experience",
  img: getImg("experience-icon"),
  text: "I'm currently working as a Software Engineer at Despegar.",
  route: Route.EXPERIENCE,
  button: "See my experience",
});

export const skills = new IndexModel({
  id: "skills",
  className: indexStyle("from-blue-600 to-blue-900"),
  title: "Skills",
  img: getImg("skills-icon"),
  text: "Java and ReactJS are my main skills.",
  route: Route.SKILLS,
  button: "See my skills",
});

export const projects = new IndexModel({
  id: "projects",
  className: indexStyle("from-sky-600 to-sky-900"),
  title: "Projects",
  img: getImg("projects-icon"),
  text: "I have developed personal projects in React and Typescript.",
  route: Route.PROJECTS,
  button: "See my projects",
});

export const education = new IndexModel({
  id: "education",
  className: indexStyle("from-esmerald-600 to-esmerald-900"),
  title: "Education",
  img: getImg("education-icon"),
  text: "I'm Programming Technician and I have taken some courses.",
  route: Route.EDUCATION,
  button: "See my education",
});

export const contact = new IndexModel({
  id: "contact",
  className: indexStyle("from-green-600 to-green-900"),
  title: "Contact",
  img: getImg("contact-icon"),
  text: "You can contact me by Linkedin, E-mail or Github!",
  route: Route.CONTACT,
  button: "Contact me!",
});
