import { useEffect, useRef } from "react";

export function useCursor() {
    const dotRef = useRef(null);
    const ringRef = useRef(null);
    const mouse = useRef({ x: 0, y: 0 });
    const ring = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const onMove = (e) => {
            mouse.current = { x: e.clientX, y: e.clientY };
            if (dotRef.current)
                dotRef.current.style.transform = `translate(${e.clientX - 4}px,${e.clientY - 4}px)`;
        };
        window.addEventListener("mousemove", onMove);

        let raf;
        const tick = () => {
            ring.current.x += (mouse.current.x - ring.current.x) * 0.12;
            ring.current.y += (mouse.current.y - ring.current.y) * 0.12;
            if (ringRef.current)
                ringRef.current.style.transform = `translate(${ring.current.x - 18}px,${ring.current.y - 18}px)`;
            raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);

        return () => {
            window.removeEventListener("mousemove", onMove);
            cancelAnimationFrame(raf);
        };
    }, []);

    return { dotRef, ringRef };
}
