import ExpandSVG from "../svg/ExpandIcon";

interface ExpandButtonProps {
    hasOverflow: boolean;
    isExpanded: boolean;
    toggleExpand: () => void
}

const ExpandCardButton = (props: ExpandButtonProps) => {
    return (
        <>
            {props.hasOverflow && (
                <div className="absolute bottom-2 right-1/2 z-10">
                    <button
                        className="flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-secondary-700 shadow-md hover:shadow-lg transition-shadow"
                        onClick={props.toggleExpand}
                        aria-label={props.isExpanded ? "Mostrar menos" : "Mostrar más"}
                        title={props.isExpanded ? "Mostrar menos" : "Mostrar más"}
                    >
                        <span className={`transform transition-transform ${props.isExpanded ? "rotate-180" : ""}`}>
                            <ExpandSVG />
                        </span>
                    </button>
                </div>
            )}
        </>
    )
}

export default ExpandCardButton;