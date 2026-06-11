"use client";
import { SpritePreferenceProvider } from "../../pokemon/contexts/SpritePreferenceContext";

export function Providers({ children }) {
    return <SpritePreferenceProvider>{children}</SpritePreferenceProvider>;
}
