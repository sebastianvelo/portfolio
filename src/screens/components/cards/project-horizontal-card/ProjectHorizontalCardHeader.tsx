import { ProjectItem } from "../../../../data/model/ProjectSectionProps";
import LinkButton from "../../utils/button/LinkButton";
import GithubSVG from "../../utils/svg/GithubSVG";
import GlobeSVG from "../../utils/svg/GlobeSVG";
import ProjectHorizontalCardTitle from "./ProjectHorizontalCardTitle";

export interface ProjectHorizontalCardHeaderProps extends ProjectItem { }

const ProjectHorizontalCardHeader = (props: ProjectHorizontalCardHeaderProps) => {
    return (
        <div className="space-y-4">
            <div className="flex space-x-2 items-center justify-between">
                <ProjectHorizontalCardTitle {...props} />
                <div className="mt-4 flex space-x-3">
                    <LinkButton url={props.githubUrl} color="text-black bg-white/70 hover:bg-white/60">
                        <GithubSVG />
                    </LinkButton>
                    <LinkButton url={props.liveUrl} color="text-black bg-white/70 hover:bg-white/60">
                        <GlobeSVG />
                    </LinkButton>
                </div>
            </div>
            <p className="mb-4">{props.description}</p>
        </div >
    );
};

export default ProjectHorizontalCardHeader;
