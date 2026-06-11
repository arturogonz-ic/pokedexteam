import Link from "next/link";

export function Navbar() {
    return (
        <nav id="navbar">
            <Link href="/" id="navLogo">⬤ PokeAPP Teams</Link>
            <Link href="/settings" id="navSettings">⚙ Configuración</Link>
        </nav>
    );
}
