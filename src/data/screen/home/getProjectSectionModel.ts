import wordings from '../../wordings/projects.json';
import projects from '../../db/projects.json';
import Language from '../../../types/Language';
import ProjectSectionProps from '../../model/ProjectSectionProps';

function getProjectSectionModel(language: Language): ProjectSectionProps {
    const wording = wordings[language];
    const items = projects.filter(item => item.showInHome);
    const combinedItems = items.map(item => {
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

export default getProjectSectionModel;