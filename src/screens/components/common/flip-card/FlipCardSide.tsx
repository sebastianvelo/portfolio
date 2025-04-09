const cncardSide = "cursor-pointer h-full rounded-lg overflow-hidden " +
    "shadow-sm transition-shadow transition-colors duration-500 " +
    "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 " +
    "hover:shadow-md hover:bg-gray-50 dark:hover:bg-blue-900/30 " +
    "hover:border-gray-300 dark:hover:border-blue-800";


interface FlipCardSideProps {
    children: React.ReactNode;
}

const FlipCardSide = (props: FlipCardSideProps) => {
    return (
        <div className={cncardSide}>
            {props.children}
        </div>
    );
};

export default FlipCardSide;