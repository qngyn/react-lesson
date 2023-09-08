import React, { useRef, useEffect } from "react";
export default function useEffectOnUpdate(effectFunction, deps) {
    const firstRender = useRef(true)
    React.useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false
        } else {
            effectFunction()
        }
    }, deps)
    
}