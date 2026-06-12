"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { SettingsDialog } from "../../shared/components/SettingsDialog";

const PAGE_TITLES = {
    "/":         "Bienvenido al gestionador de equipos pokemon",
    "/new-team": "Crear nuevo equipo",
    "/teams":    "Equipos existentes",
};

export function Navbar() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const basePath = "/pokedexteam";
    const route = pathname.startsWith(basePath) ? pathname.slice(basePath.length) || "/" : pathname;
    // En /new-team con ?id=... estamos editando, así que cambiamos el título
    const pageTitle =
        route === "/new-team" && searchParams.get("id")
            ? "Editar equipo"
            : PAGE_TITLES[route];

    return (
        <nav className="flex justify-between items-center px-5 py-[10px] bg-white dark:bg-gray-900 border-b border-[#e0e0e0] dark:border-gray-700 sticky top-0 z-[100] relative">
            <Link href="/" className="flex items-center gap-2 p-[7px] text-lg font-bold text-[#222] dark:text-white no-underline leading-none transition-all duration-300 border border-transparent rounded-[35px] hover:scale-110 hover:border-red-500">
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
                <span className="absolute left-1/2 -translate-x-1/2 text-[27px] font-extrabold text-black dark:text-white pointer-events-none">
                    {pageTitle}
                </span>
            )}

            <SettingsDialog />
        </nav>
    );
}
