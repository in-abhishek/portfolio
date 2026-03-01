import React, { useState } from "react";
import { PROJECTS } from "../data/portfolioData";
import { SplitText } from "./SplitText";

export function Projects() {
    const [active, setActive] = useState(0);

    const next = () => setActive((prev) => (prev + 1) % PROJECTS.length);
    const prev = () => setActive((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);

    return (
        <section id="projects" style={{ background: "var(--surface)" }}>
            <div className="container">
                <div className="sec-label">03 — Selected Work</div>
                <div className="proj-header">
                    <h2 className="sec-title reveal">
                        <SplitText text="PROJECTS" />
                    </h2>
                    <div className="proj-controls reveal d1">
                        <button onClick={prev} className="proj-btn">PREV</button>
                        <button onClick={next} className="proj-btn">NEXT</button>
                    </div>
                </div>

                <div className="proj-slider">
                    <div className="proj-track" style={{ transform: `translateX(-${active * 100}%)` }}>
                        {PROJECTS.map((p, i) => (
                            <div className={`proj-slide ${i === active ? "active" : ""}`} key={p.num}>
                                <div className="proj-item">
                                    <div className="proj-num">{p.num}</div>
                                    <div className="proj-content-wrap">
                                        <div className="proj-name animate-in">{p.name}</div>
                                        <p className="proj-desc animate-in d1">{p.desc}</p>
                                        <ul className="proj-bullets animate-in d2">
                                            {p.bullets.map((b, j) => (
                                                <li key={j}>{b}</li>
                                            ))}
                                        </ul>

                                    </div>
                                    <div className="proj-stack animate-in d4">
                                        {p.stack.map((s) => (
                                            <span className="stack-pill" key={s}>
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="proj-dots">
                    {PROJECTS.map((_, i) => (
                        <div
                            key={i}
                            className={`proj-dot ${i === active ? "active" : ""}`}
                            onClick={() => setActive(i)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
