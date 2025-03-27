import { ReactNode } from "react";
import useScrollTop from "../../../hooks/useScrollTop";
import SectionTitle from "../utils/section/SectionTitle";
import paths from "../../paths";
import RocketSVG from "../utils/svg/RocketSVG";

interface ScreenProps {
    children: ReactNode;
}

const Screen = (props: ScreenProps) => {
    useScrollTop();

    return (
        <div className="md:self-center sm:w-3/4 space-y-8 font-mono view">
            {props.children}
        </div>
    );
};

export default Screen;
