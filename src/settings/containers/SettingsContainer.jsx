"use client";
import { useSpritePreference } from "../../pokemon/hooks/useSpritePreference";
import { SettingsView } from "../components/SettingsView";

export function SettingsContainer() {
    const { spriteType, setSpriteType, fallbackSprite, setFallbackSprite } = useSpritePreference();

    return (
        <SettingsView
            spriteType={spriteType}
            onSpriteTypeChange={setSpriteType}
            fallbackSprite={fallbackSprite}
            onFallbackChange={setFallbackSprite}
        />
    );
}
