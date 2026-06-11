"use client";
import { useSpritePreference } from "../../pokemon/hooks/useSpritePreference";
import { SPRITE_OPTIONS, FALLBACK_OPTIONS } from "../../pokemon/utils/spriteUtils";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./dialog";

function GearIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3"/>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
    );
}

export function SettingsDialog() {
    const { spriteType, setSpriteType, fallbackSprite, setFallbackSprite, darkMode, setDarkMode } = useSpritePreference();

    return (
        <Dialog>
            <DialogTrigger
                aria-label="Configuración"
                className="flex items-center text-[#555] dark:text-gray-400 bg-transparent border-none p-[6px] rounded-[35px] transition-all duration-300 cursor-pointer hover:bg-[#f5f5f5] dark:hover:bg-gray-800 hover:text-black dark:hover:text-white hover:scale-110"
            >
                <GearIcon />
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Configuración</DialogTitle>
                </DialogHeader>

                <div className="flex flex-col gap-5">
                    <div className="flex items-center justify-between p-4 rounded-xl shadow-sm dark:shadow-gray-700/50">
                        <div>
                            <p className="text-[15px] font-bold">Modo oscuro</p>
                            <p className="text-xs text-[#888]">Cambia el tema de la aplicación.</p>
                        </div>
                        <button
                            type="button"
                            onClick={() => setDarkMode(!darkMode)}
                            className={`relative w-11 h-6 rounded-full transition-colors duration-300 ${darkMode ? "bg-[rgb(255,86,86)]" : "bg-gray-300"}`}
                        >
                            <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-300 ${darkMode ? "translate-x-5" : "translate-x-0"}`} />
                        </button>
                    </div>

                    <div className="flex flex-col gap-1.5 p-4 rounded-xl shadow-sm dark:shadow-gray-700/50">
                        <label className="text-[15px] font-bold">Estilo de sprite</label>
                        <p className="text-xs text-[#888]">Sprite que se muestra en las tarjetas de Pokémon.</p>
                        <select
                            className="mt-1.5 px-3 py-2 text-sm border border-[#ccc] dark:border-gray-600 rounded-lg bg-[#f5f5f5] dark:bg-gray-700 dark:text-white cursor-pointer w-fit"
                            value={spriteType}
                            onChange={(e) => setSpriteType(e.target.value)}
                        >
                            {SPRITE_OPTIONS.map((opt) => (
                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                        </select>
                    </div>

                    <div className="flex flex-col gap-1.5 p-4 rounded-xl shadow-sm dark:shadow-gray-700/50">
                        <label className="text-[15px] font-bold">Sprite de respaldo</label>
                        <p className="text-xs text-[#888]">Se usa cuando el Pokémon no tiene sprite del estilo seleccionado.</p>
                        <select
                            className="mt-1.5 px-3 py-2 text-sm border border-[#ccc] dark:border-gray-600 rounded-lg bg-[#f5f5f5] dark:bg-gray-700 dark:text-white cursor-pointer w-fit"
                            value={fallbackSprite}
                            onChange={(e) => setFallbackSprite(e.target.value)}
                        >
                            {FALLBACK_OPTIONS.map((opt) => (
                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
