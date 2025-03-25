import { ContactItemProps } from "../../../../data/model/ContactSectionProps";

const ContactItem = (props: ContactItemProps) => {
    return (
        <a href={props.url} className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5 grayscale-50">
            <img src={props.image} alt={props.name} className="w-full h-6" />
        </a>
    );
};

export default ContactItem;
