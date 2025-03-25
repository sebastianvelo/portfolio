import { Link } from "react-router-dom";
import BigTitle from "../../components/utils/text/BigTitle";
import WorkSVG from "../../components/utils/svg/WorkSVG";
import paths from "../../paths";

interface ExperienceSectionTitleProps {
  title: string;
}

const ExperienceSectionTitle = (props: ExperienceSectionTitleProps) => {
  return (
    <div className="flex flex-col gap-x-4 items-center justify-center md:flex-row md:items-end md:justify-start">
      <WorkSVG />
      <Link to={paths.jobs} className="text-slate-800 hover:text-black transition-all duration-300 p-0">
        <BigTitle>{props.title}</BigTitle>
      </Link>
    </div>
  );
};

export default ExperienceSectionTitle;
