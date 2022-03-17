import ContactModel from "widget/model/ContactModel";

export const github = new ContactModel({
  title: "Github",
  image: "github",
  label: "Go to GitHub",
  url: "https://github.com/sebastianvelo",
  className: "from-indigo-300  to-purple-100",
});

export const codepen = new ContactModel({
  title: "CodePen",
  image: "codepen",
  label: "Go to CodePen",
  url: "https://codepen.io/sebastianvelo/",
  className: "from-gray-300  to-gray-100",
});

export const linkedin = new ContactModel({
  title: "LinkedIn",
  image: "linkedin",
  label: "Go to LinkedIn",
  url: "https://www.linkedin.com/in/sebastian-velo/",
  className: "from-blue-300 to-sky-300",
});


export const email = new ContactModel({
  title: "E-Mail",
  image: "email",
  label: "sebastianvelo.it@gmail.com",
  url: "mailto:sebastianvelo.it@gmail.com",
  className: "from-red-300 via-blue-400 to-esmerald-300",
});
export const codesignal = new ContactModel({
  title: "Codesignal",
  image: "codesignal",
  label: "Go to Codesignal",
  url: "https://app.codesignal.com/profile/sebastianvel",
  className: "from-blue-600 to-blue-400",
});