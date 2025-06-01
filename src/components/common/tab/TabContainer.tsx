import { useRef, useState } from "react";
import TabButton from "./TabButton";

export type Tab = {
    id: string;
    label: string;
    component: React.ReactNode;
}

interface TabContainerProps {
    tabs: Tab[];
}

const TabContainer = ({ tabs }: TabContainerProps) => {
    const [active, setActive] = useState<number>(0);
    const previousActiveRef = useRef<number>(active);
    const [transitioning, setTransitioning] = useState(false);

    const handleTabChange = (tabIndex: number) => {
        if (tabIndex === active || transitioning) return;

        previousActiveRef.current = active;

        setTransitioning(true);
        setTimeout(() => {
            setActive(tabIndex);
            requestAnimationFrame(() => {
                setTimeout(() => setTransitioning(false), 200);
            });
        }, 200);
    };

    const sectionToRender = transitioning ? previousActiveRef.current : active;
    const activeSection = tabs[sectionToRender].component;
    const animationClasses = ` ${transitioning ? "opacity-0 translate-y-16" : "opacity-100 translate-y-0"}`;
    const contentClasses = `transition-all duration-500 ${animationClasses}`;

    return (
        <div className="flex flex-col space-y-8 view overflow-x-hidden">
            <div className="flex justify-center mt-8 space-x-2">
                {tabs.map((tab: Tab, key: number) => (
                    <TabButton
                        key={tab.id}
                        active={active === key}
                        onClick={() => handleTabChange(key)}
                    >
                        {tab.label}
                    </TabButton>
                ))}
            </div>

            <div className="min-h-[300px] md:px-16">
                <div className={contentClasses}>{activeSection}</div>
            </div>
        </div>
    );
};

export default TabContainer;