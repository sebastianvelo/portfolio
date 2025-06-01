import LanguageSelector, { LanguageSelectorProps } from "../common/LanguageSelector";
import NavLinks, { NavLinksProps } from "../common/NavLinks";

interface DesktopMenuProps extends LanguageSelectorProps, NavLinksProps { }

const DesktopMenu = (props: DesktopMenuProps) => {
    return (
        <div className="flex space-x-4 items-center">
            <NavLinks {...props} />
            <LanguageSelector {...props} />
        </div>
    );
};

export default DesktopMenu;