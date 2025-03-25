import { Category } from "../../data/screen/project/getProjectScreenModel";
import BigTitle from "../components/utils/text/BigTitle";
import ProjectHorizontalCard from "../components/cards/project-horizontal-card/ProjectHorizontalCard";

interface ProjectCategoryProps {
    category: Category;
}

const ProjectCategory = (props: ProjectCategoryProps) => {
    return (
        <div className="space-y-4 h-full">
            <BigTitle size={1}>{props.category.name}</BigTitle>
            <div className="space-y-2 2xl:gap-x-2 2xl:grid 2xl:grid-cols-2 items-stretch h-full">
                {props.category.items.map(ProjectHorizontalCard)}
            </div>
        </div>
    );
};

export default ProjectCategory;
