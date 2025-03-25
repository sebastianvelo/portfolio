export interface EducationItem {
    id: string;
    color: string;
    title: string; 
    description: string;
    image: string;
    start: number;
    end?: number;
}

interface EducationSectionProps {
    title: string;
    description: string;
    items: EducationItem[];
}

export default EducationSectionProps;