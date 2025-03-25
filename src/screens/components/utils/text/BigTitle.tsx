const styles = [
    { first: "text-2xl sm:text-3xl font-bold", rest: "text-lg sm:text-xl" },
    { first: "text-3xl sm:text-4xl font-bold", rest: "text-xl sm:text-2xl" },
    { first: "text-4xl sm:text-5xl font-bold", rest: "text-2xl sm:text-3xl" },
];

interface BigTitleProps {
    children: string;
    size?: 0 | 1 | 2;
}

const BigTitle = (props: BigTitleProps) => {
    const { first, rest } = styles[props.size ?? 2];

    return (
        <h1 className="font-mono">
            <span className={first}>{props.children.substring(0, 1)}</span>
            <span className={rest}>{props.children.substring(1)}</span>
        </h1>
    )
};

export default BigTitle;