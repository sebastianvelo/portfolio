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
            className="p-2 rounded-lg bg-secondary-200 dark:bg-secondary-800 hover:bg-secondary-300 dark:hover:bg-secondary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
            {darkMode ? <SunSVG /> : <MoonSVG />}
        </button>
    );
};

export default ThemeToggle;