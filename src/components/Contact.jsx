import React from "react";
import { SplitText } from "./SplitText";
import { Links } from "../data/portfolioData";

export function Contact() {

    return (
        <section
            id="contact"
            className="contact-sec"
            style={{ background: "var(--surface)", padding: "120px 0" }}
        >
            <div className="container">
                <div className="sec-label" style={{ justifyContent: "center" }}>
                    05 — Let's Connect
                </div>
                <div className="contact-heading reveal">
                    <SplitText text="SAY" />
                    <br />
                    <SplitText text="HELLO" staggerIndex={5} />
                </div>
                <div className="contact-cta reveal d1">
                    <a
                        href={import.meta.env.VITE_CHAT_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                    >
                        Chat with my AI Assistant ↗
                    </a>
                </div>
                <div className="contact-links reveal d2">
                    {Links.map((l) => (
                        <a
                            key={l.label}
                            href={l.href}
                            target="_blank"
                            rel="noreferrer"
                            className="contact-link"
                        >
                            <span className="c-label">{l.label}</span>
                            <span className="c-val">{l.val}</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
