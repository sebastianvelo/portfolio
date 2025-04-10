import { useRef, useState } from "react";
import getHomeScreenModel from "../../data/screen/home/getHomeScreenModel";
import { LanguageProps } from "../../types/Language";
import EducationSection from "../components/sections/EducationSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import ProjectSection from "../components/sections/ProjectSection";
import SkillSection from "../components/sections/skill/SkillSection";
import TabButton from "../components/common/tab/TabButton";

interface HomeScreenProps extends LanguageProps { }

type TabType = "experience" | "projects" | "education";

const HomeScreen = ({ lang }: HomeScreenProps) => {
    const { experience, projects, education, skills } = getHomeScreenModel(lang);
    const [active, setActive] = useState<TabType>("experience");
    const [transitioning, setTransitioning] = useState(false);
    const previousActiveRef = useRef<TabType>(active);

    const handleTabChange = (tab: TabType) => {
        if (tab === active || transitioning) return;

        previousActiveRef.current = active;

        setTransitioning(true);
        setTimeout(() => {
            setActive(tab);
            // Usa requestAnimationFrame para la segunda fase para mejor rendimiento
            requestAnimationFrame(() => {
                setTimeout(() => setTransitioning(false), 200);
            });
        }, 200);
    };

    // Objeto de mapeo para simplificar renderActiveSection
    const sectionMap = {
        experience: <ExperienceSection {...experience} />,
        projects: <ProjectSection {...projects} />,
        education: <EducationSection {...education} />
    };

    // Determina qué sección mostrar
    const sectionToRender = transitioning ? previousActiveRef.current : active;
    const activeSection = sectionMap[sectionToRender];

    const contentClasses = `transition-all duration-300 ${transitioning ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"}`;

    return (
        <div className="flex flex-col space-y-8 view">
            <div className="flex justify-center mt-8">
                {(["experience", "projects", "education"] as const).map(tab => (
                    <TabButton
                        key={tab}
                        active={active === tab}
                        onClick={() => handleTabChange(tab)}
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </TabButton>
                ))}
            </div>

            <div className="min-h-[300px]">
                <div className={contentClasses}>{activeSection}</div>
            </div>

            {process.env.NODE_ENV === 'development' && (
                <div className="hidden">
                    <SkillSection {...skills.frontend} />
                    <SkillSection {...skills.frameworkFrontend} />
                    <SkillSection {...skills.backend} />
                </div>
            )}
        </div>
    );
};

export default HomeScreen;