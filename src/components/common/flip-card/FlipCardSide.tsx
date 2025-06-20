const cncardSide = "cursor-pointer h-full rounded-lg overflow-hidden " +
    "shadow-sm transition-shadow transition-colors duration-500 " +
    "hover:shadow-md border border-secondary-200 dark:border-secondary-700 " +
    "hover:border-accent-300 dark:hover:border-accent-800 bg-white dark:bg-black/40 ";

interface FlipCardSideProps {
    children: React.ReactNode;
    color?: string;
}

const FlipCardSide = (props: FlipCardSideProps) => {
    //const color = props.color ?? " hover:bg-accent-50 dark:hover:bg-accent-900/30 ";
    const color = " hover:bg-accent-50 dark:hover:bg-accent-900/20 ";
    
    return (
        <div className={cncardSide + color}>
            {props.children}
        </div>
    );
};

export default FlipCardSide;