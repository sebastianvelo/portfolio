import { ViewProps } from "app/components/view/View";

interface Page extends ViewProps {
  route: string;
}

const Views: Page[] = [
  {
    route: "/",
    rows: [
      {
        cards: [
          {
            id: "index",
            background: "warning",
            front: {
              title: "Sebastian Velo",
              text: "Software Engineer",
            },
          },
          {
            id: "experience",
            className: "bg-yellow-600 text-white",
            front: {
              title: "Experience",
              img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/experience-icon.png?raw=true",
            },
          },
          {
            id: "education",
            className: "bg-red-600 text-white",
            front: {
              title: "Education",
              img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/education-icon.png?raw=true",
            },
          },
        ],
      },
      {
        cards: [
          {
            id: "skills",
            className: "bg-green-700 text-white",
            front: {
              title: "Skills",
              img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/skills-icon.png?raw=true",
            },            
            back: {
              title: "El pepe",
              text: "asdasdas",
            },
          },
          {
            id: "projects",
            className: "bg-pink-700 text-white",
            front: {
              title: "Projects",
              img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/proyects-icon.png?raw=true",
            },
          },
          {
            id: "contact",
            className: "bg-indigo-800 text-white",
            front: {
              title: "Contact",
              img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/contact-icon.png?raw=true",
            },
          },
        ],
      },
    ],
  },
  {
    route: "/contact",
  },
  {
    route: "/education",
  },
  {
    route: "/experience",
  },
  {
    route: "/proyects",
  },
  {
    route: "/skills",
  },
];

export default Views;
