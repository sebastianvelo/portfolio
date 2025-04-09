import SectionTitle from "../components/common/section/SectionTitle";
import WorkSVG from "../components/utils/svg/WorkSVG";
import paths from "../paths";

interface ExperienceSectionTitleProps {
  title: string;
}

const ExperienceSectionTitle = (props: ExperienceSectionTitleProps) => {
  return (
    <SectionTitle title={props.title} path={paths.jobs} SVG={WorkSVG}></SectionTitle>
  );
};

export default ExperienceSectionTitle;
