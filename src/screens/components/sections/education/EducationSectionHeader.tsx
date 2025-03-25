import EducationSectionProps from "../../../../data/model/EducationSectionProps";
import EducationSectionTitle from "./EducationSectionTitle";

const EducationSectionHeader = (props: EducationSectionProps) => {
  return (
    <div className="space-y-4 font-mono">
      <EducationSectionTitle {...props} />
      <div className="text-sm sm:text-xl">{props.description}</div>
    </div>
  );
};

export default EducationSectionHeader;
