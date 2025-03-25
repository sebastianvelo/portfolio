import { ReactNode } from "react";

interface UnderlineProps {
    children: ReactNode;
}

const Underline = (props: UnderlineProps) => {
    return (
        <div className="group">
            {props.children}
            <div className="w-0 group-hover:w-full transition-all duration-400 h-0.5 bg-black/75"></div>
        </div>
    );
}

export default Underline;