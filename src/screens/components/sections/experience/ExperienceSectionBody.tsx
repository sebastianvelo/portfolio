import ExperienceSectionProps from "../../../../data/model/ExperienceSectionProps";
import ExperienceCard from "../../cards/experience-card/ExperienceCard";

const ExperienceSectionBody = (props: ExperienceSectionProps) => {
  return (
    <div className="flex flex-nowrap overflow-y-hidden overflow-x-scroll justify-between gap-x-2 items-center md:grid md:grid-cols-4 xl:grid-cols-4 md:gap-y-4 md:justify-items-center w-full">
      {props.items.map((project: any) => (
        <div key={project.id} className="flex-none">
          <ExperienceCard {...project} />
        </div>
      ))}
    </div>
  );
};

export default ExperienceSectionBody;
