import { Link } from "react-router-dom";
import RocketSVG from "../../components/utils/svg/RocketSVG";
import paths from "../../paths";
import BigTitle from "../../components/utils/text/BigTitle";

interface ProjectSectionTitleProps {
  title: string;
}

const ProjectSectionTitle = (props: ProjectSectionTitleProps) => {
  return (
    <div className="flex flex-col gap-x-4 items-center justify-center md:flex-row md:items-end md:justify-start">
      <RocketSVG />
      <Link to={paths.projects} className="text-slate-800 hover:text-black transition-all duration-300">
        <BigTitle>{props.title}</BigTitle>
      </Link>
    </div>
  );
};

export default ProjectSectionTitle;
