const experience =     {
    title: "Mi experiencia",
    img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/experience-icon.png?raw=true",
    isSwippable: true,
    invertImgColors: true,
    layout: {
        bg: "orange",
        size: "col-s-12 col-m-12 col-l-4 col-xl-4",
    },
    back: {
        description: "Actualmente soy Desarrollador Ssr. en Mercado Libre Argentina.",
    },
    button: {
        label: "Ver más",
        path: "/experience",
    },
    children: [
        {
            title: "Mi experiencia",
            img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/experience-icon.png?raw=true",
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
            title: "Mercado Libre",
            img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/experience/meli.png?raw=true",
            isSwippable: true,
            layout: {
                bg: "yellow d-1",
                size: "col-s-12 col-m-12 col-l-8 col-xl-8",
                darkTxt: true,
            },
            back: {
                description: "Nuevos desarrollos del Vendor Central de Mercado Libre Argentina.",
            },
            button: {
                label: "Ver más",
                path: "/experience",
            },
        },
        {
            title: "ICBC",
            img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/experience/icbc.png?raw=true",
            isSwippable: true,
            layout: {
                bg: "white",
                size: "col-s-12 col-m-12 col-l-4 col-xl-4",
                darkTxt: true,
            },
            back: {
                description: "Análisis, mantenimiento y nuevos desarrollos del homebanking corporativo.",
            },
            button: {
                label: "Ver más",
                path: "/experience",
            },
        },
        {
            title: "Banco Galicia",
            img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/experience/galicia.png?raw=true",
            layout: {
                bg: "darkorange",
                size: "col-s-12 col-m-12 col-l-4 col-xl-4",
            },
            button: {
                label: "Ver más",
                path: "/experience",
            },
        },
        {
            title: "ICBC",
            img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/experience/icbc.png?raw=true",
            isSwippable: true,
            layout: {
                bg: "white",
                size: "col-s-12 col-m-12 col-l-4 col-xl-4",
                darkTxt: true,
            },
            back: {
                description: "Mantenimiento del homebanking corporativo.",
            },
            button: {
                label: "Ver más",
                path: "/experience",
            },
        }
    ]
};
export default experience;