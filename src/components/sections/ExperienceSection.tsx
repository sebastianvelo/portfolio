import ExperienceItem from "../../model/ExperienceItem";
import GenericSection from "../../model/GenericSection";
import Title from "../../ui/text/Title";
import ExperienceCard from "../cards/ExperienceCard";
import Section from "../common/section/Section";

export interface ExperienceSectionProps extends GenericSection<ExperienceItem> { }

const ExperienceSection = (props: ExperienceSectionProps) => {
  return (
    <Section id="experience">
      <Title size="lg" className="text-center">
        {props.title}
      </Title>
      <p className="text-center text-secondary-600 dark:text-secondary-400 mb-12 max-w-2xl mx-auto">
        {props.description}
      </p>
      <div className="grid grid-cols-1 gap-6">
        {props.items.map((experience) => (
          <ExperienceCard key={experience.id} {...experience} />
        ))}
      </div>
    </Section>
  );
};

export default ExperienceSection;
