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
            className="inline-flex items-center px-3 py-2 text-sm font-medium rounded-md bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 transition-colors"
            onClick={(e) => e.stopPropagation()}
        >
            {props.children}
        </a>
    );
};

export default LinkButton;