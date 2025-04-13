interface TabButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    active: boolean;
}

const TabButton = (props: TabButtonProps) => {
    return (
        <button
            onClick={props.onClick}
            className={`px-6 py-2 flex flex-col items-center font-medium text-sm md:text-xl transition-all duration-300 relative ${props.active
                ? "text-primary-600 dark:text-primary-400 font-semibold"
                : "cursor-pointer text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400"
                }`}
        >
            {props.children}
            {props.active && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600 dark:bg-primary-400 transform translate-y-2"></div>
            )}
        </button>
    );
};

export default TabButton;