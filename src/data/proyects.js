const proyects = {
    title: "Mis proyectos",
    img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/proyects-icon.png?raw=true",
    isSwippable: true,
    invertImgColors: true,
    layout: {
        bg: "pink d-2",
        size: "col-s-12 col-m-12 col-l-4 col-xl-4",
    },
    back: {
        description: "Podrás ver en detalle mis proyectos dando click en 'Ver más'.",
    },
    button: {
        label: "Ver más",
        path: "/proyects",
    },
    children: [
        {
            title: "Mis proyectos",
            img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/proyects-icon.png?raw=true",
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
            title: "SocialNetwork",
            img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/proyects/loremipsum.png?raw=true",
            isSwippable: true,
            invertImgColors: true,
            layout: {
                bg: "pink d-3",
                size: "col-s-12 col-m-12 col-l-4 col-xl-4",
            },
            back: {
                description: "Una red social estilo Instagram creada con React"
            },
            button: {
                label: "Ver SocialNetwork",
                path: "https://sebastianvelo.github.io/social-network/#/",
            },
        },
        {
            title: "Chat",
            img: "https://www.iconninja.com/files/949/440/966/net-messenger-msn-online-group-web-chat-icon.svg",
            isSwippable: true,
            invertImgColors: true,
            layout: {
                bg: "blue d-3",
                size: "col-s-12 col-m-12 col-l-4 col-xl-4",
            },
            back: {
                description: "¡Esta pagina simula ser un MSN en Windows XP! "
            },
            button: {
                label: "Ver Chat",
                path: "https://chat-msn.web.app/",
            },
        },
        {
            title: "PixelArt",
            img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/proyects/pixelart.png?raw=true",
            isSwippable: true,
            darkTxt: true,
            layout: {
                bg: "white",
                size: "col-s-12 col-m-12 col-l-6 col-xl-6",
                darkTxt: true,
            },
            back: {
                description: "¡Una aplicación web para hacer pixel art!"
            },
            button: {
                label: "Ver PixelArt",
                path: "https://sebastianvelo.github.io/pixel-art",
            },
        },
        {
            title: "ResumeCreator",
            img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/proyects/resumecreator.png?raw=true",
            isSwippable: true,
            invertImgColors: true,
            layout: {
                bg: "green d-3",
                size: "col-s-12 col-m-12 col-l-6 col-xl-6",
            },
            back: {
                description: "En resumecreator podrás crear de manera sencilla tu CV."
            },
            button: {
                label: "Ver ResumeCreator",
                path: "https://resumecreator.github.io/cvbuilder/#/",
            },
        },
    ]
};
export default proyects;