import skills from '../../db/skills.json';
import SkillSectionProps from '../../../model/SkillSectionProps';
import { SkillItem } from "../../../model/SkillItem";

export const getSkillByName = (name: string): SkillItem | undefined => {
    return skills.find(skill => skill.name === name);
}

export const getSkillsByNames = (names: string[]): SkillItem[] => {
    return names.map(name => getSkillByName(name)).filter(skill => skill !== undefined) as SkillItem[];
}

function getSkillSectionModel(type?: string): SkillSectionProps {
    return {
        title: 'Skills', //TODO Mejorar esto.
        items: type ? skills.filter(skill => skill.types.includes(type)) : skills,
    };
};

export default getSkillSectionModel;