import React from "react";

export function SplitText({ text, className = "", staggerIndex = 0 }) {
    return (
        <span className={`split-text ${className}`}>
            {text.split("").map((char, i) => (
                <span
                    key={i}
                    className={`split-char d-c${staggerIndex + i + 1}`}
                >
                    {char === " " ? "\u00A0" : char}
                </span>
            ))}
        </span>
    );
}
