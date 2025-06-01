import { useEffect, useState } from "react";
import RoundedButton from "../../../ui/button/RoundedButton";
import MoonSVG from "../../../ui/svg/MoonSVG";
import SunSVG from "../../../ui/svg/SunSVG";

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode)
    }, [darkMode])

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };
    return (
        <RoundedButton variant="secondary" onClick={toggleDarkMode} aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}>
            {darkMode ? <SunSVG /> : <MoonSVG />}
        </RoundedButton>
    );
};

export default ThemeToggle;