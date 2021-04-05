const sections = [
    {
        title: "Inicio",
        isSwippable: false,
        front: {
            description: "Portfolio de Sebastian Velo",
        },
        layout: {
            bg: "yellow",
            darkTxt: true,
            size: "col-s-12 col-m-12 col-l-4 col-xl-4",
        }
    },
    {
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
    },
    {
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
    },
    {
        title: "Mis skills",
        img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/skills-icon.png?raw=true",
        isSwippable: true,
        invertImgColors: true,
        layout: {
            bg: "green d-2",
            size: "col-s-12 col-m-12 col-l-4 col-xl-4",
        },
        back: {
            description: "Java y ReactJS son mis principales skills.",
        },
        button: {
            label: "Ver más",
            path: "/skills",
        },
        children: [
            {
                title: "Mis skills",
                img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/skills-icon.png?raw=true",
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
                title: "Java",
                img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/skills/java.png?raw=true",
                layout: {
                    bg: "lightblue d-3",
                    size: "col-s-6 col-m-6 col-l-2 col-xl-2",
                }
            },
            {
                title: "Spring",
                img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/skills/spring.png?raw=true",
                layout: {
                    bg: "green d-3",
                    size: "col-s-6 col-m-6 col-l-2 col-xl-2",
                }
            },
            {
                title: "Struts",
                img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/skills/struts.png?raw=true",
                layout: {
                    bg: "indigo d-2",
                    size: "col-s-6 col-m-6 col-l-2 col-xl-2",
                }
            },
            {
                title: "GIT",
                img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/skills/git.png?raw=true",
                layout: {
                    bg: "pink d-2",
                    size: "col-s-6 col-m-6 col-l-2 col-xl-2",
                }
            },
            {
                title: "JavaScript",
                img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/skills/js.png?raw=true",
                layout: {
                    bg: "yellow d-1",
                    size: "col-s-6 col-m-6 col-l-2 col-xl-2",
                    darkTxt: true,
                }
            },
            {
                title: "jQuery",
                img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/skills/jquery.png?raw=true",
                layout: {
                    bg: "blue l-2",
                    size: "col-s-6 col-m-6 col-l-2 col-xl-2",
                    darkTxt: true,
                }
            },
            {
                title: "React",
                img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/skills/react.png?raw=true",
                layout: {
                    bg: "lightblue d-4",
                    size: "col-s-6 col-m-6 col-l-2 col-xl-2",
                }
            },
            {
                title: "NodeJS",
                img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/skills/nodejs.png?raw=true",
                layout: {
                    bg: "green d-4",
                    size: "col-s-6 col-m-6 col-l-2 col-xl-2",
                }
            },
            {
                title: "Bootstrap",
                img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/skills/bootstrap.png?raw=true",
                layout: {
                    bg: "indigo d-4",
                    size: "col-s-6 col-m-6 col-l-2 col-xl-2",
                }
            },
            {
                title: "SASS",
                img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/skills/sass.png?raw=true",
                layout: {
                    bg: "pink d-4",
                    size: "col-s-6 col-m-6 col-l-2 col-xl-2",
                }
            },
        ]
    },
    {
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
                title: "LoremIpsum",
                img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/proyects/loremipsum.png?raw=true",
                isSwippable: true,
                invertImgColors: true,
                layout: {
                    bg: "pink d-3",
                    size: "col-s-12 col-m-12 col-l-8 col-xl-8",
                },
                back: {
                    description: "Una red social estilo Instagram creada con React"
                },
                button: {
                    label: "Ver LoremIpsum",
                    path: "https://sebastianvelo.github.io/loremipsum",
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
    },
    {
        title: "Contacto",
        img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/contact-icon.png?raw=true",
        isSwippable: true,
        invertImgColors: true,
        layout: {
            bg: "indigo d-2",
            size: "col-s-12 col-m-12 col-l-4 col-xl-4",
        },
        back: {
            description: "¡Podés contactarme por LinkedIn, GitHub o CodePen!",
        },
        button: {
            label: "Ver más",
            path: "/contact",
        },
        children: [
            {
                title: "Contacto",
                img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/contact-icon.png?raw=true",
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
                    label: "Ir a GitHub",
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
                    label: "Ir a CodePen",
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
                    label: "Ir a LinkedIn",
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
    }
];

export default sections;