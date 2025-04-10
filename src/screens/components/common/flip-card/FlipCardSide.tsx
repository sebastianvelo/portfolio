const cncardSide = "cursor-pointer h-full rounded-lg overflow-hidden " +
    "shadow-sm transition-shadow transition-colors duration-500 " +
    "hover:shadow-md border border-gray-200 dark:border-gray-700 " +
    "hover:border-gray-300 dark:hover:border-blue-800 bg-white dark:bg-gray-800 ";


interface FlipCardSideProps {
    children: React.ReactNode;
    color?: string;
}

const FlipCardSide = (props: FlipCardSideProps) => {
    //const color = props.color ?? " hover:bg-blue-50 dark:hover:bg-blue-900/30 ";
    const color = " hover:bg-blue-50 dark:hover:bg-blue-900/30 ";
    
    return (
        <div className={cncardSide + color}>
            {props.children}
        </div>
    );
};

export default FlipCardSide;