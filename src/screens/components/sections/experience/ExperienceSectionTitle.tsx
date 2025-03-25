import paths from "../../../paths";
import SectionTitle from "../../utils/section/SectionTitle";
import WorkSVG from "../../utils/svg/WorkSVG";

interface ExperienceSectionTitleProps {
  title: string;
}

const ExperienceSectionTitle = (props: ExperienceSectionTitleProps) => {
  return (
    <SectionTitle title={props.title} path={paths.jobs} SVG={WorkSVG}></SectionTitle>
  );
};

export default ExperienceSectionTitle;
