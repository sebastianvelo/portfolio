export interface ContactItemProps {
    id: string;
    name: string;
    label: string;
    url: string;
    color: string;
    image: string;
}

interface ContactSectionProps {
    title: string;
    message: string;
    items: ContactItemProps[];
}

export default ContactSectionProps;