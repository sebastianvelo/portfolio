const education = {
    title: "Education",
    img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/education-icon.png?raw=true",
    isSwippable: true,
    invertImgColors: true,
    layout: {
        bg: "red",
        size: "col-s-12 col-m-12 col-l-4 col-xl-4",
    },
    back: {
        description: "I'm Programming Technician and I have taken some courses.",
    },
    button: {
        label: "See more",
        path: "/education",
    },
    children: [
        {
            title: "Education",
            img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/education-icon.png?raw=true",
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
            title: "Programming Technician",
            img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/education/jh.png?raw=true",
            layout: {
                bg: "blue l-2",
                size: "col-s-12 col-m-12 col-l-8 col-xl-8",
            }
        },
        {
            title: "Unity Game Development course",
            img: "https://github.com/SebastianVelo/portfolio/blob/main/src/assets/education/utn.gif?raw=true",
            layout: {
                bg: "white d-2",
                size: "col-s-12 col-m-12 col-l-6 col-xl-6",
                darkTxt: true,
            }
        },
        {
            title: "Advanced Programming in Java",
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