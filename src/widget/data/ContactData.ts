import ContactModel from "widget/model/ContactModel";

export const github = new ContactModel({
  title: "Github",
  image: "github",
  label: "Go to GitHub",
  url: "https://github.com/sebastianvelo",
  className: "bg-gradient-to-tr from-indigo-500 to-purple-100",
});

export const codepen = new ContactModel({
  title: "CodePen",
  image: "codepen",
  label: "Go to CodePen",
  url: "https://codepen.io/sebastianvelo/",
  className: "bg-gradient-to-br from-gray-700 to-gray-100",
});

export const linkedin = new ContactModel({
  title: "LinkedIn",
  image: "linkedin",
  label: "Go to LinkedIn",
  url: "https://www.linkedin.com/in/sebastian-velo/",
  className: "bg-gradient-to-tl from-sky-600 to-blue-300",
});


export const email = new ContactModel({
  title: "sebastianvelo.it@gmail.com",
  image: "email",
  label: "sebastianvelo.it@gmail.com",
  url: "mailto:sebastianvelo.it@gmail.com",
  className: "bg-gradient-to-b from-red-300 via-blue-400 to-esmerald-300",
});

export const codesignal = new ContactModel({
  title: "Codesignal",
  image: "codesignal",
  label: "Go to Codesignal",
  url: "https://app.codesignal.com/profile/sebastianvel",
  className: "bg-gradient-to-bl from-blue-800 to-blue-500 text-white",
});