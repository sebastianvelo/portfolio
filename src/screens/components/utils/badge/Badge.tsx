interface BadgeProps {
    children: React.ReactNode;
}

const Badge = (props: BadgeProps) => (
    <span className="inline-block w-max px-2 py-1 text-xs font-medium rounded bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
        {props.children}
    </span>
);

export default Badge;