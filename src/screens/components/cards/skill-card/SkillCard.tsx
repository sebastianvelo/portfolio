import { SkillItem } from "../../../../model/SkillSectionProps";

interface TooltipProps {
    children: React.ReactNode;
}

const Tooltip = (props: TooltipProps) => {
    return (
        <div className="absolute top-2 right-2/3 translate-x-full -translate-y-full bg-slate-800 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-600 pointer-events-none shadow-md whitespace-nowrap z-130">
            {props.children}
        </div>
    )
}

interface SkillCardProps extends SkillItem {
    w?: number;
}

const SkillCard = (props: SkillCardProps) => {
    const width = `${props.w ? `w-${props.w}` : "w-full"}`;

    return (
        <div className="relative group w-full">
            <div className={`${props.color} slatescale-75 hover:filter-none rounded-lg ${width} h-14 shadow-lg flex flex-col justify-evenly items-center transition duration-300 transform z-0 hover:z-30`}>
                <img src={props.image} className="rounded-full h-8 w-8" />
            </div>
            <Tooltip>{props.name}</Tooltip>
        </div>
    );
};

export default SkillCard;