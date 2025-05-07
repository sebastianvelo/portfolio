interface BadgeProps {
    children: React.ReactNode;
}

const Badge = (props: BadgeProps) => (
    <span className="inline-block w-max px-2 py-1 text-xs font-medium rounded bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200">
        {props.children}
    </span>
);

export default Badge;