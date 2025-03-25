import wordings from '../../wordings/about.json';
import Language from '../../../types/Language';
import AboutSectionProps from '../../model/AboutSectionProps';

function getAboutSectionModel(language: Language): AboutSectionProps {
    return wordings[language];
};

export default getAboutSectionModel;