import ContactModel from "widget/model/ContactModel";

export const github = new ContactModel({
  title: "Github",
  image: "github",
  label: "Go to GitHub",
  url: "https://github.com/sebastianvelo",
  className: "from-purple-300 via-purple-500 to-purple-300",
});

export const codepen = new ContactModel({
  title: "CodePen",
  image: "codepen",
  label: "Go to CodePen",
  url: "https://codepen.io/sebastianvelo/",
  className: "from-gray-300 via-gray-500 to-gray-300",
});

export const linkedin = new ContactModel({
  title: "LinkedIn",
  image: "linkedin",
  label: "Go to LinkedIn",
  url: "https://www.linkedin.com/in/sebastian-velo/",
  className: "from-blue-300 via-blue-500 to-blue-300",
});


export const email = new ContactModel({
  title: "E-Mail",
  image: "email",
  label: "sebastian_velo@hotmail.com",
  url: "mailto:sebastian_velo@hotmail.com",
  className: "from-sky-300 via-sky-500 to-sky-300",
});
