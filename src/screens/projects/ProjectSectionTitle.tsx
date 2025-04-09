import paths from "../paths";
import SectionTitle from "../components/common/section/SectionTitle";
import RocketSVG from "../components/utils/svg/RocketSVG";

interface ProjectSectionTitleProps {
  title: string;
}

const ProjectSectionTitle = (props: ProjectSectionTitleProps) => {
  return (
    <SectionTitle title={props.title} path={paths.projects} SVG={RocketSVG}></SectionTitle>
  );
};

export default ProjectSectionTitle;
