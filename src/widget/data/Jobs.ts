import JobModel from "../model/JobModel";

const despegar = new JobModel({
  company: "Despegar",
  position: "Software Engineer",
  start: 2022,
  image: "despegar",
  description:
    "I'm currently working as a Software Engineer at MercadoLibre, developing projects with Java and React.",
});

const mercadolibre = new JobModel({
  company: "MercadoLibre",
  position: "Software Engineer",
  start: 2021,
  end: 2021,
  image: "meli",
  description:
    "I'm currently working as a Software Engineer at MercadoLibre, developing projects with Java and React.",
});

const icbc = new JobModel({
  company: "ICBC",
  position: "Software Developer",
  start: 2017,
  end: 2020,
  image: "icbc",
  description:
    "In my first professional experience, I worked developing projects from beginning to end for ICBC's Corporate Home banking with Java 6, JSP, Struts and JavaScript.",
});

export { mercadolibre, icbc, despegar };
