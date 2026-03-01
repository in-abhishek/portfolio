import React from "react";
import { SKILLS } from "../data/portfolioData";
import { SplitText } from "./SplitText";

export function Skills() {
    return (
        <section id="skills" style={{ background: "var(--bg)" }}>
            <div className="container">
                <div className="sec-label">02 — Capabilities</div>
                <h2 className="sec-title reveal">
                    <SplitText text="SKILLS" />
                </h2>
                <div className="skills-grid">
                    {SKILLS.map((s, i) => (
                        <div className={`skill-card reveal d${i + 1}`} key={s.cat}>
                            <div className="skill-cat">{s.cat}</div>
                            <div className="skill-items">
                                {s.items.map((item) => (
                                    <span className="skill-tag" key={item}>
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
