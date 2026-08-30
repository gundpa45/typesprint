import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

function Input({
    label,
    error,
    className = "",
    id,
    ...props
}: InputProps) {
    return (
        <div className="flex w-full flex-col gap-2">
            {label && (
                <label
                    htmlFor={id}
                    className="text-sm font-medium text-[var(--text-primary)]"
                >
                    {label}
                </label>
            )}

            <input
                id={id}
                className={`
                    h-12 w-full
                    rounded-[var(--radius-sm)]
                    border
                    bg-[var(--bg-primary)]
                    px-4
                    text-[var(--text-primary)]
                    outline-none
                    placeholder:text-[var(--text-muted)]
                    transition-colors
                    duration-150
                    focus:border-[var(--accent)]
                    ${error ? "border-[var(--error)]" : "border-[var(--border)]"}
                    ${className}
                `}
                {...props}
            />

            {error && (
                <p className="text-sm text-[var(--error)]">
                    {error}
                </p>
            )}
        </div>
    );
}

export default Input;