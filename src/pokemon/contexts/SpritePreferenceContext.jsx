"use client";
import { createContext, useContext, useState, useEffect } from "react";

const SpritePreferenceContext = createContext(null);

export function SpritePreferenceProvider({ children }) {
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

    return (
        <SpritePreferenceContext.Provider value={{ spriteType, setSpriteType, fallbackSprite, setFallbackSprite }}>
            {children}
        </SpritePreferenceContext.Provider>
    );
}

export function useSpritePreferenceContext() {
    return useContext(SpritePreferenceContext);
}
