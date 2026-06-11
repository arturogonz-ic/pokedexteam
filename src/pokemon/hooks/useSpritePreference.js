import { useState, useEffect } from "react";

const STORAGE_KEY = "spriteType";

export function useSpritePreference() {
    const [spriteType, setSpriteTypeState] = useState("home");

    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) setSpriteTypeState(saved);
    }, []);

    function setSpriteType(value) {
        localStorage.setItem(STORAGE_KEY, value);
        setSpriteTypeState(value);
    }

    return { spriteType, setSpriteType };
}
