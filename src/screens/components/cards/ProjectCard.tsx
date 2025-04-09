import { ProjectItem } from "../../../data/model/ProjectSectionProps";
import Badge from "../utils/badge/Badge";
import LinkButton from "../utils/button/LinkButton";
import FlipCard from "../utils/flip-card/FlipCard";
import FlipCardSide from "../utils/flip-card/FlipCardSide";
import GithubSVG from "../utils/svg/GithubSVG";
import GlobeSVG from "../utils/svg/GlobeSVG";

export interface ProjectCardProps extends ProjectItem { }

const Skills = (props: ProjectCardProps) => (
  <div className="flex space-x-2 mt-1">
    {props.stack!.map(item => <Badge>{item}</Badge>)}
  </div>
)

const CardFront = (props: ProjectCardProps) => (
  <FlipCardSide>
    <div className="p-5 h-full flex flex-col">
      <div className="flex items-center mb-4">
        <img
          src={props.image}
          alt={props.title}
          className="w-12 h-12 rounded-md mr-4 object-cover"
        />
        <div>
          <h3 className="font-bold text-lg">{props.title}</h3>
          <Skills {...props} />
        </div>
      </div>
      <p className="cursor-text text-gray-700 dark:text-gray-300 flex-grow">
        {props.description}
      </p>
      <div className="mt-4 flex space-x-3">
        <LinkButton url={props.githubUrl} color="text-black bg-white/70 hover:bg-white/60">
          <GithubSVG />
        </LinkButton>
        <LinkButton url={props.liveUrl} color="text-black bg-white/70 hover:bg-white/60">
          <GlobeSVG />
        </LinkButton>
      </div>
    </div>
  </FlipCardSide>
);

const CardBack = (props: ProjectCardProps) => (
  <FlipCardSide>
    <div className="p-5 h-full flex flex-col">
      <h3 className="font-bold text-lg mb-2">{props.title}</h3>
      <Skills {...props} />
      <p className="cursor-text mt-4 text-gray-700 dark:text-gray-300 flex-grow overflow-y-auto [scrollbar-width:thin] [scrollbar-color:#111_#333]">
        {props.description}
      </p>
      <div className="mt-4 flex space-x-3">
        <LinkButton url={props.githubUrl} color="text-black bg-white/70 hover:bg-white/60">
          <GithubSVG />
        </LinkButton>
        <LinkButton url={props.liveUrl} color="text-black bg-white/70 hover:bg-white/60">
          <GlobeSVG />
        </LinkButton>
      </div>
    </div>
  </FlipCardSide>
);

const ProjectCard = (props: ProjectItem) => {
  return (
    <div className="h-64">
      <FlipCard front={<CardFront {...props} />} back={<CardBack {...props} />} />
    </div>
  );
};

export default ProjectCard;
