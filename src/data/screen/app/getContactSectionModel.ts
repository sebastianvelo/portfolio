import wordings from '../../wordings/contact.json';
import data from '../../db/contact.json';
import Language from '../../../types/Language';
import ContactSectionProps from '../../model/ContactSectionProps';

function getContactSectionModel(language: Language): ContactSectionProps {
    const wording = wordings[language];
    const combinedItems = data.items.map(item => {
        const wordingItem = wording.items.find(w => w.name === item.name);
        return {
            ...item,
            label: wordingItem?.label || ''
        };
    });

    return {
        title: wording.title,
        message: wording.message,
        items: combinedItems
    };
}

export default getContactSectionModel;