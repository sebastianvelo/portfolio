import getProjectScreenModel from "../../data/screen/project/getProjectScreenModel";
import useScrollTop from "../../hooks/useScrollTop";
import { LanguageProps } from "../../types/Language";
import LineSeparator from "../components/utils/svg/LineSeparator";
import ProjectSectionTitle from "../components/sections/project/ProjectSectionTitle";
import ProjectCategory from "./ProjectCategory";

interface ProjectsScreenProps extends LanguageProps { }

const ProjectsScreen = (props: ProjectsScreenProps) => {
    useScrollTop();
    const model = getProjectScreenModel(props.lang);

    return (
        <div className="md:self-center sm:w-3/4 space-y-8 font-mono view">
            <ProjectSectionTitle title={model.title} />
            <div className="space-y-8 px-4 h-full">
                {model.categories.map((category) => (
                    <>
                        <ProjectCategory key={category.name} category={category} />
                        <LineSeparator />
                    </>
                ))}
            </div>
        </div>
    );
};

export default ProjectsScreen;
