import Language from "../../../types/Language";
import ContactSectionProps from "../../model/ContactSectionProps";
import NavLink from "../../model/NavLink";
import getContactSectionModel from "./getContactSectionModel";
import getNavModel from "./getNavModel";

interface AppModel {
    nav: NavLink[];
    contacts: ContactSectionProps;
}

const getAppModel = (language: Language): AppModel => {
    const contacts = getContactSectionModel(language);
    const nav = getNavModel(language);

    return {
        contacts,
        nav,
    };
};

export default getAppModel;