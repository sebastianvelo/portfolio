const experience =     {
    title: "Experience",
    img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/experience-icon.png?raw=true",
    isSwippable: true,
    invertImgColors: true,
    layout: {
        bg: "orange",
        size: "col-s-12 col-m-12 col-l-4 col-xl-4",
    },
    back: {
        description: "I'm currently working as a Software Engineer at MercadoLibre.",
    },
    button: {
        label: "See more",
        path: "/experience",
    },
    children: [
        {
            title: "Experience",
            img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/experience-icon.png?raw=true",
            isSwippable: true,
            invertImgColors: true,
            layout: {
                bg: "black",
                size: "col-s-12 col-m-12 col-l-4 col-xl-4",
            },
            button: {
                label: "Go back",
                path: "/",
            },
        },
        {
            title: "Software Engineer",
            img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/experience/meli.png?raw=true",
            isSwippable: true,
            layout: {
                bg: "yellow d-1",
                size: "col-s-12 col-m-12 col-l-8 col-xl-8",
                darkTxt: true,
            },
            back: {
                description: "I'm currently working as a Software Engineer at MercadoLibre, developing both back-end and front-end.",
            },
            button: {
                label: "Go back",
                path: "/experience",
            },
        },
        {
            title: "Software Developer",
            img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/experience/icbc.png?raw=true",
            isSwippable: true,
            layout: {
                bg: "white",
                size: "col-s-12 col-m-12 col-l-4 col-xl-4",
                darkTxt: true,
            },
            back: {
                description: `I was in the ICBC's Corporate Home banking team, developing projects from beginning to end and mentor junior developers on the team.`,
            },
            button: {
                label: "Go back",
                path: "/experience",
            },
        },
        {
            title: "Software Developer",
            img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/experience/galicia.png?raw=true",
            layout: {
                bg: "darkorange",
                size: "col-s-12 col-m-12 col-l-4 col-xl-4",
            },
        },
        {
            title: "Jr. Software Developer",
            img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/experience/icbc.png?raw=true",
            isSwippable: true,
            layout: {
                bg: "white",
                size: "col-s-12 col-m-12 col-l-4 col-xl-4",
                darkTxt: true,
            },
            back: {
                description: "In my first professional experience, I worked developing software for ICBC's Corporate Home banking with Java 6, JSP and Struts.",
            },
            button: {
                label: "Go back",
                path: "/experience",
            },
        }
    ]
};
export default experience;