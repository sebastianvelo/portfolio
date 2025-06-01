import GithubSVG from "../../ui/svg/GithubSVG";
import GlobeSVG from "../../ui/svg/GlobeSVG";
import LinkedInSVG from "../../ui/svg/LinkedInSVG";
import MailSVG from "../../ui/svg/MailSVG";

const SocialIcon = (props: { id: string }) => {
    switch (props.id) {
        case "linkedin":
            return <LinkedInSVG />;
        case "github":
            return <GithubSVG />;
        case "mail":
            return <MailSVG />;
        case "portfolio":
            return <GlobeSVG />;
        default:
            return null;
    }
};

export default SocialIcon;
