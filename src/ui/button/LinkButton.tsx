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
            className="inline-flex items-center px-3 py-2 text-sm font-medium rounded-md bg-secondary-100 text-secondary-800 hover:bg-secondary-200 dark:bg-secondary-700 dark:text-secondary-200 dark:hover:bg-secondary-600 transition-colors"
            onClick={(e) => e.stopPropagation()}
        >
            {props.children}
        </a>
    );
};

export default LinkButton;