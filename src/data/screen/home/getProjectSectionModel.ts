import { ProjectSectionProps } from '../../../screens/components/sections/ProjectSection';
import Language from '../../../types/Language';
import projects from '../../db/projects.json';
import wordings from '../../wordings/projects.json';

function getProjectSectionModel(language: Language): ProjectSectionProps {
    const wording = wordings[language];
    const items = projects.filter(item => item.showInHome);
    const combinedItems = items.map(item => {
        const wordingItem = wording.items.find(w => w.id === item.id);
        return {
            ...item,
            description: wordingItem?.description ?? ''
        };
    });
    
    return {
        title: wording.title,
        tab: wording.tab,
        description: wording.description,
        items: combinedItems
    };
};

export default getProjectSectionModel;