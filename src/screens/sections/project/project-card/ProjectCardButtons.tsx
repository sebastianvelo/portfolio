import LinkButton from "../../../components/utils/button/LinkButton";
import GithubSVG from "../../../components/utils/svg/GithubSVG";
import GlobeSVG from "../../../components/utils/svg/GlobeSVG";

interface ProjectCardButtonsProps {
    githubUrl: string;
    liveUrl: string;
    className?: string;
}

const ProjectCardButtons = (props: ProjectCardButtonsProps) => {
    const className = props.className || "space-y-2 flex flex-col justify-between";
    return (
        <div className={className}>
            <LinkButton url={props.githubUrl} color="text-black bg-white/70 hover:bg-white/60">
                <GithubSVG />
            </LinkButton>
            <LinkButton url={props.liveUrl} color="text-black bg-white/70 hover:bg-white/60">
                <GlobeSVG />
            </LinkButton>
        </div>
    );
}

export default ProjectCardButtons;