import SkillSectionProps from "../../../../data/model/SkillSectionProps";
import Section from "../../common/section/Section";
import SkillsContainer from "./skills-container/SkillsContainer";

const SkillSection = (props: SkillSectionProps) => {
  return (
    <Section>
      <SkillsContainer skills={props.items} />
    </Section>
  );
};

export default SkillSection;