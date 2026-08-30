import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
}

function Button({
    variant = "primary",
    className = "",
    children,
    ...props
}: ButtonProps) {
    const baseStyles =
        "inline-flex items-center justify-center font-medium transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-50";

    const variantStyles = {
        primary:
            "h-12 rounded-[var(--radius-sm)] bg-[var(--accent)] px-6 text-[#18181b] hover:bg-[var(--accent-hover)]",

        secondary:
            "h-12 rounded-[var(--radius-sm)] border border-[var(--border)] bg-transparent px-6 text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]",

        ghost:
            "h-10 rounded-[var(--radius-sm)] px-4 text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)]",
    };

    return (
        <button
            className={`${baseStyles} ${variantStyles[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;