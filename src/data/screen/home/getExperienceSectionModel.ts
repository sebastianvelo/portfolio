import { ExperienceSectionProps } from '../../../components/sections/ExperienceSection';
import Language from '../../../types/Language';
import data from '../../db/experience.json';
import wordings from '../../wordings/experience.json';

function getExperienceSectionModel(language: Language): ExperienceSectionProps {
    const wording = wordings[language];
    const combinedItems = data.map(item => {
        const wordingItem = wording.items.find(w => w.id === item.id);
        return {
            ...item,
            description: wordingItem?.description ?? '',
            fullDescription: wordingItem?.fullDescription ?? ""
        };
    });

    return {
        title: wording.title,
        tab: wording.tab,
        description: wording.description,
        items: combinedItems
    };
};

export default getExperienceSectionModel;