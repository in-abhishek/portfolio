import React from "react";
import { SplitText } from "./SplitText";

export function Experience() {
    return (
        <section id="experience" style={{ background: "var(--surface)" }}>
            <div className="container">
                <div className="sec-label">01 — Work History</div>
                <h2 className="sec-title reveal">
                    <SplitText text="EXPERIENCE" />
                </h2>
                <div className="exp-grid reveal d1">
                    <div className="exp-left">
                        <div className="exp-company">Hestabit</div>
                        <div className="exp-role">Associate Software Engineer</div>
                        <div className="exp-date">Jan 2023 — Present</div>
                    </div>
                    <div className="exp-right">
                        <ul className="exp-bullets">
                            <li>
                                Architected dynamic web apps using Next.js 14 (App Router)
                                and TypeScript, reducing data fetch latency and improving SEO performance.
                            </li>
                            <li>
                                Developed a centralized Design System (UI Library) using Tailwind CSS,
                                ensuring 100% UI consistency and speeding up development cycles by 30%.
                            </li>
                            <li>
                                Engineered Custom React Hooks and integrated TanStack Query
                                for efficient server-state management and caching.
                            </li>
                            <li>
                                Optimized frontend performance via Lazy Loading, Code Splitting,
                                and memoization, achieving a 40% faster initial render.
                            </li>
                            <li>
                                Leading code reviews and collaborating in Agile sprints to
                                maintain high code quality and maintainable architecture.
                            </li>
                        </ul>
                        <div className="badges">
                            {[
                                "Next.js 14",
                                "TypeScript",
                                "Tailwind CSS",
                                "TanStack Query",
                                "Performance",
                            ].map((b) => (
                                <span className="badge" key={b}>
                                    {b}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
