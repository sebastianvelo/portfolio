interface BadgeProps {
    children: React.ReactNode;
}

const Badge = (props: BadgeProps) => (
    <span className="inline-block w-max px-2 py-1 text-xs font-medium rounded bg-accent-100 text-accent-800 dark:bg-accent-900 dark:text-accent-200">
        {props.children}
    </span>
);

export default Badge;