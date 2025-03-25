import { Link } from "react-router-dom";
import BigTitle from "../../utils/text/BigTitle";

interface SectionTitleProps {
    title: string;
    path: string
    SVG?: React.FC;
}

const SectionTitle = (props: SectionTitleProps) => {
    return (
        <div className="flex flex-col gap-x-4 items-center justify-center md:flex-row md:items-end md:justify-start">
            {props.SVG && <props.SVG />}
            <Link to={props.path} className="text-slate-800 hover:text-black transition-all duration-300 p-0">
                <BigTitle>{props.title}</BigTitle>
            </Link>
        </div>
    );
};

export default SectionTitle;
