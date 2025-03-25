import getExperienceScreenModel from "../../data/screen/experience/getExperienceScreenModel";
import useScrollTop from "../../hooks/useScrollTop";
import { LanguageProps } from "../../types/Language";
import LineSeparator from "../components/utils/svg/LineSeparator";
import ExperienceHorizontalCard from "../components/sections/experience/experience-horizontal-card/ExperienceHorizontalCard";
import ExperienceSectionTitle from "../components/sections/experience/ExperienceSectionTitle";

interface ExperiencesScreenProps extends LanguageProps { }

const ExperiencesScreen = (props: ExperiencesScreenProps) => {
    useScrollTop();
    const model = getExperienceScreenModel(props.lang);

    return (
        <div className="md:self-center sm:w-3/4 space-y-8 font-mono view">
            <ExperienceSectionTitle title={model.title} />
            <div className="space-y-4 px-4 h-full w-full">
                {model.items.map((experience) => (
                    <>
                        <ExperienceHorizontalCard {...experience} />
                        <LineSeparator />
                    </>
                ))}
            </div>
        </div>
    );
};

export default ExperiencesScreen;
