import Link from "next/link";

export default function IndexPage() {
  return (
    <main className="indexPage">
      <div className="indexCard">
        <h1 id="welcomeMessage">Bienvenido al creador de equipos Pokémon</h1>
        <Link href="/new-team"><button className="buttonsIndex">Crear nuevo equipo</button></Link>
        <Link href="/teams"><button className="buttonsIndex">Ver equipos existentes</button></Link>
      </div>
    </main>
  );
}
