import { EducationItem } from "../../../../data/model/EducationSectionProps";
import HorizontalCard from "../../utils/horizontal-card/HorizontalCard";
import BigTitle from "../../utils/text/BigTitle";
import TimeRange from "../../utils/text/TimeRange";

export interface EducationHorizontalCardProps extends EducationItem { }

const EducationHorizontalCard = (props: EducationHorizontalCardProps) => {
    return (
        <HorizontalCard color={props.color}>
            <div className="space-y-8">
                <div className="space-y-2">
                    <div className="flex space-x-3">
                        <img
                            src={props.image}
                            alt={props.title}
                            className="self-center w-6 h-6 2xl:w-8 2xl:h-8 object-cover"
                        />
                        <BigTitle size={1}>{props.description}</BigTitle>
                    </div>
                    <p className="text-lg">{props.title}</p>
                    <TimeRange start={props.start} end={props.end} />
                </div>
            </div>
        </HorizontalCard>
    );
};

export default EducationHorizontalCard;
