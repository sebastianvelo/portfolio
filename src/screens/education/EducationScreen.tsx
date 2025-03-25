import getEducationScreenModel from "../../data/screen/education/getEducationScreenModel";
import useScrollTop from "../../hooks/useScrollTop";
import { LanguageProps } from "../../types/Language";
import LineSeparator from "../components/utils/svg/LineSeparator";
import EducationHorizontalCard from "../components/sections/education/education-horizontal-card/EducationHorizontalCard";
import EducationSectionTitle from "../components/sections/education/EducationSectionTitle";

interface EducationScreenProps extends LanguageProps { }

const EducationScreen = (props: EducationScreenProps) => {
    useScrollTop();
    const model = getEducationScreenModel(props.lang);

    return (
        <div className="md:self-center sm:w-3/4 space-y-8 font-mono view">
            <EducationSectionTitle title={model.title} />
            <div className="space-y-8 px-4 h-full w-full">
                {model.items.map((experience) => (
                    <>
                        <EducationHorizontalCard {...experience} />
                        <LineSeparator />
                    </>
                ))}
            </div>
        </div>
    );
};

export default EducationScreen;
