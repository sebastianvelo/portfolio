import React from "react";

interface RoundedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: "default" | "primary" | "secondary" | "danger";
    size?: "sm" | "md" | "lg";
}

const RoundedButton: React.FC<RoundedButtonProps> = ({ children, className = "", variant = "default", size = "md", ...props }) => {
    const baseStyles = "rounded-full transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        default: "bg-slate-100 hover:bg-slate-200 text-slate-700 focus:ring-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200",
        primary: "bg-primary-100 hover:bg-primary-500 hover:text-white text-primary-700 focus:ring-primary-300 dark:bg-primary-900/30 dark:hover:bg-primary-600 dark:text-primary-300 dark:hover:text-white",
        secondary: "bg-white hover:bg-white/50 hover:text-sky-500 text-secondary-700 focus:ring-secondary-300 dark:bg-black/80 dark:hover:bg-black/50 dark:text-secondary-300 dark:hover:text-yellow-200",
        danger: "bg-red-100 hover:bg-red-500 hover:text-white text-red-700 focus:ring-red-300 dark:bg-red-900/30 dark:hover:bg-red-600 dark:text-red-300 dark:hover:text-white"
    };

    const sizes = {
        sm: "p-1.5 text-sm",
        md: "p-2",
        lg: "p-3 text-lg"
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`.trim();

    return (
        <button className={combinedClassName} {...props}>
            {children}
        </button>
    );
};

export default RoundedButton;