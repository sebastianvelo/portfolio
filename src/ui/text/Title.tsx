interface TitleProps {
    children: React.ReactNode;
    size?: "sm" | "md" | "lg" | "xl";
    className?: string;
}

const Title = ({ children, size = "md", className = "" }: TitleProps) => {
    const sizeClasses = {
        sm: "text-lg md:text-xl",
        md: "text-xl md:text-2xl",
        lg: "text-2xl md:text-3xl lg:text-4xl",
        xl: "text-3xl md:text-4xl lg:text-5xl",
    };

    return (
        <h2 className={`font-bold font-jetbrains ${sizeClasses[size]} ${className} mb-6`}>
            {children}
        </h2>
    );
};

export default Title;

