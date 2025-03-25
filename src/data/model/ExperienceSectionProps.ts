export interface ExperienceItem {
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

interface ExperienceSectionProps {
    title: string;
    description: string;
    items: ExperienceItem[];
}

export default ExperienceSectionProps;