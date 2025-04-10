import NavLink from "../../model/NavLink";

export interface NavLinksProps {
    nav: NavLink[];
}

const NavLinks = (props: NavLinksProps) => {
    return null;
    return (
        <>
            {props.nav.map((link) => (
                <a key={link.path} href={link.path} className="md:py-2 hover:underline">
                    {link.label}
                </a>
            ))}
        </>
    );
}

export default NavLinks; 