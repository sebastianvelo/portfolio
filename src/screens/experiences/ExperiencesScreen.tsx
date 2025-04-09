import getExperienceScreenModel from "../../data/screen/experience/getExperienceScreenModel";
import { LanguageProps } from "../../types/Language";
import ExperienceHorizontalCard from "../components/cards/experience-horizontal-card/ExperienceHorizontalCard";
import Screen from "../components/screen/Screen";
import LineSeparator from "../components/utils/svg/LineSeparator";
import ExperienceSectionTitle from "./ExperienceSectionTitle";

interface ExperiencesScreenProps extends LanguageProps { }

const ExperiencesScreen = (props: ExperiencesScreenProps) => {
    const model = getExperienceScreenModel(props.lang);

    return (
        <Screen>
            <ExperienceSectionTitle title={model.title} />
            <div className="space-y-4 px-4 h-full w-full">
                {model.items.map((experience) => (
                    <>
                        <ExperienceHorizontalCard {...experience} />
                        <LineSeparator />
                    </>
                ))}
            </div>
        </Screen>
    );
};

export default ExperiencesScreen;
