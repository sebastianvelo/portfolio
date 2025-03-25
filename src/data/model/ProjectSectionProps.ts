export interface ProjectItem {
    id: string;
    title: string;
    description: string;
    image: string;
    githubUrl: string;
    liveUrl: string;
    color: string;
    stack?: string[];
    showInHome: boolean;
}

interface ProjectSectionProps {
    title: string;
    description: string;
    items: ProjectItem[];
}

export default ProjectSectionProps;