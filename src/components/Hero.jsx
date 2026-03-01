import React from "react";
import { SplitText } from "./SplitText";

export function Hero() {
    return (
        <section className="hero" id="home">
            <div className="container" style={{ display: "flex", alignItems: "center", width: '100%' }}>
                <div className="hero-common">
                    <div className="hero-tag reveal vis">
                        Performance-driven Frontend Developer
                    </div>
                    <h1 className="hero-name reveal vis">
                        <SplitText text="ABHISHEK" />
                        <br />
                        <SplitText text="KUMAR" staggerIndex={10} />
                    </h1>
                    <p className="hero-desc reveal vis d1">
                        3+ years of experience in building scalable, production-grade web
                        applications using React.js, Next.js (App Router), and TypeScript.
                        Expert in architecting reusable component libraries and optimizing
                        Core Web Vitals (LCP, CLS).
                    </p>
                    <a href="#contact" className="hero-cta reveal vis d2">
                        <span>Get In Touch</span>
                        <span>↗</span>
                    </a>
                </div>
                <div className="hero-right hero-common reveal vis d3">
                    {[
                        ["3+", "Years Experience"],
                        ["5+", "Projects Shipped"],
                        ["40%", "Faster Load Times"],
                    ].map(([num, label], i) => (
                        <div key={i} className="hero-right-common">
                            {i > 0 && <div className="hero-divider" />}
                            <div style={{ textAlign: "right" }} className="hero-number">
                                <div className="hero-stat-num">{num}</div>
                                <div className="hero-stat-label">{label}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
