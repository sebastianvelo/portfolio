import { ExperienceItem } from "../../../../data/model/ExperienceSectionProps";
import HorizontalCard from "../../utils/horizontal-card/HorizontalCard";
import BigTitle from "../../utils/text/BigTitle";
import RichText from "../../utils/text/RichText";
import SkillsContainer from "../../sections/skill/skills-container/SkillsContainer";
import TimeRange from "../../utils/text/TimeRange";

export interface ExperienceHorizontalCardProps extends ExperienceItem { }

const ExperienceHorizontalCard = (props: ExperienceHorizontalCardProps) => {

    return (
        <HorizontalCard color={props.color}>
            <div className="space-y-8">
                <div className="space-y-2">
                    <div className="flex space-x-3">
                        <img src={props.image} alt={props.company} className="self-center w-6 h-6 2xl:w-8 2xl:h-8 object-cover" />
                        <BigTitle size={1}>{props.company}</BigTitle>
                    </div>
                    <BigTitle size={0}>{props.position}</BigTitle>
                    <TimeRange start={props.start} end={props.end} />
                    <RichText>{(props.fullDescription || props.description)}</RichText>
                </div>
                <SkillsContainer stack={props.stack} className="flex w-full md:w-1/2 space-x-4" />
            </div>
        </HorizontalCard>
    );
};

export default ExperienceHorizontalCard;
