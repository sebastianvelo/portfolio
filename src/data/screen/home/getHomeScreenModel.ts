import Language from "../../../types/Language";
import EducationSectionProps from "../../model/EducationSectionProps";
import ExperienceSectionProps from "../../model/ExperienceSectionProps";
import ProjectSectionProps from "../../model/ProjectSectionProps";
import SkillSectionProps from "../../model/SkillSectionProps";
import getEducationSectionModel from "./getEducationSectionModel";
import getExperienceSectionModel from "./getExperienceSectionModel";
import getProjectSectionModel from "./getProjectSectionModel";
import getSkillSectionModel from "./getSkillSectionModel";

interface Model {
    experience: ExperienceSectionProps;
    projects: ProjectSectionProps;
    education: EducationSectionProps;
    skills: {
        frontend: SkillSectionProps;
        backend: SkillSectionProps;
        frameworkFrontend: SkillSectionProps;
    }
}

const getHomeScreenModel = (language: Language): Model => {
    const experience = getExperienceSectionModel(language);
    const projects = getProjectSectionModel(language);
    const frameworkFrontend = getSkillSectionModel("framework-frontend");
    const frontend = getSkillSectionModel("frontend");
    const backend = getSkillSectionModel("backend");
    const education = getEducationSectionModel(language);

    return {
        experience,
        projects,
        education,
        skills: {
            frontend,
            backend,
            frameworkFrontend,
        }
    };
};

export default getHomeScreenModel;