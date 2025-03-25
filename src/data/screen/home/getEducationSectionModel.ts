import Language from '../../../types/Language';
import data from '../../db/education.json';
import EducationSectionProps from '../../model/EducationSectionProps';
import wordings from '../../wordings/education.json';

function getEducationScreenModel(language: Language): EducationSectionProps {
    const wording = wordings[language];
    const combinedItems = data.map(item => {
        const wordingItem = wording.items.find(w => w.id === item.id);
        return {
            ...item,
            description: wordingItem?.description || ''
        };
    });

    return {
        title: wording.title,
        description: wording.description,
        items: combinedItems
    };
};

export default getEducationScreenModel;