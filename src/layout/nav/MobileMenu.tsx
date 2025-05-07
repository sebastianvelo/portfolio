import LanguageSelector, { LanguageSelectorProps } from "../../ui/button/LanguageSelector";
import NavLinks, { NavLinksProps } from "./NavLinks";

interface MobileMenuProps extends LanguageSelectorProps, NavLinksProps {
    menuOpen: boolean;
    toggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu = (props: MobileMenuProps) => {
    if (!props.menuOpen) return null;

    return (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col p-4 md:hidden">
            <NavLinks {...props} />
            <LanguageSelector {...props} />
        </div>
    );
}

export default MobileMenu;