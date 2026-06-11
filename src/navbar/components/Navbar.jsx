"use client";
import { useState } from "react";
import Link from "next/link";
import { useSpritePreference } from "../../pokemon/hooks/useSpritePreference";
import { SPRITE_OPTIONS, FALLBACK_OPTIONS } from "../../pokemon/utils/spriteUtils";

export function Navbar() {
    const [open, setOpen] = useState(false);
    const { spriteType, setSpriteType, fallbackSprite, setFallbackSprite } = useSpritePreference();

    return (
        <>
            <nav id="navbar">
                <Link href="/" id="navLogo">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="24" height="24">
                        <circle cx="50" cy="50" r="48" fill="white" stroke="#222" strokeWidth="4"/>
                        <path d="M 2 50 A 48 48 0 0 1 98 50 Z" fill="#FF1111"/>
                        <line x1="2" y1="50" x2="98" y2="50" stroke="#222" strokeWidth="5"/>
                        <circle cx="50" cy="50" r="14" fill="#222"/>
                        <circle cx="50" cy="50" r="9" fill="white"/>
                    </svg>
                    PokeAPP Teams
                </Link>
                <button id="navSettings" aria-label="Configuración" onClick={() => setOpen(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="3"/>
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                    </svg>
                </button>
            </nav>

            {open && (
                <div id="settingsOverlay" onClick={() => setOpen(false)}>
                    <div id="settingsModal" onClick={(e) => e.stopPropagation()}>
                        <div id="settingsModalHeader">
                            <h2 id="settingsModalTitle">Configuración</h2>
                            <button id="settingsClose" onClick={() => setOpen(false)} aria-label="Cerrar">✕</button>
                        </div>

                        <div id="settingsContent">
                            <div className="settingRow">
                                <label className="settingLabel">Estilo de sprite</label>
                                <p className="settingDesc">Sprite que se muestra en las tarjetas de Pokémon.</p>
                                <select className="settingSelect" value={spriteType} onChange={(e) => setSpriteType(e.target.value)}>
                                    {SPRITE_OPTIONS.map((opt) => (
                                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="settingRow">
                                <label className="settingLabel">Sprite de respaldo</label>
                                <p className="settingDesc">Se usa cuando el Pokémon no tiene sprite del estilo seleccionado.</p>
                                <select className="settingSelect" value={fallbackSprite} onChange={(e) => setFallbackSprite(e.target.value)}>
                                    {FALLBACK_OPTIONS.map((opt) => (
                                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
