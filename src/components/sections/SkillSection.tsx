import SkillSectionProps from "../../model/SkillSectionProps";
import Section from "../common/section/Section";
import SkillsContainer from "./skill/SkillsContainer";

const SkillSection = (props: SkillSectionProps) => {
  return (
    <Section>
      <SkillsContainer skills={props.items} />
    </Section>
  );
};

export default SkillSection;