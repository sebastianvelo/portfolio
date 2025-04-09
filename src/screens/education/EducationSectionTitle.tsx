import SectionTitle from "../components/common/section/SectionTitle";
import BookSVG from "../components/utils/svg/BookSVG";
import paths from "../paths";

interface EducationSectionTitleProps {
  title: string;
}

const EducationSectionTitle = (props: EducationSectionTitleProps) => {
  return (
    <SectionTitle title={props.title} path={paths.home} SVG={BookSVG}></SectionTitle>
  );
};

export default EducationSectionTitle;
