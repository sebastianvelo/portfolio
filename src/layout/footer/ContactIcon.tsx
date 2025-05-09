import { ContactItemProps } from "../../model/ContactSectionProps";
import GithubSVG from "../../ui/svg/GithubSVG";
import LinkedInSVG from "../../ui/svg/LinkedInSVG";
import MailSVG from "../../ui/svg/MailSVG";

const getSocialIcon = (icon: string) => {
    switch (icon) {
        case "linkedin":
            return <LinkedInSVG />;
        case "github":
            return <GithubSVG />;
        case "mail":
            return <MailSVG />;
        default:
            return null;
    }
};

const ContactIcon = (props: ContactItemProps) => {
    return (
        <a
            key={props.name}
            href={props.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary-600 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 transition-colors"
            aria-label={props.name}
        >           {getSocialIcon(props.id)}
        </a>
    );
};

export default ContactIcon;
