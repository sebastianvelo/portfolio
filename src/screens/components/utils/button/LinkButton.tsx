import { ReactNode } from "react";

interface ButtonProps {
    url: string;
    color: string;
    children: ReactNode;
}

const LinkButton = (props: ButtonProps) => {
    return (
        <a
            href={props.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`cursor-pointer flex items-center justify-center gap-2 py-3 px-4 rounded-lg transition-all duration-300 ${props.color}`}
        >
            {props.children}
        </a>
    );
};

export default LinkButton;