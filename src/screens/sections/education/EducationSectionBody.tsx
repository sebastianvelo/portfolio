import EducationSectionProps from "../../../data/model/EducationSectionProps";
import EducationHorizontalCard from "./education-horizontal-card/EducationHorizontalCard";

const EducationSectionBody = (props: EducationSectionProps) => {
  return (
    <div className="space-y-2 md:space-x-2 grid md:grid-cols-2 w-full">
      {props.items.map((project: any) => (
        <div key={project.id} className="flex-none">
          <EducationHorizontalCard {...project} />
        </div>
      ))}
    </div>
  );
};

export default EducationSectionBody;
