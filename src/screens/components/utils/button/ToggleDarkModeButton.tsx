import SunSVG from "../svg/SunSVG";

const ToggleDarkButton = () => {
    const handleToggle = () => {
        document.documentElement.classList.toggle("dark");
    };

    return (
        <button className="cursor-pointer" onClick={handleToggle}>
            <SunSVG />
        </button>
    );
};

export default ToggleDarkButton;
