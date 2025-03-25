import { ProjectItem } from "../../../../data/model/ProjectSectionProps";
import HorizontalCard from "../../utils/horizontal-card/HorizontalCard";
import SkillsContainer from "../../sections/skill/skills-container/SkillsContainer";
import ProjectHorizontalCardHeader from "./ProjectHorizontalCardHeader";

export interface ProjectHorizontalCardProps extends ProjectItem { }

const ProjectHorizontalCard = (props: ProjectHorizontalCardProps) => {
    return (
        <HorizontalCard color={props.color}>
            <ProjectHorizontalCardHeader {...props} />
            <SkillsContainer stack={props.stack} className="flex w-full md:w-1/2 space-x-4" />
        </HorizontalCard>
    );
};

export default ProjectHorizontalCard;
