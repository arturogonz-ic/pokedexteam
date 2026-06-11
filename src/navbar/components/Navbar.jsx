"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSpritePreference } from "../../pokemon/hooks/useSpritePreference";
import { SPRITE_OPTIONS, FALLBACK_OPTIONS } from "../../pokemon/utils/spriteUtils";

const PAGE_TITLES = {
    "/":         "Bienvenido al gestionador de equipos pokemon",
    "/new-team": "Crear nuevo equipo",
    "/teams":    "Equipos existentes",
};

export function Navbar() {
    const [open, setOpen] = useState(false);
    const { spriteType, setSpriteType, fallbackSprite, setFallbackSprite } = useSpritePreference();
    const pathname = usePathname();
    const basePath = "/pokedexteam";
    const route = pathname.startsWith(basePath) ? pathname.slice(basePath.length) || "/" : pathname;
    const pageTitle = PAGE_TITLES[route];

    return (
        <>
            <nav className="flex justify-between items-center px-5 py-[10px] bg-white border-b border-[#e0e0e0] sticky top-0 z-[100] relative">
                <Link href="/" className="flex items-center gap-2 p-[7px] text-lg font-bold text-[#222] no-underline leading-none transition-all duration-300 border border-transparent rounded-[35px] hover:scale-110 hover:border-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="24" height="24" className="block shrink-0">
                        <circle cx="50" cy="50" r="48" fill="white" stroke="#222" strokeWidth="4"/>
                        <path d="M 2 50 A 48 48 0 0 1 98 50 Z" fill="#FF1111"/>
                        <line x1="2" y1="50" x2="98" y2="50" stroke="#222" strokeWidth="5"/>
                        <circle cx="50" cy="50" r="14" fill="#222"/>
                        <circle cx="50" cy="50" r="9" fill="white"/>
                    </svg>
                    PokeAPP Teams
                </Link>

                {pageTitle && (
                    <span className="absolute left-1/2 -translate-x-1/2 text-[27px] font-extrabold text-black pointer-events-none">
                        {pageTitle}
                    </span>
                )}

                <button
                    onClick={() => setOpen(true)}
                    aria-label="Configuración"
                    className="flex items-center text-[#555] bg-transparent border-none p-[6px] rounded-[35px] transition-all duration-300 cursor-pointer hover:bg-[#f5f5f5] hover:text-black hover:scale-110"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="3"/>
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                    </svg>
                </button>
            </nav>

            {open && (
                <div
                    className="fixed inset-0 bg-black/40 z-[200] flex items-center justify-center"
                    onClick={() => setOpen(false)}
                >
                    <div
                        className="bg-white rounded-2xl p-7 w-full max-w-[480px] shadow-2xl flex flex-col gap-5"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-bold">Configuración</h2>
                            <button
                                onClick={() => setOpen(false)}
                                aria-label="Cerrar"
                                className="bg-transparent border-none text-lg cursor-pointer text-[#888] leading-none px-2 py-1 rounded-lg transition-all duration-200 hover:bg-[#f5f5f5] hover:text-black"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="flex flex-col gap-5">
                            <div className="flex flex-col gap-1.5 p-4 rounded-xl shadow-sm">
                                <label className="text-[15px] font-bold">Estilo de sprite</label>
                                <p className="text-xs text-[#888]">Sprite que se muestra en las tarjetas de Pokémon.</p>
                                <select
                                    className="mt-1.5 px-3 py-2 text-sm border border-[#ccc] rounded-lg bg-[#f5f5f5] cursor-pointer w-fit"
                                    value={spriteType}
                                    onChange={(e) => setSpriteType(e.target.value)}
                                >
                                    {SPRITE_OPTIONS.map((opt) => (
                                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="flex flex-col gap-1.5 p-4 rounded-xl shadow-sm">
                                <label className="text-[15px] font-bold">Sprite de respaldo</label>
                                <p className="text-xs text-[#888]">Se usa cuando el Pokémon no tiene sprite del estilo seleccionado.</p>
                                <select
                                    className="mt-1.5 px-3 py-2 text-sm border border-[#ccc] rounded-lg bg-[#f5f5f5] cursor-pointer w-fit"
                                    value={fallbackSprite}
                                    onChange={(e) => setFallbackSprite(e.target.value)}
                                >
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
