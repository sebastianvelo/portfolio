const education = {
    title: "Mi formación",
    img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/education-icon.png?raw=true",
    isSwippable: true,
    invertImgColors: true,
    layout: {
        bg: "red",
        size: "col-s-12 col-m-12 col-l-4 col-xl-4",
    },
    back: {
        description: "Soy Técnico en Informática y he realizado distintos cursos.",
    },
    button: {
        label: "Ver más",
        path: "/education",
    },
    children: [
        {
            title: "Mi formación",
            img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/education-icon.png?raw=true",
            isSwippable: true,
            invertImgColors: true,
            layout: {
                bg: "black",
                size: "col-s-12 col-m-12 col-l-4 col-xl-4",
            },
            button: {
                label: "Volver",
                path: "/",
            },
        },
        {
            title: "Técnico en Informática",
            img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/education/jh.png?raw=true",
            layout: {
                bg: "blue l-2",
                size: "col-s-12 col-m-12 col-l-8 col-xl-8",
            }
        },
        {
            title: "Dip. en Des. de Videojuegos",
            img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/education/utn.gif?raw=true",
            layout: {
                bg: "white d-2",
                size: "col-s-12 col-m-12 col-l-6 col-xl-6",
                darkTxt: true,
            }
        },
        {
            title: "Desarrollador Java",
            img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/education/exo.png?raw=true",
            layout: {
                bg: "red l-2",
                size: "col-s-12 col-m-12 col-l-6 col-xl-6",
                darkTxt: true,
            }
        }
    ]
};
export default education;