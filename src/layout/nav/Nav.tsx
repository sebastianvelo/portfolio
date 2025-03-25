import { useState } from "react";
import HamburgerMenuButton from "../../screens/components/utils/button/HamburgerMenuButton";
import { LanguageSelectorProps } from "../../screens/components/utils/button/LanguageSelector";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { NavLinksProps } from "./NavLinks";
import BigTitle from "../../screens/components/utils/text/BigTitle";

interface NavProps extends LanguageSelectorProps, NavLinksProps { }

const Nav = (props: NavProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="md:sticky md:top-0 md:z-50 flex items-center justify-between font-mono p-4 xl:px-32 bg-slate-100/30 backdrop-blur-md">
      <h1 className="flex space-x-2">
        <BigTitle size={1}>Sebastián</BigTitle>
        <BigTitle size={1}>Velo</BigTitle>
      </h1>
      <DesktopMenu {...props} />
      <HamburgerMenuButton toggleMenu={setMenuOpen} menuOpen={menuOpen} />
      <MobileMenu {...props} toggleMenu={setMenuOpen} menuOpen={menuOpen} />
    </nav>

  );
};

export default Nav;
