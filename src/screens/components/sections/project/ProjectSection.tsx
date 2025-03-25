import ProjectSectionProps from "../../../../data/model/ProjectSectionProps";
import Section from "../../utils/section/Section";
import ProjectSectionBody from "./ProjectSectionBody";
import ProjectSectionHeader from "./ProjectSectionHeader";

const ProjectSection = (props: ProjectSectionProps) => {
  return (
      <Section>
        <ProjectSectionHeader {...props} />
        <ProjectSectionBody {...props} />
      </Section>
  );
};

export default ProjectSection;
