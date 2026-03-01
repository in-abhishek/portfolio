import React from "react";
import { SplitText } from "./SplitText";

export function Education() {
    return (
        <section id="education" style={{ background: "var(--bg)" }}>
            <div className="container">
                <div className="sec-label">04 — Academic Background</div>
                <h2 className="sec-title reveal">
                    <SplitText text="EDUCATION" />
                </h2>
                <div className="edu-card reveal d1">
                    <div className="edu-left">
                        <div className="edu-inst">Vellore Institute of Technology</div>
                        <div className="edu-deg">B.Tech — Mechanical Engineering</div>
                        <div className="edu-dates">July 2018 — Aug 2022</div>
                    </div>
                    <div className="edu-right">
                        <div className="edu-gpa-label">CGPA</div>
                        <div className="edu-gpa">7.67</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
