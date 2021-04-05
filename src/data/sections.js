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
        img: "https://cdn1.iconfinder.com/data/icons/lmooth-business-and-office-line/32/Office_Bag_business_work_job_-512.png",
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
                img: "https://cdn1.iconfinder.com/data/icons/lmooth-business-and-office-line/32/Office_Bag_business_work_job_-512.png",
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
                img: "https://www.mercadolibre.com.ar/brandprotection/enforcement/images?src=meli-logo.png",
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
                img: "https://seeklogo.com/images/I/ICBC-logo-71BB1FD4EA-seeklogo.com.png",
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
                img: "https://lecermob.com/wp-description/uploads/2020/07/banco-galicia.png",
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
                img: "https://seeklogo.com/images/I/ICBC-logo-71BB1FD4EA-seeklogo.com.png",
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
        img: "https://i.pinimg.com/originals/3e/e7/87/3ee78760d85467a2819be0d1ae677655.png",
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
                img: "https://i.pinimg.com/originals/3e/e7/87/3ee78760d85467a2819be0d1ae677655.png",
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
                img: "https://www.tecnica7.edu.ar/imagenes/logo-eest7.png",
                layout: {
                    bg: "blue l-2",
                    size: "col-s-12 col-m-12 col-l-8 col-xl-8",
                }
            },
            {
                title: "Dip. en Des. de Videojuegos",
                img: "https://i.pinimg.com/originals/71/82/38/7182382fd0d3ee360af668f862365f8e.gif",
                layout: {
                    bg: "white d-2",
                    size: "col-s-12 col-m-12 col-l-6 col-xl-6",
                    darkTxt: true,
                }
            },
            {
                title: "Desarrollador Java",
                img: "https://www.exo.com.ar/2en1/img/EXO.png",
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
        img: "https://static.thenounproject.com/png/2473268-200.png",
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
                img: "https://static.thenounproject.com/png/2473268-200.png",
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
                img: "https://image.flaticon.com/icons/png/512/226/226777.png",
                layout: {
                    bg: "lightblue d-3",
                    size: "col-s-6 col-m-6 col-l-2 col-xl-2",
                }
            },
            {
                title: "Spring",
                img: "https://4.bp.blogspot.com/-Wu0VFZBMbhw/VlgexscHoII/AAAAAAAACMI/qNNAmSPbyGo/s1600/photo.jpg",
                layout: {
                    bg: "green d-3",
                    size: "col-s-6 col-m-6 col-l-2 col-xl-2",
                }
            },
            {
                title: "Struts",
                img: "https://www.chetu.com/img/on-demand-developers/java/struts/description-images/struts-logo.png",
                layout: {
                    bg: "indigo d-2",
                    size: "col-s-6 col-m-6 col-l-2 col-xl-2",
                }
            },
            {
                title: "GIT",
                img: "https://image.flaticon.com/icons/png/512/25/25231.png",
                layout: {
                    bg: "pink d-2",
                    size: "col-s-6 col-m-6 col-l-2 col-xl-2",
                }
            },
            {
                title: "JavaScript",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png",
                layout: {
                    bg: "yellow d-1",
                    size: "col-s-6 col-m-6 col-l-2 col-xl-2",
                    darkTxt: true,
                }
            },
            {
                title: "jQuery",
                img: "https://i.dlpng.com/static/png/480649_preview.png",
                layout: {
                    bg: "blue l-2",
                    size: "col-s-6 col-m-6 col-l-2 col-xl-2",
                    darkTxt: true, 
                }
            },
            {
                title: "React",
                img: "https://miro.medium.com/max/500/1*cPh7ujRIfcHAy4kW2ADGOw.png",
                layout: {
                    bg: "lightblue d-4",
                    size: "col-s-6 col-m-6 col-l-2 col-xl-2",
                }
            },
            {
                title: "NodeJS",
                img: "https://sdtimes.com/wp-description/uploads/2018/04/1_tfZa4vsI6UusJYt_fzvGnQ.png",
                layout: {
                    bg: "green d-4",
                    size: "col-s-6 col-m-6 col-l-2 col-xl-2",  
                }
            },
            {
                title: "Bootstrap",
                img: "https://www.troopsf.com/file/bootstrap-logo.png",
                layout: {
                    bg: "indigo d-4",
                    size: "col-s-6 col-m-6 col-l-2 col-xl-2", 
                }
            },
            {
                title: "SASS",
                img: "https://miro.medium.com/max/512/1*9U1toerFxB8aiFRreLxEUQ.png",
                layout: {
                    bg: "pink d-4",
                    size: "col-s-6 col-m-6 col-l-2 col-xl-2",  
                }
            },
        ]
    },
    {
        title: "Mis proyectos",
        img: "https://img.icons8.com/ios/452/rocket--v1.png",
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
                img: "https://img.icons8.com/ios/452/rocket--v1.png",
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
                title: "LoremPicsum",
                img: "http://simpleicon.com/wp-description/uploads/camera.png",
                layout: {
                    bg: "pink l-2",
                    size: "col-s-12 col-m-12 col-l-8 col-xl-8",
                    darkTxt: true,
                }
            },
            {
                title: "ResumeBuilder",
                img: "https://img.icons8.com/ios/452/open-resume.png",
                layout: {                
                    bg: "green",
                    size: "col-s-12 col-m-12 col-l-6 col-xl-6",
                    darkTxt: true, 
                }
            },
            {
                title: "PixelArt",
                img: "https://image.flaticon.com/icons/png/512/98/98755.png",
                darkTxt: true,                
                layout: {            
                    bg: "white",
                    size: "col-s-12 col-m-12 col-l-6 col-xl-6",
                    darkTxt: true, 
                }
            }
        ]
    },
    {
        title: "Contacto",
        img: "https://cdn.iconscout.com/icon/free/png-256/mail-1138-827052.png",
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
                img: "https://cdn.iconscout.com/icon/free/png-256/mail-1138-827052.png",
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
                img: "https://image.flaticon.com/icons/png/512/25/25231.png",
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
                img: "https://blog.codepen.io/wp-description/uploads/2012/06/Button-Fill-Black-Large.png",
                isSwippable: true,
                layout: {
                    bg: "white d-1",
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
                title: "LinkedIn",
                img: "http://assets.stickpng.com/images/58e91afdeb97430e81906504.png",
                isSwippable: true,
                layout: {
                    bg: "lightblue",
                    size: "col-s-12 col-m-12 col-l-6 col-xl-6",
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
                title: "E-Mail",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Microsoft_Outlook_2013_logo.svg/1200px-Microsoft_Outlook_2013_logo.svg.png",                isSwippable: true,
                layout: {
                    bg: "blue",
                    size: "col-s-12 col-m-12 col-l-6 col-xl-6",
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
        ]
    }
];

export default sections;