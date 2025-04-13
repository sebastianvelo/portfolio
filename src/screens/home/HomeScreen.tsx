import { useRef, useState } from "react";
import getHomeScreenModel from "../../data/screen/home/getHomeScreenModel";
import { LanguageProps } from "../../types/Language";
import EducationSection from "../components/sections/EducationSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import ProjectSection from "../components/sections/ProjectSection";
import TabButton from "../components/common/tab/TabButton";
import GenericSection from "../../model/GenericSection";

interface HomeScreenProps extends LanguageProps { }

type TabType = "experience" | "projects" | "education";

const HomeScreen = ({ lang }: HomeScreenProps) => {
    const model = getHomeScreenModel(lang);
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
        experience: <ExperienceSection {...model.experience} />,
        projects: <ProjectSection {...model.projects} />,
        education: <EducationSection {...model.education} />
    };

    const entries = (Object.entries(model)) as [TabType, GenericSection<any>][];

    const sectionToRender = transitioning ? previousActiveRef.current : active;
    const activeSection = sectionMap[sectionToRender];

    const animationClasses = ` ${transitioning ? "opacity-0 translate-y-16" : "opacity-100 translate-y-0"}`;
    const contentClasses = `transition-all duration-500 ${animationClasses}`;

    return (
        <div className="flex flex-col space-y-8 view overflow-x-hidden">
            <div className="flex justify-center mt-8 space-x-2">
                {entries.map(([k, section]) => (
                    <TabButton
                        key={k}
                        active={active === k}
                        onClick={() => handleTabChange(k)}
                    >
                        {section.tab}
                    </TabButton>
                ))}
            </div>

            <div className="min-h-[300px] md:px-16">
                <div className={contentClasses}>{activeSection}</div>
            </div>
        </div>
    );
};

export default HomeScreen;