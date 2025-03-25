import EducationSectionProps from "../../../../data/model/EducationSectionProps";
import Section from "../../utils/section/Section";
import EducationSectionBody from "./EducationSectionBody";
import EducationSectionHeader from "./EducationSectionHeader";

const EducationSection = (props: EducationSectionProps) => {
  return (
    <Section>
      <EducationSectionHeader {...props} />
      <EducationSectionBody {...props} />
    </Section>
  );
};

export default EducationSection;
