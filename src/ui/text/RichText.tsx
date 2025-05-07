import RichLine from "./RichLine";

interface RichTextProps {
    children?: string;
}

const RichText: React.FC<RichTextProps> = ({ children }) => (
    <>
        {children?.split("\n").map((line, index) => (
            <RichLine key={`line-${index}-${line}`}>{line}</RichLine>
        ))}
    </>
);

export default RichText;