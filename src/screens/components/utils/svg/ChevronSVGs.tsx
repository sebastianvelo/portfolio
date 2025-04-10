export enum ChevronDirection {
    UP = "",
    RIGHT = "rotate-90",
    DOWN = "rotate-180",
    LEFT = "-rotate-90",
}

interface ChevronSVGProps {
    direction: ChevronDirection;
}

const ChevronSVG = (props: ChevronSVGProps) => {
    const direction = props.direction ?? ChevronDirection.UP;

    return (
        <svg
            className={`w-2 h-2 ${direction}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 10"
        >
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
            />
        </svg>
    );
};

export const ChevronUpSVG = () => <ChevronSVG direction={ChevronDirection.UP} />;
export const ChevronRightSVG = () => <ChevronSVG direction={ChevronDirection.RIGHT} />;
export const ChevronDownSVG = () => <ChevronSVG direction={ChevronDirection.DOWN} />;
export const ChevronLeftSVG = () => <ChevronSVG direction={ChevronDirection.LEFT} />;