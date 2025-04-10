import { EducationSectionProps } from "../../../screens/components/sections/EducationSection";
import { ExperienceSectionProps } from "../../../screens/components/sections/ExperienceSection";
import { ProjectSectionProps } from "../../../screens/components/sections/ProjectSection";
import Language from "../../../types/Language";
import getEducationSectionModel from "./getEducationSectionModel";
import getExperienceSectionModel from "./getExperienceSectionModel";
import getProjectSectionModel from "./getProjectSectionModel";
import getSkillSectionModel from "./getSkillSectionModel";

interface HomeModel {
    experience: ExperienceSectionProps;
    projects: ProjectSectionProps;
    education: EducationSectionProps;
    /*skills: {
        frontend: SkillSectionProps;
        backend: SkillSectionProps;
        frameworkFrontend: SkillSectionProps;
    }*/
}

const getHomeScreenModel = (language: Language): HomeModel => {
    const experience = getExperienceSectionModel(language);
    const projects = getProjectSectionModel(language);
    const education = getEducationSectionModel(language);
    const frameworkFrontend = getSkillSectionModel("framework-frontend");
    const frontend = getSkillSectionModel("frontend");
    const backend = getSkillSectionModel("backend");

    return {
        experience,
        projects,
        education,
        /*skills: {
            frontend,
            backend,
            frameworkFrontend,
        }*/
    };
};

export default getHomeScreenModel;