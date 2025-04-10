interface ProjectItem {
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

export default ProjectItem;