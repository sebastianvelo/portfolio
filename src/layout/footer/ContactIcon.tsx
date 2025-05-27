import { ContactItemProps } from "../../model/ContactSectionProps";
import GithubSVG from "../../ui/svg/GithubSVG";
import LinkedInSVG from "../../ui/svg/LinkedInSVG";
import MailSVG from "../../ui/svg/MailSVG";

const ContactIcon = (props: ContactItemProps) => {
    switch (props.id) {
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

export default ContactIcon;
