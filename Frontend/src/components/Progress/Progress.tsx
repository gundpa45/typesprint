import type { HTMLAttributes } from "react";

interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
    value: number;
}

function Progress({
    value,
    className = "",
    ...props
}: ProgressProps) {

    const progress = Math.min(100, Math.max(0, value));

    const getProgressColor = () => {
        if (progress <= 35) {
            return "var(--error)";
        }

        if (progress <= 60) {
            return "#C98255";
        }

        if (progress <= 80) {
            return "var(--warning)";
        }

        return "var(--success)";
    };

    return (
        <div
            className={`w-full ${className}`}
            {...props}
        >
            <div
                className="
                    h-2
                    w-full
                    overflow-hidden
                    rounded-full
                    bg-[var(--bg-secondary)]
                "
            >
                <div
                    className="
                        h-full
                        rounded-full
                        transition-all
                        duration-300
                    "
                    style={{
                        width: `${progress}%`,
                        backgroundColor: getProgressColor()
                    }}
                />
            </div>
        </div>
    );
}

export default Progress;