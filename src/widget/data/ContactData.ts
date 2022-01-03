import ContactModel from "widget/model/ContactModel";

export const github = new ContactModel({
  title: "Github",
  image: "github",
  label: "Go to GitHub",
  url: "https://github.com/sebastianvelo",
  className: "from-gray-300 to-indigo-900 text-light",
});

export const codepen = new ContactModel({
  title: "CodePen",
  image: "codepen",
  label: "Go to CodePen",
  url: "https://codepen.io/sebastianvelo/",
  className: "from-gray-100 to-gray-900 text-light",
});

export const linkedin = new ContactModel({
    title: "LinkedIn",
    image: "linkedin",
    label: "Go to LinkedIn",
    url: "https://www.linkedin.com/in/sebastian-velo/",
    className: "from-sky-600 to-sky-200",
  });
  

export const email = new ContactModel({
    title: "E-Mail",
    image: "email",
    label:  "sebastian_velo@hotmail.com",
    url: "mailto:sebastian_velo@hotmail.com",
    className: "from-sky-200 to-sky-400",
  });
