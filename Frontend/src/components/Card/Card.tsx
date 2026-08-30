import type {
    HTMLAttributes,
    ReactNode
} from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

function Card({
    children,
    className = "",
    ...props
}: CardProps) {
    return (
        <div
            className={`
                rounded-[var(--radius-lg)]
                border
                border-[var(--border)]
                bg-[var(--bg-elevated)]
                ${className}
            `}
            {...props}
        >
            {children}
        </div>
    );
}

export default Card;