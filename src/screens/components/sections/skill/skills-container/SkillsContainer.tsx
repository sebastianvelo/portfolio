import { SkillItem } from "../../../../../data/model/SkillSectionProps";
import { getSkillsByNames } from "../../../../../data/screen/home/getSkillSectionModel";
import SkillCard from "../skill-card/SkillCard";

interface SkillsContainerProps {
    stack?: string[];
    skills?: SkillItem[];
    className?: string;
}

const SkillsContainer = (props: SkillsContainerProps) => {
    const stack = getSkillsByNames(props.stack || []);
    const className = props.skills ? "flex justify-between items-center gap-2 justify-items-center w-full"
        : props.className || "flex justify-between items-center grid grid-cols-3 gap-2 justify-items-center w-full scale-85 2xl:scale-100";

    return (
        <div className={className}>
            {(props.skills ?? stack).map((skill: SkillItem) => (<SkillCard key={skill.name} {...skill} />))}
        </div>
    );
}

export default SkillsContainer;