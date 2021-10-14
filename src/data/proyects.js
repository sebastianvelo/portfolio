const proyects = {
    title: "Projects",
    img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/proyects-icon.png?raw=true",
    isSwippable: true,
    invertImgColors: true,
    layout: {
        bg: "pink d-2",
        size: "col-s-12 col-m-12 col-l-4 col-xl-4",
    },
    back: {
        description: "I have developed personal projects in React and Svelte.",
    },
    button: {
        label: "See more",
        path: "/proyects",
    },
    children: [
        {
            title: "Projects",
            img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/proyects-icon.png?raw=true",
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
            title: "IFDb",
            img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/proyects/ifdb.png?raw=true",
            isSwippable: true,
            darkTxt: true,
            layout: {
                bg: "yellow l-1",
                size: "col-s-12 col-m-12 col-l-4 col-xl-4",
                darkTxt: true,
            },
            back: {
                description: "This site is an IMDB clone, my second project with Typescript. It was hosted with Firebase."
            },
            button: {
                label: "See IFDb",
                path: "https://internetfilmdb.web.app/#/movie",
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
                description: "This social network is an Instagram clone, made with React and ExpressJS, styled with SCSS and deployed with GitHub Pages."
            },
            button: {
                label: "See SocialNetwork",
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
                description: "This chat app was made with React and Typescript, styled with Tailwind and deployed with Firebase. It has a 00's style!"
            },
            button: {
                label: "See Chat",
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
                size: "col-s-12 col-m-12 col-l-4 col-xl-4",
                darkTxt: true,
            },
            back: {
                description: "A pixel-art web application, created with React, pure CSS and deployed with GitHub Pages."
            },
            button: {
                label: "See PixelArt",
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
                size: "col-s-12 col-m-12 col-l-4 col-xl-4",
            },
            back: {
                description: "You can build your resume in a easy way."
            },
            button: {
                label: "See ResumeCreator",
                path: "https://resumecreator.github.io/cvbuilder/#/",
            },
        },
    ]
};
export default proyects;