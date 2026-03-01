import React from "react";
import { NAV_LINKS } from "../data/portfolioData";
import { Link } from "react-router-dom";

export function Nav() {
    return (
        <nav>
            <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div className="nav-logo">
                    <a href="#home">AK</a>
                </div>
                <ul className="nav-links">
                    {NAV_LINKS.map((l) => (
                        <li key={l}>
                            <a href={`#${l.toLowerCase()}`}>{l}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
