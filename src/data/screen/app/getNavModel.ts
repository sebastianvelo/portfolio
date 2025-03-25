import Language from '../../../types/Language';
import NavLink from '../../model/NavLink';
import wordings from '../../wordings/nav.json';

function getNavModel(language: Language): NavLink[] {
    return wordings[language];
};

export default getNavModel;