import { ContactItemProps } from "../../model/ContactSectionProps";
import SocialIcon from "./SocialIcon";

const FooterIcon: React.FC<ContactItemProps> = ({ id, name, label, url }) => {
    const className = "text-secondary-600 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 transition-colors";

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
            aria-label={name}>
            <SocialIcon id={id} />
        </a>
    );
};

export default FooterIcon;
