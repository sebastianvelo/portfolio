import ProjectItem from "../../../model/ProjectItem";
import FlipCard from "../common/flip-card/FlipCard";
import FlipCardSide from "../common/flip-card/FlipCardSide";
import Badge from "../utils/badge/Badge";
import LinkButton from "../utils/button/LinkButton";
import GithubSVG from "../utils/svg/GithubSVG";
import GlobeSVG from "../utils/svg/GlobeSVG";

export interface ProjectCardProps extends ProjectItem { }

interface SkillsProps extends ProjectCardProps {
  slice?: number;
}

const Skills = (props: SkillsProps) => {
  const toIterate = props.slice ? props.stack!.slice(0, props.slice) : props.stack!;
  const rest = props.stack!.length - toIterate.length;
  return (
    <div className="flex w-full space-x-2 mt-1 overflow-x-auto [scrollbar-width:thin] [scrollbar-color:#111_#333]">
      {toIterate.map(item => <Badge key={item}>{item}</Badge>)}
      {rest > 0 && (
        <Badge>
          +{rest} more
        </Badge>)}
    </div>
  );
}

const CardFront = (props: ProjectCardProps) => (
  <FlipCardSide color={props.color}>
    <div className="p-5 h-full flex flex-col">
      <div className="flex items-center mb-4">
        <img
          src={props.image}
          alt={props.title}
          className="w-12 h-12 rounded-md mr-4 object-cover dark:invert"
        />
        <div>
          <h3 className="font-bold text-lg">{props.title}</h3>
          <Skills {...props} slice={3} />
        </div>
      </div>
      <p className="cursor-text text-gray-700 dark:text-gray-300 flex-grow">
        {props.description}
      </p>
    </div>
  </FlipCardSide>
);

const CardBack = (props: ProjectCardProps) => (
  <FlipCardSide color={props.color}>
    <div className="p-5 h-full flex flex-col justify-between">
      <div>
        <h3 className="font-bold text-lg mb-2">{props.title}</h3>
        <Skills {...props} />
      </div>
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
    <div className="h-64 sm:h-48">
      <FlipCard front={<CardFront {...props} />} back={<CardBack {...props} />} />
    </div>
  );
};

export default ProjectCard;
