import GenericSection from "../../model/GenericSection";
import ProjectItem from "../../model/ProjectItem";
import ProjectCard from "../cards/ProjectCard";
import Section from "../common/section/Section";
import Title from "../../ui/text/Title";

export interface ProjectSectionProps extends GenericSection<ProjectItem> { }

const ProjectSection = (props: ProjectSectionProps) => {
  return (
    <Section id="projects">
      <Title size="lg" className="text-center">
        {props.title}
      </Title>
      <p className="text-center text-secondary-600 dark:text-secondary-400 mb-12 max-w-2xl mx-auto">
        {props.description}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {props.items.map((project) => (
          <ProjectCard {...project} />
        ))}
      </div>
    </Section>
  );
};

export default ProjectSection;
