import getImg from "widget/helpers/getImg";
import JobModel from "../model/JobModel";

const getJobImg = (file: string) => getImg(file, "/experience");

const despegar = new JobModel({
  company: "Despegar",
  position: "Software Engineer",
  start: 2022,
  img: getJobImg("despegar"),
  description:
    "I'm currently working as a Software Engineer at MercadoLibre, developing projects with Java and React.",
});

const mercadolibre = new JobModel({
  company: "MercadoLibre",
  position: "Software Engineer",
  start: 2021,
  end: 2021,
  img: getJobImg("meli"),
  description:
    "I'm currently working as a Software Engineer at MercadoLibre, developing projects with Java and React.",
});

const icbc = new JobModel({
  company: "ICBC",
  position: "Software Developer",
  start: 2017,
  end: 2020,
  img: getJobImg("icbc"),
  description:
    "In my first professional experience, I worked developing projects from beginning to end for ICBC's Corporate Home banking with Java 6, JSP, Struts and JavaScript.",
});

export { mercadolibre, icbc, despegar };
