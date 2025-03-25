import ExperienceSectionProps from "../../../data/model/ExperienceSectionProps";
import Section from "../../components/utils/section/Section";
import ExperienceSectionBody from "./ExperienceSectionBody";
import ExperienceSectionHeader from "./ExperienceSectionHeader";

const ExperienceSection = (props: ExperienceSectionProps) => {
  return (
    <Section>
      <ExperienceSectionHeader {...props} />
      <ExperienceSectionBody {...props} />
    </Section>
  );
};

export default ExperienceSection;
