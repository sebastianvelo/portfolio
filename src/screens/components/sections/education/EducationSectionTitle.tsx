import { Link } from "react-router-dom";
import BigTitle from "../../utils/text/BigTitle";
import BookSVG from "../../utils/svg/BookSVG";
import paths from "../../../paths";

interface EducationSectionTitleProps {
  title: string;
}

const EducationSectionTitle = (props: EducationSectionTitleProps) => {
  return (
    <div className="flex flex-col gap-x-4 items-center justify-center md:flex-row md:items-end md:justify-start">
      <BookSVG />
      <Link to={paths.home} className="text-slate-800 hover:text-black transition-all duration-300 p-0">
        <BigTitle>{props.title}</BigTitle>
      </Link>
    </div>
  );
};

export default EducationSectionTitle;
