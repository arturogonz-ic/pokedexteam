"use client";
import { createContext, useContext, useState, useEffect } from "react";

const SpritePreferenceContext = createContext(null);

export function SpritePreferenceProvider({ children }) {
    const [spriteType, setSpriteTypeState] = useState("home");
    const [fallbackSprite, setFallbackSpriteState] = useState("pixel");
    const [darkMode, setDarkModeState] = useState(false);

    useEffect(() => {
        const savedType     = localStorage.getItem("spriteType");
        const savedFallback = localStorage.getItem("fallbackSprite");
        const savedDark     = localStorage.getItem("darkMode") === "true";
        if (savedType)    setSpriteTypeState(savedType);
        if (savedFallback) setFallbackSpriteState(savedFallback);
        setDarkModeState(savedDark);
        document.documentElement.classList.toggle("dark", savedDark);
    }, []);

    function setSpriteType(value) {
        localStorage.setItem("spriteType", value);
        setSpriteTypeState(value);
    }

    function setFallbackSprite(value) {
        localStorage.setItem("fallbackSprite", value);
        setFallbackSpriteState(value);
    }

    function setDarkMode(value) {
        localStorage.setItem("darkMode", value);
        setDarkModeState(value);
        document.documentElement.classList.toggle("dark", value);
    }

    return (
        <SpritePreferenceContext.Provider value={{ spriteType, setSpriteType, fallbackSprite, setFallbackSprite, darkMode, setDarkMode }}>
            {children}
        </SpritePreferenceContext.Provider>
    );
}

export function useSpritePreferenceContext() {
    return useContext(SpritePreferenceContext);
}
