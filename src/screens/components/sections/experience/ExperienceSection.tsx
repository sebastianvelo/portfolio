import ExperienceSectionProps from "../../../../data/model/ExperienceSectionProps";
import ExperienceCard from "../../cards/ExperienceCard";
import Section from "../../utils/section/Section";
import WorkSVG from "../../utils/svg/WorkSVG";
import Title from "../../utils/text/Title";

const ExperienceSection = (props: ExperienceSectionProps) => {
  return (
    <Section id="experience">
      <Title size="lg" className="text-center">
        {props.title}
      </Title>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
        {props.description}
      </p>
      <div className="grid grid-cols-1 gap-6">
        {props.items.map((exp) => (
          <ExperienceCard {...exp} />
        ))}
      </div>
    </Section>
  );
};

export default ExperienceSection;
