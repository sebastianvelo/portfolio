import LanguageSelector, { LanguageSelectorProps } from "../../ui/button/LanguageSelector";
import NavLinks, { NavLinksProps } from "./NavLinks";

interface DesktopMenuProps extends LanguageSelectorProps, NavLinksProps { }

const DesktopMenu = (props: DesktopMenuProps) => {
    return (
        <div className="hidden md:flex space-x-4 items-center">
            <NavLinks {...props} />
            <LanguageSelector {...props} />
        </div>
    );
};

export default DesktopMenu;