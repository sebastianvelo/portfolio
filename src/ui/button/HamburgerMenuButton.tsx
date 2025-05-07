import CrossSVG from "../svg/CrossSVG";
import HamburgerSVG from "../svg/HamburgerSVG";

interface HamburgerMenuButtonProps {
    toggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
    menuOpen: boolean;
}

const HamburgerMenuButton = (props: HamburgerMenuButtonProps) => {
    return (
        <div className="md:hidden">
            <button onClick={() => props.toggleMenu((prev) => !prev)} className="focus:outline-none">
                {props.menuOpen ? (
                    <CrossSVG />
                ) : (
                    <HamburgerSVG />
                )}
            </button>
        </div>
    );
}

export default HamburgerMenuButton;