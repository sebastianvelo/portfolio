import { LanguageSelectorProps } from "../../ui/button/LanguageSelector";
import DesktopMenu from "./DesktopMenu";
import { NavLinksProps } from "./NavLinks";
import ThemeToggle from "./ThemeToggle";

interface NavProps extends LanguageSelectorProps, NavLinksProps { }

const Nav = (props: NavProps) => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-primary-100/80 dark:bg-secondary-950/80 backdrop-blur-xl shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-secondary-900 dark:text-white font-jetbrains">
              Sebastián Velo
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <DesktopMenu {...props} />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
