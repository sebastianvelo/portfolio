const contact = {
    title: "Contact",
    img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/contact-icon.png?raw=true",
    isSwippable: true,
    invertImgColors: true,
    layout: {
        bg: "indigo d-2",
        size: "col-s-12 col-m-12 col-l-4 col-xl-4",
    },
    back: {
        description: "You can contact me by Linkedin, E-mail or Github!",
    },
    button: {
        label: "See more",
        path: "/contact",
    },
    children: [
        {
            title: "Contact",
            img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/contact-icon.png?raw=true",
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
            title: "GitHub",
            img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/contact/github.png?raw=true",
            isSwippable: true,
            layout: {
                bg: "white",
                size: "col-s-6 col-m-6 col-l-4 col-xl-4",
                darkTxt: true,
            },
            back: {
                description: "@sebastianvelo",
            },
            button: {
                label: "Go to GitHub",
                path: "https://github.com/sebastianvelo",
            }
        },
        {
            title: "CodePen",
            img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/contact/codepen.png?raw=true",
            isSwippable: true,
            layout: {
                bg: "white d-2",
                size: "col-s-6 col-m-6 col-l-4 col-xl-4",
                darkTxt: true,
            },
            back: {
                description: "@sebastianvelo",
            },
            button: {
                label: "Go to CodePen",
                path: "https://codepen.io/sebastianvelo/",
            }
        },
        {
            title: "LinkedIn",
            img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/contact/linkedin.png?raw=true",
            isSwippable: true,
            layout: {
                bg: "lightblue l-2",
                size: "col-s-12 col-m-12 col-l-6 col-xl-6",
                darkTxt: true,
            },
            back: {
                description: "/sebastian-velo",
            },
            button: {
                label: "Go to LinkedIn",
                path: "https://www.linkedin.com/in/sebastian-velo/",
            }
        },
        {
            title: "E-Mail",
            img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/contact/email.png?raw=true",
            isSwippable: true,
            layout: {
                bg: "blue l-2",
                size: "col-s-12 col-m-12 col-l-6 col-xl-6",
                darkTxt: true,
            },
            back: {
                description: "sebastian_velo@hotmail.com",
            },
        },
    ]
};
export default contact;