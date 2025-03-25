import { ProjectItem } from "../../../../data/model/ProjectSectionProps";
import BigTitle from "../../utils/text/BigTitle";

export interface ProjectHorizontalCardTitleProps extends ProjectItem { }

const ProjectHorizontalCardTitle = (props: ProjectHorizontalCardTitleProps) => {
    return (
        <a href={props.liveUrl} target="_blank" rel="noopener noreferrer" className="flex space-x-3 hover:bg-white/30 transition-all duration-200 px-1 py-2 rounded-lg">
            <img className="self-center w-4 h-4 2xl:w-8 2xl:h-8 object-cover" src={props.image} alt={props.title} />
            <BigTitle size={0}>{props.title}</BigTitle>
        </a>
    );
};

export default ProjectHorizontalCardTitle;
