import useFlip from "../../../hooks/useFlip";

interface FlipCardProps {
    front: React.ReactNode;
    back: React.ReactNode;
}

const FlipCard = (props: FlipCardProps) => {
    const [isFlipped, toggleFlip] = useFlip();

    const handleFlip = (e: React.MouseEvent) => {
        const element = e.target as HTMLElement;
        if (element.tagName === "A" || element.tagName === "BUTTON" || element.closest("a") || element.closest("button")) {
            return;
        }
        toggleFlip();
    };

    return (
        <div className={`h-full w-full perspective-1000 hover:scale-105 transition-all duration-500`}>
            <div onClick={handleFlip} className={`relative w-full h-full duration-700 transform-style-3d ${isFlipped ? "rotate-x-180" : ""}`}>
                <div className={`absolute rounded-md w-full h-full backface-hidden`}>
                    {props.front}
                </div>
                <div className={`absolute rounded-md w-full h-full backface-hidden rotate-x-180`}>
                    {props.back}
                </div>
            </div>
        </div>
    );
};

export default FlipCard;