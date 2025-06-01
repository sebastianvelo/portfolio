import { useRef, useState } from "react";
import TabContainer from "../../components/common/tab/TabContainer";
import EducationSection from "../../components/sections/EducationSection";
import ExperienceSection from "../../components/sections/ExperienceSection";
import ProjectSection from "../../components/sections/ProjectSection";
import getHomeScreenModel from "../../data/screen/home/getHomeScreenModel";
import GenericSection from "../../model/GenericSection";
import { LanguageProps } from "../../types/Language";

type TabType = "experience" | "projects" | "education";

interface HomeScreenProps extends LanguageProps { }

const HomeScreen = ({ lang }: HomeScreenProps) => {
    const model = getHomeScreenModel(lang);

    const sectionMap = {
        experience: <ExperienceSection {...model.experience} />,
        projects: <ProjectSection {...model.projects} />,
        education: <EducationSection {...model.education} />
    };

    const tabs = ((Object.entries(model)) as [TabType, GenericSection<any>][]).map(([k, section]) => ({
        id: k,
        label: section.tab,
        component: sectionMap[k]
    }));

    return (
        <>
            <TabContainer tabs={tabs} />
        </>
    );
};

export default HomeScreen;