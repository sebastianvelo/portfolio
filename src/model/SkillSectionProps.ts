export interface SkillItem {
    name: string;
    color: string;
    image: string;
    types: string[];
}

 interface SkillSectionProps {
    title: string;
    items: SkillItem[];
}

export default SkillSectionProps;