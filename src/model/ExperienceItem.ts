interface ExperienceItem {
    id: string;
    company: string;
    position: string;
    start: number;
    end?: number;
    image: string;
    description: string;
    fullDescription?: string;
    color: string;
    stack: string[];
}

export default ExperienceItem;