import getHomeScreenModel from "../../data/screen/home/getHomeScreenModel";
import Header from "./header/Header";
import { LanguageProps } from "../../types/Language";
import ExperienceSection from "../sections/experience/ExperienceSection";
import ProjectSection from "../sections/project/ProjectSection";
import SkillSection from "../sections/skill/SkillSection";
import EducationSection from "../sections/education/EducationSection";

interface HomeScreenProps extends LanguageProps { }

const HomeScreen = (props: HomeScreenProps) => {
    const { about, experience, projects, education, skills,  } = getHomeScreenModel(props.lang);

    return (
        <>
            <Header {...about} />
            <div className="flex flex-col space-y-8 view">
                <SkillSection {...skills.frontend} />
                <ExperienceSection {...experience} />
                <SkillSection {...skills.frameworkFrontend} />
                <ProjectSection {...projects} />
                <SkillSection {...skills.backend} />
                <EducationSection {...education} />
            </div>
        </>
    );
};

export default HomeScreen;
