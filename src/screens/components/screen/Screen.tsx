import { ReactNode } from "react";
import useScrollTop from "../../../hooks/useScrollTop";
import SectionTitle from "../utils/section/SectionTitle";
import paths from "../../paths";

interface ScreenProps {
    children: ReactNode;
}

const Screen = (props: ScreenProps) => {
    useScrollTop();

    return (
        <div className="md:self-center sm:w-3/4 space-y-8 font-mono view">
            <SectionTitle path={paths.home} title={"⬅"}></SectionTitle>
            {props.children}
        </div>
    );
};

export default Screen;
