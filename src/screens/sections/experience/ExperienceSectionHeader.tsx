import ExperienceSectionProps from "../../../data/model/ExperienceSectionProps";
import ExperienceSectionTitle from "./ExperienceSectionTitle";

const ExperienceSectionHeader = (props: ExperienceSectionProps) => {
  return (
    <div className="space-y-4 font-mono">
      <ExperienceSectionTitle {...props} />
      <div className="text-sm sm:text-xl">{props.description}</div>
    </div>
  );
};

export default ExperienceSectionHeader;
