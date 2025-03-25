import paths from "../../../paths";
import SectionTitle from "../../utils/section/SectionTitle";
import BookSVG from "../../utils/svg/BookSVG";

interface EducationSectionTitleProps {
  title: string;
}

const EducationSectionTitle = (props: EducationSectionTitleProps) => {
  return (
    <SectionTitle title={props.title} path={paths.home} SVG={BookSVG}></SectionTitle>
  );
};

export default EducationSectionTitle;
