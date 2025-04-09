import { useRef, useState } from "react";
import getHomeScreenModel from "../../data/screen/home/getHomeScreenModel";
import { LanguageProps } from "../../types/Language";
import EducationSection from "../components/sections/education/EducationSection";
import ExperienceSection from "../components/sections/experience/ExperienceSection";
import ProjectSection from "../components/sections/project/ProjectSection";
import SkillSection from "../components/sections/skill/SkillSection";
import TabButton from "../components/utils/tab/TabButton";

interface HomeScreenProps extends LanguageProps { }

const HomeScreen = (props: HomeScreenProps) => {
    const { experience, projects, education, skills, } = getHomeScreenModel(props.lang);
    const [active, setActive] = useState("experience");
    const [transitioning, setTransitioning] = useState(false);
    const previousActiveRef = useRef(active);

    const handleTabChange = (tab: string) => {
        if (tab === active || transitioning) return;

        previousActiveRef.current = active;

        setTransitioning(true);
        setTimeout(() => {
            setActive(tab);
            setTimeout(() => {
                setTransitioning(false);
            }, 200);
        }, 200);
    };

    const renderActiveSection = () => {
        const sectionToRender = transitioning ? previousActiveRef.current : active;

        switch (sectionToRender) {
            case "experience":
                return <ExperienceSection {...experience} />;
            case "projects":
                return <ProjectSection {...projects} />;
            case "education":
                return <EducationSection {...education} />;
            default:
                return <ExperienceSection {...experience} />;
        }
    };

    const contentClasses = transitioning
        ? "opacity-0 translate-y-8 transition-all duration-300"
        : "opacity-100 translate-y-0 transition-all duration-300";

    return (
        <div className="flex flex-col space-y-8 view">
            <div className="flex justify-center mt-8">
                <TabButton active={active === "experience"} onClick={() => handleTabChange("experience")}>
                    Experience
                </TabButton>
                <TabButton active={active === "projects"} onClick={() => handleTabChange("projects")}>
                    Projects
                </TabButton>
                <TabButton active={active === "education"} onClick={() => handleTabChange("education")}>
                    Education
                </TabButton>
            </div>

            <div className="min-h-[300px]">
                <div className={contentClasses}>{renderActiveSection()}</div>
            </div>

            <div className="hidden">
                <SkillSection {...skills.frontend} />
                <SkillSection {...skills.frameworkFrontend} />
                <SkillSection {...skills.backend} />
            </div>
        </div>
    );
};

export default HomeScreen;
