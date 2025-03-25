import getEducationScreenModel from "../../data/screen/education/getEducationScreenModel";
import useScrollTop from "../../hooks/useScrollTop";
import { LanguageProps } from "../../types/Language";
import LineSeparator from "../components/utils/svg/LineSeparator";
import EducationHorizontalCard from "../components/cards/education-horizontal-card/EducationHorizontalCard";
import EducationSectionTitle from "../components/sections/education/EducationSectionTitle";
import Screen from "../components/screen/Screen";

interface EducationScreenProps extends LanguageProps { }

const EducationScreen = (props: EducationScreenProps) => {
    const model = getEducationScreenModel(props.lang);

    return (
        <Screen>
            <EducationSectionTitle title={model.title} />
            <div className="space-y-8 px-4 h-full w-full">
                {model.items.map((experience) => (
                    <>
                        <EducationHorizontalCard {...experience} />
                        <LineSeparator />
                    </>
                ))}
            </div>
        </Screen>
    );
};

export default EducationScreen;
