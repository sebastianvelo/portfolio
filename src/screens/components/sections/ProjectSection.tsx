import ProjectSectionProps from "../../../data/model/ProjectSectionProps";
import ProjectCard from "../cards/ProjectCard";
import Section from "../common/section/Section";
import Title from "../utils/text/Title";

const ProjectSection = (props: ProjectSectionProps) => {
  return (
    <Section id="projects">
      <Title size="lg" className="text-center">
        {props.title}
      </Title>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
        {props.description}
      </p>
      <div className="grid grid-cols-1 gap-6">
        {props.items.map((project) => (
          <ProjectCard {...project} />
        ))}
      </div>
    </Section>
  );
};

export default ProjectSection;
