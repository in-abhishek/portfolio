import React from "react";
import { MARQUEE_ITEMS } from "../data/portfolioData";

export function Marquee() {
    const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
    return (
        <div className="marquee-wrap">
            <div className="marquee-track">
                {doubled.map((item, i) => (
                    <span className="mq-item" key={i}>
                        {item} <span>✦</span>
                    </span>
                ))}
            </div>
        </div>
    );
}
