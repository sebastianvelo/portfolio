interface GenericSection<T> {
    title: string;
    tab: string;
    description: string;
    items: T[];
}

export default GenericSection;