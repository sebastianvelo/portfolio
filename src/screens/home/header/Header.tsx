import AboutSectionProps from "../../../data/model/AboutSectionProps";
import BigTitle from "../../components/utils/text/BigTitle";
import LineSeparator from "../../components/utils/svg/LineSeparator";

interface HeaderProps extends AboutSectionProps { }

const Header = (props: HeaderProps) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <section className="space-y-2 px-4 text-justify font-mono sm:w-3/4">
        <div className="flex flex-col gap-y-8 sm:flex-row sm:gap-x-8 justify-center items-center">
          <img
            className="h-8 w-8 md:h-16 md:w-16 hover:rotate-180 transition-all duration-500 transform"
            src="https://github.com/SebastianVelo/portfolio/blob/main/src/assets/index-icon.png?raw=true"
            alt="Index Icon"
          />
          <div className="space-y-2">
            <BigTitle>{props.header.title}</BigTitle>
            <h3 className="text-lg 2xl:text-3xl">
              {props.header.subtitle}
            </h3>
            <p className="text-md 2xl:text-xl leading-normal">
              {props.content}
            </p>
          </div>
        </div>
      </section>
      <LineSeparator />
    </div>
  );
};

export default Header;
