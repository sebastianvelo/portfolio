import wordings from '../../wordings/projects.json';
import projects from '../../db/projects.json';
import projectCategories from "../../wordings/project-category.json";
import Language from '../../../types/Language';
import { ProjectItem } from '../../model/ProjectSectionProps';

export interface Category {
    name: string;
    items: ProjectItem[];
}

interface Model {
    title: string;
    description: string;
    fullUrl: string;
    categories: Category[];
}

function getProjectScreenModel(language: Language): Model {
    const wording = wordings[language];
    const localizedCategories: { [key: string]: any } = projectCategories[language];

    const combinedItems = projects.map(item => {
        const wordingItem = wording.items.find(w => w.title === item.title);
        return {
            ...item,
            description: wordingItem?.description || ''
        };
    });

    const groupedByCategory = combinedItems.reduce((acc, item) => {
        const category = localizedCategories[String(item.category)];
        if (!category) return acc;

        const categoryName = category.name;
        const existingCategory = acc.find(group => group.name === categoryName);

        if (existingCategory) {
            existingCategory.items.push(item);
        } else {
            acc.push({
                name: categoryName,
                items: [item]
            });
        }

        return acc;
    }, [] as Category[]);

    return {
        title: wording.title,
        description: wording.description,
        fullUrl: wording.fullUrl,
        categories: groupedByCategory
    };
};

export default getProjectScreenModel;