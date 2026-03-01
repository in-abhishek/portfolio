import React from "react";
import { useCursor } from "../hooks/useCursor";
import { useReveal } from "../hooks/useReveal";
import { Cursor } from "./Cursor";
import { Nav } from "./Nav";
import { Hero } from "./Hero";
import { Marquee } from "./Marquee";
import { Experience } from "./Experience";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Education } from "./Education";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

export default function Portfolio() {
    const { dotRef, ringRef } = useCursor();
    useReveal();

    return (
        <>
            <Cursor dotRef={dotRef} ringRef={ringRef} />
            <Nav />
            <Hero />
            <Marquee />
            <Experience />
            <Skills />
            <Projects />
            <Education />
            <Contact />
            <Footer />
        </>
    );
}
