interface ExperienceItem {
    id: string;
    company: string;
    position: string;
    start: number;
    end?: number | string;
    image: string;
    description: string;
    fullDescription?: string;
    color: string;
    stack: string[];
}

export default ExperienceItem;