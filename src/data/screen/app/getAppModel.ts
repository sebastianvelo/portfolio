import { HeaderProps } from "../../../layout/header/Header";
import Language from "../../../types/Language";
import ContactSectionProps from "../../../model/ContactSectionProps";
import NavLink from "../../../model/NavLink";
import getContactSectionModel from "./getContactSectionModel";
import getHeaderModel from "./getHeaderModel";
import getNavModel from "./getNavModel";

interface AppModel {
    nav: NavLink[];
    contacts: ContactSectionProps;
    header: HeaderProps;
}

const getAppModel = (language: Language): AppModel => {
    const contacts = getContactSectionModel(language);
    const nav = getNavModel(language);
    const header = getHeaderModel(language);

    return {
        contacts,
        nav,
        header
    };
};

export default getAppModel;