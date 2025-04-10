import { EducationSectionProps } from '../../../screens/components/sections/EducationSection';
import Language from '../../../types/Language';
import data from '../../db/education.json';
import wordings from '../../wordings/education.json';

function getEducationScreenModel(language: Language): EducationSectionProps {
    const wording = wordings[language];
    const combinedItems = data.map(item => {
        const wordingItem = wording.items.find(w => w.id === item.id);
        return {
            ...item,
            description: wordingItem?.description ?? '',
        };
    });

    return {
        title: wording.title,
        tab: wording.tab,
        description: wording.description,
        items: combinedItems
    };
};

export default getEducationScreenModel;