import React from "react";

export function Cursor({ dotRef, ringRef }) {
    return (
        <>
            <div className="cur-dot" ref={dotRef} />
            <div className="cur-ring" ref={ringRef} />
        </>
    );
}
