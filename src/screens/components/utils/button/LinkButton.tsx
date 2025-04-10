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
            className="inline-flex items-center px-3 py-2 text-sm font-medium rounded-md bg-slate-100 text-slate-800 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600 transition-colors"
            onClick={(e) => e.stopPropagation()}
        >
            {props.children}
        </a>
    );
};

export default LinkButton;