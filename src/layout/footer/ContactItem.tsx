import { ContactItemProps } from "../../data/model/ContactSectionProps";
import GithubSVG from "../../screens/components/utils/svg/GithubSVG";
import LinkedInSVG from "../../screens/components/utils/svg/LinkedInSVG";
import MailSVG from "../../screens/components/utils/svg/MailSVG";

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

const ContactItem = (props: ContactItemProps) => {
    return (
        <a
            key={props.name}
            href={props.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
            aria-label={props.name}
        >           {getSocialIcon(props.id)}
        </a>
    );
};

export default ContactItem;
