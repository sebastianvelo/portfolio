import EducationItem from "../../model/EducationItem";
import GenericSection from "../../model/GenericSection";
import Title from "../../ui/text/Title";
import EducationCard from "../cards/EducationCard";
import Section from "../common/section/Section";

export interface EducationSectionProps extends GenericSection<EducationItem> { }

const EducationSection = (props: EducationSectionProps) => {
  return (
    <Section id="education">
      <Title size="lg" className="text-center">
        {props.title}
      </Title>
      <p className="text-center text-secondary-600 dark:text-secondary-400 mb-12 max-w-2xl mx-auto">
        {props.description}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {props.items.map((education) => (
          <EducationCard key={education.id} {...education} />
        ))}
      </div>
    </Section>
  );
};

export default EducationSection;
