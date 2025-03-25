import { ProjectItem } from "../../../../data/model/ProjectSectionProps";
import ProjectCardButtons from "../project-card/ProjectCardButtons";
import ProjectHorizontalCardTitle from "./ProjectHorizontalCardTitle";

export interface ProjectHorizontalCardHeaderProps extends ProjectItem { }

const ProjectHorizontalCardHeader = (props: ProjectHorizontalCardHeaderProps) => {
    return (
        <div className="space-y-4">
            <div className="flex space-x-2 items-center justify-between">
                <ProjectHorizontalCardTitle {...props} />
                <ProjectCardButtons {...props} className="flex space-x-2" />
            </div>
            <p className="mb-4">{props.description}</p>
        </div >
    );
};

export default ProjectHorizontalCardHeader;
