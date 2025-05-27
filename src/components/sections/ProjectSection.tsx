import GenericSection from "../../model/GenericSection";
import ProjectItem from "../../model/ProjectItem";
import Title from "../../ui/text/Title";
import ProjectCard from "../cards/ProjectCard";
import Section from "../common/section/Section";

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
      <div className="grid gap-6">
        {props.items.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </Section>
  );
};

export default ProjectSection;
