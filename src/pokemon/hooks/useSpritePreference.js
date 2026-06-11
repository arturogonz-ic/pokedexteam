import { useState, useEffect } from "react";

export function useSpritePreference() {
    const [spriteType, setSpriteTypeState] = useState("home");
    const [fallbackSprite, setFallbackSpriteState] = useState("pixel");

    useEffect(() => {
        const savedType = localStorage.getItem("spriteType");
        const savedFallback = localStorage.getItem("fallbackSprite");
        if (savedType) setSpriteTypeState(savedType);
        if (savedFallback) setFallbackSpriteState(savedFallback);
    }, []);

    function setSpriteType(value) {
        localStorage.setItem("spriteType", value);
        setSpriteTypeState(value);
    }

    function setFallbackSprite(value) {
        localStorage.setItem("fallbackSprite", value);
        setFallbackSpriteState(value);
    }

    return { spriteType, setSpriteType, fallbackSprite, setFallbackSprite };
}
