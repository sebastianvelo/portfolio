import wordings from '../../wordings/about.json';
import Language from '../../../types/Language';
import { HeaderProps } from '../../../layout/header/Header';

function getHeaderModel(language: Language): HeaderProps {
    return wordings[language];
};

export default getHeaderModel;