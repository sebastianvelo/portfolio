import getProjectScreenModel from "../../data/screen/project/getProjectScreenModel";
import useScrollTop from "../../hooks/useScrollTop";
import { LanguageProps } from "../../types/Language";
import LineSeparator from "../components/utils/svg/LineSeparator";
import ProjectSectionTitle from "../components/sections/project/ProjectSectionTitle";
import ProjectCategory from "./ProjectCategory";
import Screen from "../components/screen/Screen";

interface ProjectsScreenProps extends LanguageProps { }

const ProjectsScreen = (props: ProjectsScreenProps) => {
    const model = getProjectScreenModel(props.lang);

    return (
        <Screen>
            <ProjectSectionTitle title={model.title} />
            <div className="space-y-8 px-4 h-full">
                {model.categories.map((category) => (
                    <>
                        <ProjectCategory key={category.name} category={category} />
                        <LineSeparator />
                    </>
                ))}
            </div>
        </Screen>
    );
};

export default ProjectsScreen;
