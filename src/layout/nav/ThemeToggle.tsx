import { useEffect, useState } from "react";
import MoonSVG from "../../ui/svg/MoonSVG";
import SunSVG from "../../ui/svg/SunSVG";

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode)
    }, [darkMode])

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };
    return (
        <button
            onClick={toggleDarkMode}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            className="p-2 rounded-full dark:ring-primary-100 ring ring-blue-300 bg-secondary-100/80 text-blue-400 dark:bg-secondary-700/80 dark:text-primary-100 hover:bg-secondary-100 dark:hover:bg-secondary-700 transition-colors focus:outline-none"
        >
            {darkMode ? <SunSVG /> : <MoonSVG />}
        </button>
    );
};

export default ThemeToggle;