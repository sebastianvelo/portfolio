import { useEffect, useState } from "react";
import MoonSVG from "../../screens/components/utils/svg/MoonSVG";
import SunSVG from "../../screens/components/utils/svg/SunSVG";

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
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
            {darkMode ? <SunSVG /> : <MoonSVG />}
        </button>
    );
};

export default ThemeToggle;