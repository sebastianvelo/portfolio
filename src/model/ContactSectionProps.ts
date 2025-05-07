export interface ContactItemProps {
    id: string;
    name: string;
    label: string;
    color: string;
    image: string;
    url: string;
}

interface ContactSectionProps {
    title: string;
    message: string;
    items: ContactItemProps[];
}

export default ContactSectionProps;