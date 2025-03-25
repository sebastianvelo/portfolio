import wordings from '../../wordings/experience.json';
import data from '../../db/experience.json';
import Language from '../../../types/Language';
import ExperienceSectionProps from '../../model/ExperienceSectionProps';

function getExperienceScreenModel(language: Language): ExperienceSectionProps {
    const wording = wordings[language];
    const combinedItems = data.map(item => {
        const wordingItem = wording.items.find(w => w.id === item.id);
        return {
            ...item,
            description: wordingItem?.description || '',
            fullDescription: wordingItem?.fullDescription || ""
        };
    });

    return {
        title: wording.title,
        description: wording.description,
        items: combinedItems
    };
};

export default getExperienceScreenModel;